import { assetPath } from '../utils/assetPath'

const Footer = () => {
  return (
    <footer className="bg-black border-t-3 border-black">
      {/* CTA Banner */}
      <div className="bg-lime border-b-3 border-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-black">准备好开始你的大学生活了吗？</h3>
              <p className="mt-2 text-sm font-bold text-black/60">收藏这份指南，随时查阅你需要的信息</p>
            </div>
            <a href="#hero" className="brutal-card brutal-card-hover bg-black text-lime px-8 py-3.5 text-sm font-black uppercase tracking-wider whitespace-nowrap">
              回到顶部 ↑
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={assetPath('/logo.png')}
                alt="工科生初心汇"
                className="h-8 w-auto object-contain"
              />
              <div>
                <p className="text-sm font-black text-lime">工科生初心汇</p>
                <p className="text-[10px] font-bold text-white/40">山西工程科技职业大学</p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-md">
              2026级新生开学全景指南，由工科生初心汇团队制作。涵盖新生必读、生活指南、学习资源、校园设施、周边交通、资助发展六大模块。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black text-lime uppercase tracking-widest mb-4">攻略分类</h4>
            <ul className="space-y-2">
              {['新生必读', '生活指南', '学习资源', '校园设施', '周边交通', '资助发展'].map((link) => (
                <li key={link}>
                  <a href="#categories" className="text-sm text-white/50 hover:text-lime transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-black text-lime uppercase tracking-widest mb-4">相关信息</h4>
            <ul className="space-y-3">
              {[
                { label: '学校名称', value: '山西工程科技职业大学' },
                { label: '学校位置', value: '山西省晋中市' },
                { label: '项目版本', value: 'V2.0 Website' },
                { label: '制作团队', value: '工科生初心汇' },
              ].map((item) => (
                <li key={item.label}>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm text-white/60 font-medium mt-0.5">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 山西工程科技职业大学 · 工科生初心汇 · 新生指南
          </p>
          <div className="flex items-center gap-4">
            {['首页', '分类', '校园', '关于'].map((link) => (
              <a key={link} href="#hero" className="text-xs text-white/30 hover:text-lime transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
