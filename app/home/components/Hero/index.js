import ParticleBackground from './ParticleBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-12 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          AI智能缘分测算
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 animate-fade-in">
          快速准确的情感匹配分析，助你找到真爱
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 active:scale-95 animate-fade-in">
          立即测算
        </button>
      </div>
    </section>
  )
} 