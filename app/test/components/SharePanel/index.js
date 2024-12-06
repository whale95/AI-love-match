'use client'
import { useState, useRef } from 'react'
import { generateShareImage, downloadImage, shareOptions } from '../../utils/share'
import { WechatIcon, MomentsIcon, WeiboIcon } from '../shared/Icons'

export default function SharePanel({ result }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [shareImage, setShareImage] = useState(null)
  const resultRef = useRef(null)
  
  // 生成分享图片
  const handleGenerateImage = async () => {
    if (isGenerating) return
    
    setIsGenerating(true)
    try {
      const dataUrl = await generateShareImage(resultRef.current)
      setShareImage(dataUrl)
    } catch (error) {
      console.error('生成分享图片失败:', error)
    } finally {
      setIsGenerating(false)
    }
  }
  
  // 保存图片
  const handleSaveImage = () => {
    if (!shareImage) return
    downloadImage(shareImage, '缘分测算结果.png')
  }
  
  // 在shareOptions中使用图标组件
  const iconComponents = {
    wechat: WechatIcon,
    moments: MomentsIcon,
    weibo: WeiboIcon
  }
  
  return (
    <div className="space-y-6">
      {/* 分享提示 */}
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2">分享测算结果</h3>
        <p className="text-sm text-text-secondary">
          生成图片后可以分享给好友或保存到本地
        </p>
      </div>
      
      {/* 结果预览区 */}
      <div ref={resultRef} className="bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {result.matchScore}%
            </div>
            <div className="text-sm text-text-secondary">匹配度</div>
          </div>
          <p className="text-center">{result.analysis}</p>
        </div>
      </div>
      
      {/* 操作按钮 */}
      <div className="flex flex-col gap-4">
        <button
          onClick={handleGenerateImage}
          disabled={isGenerating}
          className="w-full py-3 px-4 bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          {isGenerating ? '生成中...' : '生成分享图片'}
        </button>
        
        {shareImage && (
          <button
            onClick={handleSaveImage}
            className="w-full py-3 px-4 bg-white border border-primary text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            保存到本地
          </button>
        )}
      </div>
      
      {/* 社交分享 */}
      {shareImage && (
        <div className="border-t pt-6">
          <div className="text-sm text-text-secondary mb-4">分享到社交平台</div>
          <div className="flex justify-center gap-8">
            {shareOptions.map(option => {
              const Icon = iconComponents[option.icon]
              return (
                <button
                  key={option.name}
                  onClick={() => option.action(shareImage)}
                  className="flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon />
                  </span>
                  <span className="text-xs">{option.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
} 