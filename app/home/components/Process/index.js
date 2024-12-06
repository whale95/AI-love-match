import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    number: '01',
    title: '输入信息',
    description: '填写基本信息,只需几秒钟',
  },
  {
    number: '02', 
    title: 'AI分析',
    description: '智能算法快速处理数据',
  },
  {
    number: '03',
    title: '查看报告',
    description: '获取详细的匹配分析报告',
  },
  {
    number: '04',
    title: '分享保存',
    description: '随时查看,分享给好友',
  },
]

export default function Process({ id }) {
  return (
    <section id={id} className="py-24 bg-primary/5 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          使用流程
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <ArrowLongRightIcon className="hidden md:block w-8 h-8 text-primary/30 absolute -right-4 top-8 translate-x-1/2" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 