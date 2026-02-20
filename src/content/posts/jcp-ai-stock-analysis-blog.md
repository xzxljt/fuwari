---
title: 韭菜盘(JCP)：AI驱动的智能A股分析系统，多Agent协作让投资更智能
published: 2026-02-20T18:10:39
description: '韭菜盘(JCP)是一款基于Wails框架开发的跨平台桌面应用，集成多个AI大模型，通过多Agent协作讨论的方式，为用户提供专业的股票分析和投资建议。'
image: 'https://img.312522.xyz/file/1771582290101_jcp_1.png'
tags: [AI, 股票分析, 开源项目, Wails, Go, React]
category: '开源项目'
draft: false
lang: ''
---

## 项目介绍

**韭菜盘 (JCP AI)** 是一款 AI 驱动的智能股票分析系统，基于 Wails 框架开发，支持跨平台运行。它集成了多个 AI 大模型（OpenAI、Google Gemini、DeepSeek、Kimi、GLM 等），通过多 Agent 协作讨论的方式，为用户提供专业的股票分析和投资建议。

![韭菜盘界面](https://img.312522.xyz/file/1771582290101_jcp_1.png)

---

## 核心特性

### 🤖 多 Agent 智库

多个 AI 专家角色协作讨论，提供多维度分析视角：

| Agent | 角色 | 职责 |
|-------|------|------|
| 技术分析师 | 图表专家 | K线形态、技术指标分析 |
| 基本面分析师 | 财务专家 | 财报解读、估值分析 |
| 情绪分析师 | 舆情专家 | 市场情绪、热点追踪 |
| 风控专家 | 风险管理 | 风险评估、仓位建议 |

### 🎯 策略管理系统

- 灵活的策略配置
- 支持多 Agent 组合
- 独立 AI 配置

### 🧠 智能记忆系统

按股票隔离的长期记忆，AI 能记住历史讨论和关键结论：

| 功能 | 说明 |
|------|------|
| 股票隔离 | 每只股票独立记忆空间 |
| 关键事实提取 | 自动提取重要事实、观点、决策 |
| 历史摘要 | LLM 自动生成历史讨论摘要 |
| 相关性检索 | 基于 TF-IDF 的关键词匹配 |
| 自动压缩 | 超过阈值自动压缩旧记忆 |

### ✨ 其他功能

- **提示词增强**：AI 驱动的提示词优化
- **实时行情**：股票实时数据、K线图表、盘口深度
- **热点舆情**：聚合百度、抖音、B站、头条等平台热点
- **研报服务**：专业研究报告查询和智能分析
- **MCP 扩展**：支持 Model Context Protocol

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Wails v2 (Go + Web 混合桌面应用) |
| 后端 | Go 1.24 |
| 前端 | React 18 + TypeScript + Vite |
| UI | TailwindCSS + Lucide Icons |
| 图表 | Recharts |
| AI | OpenAI / Gemini / DeepSeek / Kimi / GLM 等 |
| 分词 | GSE (纯 Go 实现，无 CGO 依赖) |

---

## 安装教程

### 环境要求

- Go 1.24+
- Node.js 18+
- Wails CLI v2

### 1. 安装 Wails CLI

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### 2. 克隆项目

```bash
git clone https://github.com/run-bigpig/jcp.git
cd jcp
```

### 3. 安装依赖

```bash
# 安装前端依赖
cd frontend && npm install && cd ..

# 下载 Go 依赖
go mod download
```

### 4. 开发模式运行

```bash
wails dev
```

---

## 构建教程

### 构建当前平台

```bash
wails build
```

### 构建 Windows 版本

```bash
wails build -platform windows/amd64
```

### 构建 macOS 版本

```bash
wails build -platform darwin/amd64
```

### 构建 Linux 版本

```bash
wails build -platform linux/amd64
```

---

## 配置教程

### 首次运行配置

首次运行时，需要在设置中配置 AI 模型的 API Key：

1. 点击右上角**设置图标**
2. 选择 **AI 模型提供商**（OpenAI / Gemini / DeepSeek / Kimi / GLM）
3. 填入对应的 **API Key**
4. 保存配置

配置文件存储在 `data/config.json`。

### 自定义 Agent

编辑 `data/agents.json`，配置 Agent 的名称、角色、系统提示词：

```json
{
  "name": "技术分析师",
  "role": "图表专家",
  "system_prompt": "你是一位专业的技术分析师..."
}
```

重启应用后生效。

---

## 项目结构

```
jcp/
├── main.go                 # 应用入口
├── app.go                  # 后端核心逻辑
├── wails.json              # Wails 配置
├── frontend/               # 前端项目
│   ├── src/
│   │   ├── components/     # React 组件
│   │   ├── services/       # 服务层
│   │   └── hooks/          # 自定义 Hooks
│   └── package.json
├── internal/               # Go 后端模块
│   ├── adk/                # AI 开发工具包
│   ├── services/           # 业务服务
│   ├── models/             # 数据模型
│   ├── agent/              # Agent 系统
│   └── meeting/            # 会议室系统
└── data/                   # 数据存储
    ├── config.json         # 应用配置
    ├── strategies.json     # 策略配置
    └── watchlist.json      # 自选股列表
```

---

## MCP 扩展开发

项目支持 Model Context Protocol，可扩展以下工具：

- 股票实时行情查询
- K线数据获取
- 盘口深度数据
- 新闻资讯搜索
- 研报查询
- 热点舆情获取

### 开发步骤

1. 在 `internal/adk/tools/` 下创建工具文件
2. 实现 `Tool` 接口
3. 在 `registry.go` 中注册工具

---

## 功能模块一览

![AI智库讨论室](https://img.312522.xyz/file/1771582298342_jcp_2.png)

| 模块 | 功能描述 |
|------|----------|
| 📈 股票行情 | 实时行情数据、多周期K线、盘口深度 |
| ⭐ 自选管理 | 添加/删除自选股、实时监控 |
| 🤖 AI 智库 | 多 Agent 协作分析、智能问答 |
| 🎯 策略管理 | 策略配置、Agent 组合、独立 AI 配置 |
| 🔥 热点舆情 | 百度/抖音/B站/头条热点聚合 |
| 📊 研报服务 | 专业研报查询与分析 |
| 💬 会议室 | Agent 多轮讨论、MCP 工具调用 |
| 🧠 记忆系统 | 按股票隔离的长期记忆 |
| ✨ 提示词增强 | AI 驱动的提示词优化 |
| 🔌 连接测试 | AI 配置连通性验证 |

---

## 总结

韭菜盘 (JCP) 是一款功能强大的 AI 驱动股票分析工具：

- ✅ **跨平台支持**：Windows / macOS / Linux
- ✅ **多 AI 模型**：支持 OpenAI、Gemini、DeepSeek、Kimi、GLM 等
- ✅ **多 Agent 协作**：多维度专业分析
- ✅ **智能记忆**：按股票隔离的历史记忆
- ✅ **开源免费**：MIT 许可证

如果你对 AI 股票分析感兴趣，不妨试试这款工具！

---

**相关链接**：
- [GitHub 仓库](https://github.com/run-bigpig/jcp)
- [Wails 官网](https://wails.io/)