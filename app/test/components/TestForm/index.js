'use client'
import { useState, useEffect } from 'react'
import { validateForm } from '../../utils/validate'

const personalityOptions = [
  { value: 'outgoing', label: '外向开朗' },
  { value: 'gentle', label: '温柔体贴' },
  { value: 'rational', label: '理性稳重' },
  { value: 'creative', label: '创意浪漫' },
]

export default function TestForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    personality1: '',
    personality2: '',
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  
  // 实时验证
  useEffect(() => {
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)
  }, [formData])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 验证所有字段
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)
    setTouched({
      name1: true,
      name2: true,
      personality1: true,
      personality2: true
    })
    
    // 如果没有错误,提交表单
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">AI缘分测算</h1>
        <p className="text-text-secondary text-center">填写信息,立即测算你们的缘分</p>
      </div>
      
      {/* 第一个人 */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">你的名字</label>
          <input
            type="text"
            name="name1"
            value={formData.name1}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              touched.name1 && errors.name1 
                ? 'border-error focus:ring-error/30' 
                : 'border-border focus:ring-primary/30'
            } focus:outline-none focus:ring-4`}
            placeholder="请输入你的名字"
          />
          {touched.name1 && errors.name1 && (
            <p className="mt-1 text-sm text-error">{errors.name1}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">你的性格</label>
          <select
            name="personality1"
            value={formData.personality1}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              touched.personality1 && errors.personality1 
                ? 'border-error focus:ring-error/30' 
                : 'border-border focus:ring-primary/30'
            } focus:outline-none focus:ring-4`}
          >
            <option value="">请选择</option>
            {personalityOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {touched.personality1 && errors.personality1 && (
            <p className="mt-1 text-sm text-error">{errors.personality1}</p>
          )}
        </div>
      </div>
      
      {/* 第二个人 */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Ta的名字</label>
          <input
            type="text"
            name="name2"
            value={formData.name2}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              touched.name2 && errors.name2 
                ? 'border-error focus:ring-error/30' 
                : 'border-border focus:ring-primary/30'
            } focus:outline-none focus:ring-4`}
            placeholder="请输入Ta的名字"
          />
          {touched.name2 && errors.name2 && (
            <p className="mt-1 text-sm text-error">{errors.name2}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Ta的性格</label>
          <select
            name="personality2"
            value={formData.personality2}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 rounded-lg border ${
              touched.personality2 && errors.personality2 
                ? 'border-error focus:ring-error/30' 
                : 'border-border focus:ring-primary/30'
            } focus:outline-none focus:ring-4`}
          >
            <option value="">请选择</option>
            {personalityOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {touched.personality2 && errors.personality2 && (
            <p className="mt-1 text-sm text-error">{errors.personality2}</p>
          )}
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
      >
        开始测算
      </button>
    </form>
  )
} 