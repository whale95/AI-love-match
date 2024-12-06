import { RocketLaunchIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'AI智能分析',
    description: '采用先进的人工智能算法,多维度分析匹配度',
    icon: RocketLaunchIcon,
  },
  {
    title: '快速测评体验',
    description: '30秒即可完成测评,获取专业分析报告',
    icon: BoltIcon,
  },
  {
    title: '专业报告解读',
    description: '详细的匹配分析和专业的情感指导建议',
    icon: ChartBarIcon,
  },
]

export default function Features({ id }) {
  return (
    <section id={id} className="py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          特色功能
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 