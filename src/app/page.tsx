import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Note Taker</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="h-9 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg flex items-center hover:bg-gray-800"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Capture Your Thoughts,<br />Stay Organized
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, beautiful way to capture and organize your notes. Sign up free and start taking notes in seconds.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="h-12 px-6 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center hover:bg-blue-700"
            >
              Start for free
            </Link>
            <Link
              href="#features"
              className="h-12 px-6 bg-white text-gray-900 font-medium rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50"
            >
              Learn more
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free for individuals. No credit card required.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Features</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Everything you need to capture ideas
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simple & Fast</h3>
              <p className="text-gray-600">
                Create notes instantly. No complicated setup or learning curve. Just open and write.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Synced</h3>
              <p className="text-gray-600">
                Your notes are saved to the cloud automatically. Access them from any device, anytime.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your notes are protected with secure authentication. Only you can access your content.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Powered by AI</h3>
              <p className="text-gray-600">
                Smart organization helps you find what you need. AI-assisted search and categorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Pricing</p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Simple, transparent pricing.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Start free. Upgrade when you need more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Free</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500">forever</span>
              </div>
              <p className="mt-4 text-gray-600">
                Perfect for personal note-taking with unlimited notes.
              </p>
              <Link
                href="/signup"
                className="mt-6 h-11 px-6 bg-white text-gray-900 font-medium rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 w-full"
              >
                Get started
              </Link>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Unlimited notes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Cloud sync</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Secure authentication</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="bg-gray-900 p-8 rounded-xl relative">
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Coming soon
              </div>
              <p className="text-sm font-semibold text-white uppercase tracking-wider">Pro</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">$5</span>
                <span className="text-white/60">per month</span>
              </div>
              <p className="mt-4 text-white/80">
                For power users who need AI features and priority support.
              </p>
              <button
                disabled
                className="mt-6 h-11 px-6 bg-white text-gray-900 font-medium rounded-lg flex items-center justify-center w-full opacity-50 cursor-not-allowed"
              >
                Join waitlist
              </button>
              <div className="mt-8 pt-6 border-t border-white/10">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">AI-powered search</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Advanced organization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to capture your thoughts?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start taking notes in seconds. No credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="h-12 px-6 bg-gray-900 text-white font-medium rounded-lg flex items-center justify-center hover:bg-gray-800"
            >
              Get started — it's free
            </Link>
            <Link
              href="/login"
              className="h-12 px-6 bg-white text-white font-medium rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Note Taker</span>
              </div>
              <p className="text-sm text-gray-600">
                A simple way to capture and organize your thoughts. Built with Next.js and Supabase.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a></li>
                  <li><a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Account</h4>
                <ul className="space-y-2">
                  <li><Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">Sign in</Link></li>
                  <li><Link href="/signup" className="text-sm text-gray-600 hover:text-gray-900">Sign up</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><span className="text-sm text-gray-600">Privacy</span></li>
                  <li><span className="text-sm text-gray-600">Terms</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              2026 Note Taker. Built with Next.js and Supabase.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
