import { assetPath } from '../utils/assetPath'
import { guideNavigation } from '../data/guideSections'

const Footer = () => {
  return (
    <footer className="border-t-3 border-black bg-off-white">
      <div className="mx-auto max-w-[1152px] px-5 py-8 md:px-10 md:py-10 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-lime shadow-brutal-sm">
                <img src={assetPath('/logo.png')} alt="" className="h-5 w-5 object-contain" />
              </span>
              <span className="text-base font-black text-black">工科大初心汇</span>
            </div>
            <p className="mt-2 text-xs font-bold leading-6 text-black/50 md:mt-3 md:text-sm md:leading-7">
              由工科大初心汇团队整理，致力于为新生提供真实、实用的校园信息。
            </p>
          </div>

          <div className="grid grid-cols-3 gap-x-6 gap-y-2 text-xs font-black text-black/55 sm:grid-cols-5 md:text-sm">
            {guideNavigation.slice(1).map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-black">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-4 text-center text-[11px] font-bold text-black/35 md:mt-10 md:pt-6 md:text-left md:text-xs">
          © 2026 山西工程科技职业大学 · 工科大初心汇
        </div>
      </div>
    </footer>
  )
}

export default Footer
