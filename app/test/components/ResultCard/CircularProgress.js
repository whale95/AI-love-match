export function CircularProgress({ value, animate = false }) {
  const circumference = 2 * Math.PI * 45 // r=45
  const offset = animate ? circumference * (1 - value / 100) : circumference
  
  return (
    <div className="w-40 h-40">
      <svg className="w-full h-full transform -rotate-90">
        {/* 背景圆环 */}
        <circle
          cx="80"
          cy="80"
          r="45"
          fill="none"
          stroke="currentColor"
          className="text-primary/10"
          strokeWidth="10"
        />
        
        {/* 进度圆环 */}
        <circle
          cx="80"
          cy="80"
          r="45"
          fill="none"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: animate ? 'stroke-dashoffset 1s ease-in-out' : 'none'
          }}
        />
      </svg>
    </div>
  )
} 