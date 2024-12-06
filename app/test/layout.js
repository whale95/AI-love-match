import '../styles/index.css'

export const metadata = {
  title: 'AI缘分测算',
  description: '智能分析你们的缘分匹配度',
}

export default function TestLayout({ children }) {
  return (
    <div className="bg-background text-text-primary">
      {children}
    </div>
  )
} 