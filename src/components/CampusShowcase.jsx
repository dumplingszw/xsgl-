import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { assetPath } from '../utils/assetPath'

const makePhotos = (prefix, count, ext, groupTitle, desc) =>
  Array.from({ length: count }, (_, index) => ({
    src: assetPath(`/campus-doc/${prefix}-${index + 1}.${ext}`),
    title: `${groupTitle}照片 ${index + 1}`,
    desc,
  }))

const galleryGroups = [
  {
    id: 'canteen',
    title: '食堂餐厅',
    icon: '🍽️',
    summary: '来自文档“食堂介绍”的原始照片，展示学校餐厅环境、档口和就餐空间。学校主要有麦道餐厅、德韵轩餐厅、和园餐厅、雅园餐厅。',
    cover: assetPath('/campus-doc/canteen-1.jpg'),
    photos: makePhotos('canteen', 4, 'jpg', '食堂餐厅', '食堂餐厅相关原始照片，用于辅助了解学校就餐环境。'),
  },
  {
    id: 'dorm',
    title: '学生宿舍',
    icon: '🏡',
    summary: '来自文档“宿舍介绍”的原始照片，展示宿舍楼、宿舍内部或宿舍相关生活空间。宿舍多为六人间、上床下桌。',
    cover: assetPath('/campus-doc/dorm-1.png'),
    photos: makePhotos('dorm', 5, 'png', '学生宿舍', '学生宿舍相关原始照片，用于辅助了解住宿条件和生活空间。'),
  },
  {
    id: 'sports',
    title: '体育馆与操场',
    icon: '🏟️',
    summary: '来自文档“体育馆介绍”的原始照片，展示体育馆、操场、篮球场和运动设施等内容。',
    cover: assetPath('/campus-doc/sports-1.jpg'),
    photos: [
      ...makePhotos('sports', 2, 'jpg', '体育场馆', '体育馆与操场相关原始照片，用于辅助了解学校运动空间。'),
      ...makePhotos('sports', 2, 'png', '体育场馆', '体育馆与操场相关原始照片，用于辅助了解学校运动空间。').map((photo, index) => ({
        ...photo,
        src: assetPath(`/campus-doc/sports-${index + 3}.png`),
        title: `体育场馆照片 ${index + 3}`,
      })),
      ...makePhotos('sports', 2, 'jpg', '体育场馆', '体育馆与操场相关原始照片，用于辅助了解学校运动空间。').map((photo, index) => ({
        ...photo,
        src: assetPath(`/campus-doc/sports-${index + 5}.jpg`),
        title: `体育场馆照片 ${index + 5}`,
      })),
    ],
  },
  {
    id: 'campus',
    title: '校园环境',
    icon: '🏛️',
    summary: '来自文档“校园地图/校园环境”的原始照片，统一按编号展示，避免把具体地点名称标错。',
    cover: assetPath('/campus-doc/campus-1.jpg'),
    photos: makePhotos('campus', 7, 'jpg', '校园环境', '校园环境相关原始照片，用于辅助新生熟悉校园空间和日常动线。'),
  },
  {
    id: 'nearby',
    title: '周边生活',
    icon: '🛍️',
    summary: '来自文档“校园吃喝玩乐集”的原始图片，展示学校周边商业、餐饮和休闲生活信息。',
    cover: assetPath('/campus-doc/nearby-1.png'),
    photos: makePhotos('nearby', 2, 'png', '周边生活', '周边生活相关原始图片，用于辅助了解校外生活配套。'),
  },
]

const dayScenes = [
  {
    time: '07:20',
    title: '从宿舍开始一天',
    groupId: 'dorm',
    image: assetPath('/campus-doc/dorm-1.png'),
    desc: '宿舍多为六人间、上床下桌。早上整理好书包，从宿舍区出发，先熟悉楼门开放时间、公共水房和洗衣区位置。',
    tip: '建议：入学第一周先记住宿舍楼、浴室、水房和快递点的位置。',
  },
  {
    time: '12:00',
    title: '去食堂吃饭',
    groupId: 'canteen',
    image: assetPath('/campus-doc/canteen-1.jpg'),
    desc: '麦道、德韵轩、和园、雅园等餐厅覆盖早餐、正餐和夜宵。新生可以先从离宿舍最近的餐厅开始熟悉。',
    tip: '建议：高峰期错峰就餐，先收藏常去窗口。',
  },
  {
    time: '14:10',
    title: '上课与校园动线',
    groupId: 'campus',
    image: assetPath('/campus-doc/campus-1.jpg'),
    desc: '下午课程开始前，重点熟悉宿舍、教学楼、图书馆、食堂、校门之间的路线，减少开学初迷路。',
    tip: '建议：第一周提前 10 分钟出门，边走边记路。',
  },
  {
    time: '17:50',
    title: '操场与体育馆',
    groupId: 'sports',
    image: assetPath('/campus-doc/sports-1.jpg'),
    desc: '课余可以去操场、体育馆和球场活动。体育馆、东操场、西操场都是校园生活里很常见的活动空间。',
    tip: '建议：军训、运动会和体育课相关集合地点要提前确认。',
  },
  {
    time: '周末',
    title: '周边补给与放松',
    groupId: 'nearby',
    image: assetPath('/campus-doc/nearby-1.png'),
    desc: '周末可以熟悉学校周边商圈、餐饮、便利店和交通站点。外出时注意结伴、安全和返校时间。',
    tip: '建议：第一次外出先从常用校门和公交/打车点开始。',
  },
]

const mapPoints = [
  { id: 'dorm', label: '宿舍区', x: '17%', y: '34%', groupId: 'dorm' },
  { id: 'study', label: '学习区', x: '44%', y: '24%', groupId: 'campus' },
  { id: 'canteen', label: '食堂区', x: '31%', y: '62%', groupId: 'canteen' },
  { id: 'sports', label: '运动区', x: '69%', y: '40%', groupId: 'sports' },
  { id: 'gate', label: '校门/周边', x: '78%', y: '72%', groupId: 'nearby' },
]

const CampusShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeGroupId, setActiveGroupId] = useState('dorm')
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const totalPhotos = useMemo(() => galleryGroups.reduce((sum, group) => sum + group.photos.length, 0), [])
  const activeGroup = galleryGroups.find((group) => group.id === activeGroupId) || galleryGroups[0]

  useEffect(() => {
    if (!selectedPhoto && !galleryOpen) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedPhoto, galleryOpen])

  const closePhoto = () => setSelectedPhoto(null)
  const openGroupGallery = (groupId) => {
    setActiveGroupId(groupId)
    setGalleryOpen(true)
  }

  return (
    <section id="campus" ref={ref} className="relative overflow-hidden bg-lime py-20 md:py-28 scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 30px)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-black rounded-full" />
            <span className="brutal-card bg-black text-lime px-3 py-1 text-xs font-black uppercase tracking-widest">
              Freshman Day
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">
            新生的工科大一天
          </h2>
          <p className="mt-3 max-w-2xl text-base font-bold text-black/50">
            不再把照片直接铺满首页。这里用 5 个新生真实场景串起宿舍、食堂、学习、运动和周边生活；完整 {totalPhotos} 张原始照片收进图库弹窗。
          </p>
        </motion.div>

        <div className="relative space-y-5">
          <div className="absolute left-6 top-0 hidden h-full w-1 bg-black/15 md:block" />
          {dayScenes.map((scene, index) => (
            <motion.button
              type="button"
              key={scene.title}
              onClick={() => openGroupGallery(scene.groupId)}
              className="group relative grid w-full grid-cols-1 overflow-hidden border-3 border-black bg-white text-left shadow-brutal transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] md:h-[250px] md:grid-cols-[34%_1fr]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="relative h-52 overflow-hidden border-b-3 border-black bg-off-white md:h-full md:min-h-[230px] md:border-b-0 md:border-r-3">
                <img src={scene.image} alt={scene.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 border-3 border-black bg-lime px-3 py-1 text-xs font-black text-black shadow-brutal-sm">
                  {scene.time}
                </span>
              </div>
              <div className="flex min-h-[230px] flex-col justify-center p-5 md:min-h-0 md:p-7">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border-3 border-black bg-lime text-sm font-black text-black shadow-brutal-sm">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-black md:text-2xl">{scene.title}</h3>
                </div>
                <p className="max-w-3xl text-sm font-bold leading-relaxed text-black/55 md:text-base">{scene.desc}</p>
                <div className="mt-4 border-l-4 border-blue-accent bg-off-white px-3 py-2 text-xs font-black leading-relaxed text-black/65 md:text-sm">
                  {scene.tip}
                </div>
                <span className="mt-4 inline-flex text-xs font-black text-blue-accent group-hover:underline md:text-sm">
                  查看这个场景的照片 →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="relative min-h-[360px] overflow-hidden border-3 border-black bg-black shadow-brutal">
            <img src={assetPath('/campus-doc/campus-1.jpg')} alt="校园探索底图" className="absolute inset-0 h-full w-full object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-black/70" />
            <div className="relative z-10 p-5">
              <span className="inline-block border-3 border-black bg-lime px-3 py-1 text-xs font-black text-black shadow-brutal-sm">
                Campus Map Lite
              </span>
              <h3 className="mt-3 text-2xl font-black text-white">校园探索地图</h3>
              <p className="mt-2 max-w-md text-sm font-bold leading-relaxed text-white/70">
                用几个关键点位帮助新生建立方向感：住在哪里、吃在哪里、学在哪里、运动在哪里、从哪里出校门。
              </p>
            </div>

            {mapPoints.map((point) => (
              <button
                type="button"
                key={point.id}
                onClick={() => setActiveGroupId(point.groupId)}
                className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 border-3 border-black px-3 py-1 text-xs font-black shadow-brutal-sm transition-all hover:scale-105 ${activeGroupId === point.groupId ? 'bg-lime text-black' : 'bg-white text-black'}`}
                style={{ left: point.x, top: point.y }}
              >
                {point.label}
              </button>
            ))}
          </div>

          <div className="border-3 border-black bg-white p-5 shadow-brutal">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-block border-3 border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lime shadow-brutal-sm">
                  当前点位
                </span>
                <h3 className="mt-3 text-2xl font-black text-black">
                  {activeGroup.icon} {activeGroup.title}
                </h3>
              </div>
              <span className="border-3 border-black bg-lime px-3 py-1 text-xs font-black text-black shadow-brutal-sm">
                {activeGroup.photos.length} 张
              </span>
            </div>
            <p className="mt-3 text-sm font-bold leading-relaxed text-black/55">{activeGroup.summary}</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {activeGroup.photos.slice(0, 3).map((photo) => (
                <button
                  type="button"
                  key={photo.src}
                  onClick={() => setSelectedPhoto({ ...photo, groupTitle: activeGroup.title, icon: activeGroup.icon })}
                  className="h-24 overflow-hidden border-3 border-black bg-off-white"
                >
                  <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition-transform hover:scale-105" />
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="border-3 border-black bg-black px-5 py-3 text-sm font-black text-lime shadow-brutal transition-all hover:bg-lime hover:text-black"
              >
                打开完整图库
              </button>
              <button
                type="button"
                onClick={() => openGroupGallery(activeGroup.id)}
                className="border-3 border-black bg-lime px-5 py-3 text-sm font-black text-black shadow-brutal transition-all hover:bg-white"
              >
                只看这个点位
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            className="fixed inset-0 z-[108] bg-black/75 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGalleryOpen(false)}
          >
            <motion.article
              className="mx-auto flex max-h-[90vh] max-w-6xl flex-col overflow-hidden border-3 border-black bg-white shadow-[10px_10px_0px_#84cc16]"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="flex items-start justify-between gap-4 border-b-3 border-black bg-lime p-5">
                <div>
                  <span className="inline-block border-3 border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lime shadow-brutal-sm">
                    Campus Gallery
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-black md:text-4xl">校园照片图库</h3>
                  <p className="mt-2 text-sm font-bold text-black/60">照片按文档来源分组，避免单张图和具体地点名称错配。</p>
                </div>
                <button
                  type="button"
                  onClick={() => setGalleryOpen(false)}
                  className="shrink-0 border-3 border-black bg-white px-4 py-2 text-xl font-black text-black shadow-brutal transition-all hover:bg-black hover:text-lime"
                  aria-label="关闭校园图库"
                >
                  ×
                </button>
              </header>

              <div className="border-b-3 border-black bg-off-white p-4">
                <div className="flex flex-wrap gap-2">
                  {galleryGroups.map((group) => (
                    <button
                      type="button"
                      key={group.id}
                      onClick={() => setActiveGroupId(group.id)}
                      className={`border-3 border-black px-3 py-2 text-xs font-black shadow-brutal-sm transition-all ${activeGroupId === group.id ? 'bg-black text-lime' : 'bg-white text-black hover:bg-lime'}`}
                    >
                      {group.icon} {group.title} · {group.photos.length}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-y-auto p-5">
                <div className="mb-5">
                  <h4 className="text-xl font-black text-black">{activeGroup.icon} {activeGroup.title}</h4>
                  <p className="mt-1 text-sm font-bold leading-relaxed text-black/55">{activeGroup.summary}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {activeGroup.photos.map((photo, photoIndex) => (
                    <button
                      type="button"
                      key={photo.src}
                      onClick={() => setSelectedPhoto({ ...photo, groupTitle: activeGroup.title, icon: activeGroup.icon })}
                      className="group overflow-hidden border-3 border-black bg-off-white text-left shadow-brutal-sm transition-all hover:-translate-y-1 hover:shadow-brutal"
                    >
                      <div className="relative h-48 overflow-hidden border-b-3 border-black bg-white">
                        <img src={photo.src} alt={photo.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute left-2 top-2 border-2 border-black bg-lime px-2 py-1 text-[10px] font-black text-black">
                          {String(photoIndex + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="p-4">
                        <h5 className="text-base font-black text-black">{photo.title}</h5>
                        <p className="mt-1 text-xs font-bold leading-relaxed text-black/55">{photo.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[115] bg-black/80 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <motion.article
              className="mx-auto flex max-h-[90vh] max-w-6xl flex-col overflow-hidden border-3 border-black bg-white shadow-[10px_10px_0px_#000]"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="flex items-start justify-between gap-4 border-b-3 border-black bg-lime p-4 md:p-5">
                <div>
                  <span className="inline-block border-3 border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lime shadow-brutal-sm">
                    原始照片 · {selectedPhoto.groupTitle}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-black md:text-3xl">
                    {selectedPhoto.icon} {selectedPhoto.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-black/60">{selectedPhoto.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={closePhoto}
                  className="shrink-0 border-3 border-black bg-white px-4 py-2 text-xl font-black text-black shadow-brutal transition-all hover:bg-black hover:text-lime"
                  aria-label="关闭图片详情"
                >
                  ×
                </button>
              </header>
              <div className="overflow-y-auto bg-black p-3 md:p-5">
                <img src={selectedPhoto.src} alt={`${selectedPhoto.title}大图`} className="mx-auto max-h-[68vh] w-full object-contain" />
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CampusShowcase
