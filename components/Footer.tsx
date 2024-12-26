import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <nav className="flex space-x-4" aria-label="Footer">
          <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Contact
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Privacy
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-white">
            <span className="sr-only">YouTube</span>
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

