const CACHE_NAME = 'mlm-pro-v1'
const STATIC_CACHE_NAME = 'mlm-pro-static-v1'
const DYNAMIC_CACHE_NAME = 'mlm-pro-dynamic-v1'

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/offline',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// API routes that should be cached
const API_ROUTES = [
  '/api/products',
  '/api/categories',
  '/api/dashboard'
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...')
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static files')
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        console.log('Service Worker: Installation complete')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...')
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activation complete')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests
  if (url.origin !== location.origin) return

  // Handle different types of requests
  if (url.pathname.startsWith('/api/')) {
    // API requests - network first, then cache
    event.respondWith(handleApiRequest(request))
  } else if (url.pathname.startsWith('/_next/static/')) {
    // Static assets - cache first
    event.respondWith(handleStaticAssets(request))
  } else {
    // Pages - network first, then cache
    event.respondWith(handlePageRequest(request))
  }
})

// Handle API requests
async function handleApiRequest(request) {
  const url = new URL(request.url)
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    // Cache successful responses for GET requests
    if (networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(DYNAMIC_CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline response for API calls
    return new Response(
      JSON.stringify({ 
        error: 'Network unavailable',
        offline: true,
        message: 'You are currently offline. Some features may not be available.'
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Handle static assets
async function handleStaticAssets(request) {
  try {
    // Try cache first
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Try network
    const networkResponse = await fetch(request)
    
    // Cache the response
    const cache = await caches.open(STATIC_CACHE_NAME)
    cache.put(request, networkResponse.clone())
    
    return networkResponse
  } catch (error) {
    // Return cached version or fail silently for assets
    return caches.match(request)
  }
}

// Handle page requests
async function handlePageRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page
    const offlineResponse = await caches.match('/offline')
    return offlineResponse || new Response('Offline', { status: 503 })
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag)
  
  if (event.tag === 'cart-sync') {
    event.waitUntil(syncCart())
  } else if (event.tag === 'order-sync') {
    event.waitUntil(syncOrders())
  }
})

// Sync cart data when online
async function syncCart() {
  try {
    // Get stored cart data
    const cartData = await getStoredData('cart')
    if (cartData) {
      // Sync with server
      await fetch('/api/cart/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartData)
      })
      
      // Clear stored data
      await clearStoredData('cart')
    }
  } catch (error) {
    console.error('Cart sync failed:', error)
  }
}

// Sync order data when online
async function syncOrders() {
  try {
    const orderData = await getStoredData('orders')
    if (orderData) {
      await fetch('/api/orders/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })
      
      await clearStoredData('orders')
    }
  } catch (error) {
    console.error('Order sync failed:', error)
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received')
  
  const options = {
    body: 'You have new updates in MLM Pro!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Dashboard',
        icon: '/icons/action-dashboard.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/action-close.png'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification('MLM Pro', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked')
  
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/dashboard')
    )
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open app
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Utility functions
async function getStoredData(key) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME)
    const response = await cache.match(`/offline-data/${key}`)
    return response ? response.json() : null
  } catch (error) {
    return null
  }
}

async function clearStoredData(key) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE_NAME)
    await cache.delete(`/offline-data/${key}`)
  } catch (error) {
    console.error('Failed to clear stored data:', error)
  }
}
