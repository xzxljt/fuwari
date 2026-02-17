---
title: PicoClaw：在10美元硬件上运行的超轻量AI智能体
published: 2026-02-17T12:16:31
description: 'PicoClaw是一款内存占用不到10MB的超轻量级AI Agent框架，支持树莓派、RISC-V开发板、安卓手机等低成本硬件运行，让每个人都能拥有自己的AI助手。'
image: ''
tags: [AI, 开源项目, PicoClaw, AI Agent, 嵌入式]
category: '技术教程'
draft: false
lang: ''
---

## 前言

在AI Agent领域，我们习惯了动辄数GB内存的运行需求。但有没有想过，一个功能完整的AI助手，其实可以在不到10MB的内存中运行？PicoClaw给出了答案。

## 什么是PicoClaw？

**PicoClaw** 是由 Sipeed（矽速科技）开源的超轻量级 AI Agent 框架，受 nanobot 启发，采用 **Go 语言** 从零重构。它经历了一个"自举"过程——由 AI Agent 自身驱动整个架构迁移和代码优化。

:::note[核心亮点]
⚡️ **极致轻量**：内存占用 **<10MB**，比 OpenClaw 节省 99% 的内存  
💰 **极低成本**：可在 **10美元** 的硬件上运行，比 Mac mini 便宜 98%  
🚀 **极速启动**：在 0.8GHz 单核处理器上，启动时间 **<1秒**  
🌍 **真正便携**：单一二进制文件，支持 RISC-V、ARM、x86 多平台
:::

## 为什么选择 PicoClaw？

### 与其他框架对比

| 特性 | OpenClaw | NanoBot | PicoClaw |
|------|----------|---------|----------|
| 语言 | TypeScript | Python | Go |
| 内存占用 | >1GB | >100MB | <10MB |
| 启动时间(0.8GHz) | >500秒 | >30秒 | <1秒 |
| 运行成本 | Mac Mini $599 | Linux开发板 ~$50 | 任意Linux开发板 $10+ |

### 核心功能

- 🧩 **全栈工程师能力**：开发、部署、扩展一气呵成
- 🗂️ **日志与规划管理**：定时任务、自动化、记忆管理
- 🔎 **网络搜索与学习**：发现新知、获取洞察、追踪趋势

## 部署方式

### 方式一：预编译二进制文件

从 [Release 页面](https://github.com/sipeed/picoclaw/releases) 下载适用于您平台的固件，直接运行即可。

### 方式二：从源码构建

```bash
git clone https://github.com/sipeed/picoclaw.git
cd picoclaw
make deps
make build        # 构建
make build-all    # 多平台构建
make install      # 构建并安装
```

### 方式三：Docker Compose

```bash
# 1. 克隆仓库
git clone https://github.com/sipeed/picoclaw.git
cd picoclaw

# 2. 设置 API Key
cp config/config.example.json config/config.json
vim config/config.json

# 3. 构建并启动
docker compose --profile gateway up -d

# 4. 查看日志
docker compose logs -f picoclaw-gateway
```

## 快速开始

### 1. 初始化配置

```bash
picoclaw onboard
```

### 2. 配置 API Key

编辑 `~/.picoclaw/config.json`：

```json
{
  "agents": {
    "defaults": {
      "workspace": "~/.picoclaw/workspace",
      "model": "glm-4.7",
      "max_tokens": 8192,
      "temperature": 0.7,
      "max_tool_iterations": 20
    }
  },
  "providers": {
    "openrouter": {
      "api_key": "your-api-key",
      "api_base": "https://openrouter.ai/api/v1"
    }
  }
}
```

### 3. 获取 API Key

| 用途 | 提供商 | 获取地址 |
|------|--------|----------|
| LLM | OpenRouter | openrouter.ai |
| LLM | 智谱(GLM) | bigmodel.cn |
| LLM | Anthropic | console.anthropic.com |
| 网络搜索 | Brave Search | brave.com/search/api (2000次/月免费) |

### 4. 开始对话

```bash
picoclaw agent -m "你好，请介绍一下你自己"
```

就这么简单！2分钟内你就有了一个可工作的 AI 助手。

## 多平台接入

PicoClaw 支持通过多种即时通讯平台与 AI 交互：

| 平台 | 配置难度 |
|------|----------|
| Telegram | 简单（仅需 Token） |
| Discord | 简单 |
| QQ | 简单 |
| 钉钉 | 中等 |
| LINE | 中等 |

### Telegram 接入示例

1. 在 Telegram 中找 `@BotFather`，发送 `/newbot` 创建机器人
2. 复制返回的 Token
3. 配置 `config.json`：

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "allowFrom": ["YOUR_USER_ID"]
    }
  }
}
```

4. 运行网关：`picoclaw gateway`

## 安卓手机部署教程

想体验 PicoClaw 但没有开发板？一部闲置的安卓手机就能搞定！

### 前提条件

- Android 7.0+ 系统
- Termux 应用（推荐从 [F-Droid](https://f-droid.org/) 安装）
- 至少 2GB RAM
- 至少 500MB 存储空间

### 安装步骤

#### 1. 安装 Termux

从 Termux 官方 GitHub 下载适合您手机架构的 APK 文件并安装。

#### 2. 安装基础环境

```bash
# 更新包列表
pkg update

# 安装必要工具
pkg install curl git build-essential -y
pkg install tmux termux-api termux-tools -y
pkg install cmake python golang which -y

# 安装 Node.js
pkg install nodejs -y

# 验证安装
node -v  # 需要 v22.x.x 或更高版本
```

#### 3. 安装 PicoClaw

```bash
# 下载适合 ARM 架构的预编译二进制
# 或从源码构建
git clone https://github.com/sipeed/picoclaw.git
cd picoclaw
make deps
make build
make install
```

#### 4. 配置和启动

```bash
# 初始化配置
picoclaw onboard

# 启动网关
picoclaw gateway
```

#### 5. 保持后台运行

```bash
# 使用 tmux 保持后台运行
tmux new -s picoclaw
picoclaw gateway

# 按 Ctrl+B 然后按 D 脱离会话
# 重新连接：tmux attach -t picoclaw
```

#### 6. 防止休眠

```bash
# 激活唤醒锁
termux-wake-lock

# 在手机设置中禁用 Termux 的电池优化
```

### 一键安装脚本

社区提供了一键部署脚本（适用于 OpenClaw）：

```bash
curl -sL https://s.zhihai.me/openclaw > openclaw-install.sh && bash openclaw-install.sh
```

:::warning[注意]
PicoClaw 是 OpenClaw 的轻量版替代方案，如果您的手机性能有限，建议优先使用 PicoClaw。
:::

## 推荐硬件平台

PicoClaw 可以部署在几乎所有 Linux 设备上：

| 设备 | 价格 | 用途 |
|------|------|------|
| LicheeRV-Nano E/W | $9.9 | 最小家庭助手 |
| NanoKVM | $30-50 | 自动化服务器维护 |
| MaixCAM | $50-100 | 智能监控 |
| 闲置安卓手机 | $0 | 零成本 AI 服务器 |

## 安全沙箱机制

PicoClaw 默认在沙箱环境中运行，只能访问工作空间内的文件和执行命令：

```json
{
  "agents": {
    "defaults": {
      "workspace": "~/.picoclaw/workspace",
      "restrict_to_workspace": true
    }
  }
}
```

即使禁用限制，也会阻止以下危险命令：
- `rm -rf`、`del /f` 等批量删除
- `format`、`mkfs` 等磁盘格式化
- `shutdown`、`reboot` 等系统关机
- Fork 炸弹等恶意脚本

## 定时任务（Heartbeat）

PicoClaw 支持自动执行周期性任务。在 `~/.picoclaw/workspace/HEARTBEAT.md` 中配置：

```markdown
# 周期性任务
- 检查邮件中的重要消息
- 查看日程安排
- 检查天气预报
```

默认每 30 分钟检查一次，可在配置中调整：

```json
{
  "heartbeat": {
    "enabled": true,
    "interval": 30
  }
}
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `picoclaw onboard` | 初始化配置 |
| `picoclaw agent -m "..."` | 单次对话 |
| `picoclaw agent` | 交互模式 |
| `picoclaw gateway` | 启动网关服务 |
| `picoclaw status` | 查看状态 |
| `picoclaw cron list` | 列出定时任务 |
| `picoclaw cron add ...` | 添加定时任务 |

## 安全声明

:::caution[重要提示]
- **无加密货币**：PicoClaw 没有、也不会有任何官方代币/币种
- **唯一官网**：官方网站为 `picoclaw.io`，公司网站为 `sipeed.com`
- **警惕钓鱼**：许多 `.ai/.org/.com/.net` 等域名被第三方注册，请认准官方渠道
:::

## 社区与支持

- **GitHub**: https://github.com/sipeed/picoclaw
- **官网**: https://picoclaw.io/
- **Discord**: https://discord.gg/V4sAZ9XWpN

## 结语

PicoClaw 展示了 AI Agent 的另一种可能性——不需要昂贵的硬件，不需要复杂的部署，一个 10MB 的二进制文件就能让你的旧设备焕发新生。

无论你是想在树莓派上搭建个人助手，还是想让闲置手机变成 AI 服务器，PicoClaw 都是一个值得尝试的选择。开源、轻量、高效，这正是 AI 民主化的方向。

---

**参考资料**：
- [PicoClaw GitHub 仓库](https://github.com/sipeed/picoclaw)
- [PicoClaw 官方网站](https://picoclaw.io/)
- [Termux OpenClaw 部署脚本](https://github.com/hillerliao/install-openclaw-on-termux)
