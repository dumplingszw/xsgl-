# 山西工程科技职业大学新生指南

这是一个基于 **React + Vite + Tailwind CSS** 的纯前端新生指南网站，内容包含新生入学须知、攻略分类、推荐攻略、校园场景、常见问题和校园实用信息等模块。

## 技术栈

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发环境

```bash
npm run dev
```

默认访问地址：

```text
http://localhost:5173
```

## 生产构建

```bash
npm run build
```

构建完成后会生成：

```text
dist/
```

`dist` 文件夹就是最终部署上线需要的静态网站文件。

## 本地预览构建结果

```bash
npm run preview
```

## 推荐上线方式：Vercel

这个项目是纯前端项目，最推荐使用 **Vercel** 部署。

### Vercel 构建配置

如果 Vercel 没有自动识别，可以手动填写：

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

项目中已经添加 `vercel.json`，用于支持单页应用刷新时仍然回到 `index.html`，避免刷新页面出现 404。

## Git 管理与后续更新

本项目建议通过 Git + GitHub + Vercel 管理。

常用流程：

```bash
git status
git add .
git commit -m "更新网站内容"
git push
```

如果项目已经连接到 Vercel，推送到 GitHub 后，Vercel 会自动重新构建并更新线上网站。

## 目录说明

```text
site/
├── public/                 # 静态资源，图片会原样部署
│   ├── campus-doc/          # 校园、食堂、宿舍、体育等图片
│   ├── xiaoke-pet/          # 小科宠物素材
│   ├── logo.jpg
│   └── logo.png
├── src/
│   ├── components/          # 页面组件
│   ├── hooks/               # 自定义 Hooks
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              # Vercel 部署配置
└── README.md
```

## 注意事项

- 不需要部署 Node 后端。
- 不要把 `node_modules` 上传到 GitHub。
- 不要把 `dist` 提交到 GitHub，Vercel 会自动构建。
- 图片放在 `public` 目录下，代码中可以用 `/campus-doc/xxx.jpg` 这种路径引用。
- 后续如果新增登录、留言、后台管理等功能，就需要额外接入后端或云数据库。
