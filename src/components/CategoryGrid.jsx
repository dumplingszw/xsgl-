import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const categories = [
  {
    id: 'mustread',
    title: '新生必读',
    description: '报到须知、入学材料、军训准备、反诈提醒',
    count: 15,
    icon: '📋',
    color: 'lime',
    sections: [
      {
        title: '2026新生入学须知',
        items: [
          '报到时间以录取通知书和学校官方通知为准，往年一般集中在9月初到中旬。',
          '报到地点为山西工程科技职业大学文华校区，入校后通常由志愿者引导至学院报到点。',
          '报到流程通常包含资格初审、注册报到、宿舍安排、物品领取、体检及入学资格复查等环节。',
          '建议提前保存学院辅导员、班级群、报到点位置等信息，入校后按志愿者指引办理。',
        ],
      },
      {
        title: '报到需携带材料',
        items: [
          '录取通知书、高考准考证、身份证原件及复印件。',
          '户口本复印件、团员档案、学籍档案、免冠证件照等常用材料。',
          '家庭经济困难学生需准备相关证明材料；办理生源地贷款的同学需携带贷款回执。',
          '年满18周岁的男同学建议提前准备兵役登记相关材料。',
        ],
      },
      {
        title: '军训与安全提醒',
        items: [
          '军训一般包含队列训练、站军姿、军事理论学习、红歌学习、主题观影等内容。',
          '准备防晒用品、舒适鞋垫、水杯、常用药品，身体不适要及时向辅导员或教官说明。',
          '遇到课程推销、陌生扫码、转账返利、冒充熟人借钱等情况要保持警惕。',
          '个人证件、账号、验证码和支付信息不要随意发给陌生人。',
        ],
      },
    ],
  },
  {
    id: 'life',
    title: '生活指南',
    description: '宿舍、食堂、洗浴、快递、作息与校园日常',
    count: 24,
    icon: '🏠',
    color: 'black',
    sections: [
      {
        title: '宿舍情况',
        items: [
          '学校共有17栋学生公寓，均位于文华校区。',
          '旧楼主要分布在中区，多为六层低层楼且无电梯；新楼分布在东区和西区，多为高层并配有电梯。',
          '宿舍多为六人间，上床下桌，配独立衣柜，部分楼栋有小阳台。',
          '每层设公共水房和卫生间，配有热水机、公共洗衣机、自助吹风机等设施。',
          '宿舍楼门一般6:00开放、22:30关闭；夜间通常不统一熄灯、不统一断网。',
          '学生宿舍不单独收取水费、电费、取暖费；大功率违规电器会触发限电或安全处理。',
        ],
      },
      {
        title: '食堂情况',
        items: [
          '学校主要有四个餐厅：麦道餐厅、德韵轩餐厅、和园餐厅、雅园餐厅。',
          '麦道餐厅位于西区，服务西区学生，提供米饭套餐、营养粥、地方小吃等。',
          '德韵轩餐厅装修风格较新，设自选称重区，菜品覆盖炒菜、肉菜、小吃等，价格区间较宽。',
          '和园餐厅位于东区，环境温暖舒适，会根据季节和节日推出特色食品。',
          '雅园餐厅一层有土豆泥拌饭、面食、早餐卷、馅饼、豆腐脑等，二层有麻辣烫、粉面、火锅、拌面、石锅拌饭等。',
          '东区和西区设有民族餐饮窗口；各餐厅设有平价窗口并提供免费汤。',
          '早餐一般从6:00开始，部分夜宵窗口可营业至22:30左右。',
        ],
      },
      {
        title: '洗浴与饮水',
        items: [
          '东区、中区、西区均设公共浴室，学生可选择距离较近的浴室。',
          '洗浴按水量计费，可通过相应平台扫码或账号方式支付。',
          '浴室设单独隔间、储物柜和淋浴喷头，出口处通常配有免费吹风机。',
          '热水机和饮水设备一般需要扫码使用，建议提前准备常用支付方式。',
        ],
      },
      {
        title: '快递与作息',
        items: [
          '东南门附近可取申通、韵达、圆通等快递。',
          '北门附近可取顺丰、京东、极兔等快递。',
          '参考作息：6:20起床，8:20第一节课，12:00午餐，14:10第五节课，19:30-21:00晚自习。',
          '宿舍楼门22:30关闭，晚归要提前关注学院和宿舍管理要求。',
        ],
      },
    ],
  },
  {
    id: 'study',
    title: '学习资源',
    description: '图书馆、学院机构、选课、绩点综测、学生证补办',
    count: 21,
    icon: '📚',
    color: 'lime',
    sections: [
      {
        title: '学院与机构设置',
        items: [
          '学校设有建筑工程学院、交通工程学院、建筑设计学院、工程管理学院、智能制造学院、信息工程学院等工科类学院。',
          '同时设有汽车工程学院、设备工程学院、计算机工程学院、安全与应急管理学院、现代物流学院等应用型学院。',
          '经管与人文艺术类包括会计学院、经济学院、管理学院、文法学院、艺术设计学院、音乐舞蹈学院、外国语学院、体育学院等。',
          '学校还设有继续教育与培训学院、创新创业学院、马克思主义学院等教学与育人机构。',
        ],
      },
      {
        title: '图书馆使用',
        items: [
          '开放时间：周一至周五、周日为6:20-22:20，周六为10:00-22:20；周六上午10:00前通常闭馆清洁。',
          '可通过图书馆微信公众号、楼层检索机或图书馆网站检索纸质图书。',
          '一楼自助服务区可使用自助借还机办理借阅，也可前往服务台咨询。',
          '校园网络范围内可使用电子图书、电子期刊、教学视频等数字资源。',
          '二楼数字共享空间可辅助访问电子资源。',
          '座位预约可通过图书馆微信公众号进入“我去图书馆”，预约后按要求签到、临时离开和签退。',
          '西区图书馆楼层参考：1F历史地理，2F综合社科与文学，3F自然科学与工程技术，4F政治法律、经济、语言、艺术等。',
        ],
      },
      {
        title: '选课与成绩',
        items: [
          '登录学校官网进入教务系统，账号通常为学号，初始密码以学校通知为准。',
          '选课前确认个人学籍信息、选课时间、可选课程范围和学分要求。',
          '必修课一般由系统预置，选修课按栏目勾选，提交后在“已选课程”中确认。',
          '成绩是课程学习后的具体分数，绩点是成绩换算后的加权结果，二者会影响评奖评优等事项。',
          '综合测评通常包含学习成绩、思想品德、社会实践、志愿服务、文体活动、科研竞赛等方面。',
        ],
      },
      {
        title: '学生证补办',
        items: [
          '学生证遗失后先向辅导员或教务相关部门报备挂失。',
          '准备身份证原件及复印件、一寸照片、补办申请表等材料。',
          '按学院或教务处通知到指定地点提交申请，缴费后等待领取。',
        ],
      },
    ],
  },
  {
    id: 'facility',
    title: '校园设施',
    description: '体育馆、操场、宿舍楼、校园地图与公共设施',
    count: 19,
    icon: '🏗️',
    color: 'blue',
    sections: [
      {
        title: '体育馆',
        items: [
          '体育馆内设两块篮球场（兼排球场）、一块小型排球场。',
          '馆内另有十四块乒乓球场地、三块羽毛球场、一块匹克球场。',
          '配套空间包括两间健身房、一间台球室、两间武术室、两间操房、一间击剑馆和体质健康监测室。',
          '体育馆可用于日常体育课、体育训练、校内比赛和文艺活动。',
        ],
      },
      {
        title: '操场与运动空间',
        items: [
          '西操场面积较大，是开学典礼、军训动员大会、田径运动会等大型活动的主要场所。',
          '西操场周边设篮球场、羽毛球场、排球场等附属设施。',
          '东操场包括1块11人制人工草坪足球场、1个400米标准塑胶田径场。',
          '东操场配套2块塑胶篮球场、1块塑胶排球场、健身房、户外健身器械和乒乓球台。',
        ],
      },
      {
        title: '校园地图与环境',
        items: [
          '校园环境图文中包含和园餐厅、西操场、东操场、西操篮球场、教学楼、东南门、东门等位置。',
          '适合新生重点记住宿舍区、教学楼、食堂、浴室、快递点、校门和运动场的相对位置。',
          '东南门、北门等区域与快递、公交、出行联系较多，入学初期建议优先熟悉。',
        ],
      },
      {
        title: '电动车管理',
        items: [
          '校内电动车需通过指定通道，骑车人员需刷脸识别。',
          '车辆须悬挂合法合规牌照，校园内设有50余处电动车停放区。',
          '电动车需到停车棚使用专用充电设施，禁止私拉乱接和飞线充电。',
        ],
      },
    ],
  },
  {
    id: 'traffic',
    title: '周边交通',
    description: '学校地址、公交出行、打车、自驾与周边商圈',
    count: 18,
    icon: '📍',
    color: 'black',
    sections: [
      {
        title: '学校位置',
        items: [
          '山西工程科技职业大学文华校区位于山西省晋中市榆次区文华街369号。',
          '周边高校较多，北接太原师范学院，东临晋中学院，附近还有山西传媒学院、山西医科大学等。',
          '周边商业区包括怡然青年广场、万达广场、万科广场等，适合日常购物和聚餐。',
        ],
      },
      {
        title: '公共交通',
        items: [
          '学校附近有山西工程科技职业大学南门西、文华街桥口等公交站。',
          '902路可前往太原站、五一广场、太原南站等地。',
          'K909路、909路可连接晋中城区和太原方向。',
          '节假日可能有学校东南门至太原南站东广场的定制公交或返程线路。',
        ],
      },
      {
        title: '骑行、打车与自驾',
        items: [
          '校园共享单车通常不允许进入校内，西南门、东南门、北门设有行人通道。',
          '前往万达广场、奥特莱斯等约3公里，骑行约15分钟。',
          '学生私家车一般不能进入校园，校外周边可寻找停车场。',
          '打车和网约车较方便，建议定位到常用校门或校内附近地标。',
        ],
      },
      {
        title: '周边吃喝玩乐',
        items: [
          '万达广场有火锅、烧烤、川菜、粤菜、甜品、小吃等店铺，也有影城和电玩城。',
          '万科广场有饮品店、特色餐厅和休闲空间，周末可能有前往周边景点的旅游直通车。',
          '周边有便利店、小型超市、宾馆、运动健身、美容美发等生活配套。',
        ],
      },
    ],
  },
  {
    id: 'support',
    title: '资助发展',
    description: '奖学金、助学金、助学贷款、转专业与职业规划',
    count: 12,
    icon: '🚀',
    color: 'lime',
    sections: [
      {
        title: '学生资助政策',
        items: [
          '本专科生国家奖学金：每生每年10000元。',
          '本专科生国家励志奖学金：每生每年6000元。',
          '本专科生国家助学金：平均每生每年3700元，范围约2500-5000元。',
          '国家助学贷款：每人每年最高不超过20000元，在校期间利息由国家承担。',
          '家庭经济特别困难新生可通过绿色通道先办理入学手续。',
        ],
      },
      {
        title: '转专业知识',
        items: [
          '通常限大一或大二在校本科生申请，具体以学校当年通知为准。',
          '一般需无挂科记录，且原专业成绩排名达到学院要求。',
          '流程包括查看通知、填写申请、学院审核、拟转入学院考核、学校审批和公示。',
          '转入新专业后可能需要补修核心课程，学费标准不同需补缴差额。',
        ],
      },
      {
        title: '专业特色',
        items: [
          '学校设有多个二级学院，覆盖工程、交通、建筑、智能制造、信息技术、经管、人文艺术等方向。',
          '特色方向包括工程造价、智能工程机械运用技术、现代物流管理、电子商务、建筑设计、电子信息工程技术等。',
          '建议新生结合专业培养方案、职业资格证书、实习实践和竞赛方向尽早规划大学路径。',
        ],
      },
    ],
  },
]

const colorStyles = {
  lime: { bg: 'bg-lime', text: 'text-black', badge: 'bg-white text-black' },
  black: { bg: 'bg-black', text: 'text-lime', badge: 'bg-lime text-black' },
  blue: { bg: 'bg-blue-accent', text: 'text-white', badge: 'bg-white text-black' },
}

const categoryPhotos = {
  life: [
    { src: '/campus-doc/canteen-1.jpg', title: '食堂照片 1', desc: '来自食堂介绍文档的原始照片，用于辅助了解餐厅环境。' },
    { src: '/campus-doc/canteen-2.jpg', title: '食堂照片 2', desc: '来自食堂介绍文档的原始照片，用于辅助了解餐厅档口和就餐空间。' },
    { src: '/campus-doc/dorm-1.png', title: '宿舍照片 1', desc: '来自宿舍介绍文档的原始照片，用于辅助了解宿舍相关空间。' },
    { src: '/campus-doc/dorm-2.png', title: '宿舍照片 2', desc: '来自宿舍介绍文档的原始照片，用于辅助了解住宿条件。' },
  ],
  facility: [
    { src: '/campus-doc/sports-1.jpg', title: '体育场馆照片 1', desc: '来自体育馆介绍文档的原始照片，用于辅助了解运动空间。' },
    { src: '/campus-doc/sports-2.jpg', title: '体育场馆照片 2', desc: '来自体育馆介绍文档的原始照片，用于辅助了解操场和体育设施。' },
    { src: '/campus-doc/sports-3.png', title: '体育场馆照片 3', desc: '来自体育馆介绍文档的原始照片，用于辅助了解校园运动环境。' },
    { src: '/campus-doc/campus-4.jpg', title: '校园环境照片 1', desc: '来自校园环境文档的原始照片，用于辅助了解校园公共空间。' },
  ],
  traffic: [
    { src: '/campus-doc/campus-5.jpg', title: '校园环境照片 2', desc: '来自校园环境文档的原始照片，用于辅助熟悉校门和校园动线。' },
    { src: '/campus-doc/nearby-1.png', title: '周边生活照片 1', desc: '来自周边生活文档的原始图片，用于辅助了解校外配套。' },
    { src: '/campus-doc/nearby-2.png', title: '周边生活照片 2', desc: '来自周边生活文档的原始图片，用于辅助了解周边吃喝玩乐。' },
  ],
}

const CategoryGrid = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    if (!selectedCategory) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [selectedCategory])

  const openCategory = (cat) => {
    setSelectedCategory(cat)
  }

  const closeCategory = () => {
    setSelectedCategory(null)
  }

  return (
    <section id="categories" ref={ref} className="relative bg-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-8 bg-blue-accent rounded-full" />
            <span className="brutal-card bg-lime text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
              Guide Distribution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">
            攻略分布
          </h2>
          <p className="mt-3 text-base font-bold text-black/50 max-w-2xl">
            首页只展示攻略分类。点击任意分类，会打开对应详情，不再把全部正文直接堆在首页。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, index) => {
            const colors = colorStyles[cat.color]
            return (
              <motion.button
                type="button"
                key={cat.id}
                onClick={() => openCategory(cat)}
                className={`text-left brutal-card brutal-card-hover ${colors.bg} p-6 md:p-8 cursor-pointer group`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 border-3 border-black flex items-center justify-center text-3xl ${cat.color === 'black' ? 'bg-lime' : 'bg-white'}`}>
                    {cat.icon}
                  </div>
                  <span className={`brutal-card text-[10px] font-black px-2.5 py-1 ${colors.badge}`}>
                    {cat.count}项
                  </span>
                </div>
                <h3 className={`text-xl md:text-2xl font-black ${colors.text} mb-2`}>{cat.title}</h3>
                <p className={`text-sm font-medium ${cat.color === 'black' ? 'text-lime/70' : cat.color === 'blue' ? 'text-white/70' : 'text-black/50'}`}>
                  {cat.description}
                </p>
                <div className={`mt-5 pt-4 border-t-2 ${cat.color === 'black' ? 'border-lime/30' : 'border-black/20'} flex items-center gap-2`}>
                  <span className={`text-xs font-bold ${cat.color === 'black' ? 'text-lime' : 'text-blue-accent'} group-hover:underline`}>
                    打开详情
                  </span>
                  <svg className={`w-3.5 h-3.5 ${cat.color === 'black' ? 'text-lime' : 'text-blue-accent'} group-hover:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCategory}
          >
            <motion.article
              className="mx-auto flex max-h-[88vh] max-w-5xl flex-col overflow-hidden border-3 border-black bg-white shadow-[10px_10px_0px_#000]"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="flex items-start justify-between gap-4 border-b-3 border-black bg-lime p-5 md:p-6">
                <div>
                  <span className="inline-block border-3 border-black bg-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-lime shadow-brutal-sm">
                    攻略详情
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-black md:text-4xl">
                    {selectedCategory.icon} {selectedCategory.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-black/60">{selectedCategory.description}</p>
                </div>
                <button
                  type="button"
                  onClick={closeCategory}
                  className="shrink-0 border-3 border-black bg-white px-4 py-2 text-xl font-black text-black shadow-brutal transition-all hover:bg-black hover:text-lime"
                  aria-label="关闭攻略详情"
                >
                  ×
                </button>
              </header>

              <div className="overflow-y-auto p-5 md:p-6">
                <div className="mb-5 inline-block border-3 border-black bg-black px-4 py-2 text-xs font-black text-lime shadow-brutal-sm">
                  共 {selectedCategory.sections.reduce((sum, section) => sum + section.items.length, 0)} 条内容
                </div>
                {categoryPhotos[selectedCategory.id] && (
                  <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {categoryPhotos[selectedCategory.id].map((photo) => (
                      <figure key={photo.src} className="overflow-hidden border-3 border-black bg-white shadow-brutal-sm">
                        <img src={photo.src} alt={photo.title} className="h-48 w-full object-cover md:h-56" />
                        <figcaption className="border-t-3 border-black bg-lime px-4 py-3 text-black">
                          <span className="block text-sm font-black">{photo.title}</span>
                          <span className="mt-1 block text-xs font-bold text-black/60">{photo.desc}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {selectedCategory.sections.map((section) => (
                    <section key={section.title} className="border-3 border-black bg-off-white p-5 shadow-brutal-sm">
                      <h4 className="mb-4 text-lg font-black text-black">{section.title}</h4>
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-bold leading-relaxed text-black/65">
                            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 border border-black bg-lime" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CategoryGrid
