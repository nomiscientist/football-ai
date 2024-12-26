'use client'

import { useState } from 'react'
import { Home, BarChart2, Users, Video, Calendar, Settings, PieChart, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: Users, label: 'Players', href: '/players' },
  { icon: Video, label: 'Live Stream', href: '/live' },
  { icon: Calendar, label: 'Fixtures', href: '/fixtures' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: PieChart, label: 'Post-Match Analytics', href: '/post-match-analytics' },
]

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  const pathname = usePathname()

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out z-20",
      isOpen ? "w-64" : "w-0 md:w-16"
    )}>
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className={cn("md:hidden", !isOpen && "hidden")}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-5 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <span className={cn(
                "flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md transition ease-in-out duration-150",
                isActive
                  ? "text-blue-600 bg-blue-100 hover:bg-blue-200 dark:text-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              )}>
                <item.icon className={cn(
                  "mr-4 h-6 w-6",
                  isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300"
                )} />
                {isOpen && <span>{item.label}</span>}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

