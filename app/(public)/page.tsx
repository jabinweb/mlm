'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  DollarSign, 
  Package, 
  TrendingUp, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Create and manage your referral network with our advanced team management tools.',
    },
    {
      icon: DollarSign,
      title: 'Earn Commissions',
      description: 'Multi-level commission structure with up to 5 levels of earning potential.',
    },
    {
      icon: Package,
      title: 'Quality Products',
      description: 'Sell premium products with built-in e-commerce and payment processing.',
    },
    {
      icon: TrendingUp,
      title: 'Track Performance',
      description: 'Comprehensive analytics and reporting to monitor your success.',
    },
  ]

  const benefits = [
    'No monthly fees or hidden charges',
    'Instant commission calculations',
    'Mobile-responsive dashboard',
    'Secure payment processing',
    'Real-time team tracking',
    '24/7 customer support',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                <Star className="w-4 h-4 mr-1" />
                Premium MLM Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build Your
                <span className="text-yellow-400"> Dream Network</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join thousands of successful entrepreneurs using our modern MLM platform 
                to build profitable networks and sell quality products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/auth/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="border-white hover:text-blue-600" asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools and features you need to build a successful network marketing business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose MLM Pro?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;ve built the most advanced and user-friendly MLM platform in the industry. 
                Here&apos;s what makes us different:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10k+</div>
                    <div className="text-blue-100">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$2M+</div>
                    <div className="text-blue-100">Commissions Paid</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99%</div>
                    <div className="text-blue-100">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who are already building their networks and earning commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/auth/signup">
                  Start Free Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="border-gray-600 hover:bg-gray-800" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}