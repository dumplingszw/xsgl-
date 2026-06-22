import { guideSections } from '../data/guideSections'

const contentSections = guideSections.slice(1)
const nextSection = contentSections[0]

const HomeView = () => {
  return (
    <section className="mx-auto max-w-[1152px] px-6 py-14 pt-28 md:px-10 md:py-18 lg:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-0.5 border-l border-black/10 pl-4" aria-label="页面目录">
            <span className="block border-l-2 border-lime pl-3 py-1.5 text-sm font-black text-black">
              前言
            </span>
            {contentSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block border-l-2 border-transparent pl-3 py-1.5 text-sm font-bold text-black/55 transition-colors hover:border-black/30 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          <h1 className="text-3xl font-black tracking-tight text-black md:text-5xl">
            写给正在了解山西工程科技职业大学的你
          </h1>

          <div className="mt-8 space-y-5">
            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              历经了数年寒窗苦读，即将踏入大学校园的你，我相信你也会对大学校园的一切充满好奇吧，这是一份由我们工科大初心汇整理的关于山西工程科技职业大学的介绍，我们希望为你减少一些信息差，让你大学生活更加多姿多彩！
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              你好，见字如面，我是工科大的一名在校大学生。
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              2024年，机缘巧合之下，我来到了山西工程科技职业大学，在这短短的两年内，我认识了许多形形色色的人，经历了许多事情，正因如此我很理解大家初来大学时的焦虑不安，所以，我做了这份"工科大新生必看指南"。
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              我希望这个网站希望尽可能真实、系统地呈现山西工程科技职业大学的信息，包括专业信息以及学习和生活相关内容。我们希望它不只是一个简单的信息汇总，更希望让它成为大家的好帮手。
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              希望你能通过这里，看到一个更真实、更具体的山西工程科技职业大学。
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
              如果这个网站对你有帮助，欢迎推荐给更多需要的人。
            </p>

            <p className="text-base font-bold leading-8 text-black/70 md:text-lg">
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

          <nav
            aria-label="章节翻页"
            className="mt-12 grid grid-cols-1 gap-4 border-t-3 border-black pt-6 md:grid-cols-2"
          >
            <div />
            {nextSection ? (
              <a
                href={`#${nextSection.id}`}
                className="rounded-xl border-3 border-black bg-lime p-5 text-right shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">下一页</span>
                <p className="mt-2 text-lg font-black text-black">{nextSection.label} →</p>
              </a>
            ) : null}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default HomeView
