import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import { Toaster } from '@/components/ui/sonner'
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MLM Pro - Network Marketing Platform',
  description: 'Professional MLM platform with e-commerce and commission tracking',
  keywords: ['MLM', 'network marketing', 'e-commerce', 'commissions', 'referrals'],
  authors: [{ name: 'MLM Pro Team' }],
  creator: 'MLM Pro',
  publisher: 'MLM Pro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MLM Pro - Network Marketing Platform',
    description: 'Professional MLM platform with e-commerce and commission tracking',
    url: '/',
    siteName: 'MLM Pro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MLM Pro Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLM Pro - Network Marketing Platform',
    description: 'Professional MLM platform with e-commerce and commission tracking',
    images: ['/images/twitter-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#3B82F6'
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MLM Pro',
    startupImage: [
      {
        url: '/images/apple-splash-2048-2732.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      },
      {
        url: '/images/apple-splash-1668-2224.png',
        media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'light'
}

export default async function PublicRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
            <Providers session={session}>
            <main className="flex-1">{children}</main>
          <Toaster />
        </Providers>
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}