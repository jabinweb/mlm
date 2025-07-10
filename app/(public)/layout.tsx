import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'MLM Pro - Network Marketing Platform',
  description: 'Modern MLM platform with product sales and referral system'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}