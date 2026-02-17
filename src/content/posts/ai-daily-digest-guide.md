---
title: AI Daily Digest：每天5分钟掌握技术圈最新动态
published: 2026-02-17T12:45:49
description: '从Andrej Karpathy推荐的90个顶级技术博客中抓取文章，AI多维评分筛选，生成结构化每日精选日报。'
image: 'https://img.312522.xyz/file/1771303453512_overview.webp'
tags: [AI, 开源项目, RSS, 信息聚合, 效率工具]
category: '技术教程'
draft: false
lang: ''
---

## 前言

在信息爆炸的时代，技术人每天面临着一个共同的困境：想跟进最新技术动态，但优质内容分散在无数博客中，筛选成本极高。AI Daily Digest 提供了一个优雅的解决方案——用 AI 自动筛选，每天给你一份精炼的技术日报。

## 什么是 AI Daily Digest？

**AI Daily Digest** 是一个开源工具，从 Andrej Karpathy 推荐的 90 个 Hacker News 顶级技术博客中抓取最新文章，通过 Gemini AI 多维评分筛选，生成一份结构化的每日精选日报。

![概览](https://img.312522.xyz/file/1771303453512_overview.webp)

### 核心亮点

- 🎯 **精准筛选**：AI 三维度评分（相关性、质量、时效性），只推精品
- 🌐 **优质来源**：90 个 Hacker News 社区最受欢迎的独立技术博客
- 📊 **可视化统计**：Mermaid 图表 + ASCII 柱状图 + 标签云
- 🏷️ **智能分类**：自动归入 6 大类别，按类浏览更高效
- 💡 **趋势洞察**：归纳当天技术圈宏观趋势，把握大方向
- 💾 **配置记忆**：API Key 和偏好参数自动持久化

## 工作流程

```
RSS 抓取 → 时间过滤 → AI 评分+分类 → AI 摘要+翻译 → 趋势总结
```

| 阶段 | 说明 |
|------|------|
| RSS 抓取 | 并发抓取 90 个源（10 路并发，15s 超时），兼容 RSS 2.0 和 Atom 格式 |
| 时间过滤 | 按指定时间窗口筛选近期文章 |
| AI 评分 | Gemini 从相关性、质量、时效性三个维度打分（1-10） |
| AI 摘要 | 为 Top N 文章生成结构化摘要、中文标题翻译、推荐理由 |
| 趋势总结 | AI 归纳当日技术圈 2-3 个宏观趋势 |

## 快速开始

### 方式一：作为 OpenCode Skill 使用

在对话中输入 `/digest` 即可启动交互式引导流程：

```
/digest
```

Agent 会依次询问以下参数：

| 参数 | 选项 | 默认值 |
|------|------|--------|
| 时间范围 | 24h / 48h / 72h / 7天 | 48h |
| 精选数量 | 10 / 15 / 20 篇 | 15 篇 |
| 输出语言 | 中文 / English | 中文 |
| Gemini API Key | 手动输入（首次需要） | — |

配置会自动保存到 `~/.hn-daily-digest/config.json`，下次运行可一键复用。

### 方式二：命令行直接运行

```bash
export GEMINI_API_KEY="your-key"
npx -y bun scripts/digest.ts --hours 48 --top-n 15 --lang zh --output ./digest.md
```

## 输出内容结构

生成的 Markdown 文件包含以下板块：

### 📝 今日看点

3-5 句话的宏观趋势总结，快速了解当天技术圈风向。

### 🏆 今日必读

Top 3 文章深度展示：
- 中英双语标题
- 结构化摘要（4-6 句）
- 推荐理由
- 关键词标签

### 📊 数据概览

- 统计表格
- Mermaid 饼图（分类分布）
- Mermaid 柱状图（高频关键词）
- ASCII 纯文本图
- 话题标签云

### 分类文章列表

按 6 大分类分组展示：

| 分类 | 覆盖范围 |
|------|----------|
| 🤖 AI / ML | AI、机器学习、LLM、深度学习 |
| 🔒 安全 | 安全、隐私、漏洞、加密 |
| ⚙️ 工程 | 软件工程、架构、编程语言、系统设计 |
| 🛠 工具 / 开源 | 开发工具、开源项目、新发布的库/框架 |
| 💡 观点 / 杂谈 | 行业观点、个人思考、职业发展 |
| 📝 其他 | 不属于以上分类的内容 |

## 信息来源

90 个 RSS 源精选自 Hacker News Popularity Contest 2025，涵盖社区最受欢迎的独立技术博客：

- Simon Willison（simonwillison.net）
- Paul Graham（paulgraham.com）
- Dan Abramov（overreacted.io）
- Gwern（gwern.net）
- Krebs on Security（krebsonsecurity.com）
- Antirez、John Gruber、Troy Hunt、Mitchell Hashimoto、Steve Blank...
- ...更多优质博主

完整列表内嵌于 `scripts/digest.ts`。

## 技术特点

### 零依赖设计

纯 TypeScript 单文件实现，无第三方库，基于 Bun 运行时的原生 `fetch` 和内置 XML 解析。

### 结构化摘要

不是一句话敷衍了事，而是 4-6 句覆盖「核心问题 → 关键论点 → 结论」的完整概述，让你 30 秒判断一篇文章是否值得深入阅读。

### 中英双语

所有标题自动翻译为中文，原文标题保留为链接文字，不错过任何语境。

### 可视化统计

三种方式覆盖所有阅读场景：
- **Mermaid 图表**：GitHub/Obsidian 原生渲染
- **ASCII 柱状图**：终端友好
- **标签云**：快速把握热点话题

## 实际应用场景

### 早间速览

每天早上运行一次，5 分钟掌握前一天技术圈发生了什么。

### 周报素材

积累一周的日报，轻松生成技术周报内容。

### 学习规划

根据趋势洞察，了解哪些领域值得关注，制定学习计划。

### 内容创作

发现优质选题来源，为博客或公众号提供素材灵感。

## 获取 Gemini API Key

1. 访问 [Google AI Studio](https://aistudio.google.com/)
2. 创建或登录 Google 账号
3. 获取 API Key（免费额度足够日常使用）

## 相关链接

- **GitHub 仓库**：https://github.com/vigorX777/ai-daily-digest
- **公众号**：懂点儿AI
- **Skill 制作详情**：[微信公众号文章](https://mp.weixin.qq.com/s/rkQ28KTZs5QeZqjwSCvR4Q)

## 结语

AI Daily Digest 展示了 AI 赋能信息筛选的一种可能性——不是简单堆砌链接，而是通过智能评分、结构化摘要、趋势分析，真正帮你节省时间、抓住重点。

对于技术人来说，这是一个值得加入日常工作流的效率工具。开源、轻量、实用，推荐尝试。

---

**参考资料**：
- [AI Daily Digest GitHub](https://github.com/vigorX777/ai-daily-digest)
- [Hacker News Popularity Contest 2025](https://news.ycombinator.com/)
