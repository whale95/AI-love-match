'use client'
import { useState, useEffect } from 'react'

const analyzeTexts = [
  "正在分析你们的名字...",
  "解读性格特征中...",
  "计算匹配指数...",
  "生成缘分报告...",
  "马上就好..."
]

export default function LoadingEffect() {
  const [textIndex, setTextIndex] = useState(0)
  
  // 文案自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex(prev => (prev + 1) % analyzeTexts.length)
    }, 2000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* AI图标动画 */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute inset-2 bg-primary/30 rounded-full animate-pulse [animation-delay:200ms]" />
        <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      </div>
      
      {/* 分析文案 */}
      <div className="h-6">
        <p 
          key={textIndex}
          className="text-lg text-text-primary animate-fadeInUp"
        >
          {analyzeTexts[textIndex]}
        </p>
      </div>
      
      {/* 进度条 */}
      <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-progress" 
             style={{animationDuration: '10s'}} />
      </div>
    </div>
  )
} 