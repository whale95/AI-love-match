'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            AI缘分测算
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" 
               onClick={(e) => scrollToSection(e, 'features')}
               className="text-text-secondary hover:text-primary transition-colors">
              特色功能
            </a>
            <a href="#process"
               onClick={(e) => scrollToSection(e, 'process')}
               className="text-text-secondary hover:text-primary transition-colors">
              使用流程
            </a>
            <a href="#testimonials"
               onClick={(e) => scrollToSection(e, 'testimonials')}
               className="text-text-secondary hover:text-primary transition-colors">
              用户评价
            </a>
          </div>

          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm transition-colors">
            开始测算
          </button>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden ml-4 text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 移动端菜单 */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features"
                 onClick={(e) => scrollToSection(e, 'features')}
                 className="text-text-secondary hover:text-primary transition-colors">
                特色功能
              </a>
              <a href="#process"
                 onClick={(e) => scrollToSection(e, 'process')}
                 className="text-text-secondary hover:text-primary transition-colors">
                使用流程
              </a>
              <a href="#testimonials"
                 onClick={(e) => scrollToSection(e, 'testimonials')}
                 className="text-text-secondary hover:text-primary transition-colors">
                用户评价
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}