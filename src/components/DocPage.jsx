import { useEffect } from 'react'
import { guideSections } from '../data/guideSections'
import { assetPath } from '../utils/assetPath'

const contentSections = guideSections.slice(1)

const forewordContent = {
  title: '写给正在了解山西工程科技职业大学的你',
  sections: [
    {
      heading: '',
      items: [
        '历经了数年寒窗苦读，即将踏入大学校园的你，我相信你也会对大学校园的一切充满好奇吧，这是一份由我们工科大初心汇整理的关于山西工程科技职业大学的介绍，我们希望为你减少一些信息差，让你大学生活更加多姿多彩！',
        '你好，见字如面，我是工科大的一名在校大学生。',
        '2024年，机缘巧合之下，我来到了山西工程科技职业大学，在这短短的两年内，我认识了许多形形色色的人，经历了许多事情，正因如此我很理解大家初来大学时的焦虑不安，所以，我做了这份"工科大新生必看指南"。',
        '我希望这个网站希望尽可能真实、系统地呈现山西工程科技职业大学的信息，包括专业信息以及学习和生活相关内容。我们希望它不只是一个简单的信息汇总，更希望让它成为大家的好帮手。',
        '希望你能通过这里，看到一个更真实、更具体的山西工程科技职业大学。',
        '如果这个网站对你有帮助，欢迎推荐给更多需要的人。',
        '如果有更多问题，欢迎加入群聊或者加我们团队的微信来咨询讨论。',
      ],
    },
  ],
}

const Watermark = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    style={{ top: '64px' }}
  >
    <div
      className="absolute inset-0 flex flex-wrap content-start justify-center gap-x-24 gap-y-20"
      style={{
        transform: 'rotate(-18deg) scale(1.8)',
        transformOrigin: 'center center',
      }}
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2.5 opacity-[0.12]">
          <img
            src={assetPath('/logo.png')}
            alt=""
            className="h-7 w-7 object-contain"
            draggable="false"
          />
          <span className="whitespace-nowrap text-2xl font-black italic tracking-widest text-black drop-shadow-sm">
            工科大初心汇
          </span>
        </div>
      ))}
    </div>
  </div>
)

const MobileNav = ({ path }) => {
  const currentIndex = contentSections.findIndex((s) => s.id === path)
  const prev = currentIndex > 0 ? contentSections[currentIndex - 1] : null
  const next = currentIndex < contentSections.length - 1 ? contentSections[currentIndex + 1] : null

  return (
    <div className="sticky top-[66px] z-40 mb-6 flex items-center gap-2 overflow-x-auto border-b-3 border-black bg-off-white/95 px-4 py-2.5 backdrop-blur-sm lg:hidden">
      <a
        href="#foreword"
        className={`shrink-0 rounded-md px-2.5 py-1.5 text-xs font-black ${path === 'foreword' || path === 'overview' ? 'bg-lime text-black' : 'text-black/55'}`}
      >
        前言
      </a>
      {contentSections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`shrink-0 rounded-md px-2.5 py-1.5 text-xs font-black ${item.id === path ? 'bg-lime text-black' : 'text-black/55'}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

const DocPage = ({ path }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  const isForeword = path === 'foreword' || path === 'overview'

  const section = isForeword
    ? null
    : contentSections.find((s) => s.id === path)

  const currentIndex = isForeword ? -1 : contentSections.findIndex((s) => s.id === path)
  const previous = currentIndex > 0 ? contentSections[currentIndex - 1] : null
  const next = isForeword
    ? contentSections[0]
    : currentIndex < contentSections.length - 1
      ? contentSections[currentIndex + 1]
      : null

  const pageTitle = isForeword ? forewordContent.title : section?.title || '未找到'
  const pageSections = isForeword ? forewordContent.sections : section?.sections || []

  return (
    <section className="mx-auto max-w-[1152px] px-5 py-10 pt-24 md:px-10 md:py-14 md:pt-28 lg:px-12">
      <MobileNav path={path} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-0.5 border-l border-black/10 pl-4" aria-label="页面目录">
            <a
              href="#foreword"
              className={`block border-l-2 pl-3 py-1.5 text-sm font-bold transition-colors ${
                isForeword
                  ? 'border-lime text-black'
                  : 'border-transparent text-black/55 hover:border-black/30 hover:text-black'
              }`}
            >
              前言
            </a>
            {contentSections.map((item) => {
              const isActive = item.id === path
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

        <div className="relative min-w-0">
          <Watermark />

          <div className="relative z-10">
            {!isForeword && section ? (
              <div className="mb-6 flex flex-wrap items-center gap-3 md:mb-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border-3 border-black bg-lime text-xs font-black shadow-brutal-sm md:h-10 md:w-10 md:text-sm">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-accent md:text-[11px]">
                  {section.eyebrow}
                </span>
              </div>
            ) : null}

            <h1 className={`font-black tracking-tight text-black ${isForeword ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-2xl md:text-4xl lg:text-5xl'}`}>{pageTitle}</h1>

            {section?.description ? (
              <p className="mt-3 text-sm font-bold leading-7 text-black/60 md:mt-4 md:text-base md:leading-8">{section.description}</p>
            ) : null}

            <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
              {pageSections.map((sub, idx) => (
                <div key={idx}>
                  {sub.heading ? (
                    <h2 className="mb-3 text-lg font-black text-black md:mb-4 md:text-xl lg:text-2xl">{sub.heading}</h2>
                  ) : null}
                  {!section?.isGallery ? (
                    <>
                      <div className={isForeword ? 'space-y-4 md:space-y-5' : 'space-y-3 md:space-y-4'}>
                        {sub.items.map((item, i) => (
                          <p
                            key={i}
                            className={
                              isForeword
                                ? 'text-base font-bold leading-[1.85] text-black/80 md:text-lg md:leading-[1.9] lg:text-xl'
                                : 'text-sm font-bold leading-7 text-black/70 md:text-base md:leading-8'
                            }
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                      {sub.images && sub.images.length > 0 ? (
                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-6 md:gap-4">
                          {sub.images.map((img, imgIdx) => (
                            <img
                              key={imgIdx}
                              src={img}
                              alt=""
                              className="w-full rounded-xl border-3 border-black object-cover shadow-brutal-sm"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <div className="space-y-3 md:space-y-4">
                        {sub.items.map((item, i) => (
                          <p key={i} className="text-sm font-bold leading-7 text-black/70 md:text-base md:leading-8">
                            {item}
                          </p>
                        ))}
                      </div>
                      {sub.album && sub.album.length > 0 ? (
                        <div className="mt-5 space-y-5 md:mt-6">
                          {sub.album.length === 1 ? (
                            <div className="overflow-hidden rounded-xl border-3 border-black bg-white shadow-brutal-sm">
                              <img src={sub.album[0].src} alt="" className="w-full object-cover" loading="lazy" />
                              <p className="border-t-3 border-black bg-lime px-4 py-2 text-xs font-black text-black md:text-sm">
                                {sub.album[0].caption}
                              </p>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                              {sub.album.map((photo, pIdx) => (
                                <div key={pIdx} className="overflow-hidden rounded-xl border-3 border-black bg-white shadow-brutal-sm transition-all hover:-translate-y-1">
                                  <img src={photo.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
                                  <p className="border-t-3 border-black bg-white px-3 py-2 text-[11px] font-black text-black/70 md:text-xs">
                                    {photo.caption}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              ))}
            </div>


            <nav
              aria-label="章节翻页"
              className="mt-10 grid grid-cols-1 gap-3 border-t-3 border-black pt-5 md:mt-12 md:grid-cols-2 md:gap-4 md:pt-6"
            >
              {isForeword ? (
                <div />
              ) : (
                <a
                  href={`#${previous ? previous.id : 'foreword'}`}
                  className="rounded-xl border-3 border-black bg-white p-4 text-left shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal md:p-5"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
                    {previous ? '上一页' : '返回前言'}
                  </span>
                  <p className="mt-1.5 text-base font-black text-black md:mt-2 md:text-lg">
                    {previous ? `← ${previous.label}` : '← 前言'}
                  </p>
                </a>
              )}

              {next ? (
                <a
                  href={`#${next.id}`}
                  className="rounded-xl border-3 border-black bg-lime p-4 text-right shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal md:p-5"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">下一页</span>
                  <p className="mt-1.5 text-base font-black text-black md:mt-2 md:text-lg">{next.label} →</p>
                </a>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocPage
