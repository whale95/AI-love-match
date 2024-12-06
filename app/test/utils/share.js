import html2canvas from 'html2canvas'

// 生成分享图片
export const generateShareImage = async (element) => {
  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
    })
    return canvas.toDataURL('image/png')
  } catch (error) {
    console.error('生成图片失败:', error)
    throw error
  }
}

// 下载图片
export const downloadImage = (dataUrl, filename) => {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 社交分享配置
export const shareOptions = [
  {
    name: '微信',
    icon: 'wechat',
    action: (url) => {
      // 实际项目中需要调用微信SDK
      console.log('分享到微信', url)
    }
  },
  {
    name: '朋友圈',
    icon: 'moments',
    action: (url) => {
      console.log('分享到朋友圈', url)
    }
  },
  {
    name: '微博',
    icon: 'weibo',
    action: (url) => {
      window.open(`http://service.weibo.com/share/share.php?url=${url}`)
    }
  }
] 