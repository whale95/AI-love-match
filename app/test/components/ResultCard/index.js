'use client'
import { useEffect, useState } from 'react'
import { CircularProgress } from './CircularProgress'

export default function ResultCard({ result }) {
  const [showScore, setShowScore] = useState(false)
  
  // 入场动画控制
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScore(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        {/* 匹配度展示 */}
        <div className="relative">
          <CircularProgress 
            value={result.matchScore} 
            animate={showScore}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">
                {showScore ? result.matchScore : 0}%
              </div>
              <div className="text-sm text-text-secondary">匹配度</div>
            </div>
          </div>
        </div>
        
        {/* 分析结果 */}
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-bold">{result.analysis}</h3>
          <p className="text-text-secondary">{result.details}</p>
        </div>
        
        {/* 建议卡片 */}
        <div className="w-full bg-white/50 rounded-xl p-4 space-y-2">
          <h4 className="font-medium text-primary">💡 贴心建议</h4>
          <p className="text-sm text-text-secondary">
            基于你们的性格特点,建议多关注彼此的情感需求,增进相互理解。
            在沟通中保持真诚和耐心,让感情更加稳固。
          </p>
        </div>
      </div>
    </div>
  )
} 