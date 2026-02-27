---
title: "Quotio：macOS 上的 AI 编程助手统一管理工具"
published: 2026-02-27T14:01:59
description: "一个原生 macOS 菜单栏应用，统一管理 Claude、Gemini、OpenAI、Qwen 等多个 AI 账号，实时配额追踪与智能故障转移"
image: "https://img.312522.xyz/file/1772172242133_menu_bar.png"
tags: ["macOS", "AI工具", "开源", "Claude", "Gemini", "OpenAI"]
category: "工具推荐"
---

## 项目简介

在日常开发中，越来越多的开发者开始使用 AI 编程助手，如 Claude Code、Cursor、Gemini CLI 等。然而，管理多个 AI 账号、追踪配额使用情况、配置代理工具，这些繁琐的工作让人头疼。

**Quotio** 是一款原生 macOS 菜单栏应用，它能够统一管理你的 AI 编程助手账号，实时追踪配额，并提供智能故障转移功能，让你的 AI 开发体验更加流畅。

![Quotio Menu Bar](https://img.312522.xyz/file/1772172242133_menu_bar.png)

## 核心特性

- **🔌 多平台支持**：支持 Gemini、Claude、OpenAI Codex、Qwen、Vertex AI、iFlow、Antigravity、Kiro、Trae、GitHub Copilot 等
- **📊 独立配额模式**：无需运行代理服务器即可查看配额和账号状态
- **🚀 一键配置代理**：自动检测并配置 Claude Code、OpenCode、Gemini CLI 等工具
- **📈 实时仪表盘**：监控请求流量、Token 使用量和成功率
- **📉 智能配额管理**：可视化追踪每个账号的配额，支持自动故障转移策略
- **🖥️ 菜单栏集成**：快速查看服务器状态、配额概览
- **🔔 智能通知**：配额不足、账号冷却期或服务异常时自动提醒
- **🌍 多语言支持**：支持英语、越南语、简体中文

## 支持的 AI 平台

| 平台 | 认证方式 |
|------|----------|
| Google Gemini | OAuth |
| Anthropic Claude | OAuth |
| OpenAI Codex | OAuth |
| Qwen Code | OAuth |
| Vertex AI | Service Account JSON |
| iFlow | OAuth |
| Antigravity | OAuth |
| Kiro | OAuth |
| GitHub Copilot | OAuth |

## 支持配置的编程工具

Quotio 可以自动配置以下工具使用你的统一代理：

- Claude Code
- Codex CLI
- Gemini CLI
- Amp CLI
- OpenCode
- Factory Droid

## 安装方式

### Homebrew（推荐）

```bash
brew tap nguyenphutrong/tap
brew install --cask quotio
```

### 手动下载

从 [Releases 页面](https://github.com/nguyenphutrong/quotio/releases) 下载最新的 `.dmg` 文件。

> ⚠️ 注意：应用尚未使用 Apple 开发者证书签名。如果 macOS 阻止运行，请执行：
> ```bash
> xattr -cr /Applications/Quotio.app
> ```

## 功能截图

### 仪表盘

![Dashboard](https://img.312522.xyz/file/1772172255296_dashboard.png)

查看整体健康状况和流量统计。

### 提供商管理

![Providers](https://img.312522.xyz/file/1772172264790_provider.png)

管理多个 AI 账号，支持 OAuth 认证或导入凭证。

### 代理配置

![Agent Setup](https://img.312522.xyz/file/1772172280385_agent_setup.png)

一键配置 AI 编程工具使用代理。

### 配额监控

![Quota Monitoring](https://img.312522.xyz/file/1772172265931_quota.png)

详细查看每个账号的使用情况。

## 使用指南

### 快速开始

1. 启动 Quotio，在仪表盘点击 **Start** 初始化本地代理服务器
2. 进入 **Providers** 标签页，添加你的 AI 账号（OAuth 或 API Key）
3. 进入 **Agents** 标签页，选择已安装的工具并点击 **Configure**

### 配置选项

- **端口**：修改代理监听端口
- **路由策略**：Round Robin（轮询）或 Fill First（填充优先）
- **自动启动**：打开 Quotio 时自动启动代理
- **通知**：各类事件的提醒开关

## 系统要求

- macOS 14.0 (Sonoma) 或更高版本
- 需要 Internet 连接进行 OAuth 认证

## 本地开发

```bash
git clone https://github.com/nguyenphutrong/quotio.git
cd Quotio
open Quotio.xcodeproj
# 在 Xcode 中按 Cmd + R 构建运行
```

## 项目地址

GitHub: [https://github.com/nguyenphutrong/quotio](https://github.com/nguyenphutrong/quotio)

## 总结

Quotio 是一款专为 macOS 用户打造的 AI 编程助手管理工具，特别适合：

- **多账号用户**：统一管理多个 AI 服务账号
- **配额敏感用户**：实时追踪各账号配额使用情况
- **团队开发者**：通过智能故障转移确保服务稳定性
- **效率追求者**：一键配置，省去繁琐的手动设置

如果你是 macOS 用户且正在使用多个 AI 编程工具，Quotio 绝对值得一试！
