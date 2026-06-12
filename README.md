# 山西工程科技职业大学新生指南

这是给 2026 级新生看的一个网页，主要整理了入学前后比较容易用到的信息：报到、军训、宿舍、食堂、校园环境、快递、交通、资助政策，还有一些新生常问的问题。

网站由工科生初心汇整理制作。内容不代替学校官方通知，涉及报到时间、政策变化的地方，还是以学校和学院后续通知为准。

## 现在做了哪些内容

- 新生入学须知和报到流程
- 攻略分类入口
- 推荐攻略卡片
- 校园场景和照片图库
- 新生常见问题
- 小科校园助手
- 加入我们二维码入口

## 本地运行

项目是 React + Vite 写的，先安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

默认会在这里打开：

```text
http://localhost:5173
```

## 打包

```bash
npm run build
```

打包后的文件在 `dist` 里。

如果只是想在本地看一下打包后的效果：

```bash
npm run preview
```

## 部署

这个项目目前同时放在 GitHub 和 Vercel 上，也配置了 GitHub Pages 的自动部署。

GitHub Pages 地址：

```text
https://dumplingszw.github.io/xsgl-/
```

Vercel 地址以后也可以作为备用链接。国内访问这些免费平台有时会不稳定，如果页面空白或者打不开，可以换浏览器、换网络，或者稍后再试。

## 更新内容

平时改完代码后，提交并推送即可：

```bash
git add .
git commit -m "更新网站内容"
git push
```

推送到 `main` 分支后，GitHub Actions 会自动重新部署 GitHub Pages；Vercel 如果还连着这个仓库，也会自动更新。

## 文件放在哪里

常改的内容基本都在这里：

```text
src/components/
```

图片和二维码放在：

```text
public/
```

比如校园照片在 `public/campus-doc/`，小科素材在 `public/xiaoke-pet/`，加入我们二维码是 `public/join-us-qr.jpg`。

## 备注

这个仓库主要是网页源码，不需要把 `node_modules` 和 `dist` 提交上来。后续如果继续补充攻略内容，直接改组件里的文字或图片就行。
