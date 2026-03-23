import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-outline-variant/10 mt-12 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-500">
        <div>
          © {currentYear} ActivityEngine. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/status" className="hover:text-zinc-300 transition-colors uppercase tracking-wide">
            Status
          </Link>
          <Link href="/api-docs" className="hover:text-zinc-300 transition-colors uppercase tracking-wide">
            API Docs
          </Link>
          <Link href="/privacy" className="hover:text-zinc-300 transition-colors uppercase tracking-wide">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}