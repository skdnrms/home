export const metadata = {
  title: 'Simple Utility Tools for Everyday Work',
  description:
    'A collection of simple, fast, and free utility tools for text, images, and daily tasks. No signup required.'
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Simple Utility Tools
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A growing collection of small, useful tools you can use instantly.
          No ads. No sign-up. Just tools.
        </p>
      </section>

      {/* Tools List */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Available Tools
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border p-4 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">
            <a href="/tools/word-counter/" className="block">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Word Counter
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Count words and characters instantly.
              </p>
            </a>
          </li>

          <li className="rounded-xl border p-4 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900">
            <a href="/tools/text-case-converter/" className="block">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Text Case Converter
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Convert text to upper, lower, or title case.
              </p>
            </a>
          </li>

          {/* 앞으로 여기에 계속 추가 */}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
        <p>
          Built as a personal project. More tools coming soon.
        </p>
      </footer>
    </main>
  )
}
