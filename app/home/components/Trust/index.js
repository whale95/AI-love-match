import { UserGroupIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline'

const stats = [
  {
    number: '150,000+',
    label: '累计用户',
    icon: UserGroupIcon,
  },
  {
    number: '92%',
    label: '匹配成功率',
    icon: HeartIcon,
  },
  {
    number: '4.9',
    label: '用户评分',
    icon: StarIcon,
  },
]

const testimonials = [
  {
    content: '通过AI缘分测算,我找到了真正的另一半,非常准确的分析！',
    author: '小王, 26岁',
    rating: 5,
  },
  {
    content: '专业的报告帮助我更好地了解感情,推荐给身边的朋友。',
    author: '小李, 28岁',
    rating: 5,
  },
  {
    content: '使用非常方便,而且分析很到位,对感情很有帮助。',
    author: '小张, 25岁',
    rating: 5,
  },
]

export default function Trust({ id }) {
  return (
    <section id={id} className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          值得信赖
        </h2>
        
        {/* 数据统计 */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon className="w-12 h-12 text-primary mb-6" />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 用户反馈 */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-border bg-primary/5"
            >
              <div className="flex gap-1 text-warning mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-4">{testimonial.content}</p>
              <p className="text-text-secondary">{testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* 技术背书 */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            采用先进的AI技术 · 专业团队支持 · 安全隐私保障
          </div>
        </div>
      </div>
    </section>
  )
}