import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">AI缘分测算</h3>
            <p className="text-text-secondary">
              智能算法助你找到真爱
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-text-secondary hover:text-primary transition-colors">
                  特色功能
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-text-secondary hover:text-primary transition-colors">
                  使用流程
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-text-secondary hover:text-primary transition-colors">
                  用户评价
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
                  公司介绍
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">联系我们</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>邮箱: contact@ai-match.com</li>
              <li>电话: 400-888-8888</li>
              <li>地址: 北京市朝阳区xxx大厦</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-text-secondary">
          <p>© 2024 AI缘分测算. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 