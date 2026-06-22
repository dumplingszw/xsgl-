import { guideSections } from '../data/guideSections'

const contentSections = guideSections.slice(1)

const GuidePage = () => {
  return (
    <section id="overview" className="border-t-3 border-black bg-white scroll-mt-24">
      <div className="mx-auto grid max-w-[1152px] grid-cols-1 gap-10 px-6 py-14 md:px-10 md:py-18 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border-3 border-black bg-off-white p-5 shadow-brutal-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-accent">Directory</p>
            <h2 className="mt-2 text-xl font-black text-black">页面目录</h2>
            <nav className="mt-5 space-y-1" aria-label="页面目录">
              {contentSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-md border-l-4 border-transparent px-3 py-2 text-sm font-black text-black/55 transition-colors hover:border-lime hover:bg-lime/25 hover:text-black"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border-3 border-black bg-lime p-6 shadow-brutal md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-black/50">Guide Overview</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-black md:text-5xl">{guideSections[0].title}</h2>
            <p className="mt-4 max-w-3xl text-base font-bold leading-8 text-black/65">{guideSections[0].description}</p>
          </div>

          <div className="space-y-6">
            {contentSections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-2xl border-3 border-black bg-off-white p-6 shadow-brutal-sm md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border-3 border-black bg-lime text-sm font-black shadow-brutal-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.22em] text-blue-accent">
                    {section.eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-black md:text-3xl">{section.title}</h3>
                <p className="mt-3 text-base font-bold leading-8 text-black/60">{section.description}</p>

                <div className="mt-6 rounded-xl border-3 border-black bg-white p-5">
                  <h4 className="text-base font-black text-black">这一节可以继续补充</h4>
                  <p className="mt-2 text-sm font-bold leading-7 text-black/55">{section.placeholder}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuidePage
