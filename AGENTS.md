# Fuwari Enhanced - 项目上下文文档

## 项目概述

**Fuwari Enhanced** 是一个基于 [saicaca/fuwari](https://github.com/saicaca/fuwari) 深度定制的个人博客系统，采用现代化的静态站点生成器 Astro 构建。该项目保留了原版的优雅设计，并新增了智能图片系统、安全防护、SEO 优化、内容增强等多项功能。

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **Astro** | 5.7.9 | 静态站点生成器，提供内容管理、路由、SSG 功能 |
| **Svelte** | 5.28.2 | 交互式组件框架，用于构建动态 UI 组件 |
| **React** | 19.2.3 | 部分功能组件（如 3D 背景 AntigravityBg.tsx） |
| **Tailwind CSS** | 3.4.17 | 实用优先的 CSS 框架，用于样式设计 |
| **Three.js** | 0.182.0 | 3D 图形库，用于动态背景效果 |
| **TypeScript** | 5.8.3 | 类型安全的 JavaScript 超集 |
| **pnpm** | 9.14.4 | 快速、节省磁盘空间的包管理器 |

### 项目架构

```
fuwari/
├── src/
│   ├── config.ts              # 🎯 全局配置入口（核心文件）
│   ├── components/            # 🧩 UI 组件（Svelte/React/Astro）
│   ├── content/               # 📝 内容集合（posts、friends、assets）
│   ├── layouts/               # 📐 页面布局模板
│   ├── pages/                 # 🔗 路由页面
│   ├── plugins/               # 🔌 Markdown/Rehype 插件
│   ├── stores/                # 🏪 Svelte 状态管理
│   ├── styles/                # 🎨 全局样式
│   ├── types/                 # 📋 TypeScript 类型定义
│   └── utils/                 # 🛠️ 工具函数
├── public/                    # 📦 静态资源（图片、字体、favicon）
├── scripts/                   # 📜 构建和维护脚本
├── astro.config.mjs           # ⚙️ Astro 配置文件
├── tailwind.config.cjs        # 🎨 Tailwind CSS 配置
├── tsconfig.json              # 📝 TypeScript 配置
└── package.json               # 📦 项目依赖和脚本
```

## 构建和运行

### 环境要求

- **Node.js**: 18+
- **pnpm**: 9+

### 核心命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器（端口：4321）
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 类型检查
pnpm type-check

# 代码格式化（使用 Biome）
pnpm format

# 代码检查和修复（使用 Biome）
pnpm lint
```

### 内容管理命令

```bash
# 创建新文章
pnpm new-post -- "文章标题"

# 更新文章时间戳
pnpm update-timestamp

# 构建并推送 IndexNow（搜索引擎）
pnpm build:indexnow

# 手动推送 IndexNow
pnpm submit-indexnow

# 增量推送 IndexNow
pnpm submit-indexnow-inc

# 查看 IndexNow 状态
pnpm indexnow-status

# 清除 IndexNow 缓存
pnpm indexnow-clear
```

### 开发工作流

1. **创建新文章**: `pnpm new-post -- "标题"`
2. **编辑内容**: 在 `src/content/posts/` 目录下编辑 Markdown 文件
3. **本地预览**: `pnpm dev`，访问 http://localhost:4321
4. **代码检查**: `pnpm lint` 和 `pnpm type-check`
5. **构建部署**: `pnpm build` 后部署到 EdgeOne/Vercel/Cloudflare Pages

## 开发规范

### 代码风格

项目使用 **Biome** 作为代码格式化和检查工具，配置如下：

- **缩进**: Tab 字符
- **引号**: JavaScript/TypeScript 使用双引号
- **自动导入**: 启用 `organizeImports`
- **类型检查**: 启用严格模式（`strictNullChecks: true`）

### 文件命名约定

- **组件**: PascalCase（如 `Footer.astro`、`FloatingControls.svelte`）
- **工具函数**: camelCase（如 `date.ts` 中的函数）
- **类型定义**: camelCase（如 `config.ts` 中的接口）
- **文章文件**: kebab-case 或中文（如 `vercel-deployment-guide.md`）

### 路径别名

项目配置了以下路径别名（在 `tsconfig.json` 中定义）：

| 别名 | 实际路径 |
|------|----------|
| `@components/*` | `src/components/*` |
| `@assets/*` | `src/assets/*` |
| `@constants/*` | `src/constants/*` |
| `@utils/*` | `src/utils/*` |
| `@layouts/*` | `src/layouts/*` |
| `@/*` | `src/*` |

### 内容管理规范

#### 文章 Frontmatter

```yaml
---
title: 文章标题                    # 必填
published: 2025-09-02T20:10:14    # 发布时间
description: '文章描述'            # SEO描述
image: 'https://example.com/img.jpg'  # 封面图片
tags: [标签1, 标签2, 标签3]       # 标签
category: 分类名称                # 分类
draft: false                      # 是否为草稿
lang: ''                         # 语言（默认继承配置）
pinned: true                     # 置顶文章
prerenderAll: true               # 预渲染折叠区内容
---
```

#### 图片管理

- **双CDN图床**: 主图床 `img.micostar.cc`，备用图床 `image.cloudrunmax.top`
- **本地图片**: 放在 `public/images/` 目录下，使用 `/images/filename.png` 路径
- **相对路径**: 放在 `src/content/posts/` 相对路径下，使用 `./images/example.jpg`

#### Markdown 扩展功能

- **代码块**: 支持 Expressive Code，可折叠、行号、GitHub Dark 主题
- **数学公式**: KaTeX 渲染，支持 LaTeX 语法
- **提示块**: 支持 NOTE/TIP/WARNING 等 GitHub 风格 Admonitions
- **目录导航**: 自动生成右侧 TOC

## 关键配置说明

### 全局配置 (`src/config.ts`)

这是项目的核心配置文件，包含以下主要配置项：

| 配置项 | 说明 | 位置 |
|--------|------|------|
| `siteConfig` | 站点标题、描述、主题色、背景图、TOC、Apps 等 | 第 13-120 行 |
| `navBarConfig` | 导航栏链接配置 | 第 122-130 行 |
| `profileConfig` | 作者信息、头像、社交链接 | 第 132-146 行 |
| `licenseConfig` | 内容许可证 | 第 148-154 行 |
| `imageFallbackConfig` | 双CDN图床回退配置 | 第 157-165 行 |
| `umamiConfig` | Umami 分析配置 | 第 167-174 行 |
| `antiLeechConfig` | 防盗链/域名保护配置 | 第 176-183 行 |
| `googleAnalyticsConfig` | Google Analytics 配置 | 第 185-189 行 |
| `expressiveCodeConfig` | 代码块主题配置 | 第 191-193 行 |

### Astro 配置 (`astro.config.mjs`)

关键配置项：

- **站点 URL**: `https://www.micostar.cc`
- **集成**: Tailwind CSS、Svelte、React、Swup（页面过渡）、Icon、Sitemap、Expressive Code
- **Markdown 插件**:
  - `remarkMath`: 数学公式
  - `remarkReadingTime`: 阅读时间计算
  - `remarkExcerpt`: 摘要生成
  - `remarkGithubAdmonitionsToDirectives`: GitHub 风格提示块
  - `rehypeKatex`: KaTeX 渲染
  - `rehypeImageFallback`: 图片回退
  - `rehypeComponents`: 自定义组件（GitHub Card、Link Card、Admonition）

### 自定义插件

项目包含多个自定义插件，位于 `src/plugins/` 目录：

| 插件 | 功能 |
|------|------|
| `remark-excerpt.js` | 生成文章摘要 |
| `remark-reading-time.mjs` | 计算阅读时间 |
| `rehype-image-fallback.mjs` | 图片 CDN 回退 |
| `rehype-image-attrs.mjs` | 图片属性处理 |
| `rehype-heading-shift.mjs` | 标题层级调整（H1 降级为 H2） |
| `rehype-component-admonition.mjs` | 提示块组件 |
| `rehype-component-github-card.mjs` | GitHub 项目卡片 |
| `rehype-component-link-card.mjs` | 链接卡片 |

## 特殊功能说明

### 1. 双CDN图床回退系统

当主图床失效时，自动切换至备用图床，配置位于 `src/config.ts` 的 `imageFallbackConfig`。

### 2. 防盗链/域名保护

使用多层验证机制（公开配置 + Base64 加密配置），防止内容被恶意嵌入。修改时需同步更新 `src/config.ts` 和 `src/layouts/Layout.astro` 中的两处 Base64 编码。

### 3. IndexNow 集成

支持自动推送新内容至搜索引擎，加速收录。脚本位于 `scripts/submit-indexnow-incremental.mjs`，依赖环境变量 `INDEXNOW_KEY` 和 `INDEXNOW_HOST`。

### 4. CDN 检测

在 `src/components/widget/VisitorInfo.astro` 中实现，通过 Header 检测当前链路（Cloudflare/EdgeOne/Vercel），并显示对应图标。

### 5. 文章排序

右下角悬浮按钮支持按发布时间/更新时间/浏览量排序，排序状态通过 `localStorage` 持久化，换页后自动恢复。

## 部署配置

### 支持的部署平台

- **EdgeOne**（推荐）
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

### 部署前检查清单

1. ✅ 修改 `src/config.ts` 中的站点信息
2. ✅ 更新 `src/layouts/Layout.astro` 中的 Umami 统计代码
3. ✅ 修改防盗链域名配置（两处 Base64 编码）
4. ✅ 替换 `public/` 目录下的静态资源（favicon、头像等）
5. ✅ 配置 IndexNow 环境变量
6. ✅ 运行 `pnpm build` 确保构建成功

## 测试和验证

### 代码检查

```bash
# TypeScript 类型检查
pnpm type-check

# Biome 代码检查
pnpm lint
```

### 本地验证

1. 启动开发服务器: `pnpm dev`
2. 访问 http://localhost:4321
3. 测试文章列表、详情页、友情链接、Apps 页面等
4. 验证图片加载、代码高亮、数学公式、提示块等功能
5. 检查暗黑模式、响应式布局

## 常见任务

### 添加新页面

1. 在 `src/pages/` 目录下创建新文件（如 `new-page.astro`）
2. 复制现有页面结构（如 `about.astro`）作为模板
3. 在 `src/config.ts` 的 `navBarConfig` 中添加导航链接

### 修改主题色

编辑 `src/config.ts` 中的 `siteConfig.themeColor.hue`（0-360 范围）。

### 添加自定义组件

1. 在 `src/components/` 目录下创建新组件（Svelte 或 Astro）
2. 在需要的页面或布局中导入使用

### 修改布局模板

主要布局文件位于 `src/layouts/` 目录：

- `Layout.astro`: 主布局（包含头部、脚本、全局配置）
- `PostLayout.astro`: 文章详情页布局
- `BlogLayout.astro`: 博客列表页布局

## 相关文档

- [博客编辑指南](./BLOG_GUIDE.md)
- [个性化修改指南](./FUWARI_CUSTOMIZATIONS.md)
- [Astro 官方文档](https://docs.astro.build/)
- [Svelte 官方文档](https://svelte.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## 许可证

- **代码**: MIT License
- **内容**: CC BY-NC-SA 4.0

---

**项目作者**: 流转星 (Betsy)  
**在线预览**: https://www.micostar.cc  
**GitHub**: https://github.com/Besty0728/fuwari