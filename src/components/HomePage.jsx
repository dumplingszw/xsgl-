import { assetPath } from '../utils/assetPath'

const heroActions = [
  { text: '前言', link: '#foreword', theme: 'brand' },
  { text: '新生必读', link: '#mustread', theme: 'brand' },
  { text: '校园生活', link: '#campus-life', theme: 'alt' },
  { text: '学习资源', link: '#study', theme: 'alt' },
]

const features = [
  {
    title: '新生必读',
    details: '报到须知、入学材料、军训准备、反诈提醒等新生入学必备信息。',
  },
  {
    title: '校园生活',
    details: '宿舍、食堂、洗浴、快递、作息与校园日常信息。',
  },
  {
    title: '学习资源',
    details: '图书馆、学院机构、学院专业、选课、绩点综测等学习相关信息。',
  },
]

const HomePage = () => {
  return (
    <section className="relative overflow-hidden bg-off-white pt-24">
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

      <div className="relative mx-auto max-w-[1152px] px-5 pb-12 pt-8 md:px-10 md:pb-16 md:pt-16 lg:px-12">
        <div className="flex flex-col items-center gap-10 lg:min-h-[360px] lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-2xl lg:w-[58%]">
            <div className="flex items-center gap-3">
              <img
                src={assetPath('/logo.png')}
                alt="工科大初心汇"
                className="h-12 w-12 object-contain drop-shadow-brutal sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <div>
                <h1 className="text-[2rem] font-black leading-[1.1] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
                  工科大初心汇
                </h1>
                <p className="mt-1 text-sm font-bold text-black/45 sm:text-base md:text-lg">
                  山西工程科技职业大学新生指南
                </p>
              </div>
            </div>
            <p className="mt-4 text-xl font-black leading-relaxed text-black sm:text-2xl md:text-3xl">
              更适合工科大的新生的开学生存指南。
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              {heroActions.map((action) => (
                <a
                  key={action.link}
                  href={action.link}
                  className={`rounded-md border-3 border-black px-4 py-2.5 text-center text-sm font-black shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal sm:px-5 sm:py-3 ${
                    action.theme === 'brand'
                      ? 'bg-black text-lime'
                      : 'bg-white text-black hover:bg-lime'
                  }`}
                >
                  {action.text}
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden w-full justify-center lg:flex lg:w-[36%]">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-lime blur-2xl lg:block" />
            <div className="absolute -right-3 bottom-4 hidden h-20 w-20 rounded-full bg-blue-accent/40 blur-2xl lg:block" />
            <div className="relative">
              <img
                src={assetPath('/logo.png')}
                alt="工科大初心汇"
                className="h-52 w-52 object-contain drop-shadow-brutal"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={`#${feature.title === '新生必读' ? 'mustread' : feature.title === '校园生活' ? 'campus-life' : 'study'}`}
              className="group rounded-xl border-3 border-black bg-white p-5 shadow-brutal-sm transition-all hover:-translate-y-1 hover:bg-lime hover:shadow-brutal md:p-6"
            >
              <h2 className="text-lg font-black text-black md:text-xl">{feature.title}</h2>
              <p className="mt-2 text-sm font-bold leading-7 text-black/58 md:mt-3">{feature.details}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage
