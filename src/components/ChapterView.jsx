import { useEffect } from 'react'
import { guideSections } from '../data/guideSections'

const contentSections = guideSections.slice(1)

const ChapterView = ({ chapterId }) => {
  const currentIndex = contentSections.findIndex((s) => s.id === chapterId)
  const section = contentSections[currentIndex]

  const previous = currentIndex > 0 ? contentSections[currentIndex - 1] : null
  const next = currentIndex < contentSections.length - 1 ? contentSections[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [chapterId])

  if (!section) {
    return (
      <section className="mx-auto max-w-[1152px] px-6 py-24 pt-32 md:px-10 lg:px-12">
        <p className="text-center text-lg font-black text-black/50">章节未找到</p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-[1152px] px-6 py-14 pt-28 md:px-10 md:py-18 lg:px-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-0.5 border-l border-black/10 pl-4" aria-label="页面目录">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
              className="block border-l-2 border-transparent pl-3 py-1.5 text-sm font-bold text-black/55 transition-colors hover:border-black/30 hover:text-black"
            >
              前言
            </a>
            {contentSections.map((item) => {
              const isActive = item.id === chapterId
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block border-l-2 pl-3 py-1.5 text-sm font-bold transition-colors ${
                    isActive
                      ? 'border-lime text-black'
                      : 'border-transparent text-black/55 hover:border-black/30 hover:text-black'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border-3 border-black bg-lime text-sm font-black shadow-brutal-sm">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-accent">
              {section.eyebrow}
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-black md:text-5xl">{section.title}</h1>
          {section.description ? (
            <p className="mt-4 text-base font-bold leading-8 text-black/60">{section.description}</p>
          ) : null}

          <div className="mt-8 space-y-6">
            {section.sections && section.sections.length > 0 ? (
              section.sections.map((sub, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border-3 border-black bg-white p-6 shadow-brutal-sm md:p-8"
                >
                  <h2 className="text-xl font-black text-black md:text-2xl">{sub.heading}</h2>
                  <ul className="mt-4 space-y-3">
                    {sub.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold leading-7 text-black/65 md:text-base">
                        <span className="mt-2 block h-2 w-2 shrink-0 bg-lime" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="rounded-xl border-3 border-black bg-white p-6 shadow-brutal-sm">
                <p className="text-sm font-bold text-black/50">（此处内容待补充）</p>
              </div>
            )}
          </div>

          <nav
            aria-label="章节翻页"
            className="mt-12 grid grid-cols-1 gap-4 border-t-3 border-black pt-6 md:grid-cols-2"
          >
            <a
              href="#"
              onClick={(e) => { if (!previous) { e.preventDefault(); window.location.hash = ''; } }}
              className="rounded-xl border-3 border-black bg-white p-5 text-left shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                {previous ? '上一页' : '返回前言'}
              </span>
              <p className="mt-2 text-lg font-black text-black">
                {previous ? `← ${previous.label}` : '← 前言'}
              </p>
            </a>

            {next ? (
              <a
                href={`#${next.id}`}
                className="rounded-xl border-3 border-black bg-lime p-5 text-right shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">下一页</span>
                <p className="mt-2 text-lg font-black text-black">{next.label} →</p>
              </a>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </div>
    </section>
  )
}

export default ChapterView
