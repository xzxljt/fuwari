---
title: KVideo - 基于 Next.js 16 的现代化视频聚合平台部署教程
published: 2026-02-16T18:39:42
description: 一款采用 Liquid Glass 设计语言的视频聚合播放平台，支持多源搜索、HLS流媒体播放、离线缓存，免费部署到 Cloudflare Pages
image: https://img.312522.xyz/file/1771238024969_IMG_20260207_214137.webp
tags:
  - Cloudflare Pages
  - Next.js
  - 视频聚合
  - 自建服务
category: 教程
draft: false
---

## 项目简介

**KVideo** 是一个基于 Next.js 16 构建的现代化视频聚合播放平台。采用独特的 **"Liquid Glass"** 设计语言，提供流畅的视觉体验和强大的视频搜索功能。

![KVideo 图标](https://img.312522.xyz/file/1771238017861_图标.webp)

### 核心特性

- 🎬 **多源聚合搜索** - 同时在多个视频源中并行搜索，大幅提升搜索速度
- 📺 **HLS 流媒体支持** - 原生支持 HLS (.m3u8) 格式，流畅播放体验
- 💾 **智能缓存机制** - Service Worker 驱动的智能缓存，支持离线观看
- 🎨 **Liquid Glass 设计** - 玻璃拟态效果，精致的视觉体验
- 🌙 **深色/浅色主题** - 支持系统级主题切换
- 🔐 **密码保护** - 支持本地密码和环境变量密码两种保护方式
- 📱 **全端适配** - 完美支持桌面、平板和移动设备

### 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.0.3 | React 框架，使用 App Router |
| React | 19.2.0 | UI 组件库 |
| TypeScript | 5.x | 类型安全的 JavaScript |
| Tailwind CSS | 4.x | 实用优先的 CSS 框架 |
| Zustand | 5.0.2 | 轻量级状态管理 |

## Cloudflare Pages 部署教程

### 第一步：Fork 项目

访问 [KVideo GitHub 仓库](https://github.com/KuekHaoYang/KVideo)，点击右上角 **Fork** 按钮将项目 Fork 到你的 GitHub 账户。

### 第二步：创建 Cloudflare Pages 项目

1. 注册并登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单选择 **Workers 和 Pages**
3. 点击 **创建应用程序**
4. 选择 **Pages** 标签，点击 **连接到 Git**

### 第三步：连接 GitHub 并配置

1. 点击 **Connect GitHub** 连接你的 GitHub 账号
2. 选择刚刚 Fork 的 `KVideo` 项目
3. 配置构建参数：

| 配置项 | 值 |
|--------|-----|
| 框架预设 | Next.js |
| 构建命令 | `npm run pages:build` |
| 构建输出目录 | `.vercel/output/static` |

4. 点击 **保存并部署**

### 第四步：设置兼容性标志（关键步骤）

> ⚠️ 这步很重要，否则部署后访问会报错

1. 进入项目 **设置** 页面
2. 找到 **函数** → **兼容性标志**
3. 添加标志：`nodejs_compat`
4. 保存设置

### 第五步：配置环境变量

在 **设置** → **环境变量** 中添加以下变量：

```bash
# 启用密码持久化
PERSIST_PASSWORD=true

# 订阅片源（可选，推荐）
NEXT_PUBLIC_SUBSCRIPTION_SOURCES=https://raw.githubusercontent.com/xzxljt/KVideo/347e0954bc9463d36ee077091df4db45ca70bc2f/vip.json

# 访问密码（设置你自己的密码）
ACCESS_PASSWORD=你的密码
```

| 变量名 | 说明 |
|--------|------|
| `PERSIST_PASSWORD` | 密码持久化开关 |
| `NEXT_PUBLIC_SUBSCRIPTION_SOURCES` | 订阅片源地址 |
| `ACCESS_PASSWORD` | 访问密码，自定义设置 |

### 第六步：重新部署

配置完成后，回到项目概览页面，找到最新部署，点击右侧 **...** 菜单，选择 **重试部署**。

部署完成后，你的 KVideo 就可以正常访问了！

## 功能亮点

### 视频播放器

- 完整的播放控制功能
- 进度条、音量控制、播放速度调节
- 全屏模式、移动端手势控制

### 搜索功能

- 多源并行搜索
- 支持按评分、时间、相关性排序
- 自动保存搜索历史

### 豆瓣集成

- 自动获取豆瓣评分
- 展示演员阵容、剧情简介
- 相关推荐

### 隐私保护

- 所有数据存储在本地浏览器
- 不收集或上传任何用户数据
- 用户可自行配置视频源

## 福利提示

在网站设置中输入 `premium` 可以解锁隐藏福利 👀

## 相关链接

- 🏠 官方体验站：[https://kvideo.pages.dev/](https://kvideo.pages.dev/)
- 💻 GitHub 仓库：[https://github.com/KuekHaoYang/KVideo](https://github.com/KuekHaoYang/KVideo)

---

如果你觉得这个项目有帮助，别忘了给个 ⭐️ Star 支持一下！
