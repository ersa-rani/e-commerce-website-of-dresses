'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import  "../styles/customer.css";
interface HorizontalScrollProps {
  heading: string
  children: React.ReactNode
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ heading, children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
      }
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="happy-heading">{heading}</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className={`left-arrow ${
              showLeftArrow ? 'opacity-100' : 'opacity-0 cursor-default'
            }`}
            disabled={!showLeftArrow}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={` ${
              showRightArrow ? 'opacity-100' : 'opacity-0 cursor-default'
            }`}
            disabled={!showRightArrow}
            aria-label="Scroll right"
          >
            <ChevronRight className="right-arrow" />
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide"
        onScroll={handleScroll}
      >
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll