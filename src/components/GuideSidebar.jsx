import { guideNavigation } from '../data/guideSections'

const directoryLinks = guideNavigation

const GuideSidebar = () => {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto border-r border-black/10 px-5 py-6">
        <div className="mb-5">
          <p className="text-xs font-black text-black/40">报考指南</p>
          <h2 className="mt-1 text-lg font-black text-black">目录</h2>
        </div>

        <nav aria-label="页面左侧目录" className="space-y-1">
          {directoryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-md border-l-4 border-transparent px-3 py-2 text-sm font-bold text-black/55 transition-all hover:border-black/30 hover:bg-black/5 hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export { directoryLinks }
export default GuideSidebar
