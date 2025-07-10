'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Award, Target, Globe } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by entrepreneurs, for entrepreneurs. Our community is at the heart of everything we do.'
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Over 10,000 successful distributors worldwide with millions in combined earnings.'
    },
    {
      icon: Target,
      title: 'Clear Goals',
      description: 'Transparent compensation plans and achievable milestones to track your progress.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operating in 50+ countries with localized support and products.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/images/team/sarah.jpg',
      description: 'With 15 years in network marketing, Sarah founded MLM Pro to democratize entrepreneurship.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/images/team/michael.jpg',
      description: 'Former tech lead at Fortune 500 companies, now building the future of MLM technology.'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'VP of Operations',
      image: '/images/team/lisa.jpg',
      description: 'Operations expert ensuring smooth experiences for all our distributors worldwide.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MLM Pro
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering entrepreneurs worldwide with innovative products, 
              transparent compensation, and unwavering support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe everyone deserves the opportunity to build their own business 
                and achieve financial freedom. MLM Pro provides the tools, products, and 
                support needed to turn entrepreneurial dreams into reality.
              </p>
              <p className="text-lg text-gray-600">
                Through our innovative platform and high-quality products, we&apos;re creating 
                a new standard for network marketing that prioritizes transparency, 
                fairness, and genuine value creation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Users className="h-32 w-32 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MLM Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another MLM company. We&apos;re a movement towards 
              ethical, sustainable, and profitable network marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders dedicated to your success and the growth of our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Users className="h-20 w-20 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with complete transparency and honesty in all our dealings, 
                ensuring fair compensation and ethical business practices.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly evolving our platform and products to provide the best 
                tools and opportunities for our distributors&apos; success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                Building a supportive network where every member can thrive and 
                achieve their entrepreneurial goals together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
