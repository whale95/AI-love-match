'use client'
import { useState } from 'react'
import TestForm from './components/TestForm'
import LoadingEffect from './components/LoadingEffect'
import ResultCard from './components/ResultCard'
import SharePanel from './components/SharePanel'

export default function TestPage() {
  const [pageState, setPageState] = useState('form') // form | loading | result
  const [formData, setFormData] = useState(null)
  const [result, setResult] = useState(null)

  const handleSubmit = async (data) => {
    setFormData(data)
    setPageState('loading')
    
    // 模拟API调用
    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      setResult({
        matchScore: 85,
        analysis: '你们的匹配度很高!',
        details: '你们在性格上非常互补...'
      })
      setPageState('result')
    } catch (error) {
      console.error('计算出错:', error)
      setPageState('form')
    }
  }

  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-md">
        {pageState === 'form' && (
          <TestForm onSubmit={handleSubmit} />
        )}
        
        {pageState === 'loading' && (
          <LoadingEffect />
        )}
        
        {pageState === 'result' && (
          <div className="space-y-8">
            <ResultCard result={result} />
            <SharePanel result={result} />
          </div>
        )}
      </div>
    </main>
  )
} 