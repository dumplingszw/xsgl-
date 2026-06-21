import { assetPath } from '../utils/assetPath'
import { guideSections } from '../data/guideSections'

const heroActions = [
  { label: '新生必读', href: '#mustread', primary: true },
  { label: '校园生活', href: '#campus-life' },
  { label: '学习资源', href: '#study' },
  { label: '加入我们', href: '#join-us' },
]

const featureCards = guideSections.slice(1, 4)

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-off-white pt-24 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1152px] px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-16 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:min-h-[430px] lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-2xl lg:w-[58%]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-3 border-black bg-lime px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-brutal-sm">
              2026 新生开学指南
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-black md:text-6xl lg:text-7xl">
              写给正在了解
              <br />
              <span className="relative inline-block">
                山西工程科技职业大学
                <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-blue-accent/30" />
              </span>
              <br />
              的你
            </h1>

            <p className="mt-6 max-w-xl text-xl font-black leading-relaxed text-black md:text-2xl">
              历经了数年寒窗苦读，即将踏入大学校园的你，我相信你也会对大学校园的一切充满好奇吧。
            </p>
            <p className="mt-3 max-w-xl text-base font-bold leading-8 text-black/58 md:text-lg">
              这是一份由我们工科大初心汇整理的关于山西工程科技职业大学的介绍，我们希望为你减少一些信息差，让你大学生活更加多姿多彩！
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroActions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className={`rounded-md border-3 border-black px-5 py-3 text-sm font-black shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal ${
                    action.primary ? 'bg-black text-lime' : 'bg-white text-black hover:bg-lime'
                  }`}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex w-full justify-center lg:w-[36%]">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-lime blur-2xl lg:block" />
            <div className="absolute -right-3 bottom-4 hidden h-20 w-20 rounded-full bg-blue-accent/40 blur-2xl lg:block" />
            <div className="relative w-full max-w-[320px] rounded-[28px] border-3 border-black bg-white p-8 shadow-brutal-lg">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl border-3 border-black bg-lime shadow-brutal-sm">
                <img src={assetPath('/logo.png')} alt="工科大初心汇 Logo" className="h-24 w-24 object-contain" />
              </div>
              <div className="mt-7 border-t-3 border-black pt-5">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-accent">Freshman Guide</p>
                <h2 className="mt-2 text-2xl font-black text-black">你好，见字如面</h2>
                <p className="mt-3 text-sm font-bold leading-7 text-black/55">
                  我是工科大的一名在校大学生。2024年，机缘巧合之下，我来到了山西工程科技职业大学，在这短短的两年内，我认识了许多形形色色的人，经历了许多事情，正因如此我很理解大家初来大学时的焦虑不安，所以，我做了这份"工科大新生必看指南"。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="guide-index" className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featureCards.map((card) => (
            <a
              key={card.id}
              href={`#${card.id}`}
              className="group rounded-xl border-3 border-black bg-white p-6 shadow-brutal-sm transition-all hover:-translate-y-1 hover:bg-lime hover:shadow-brutal"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-accent group-hover:text-black/50">
                {card.eyebrow}
              </span>
              <h2 className="mt-3 text-xl font-black text-black">{card.label}</h2>
              <p className="mt-3 text-sm font-bold leading-7 text-black/58">{card.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1152px] px-6 pb-16 pt-6 md:px-10 md:pb-20 lg:px-12">
        <div className="rounded-2xl border-3 border-black bg-white p-8 shadow-brutal md:p-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              我希望这个网站希望尽可能真实、系统地呈现山西工程科技职业大学的信息，包括专业信息以及学习和生活相关内容。我们希望它不只是一个简单的信息汇总，更希望让它成为大家的好帮手。
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-black/70 md:text-lg">
              希望你能通过这里，看到一个更真实、更具体的山西工程科技职业大学。
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-black/70 md:text-lg">
              如果这个网站对你有帮助，欢迎推荐给更多需要的人。
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-black/70 md:text-lg">
              如果有更多问题，欢迎加入群聊或者加我们团队的微信来咨询讨论。
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="flex h-48 w-48 items-center justify-center rounded-xl border-3 border-dashed border-black/30 bg-off-white">
              <span className="text-sm font-black text-black/40">（二维码占位）</span>
            </div>
            <div className="flex h-48 w-48 items-center justify-center rounded-xl border-3 border-dashed border-black/30 bg-off-white">
              <span className="text-sm font-black text-black/40">（二维码占位）</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
