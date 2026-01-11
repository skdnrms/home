import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Simple Utility Tools',
    template: '%s | Simple Utility Tools'
  },
  description:
    'Fast, simple, and free utility tools for everyday tasks. No ads, no signup, just tools.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Simple Utility Tools',
    description:
      'A collection of small and useful tools for text, images, and daily work.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-gray-900 dark:bg-zinc-950 dark:text-gray-100 antialiased">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-lg font-semibold tracking-tight"
            >
              Simple Tools
            </a>

            <nav className="space-x-4 text-sm text-gray-600 dark:text-gray-300">
              <a href="/tools/word-counter/">Tools</a>
              <a href="/about/">About</a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} Simple Utility Tools. Built as a
              personal project.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
