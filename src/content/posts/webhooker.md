---
title: "Webhooker：轻量级多平台 Webhook 转发网关"
published: 2026-02-27T13:52:24
description: "一个开源的 Webhook 转发工具，支持 Slack、飞书、钉钉、企业微信、Discord、Telegram 等多平台消息互通"
image: "https://img.312522.xyz/file/1772171696611_webhooker_arch.png"
tags: ["Webhook", "开源", "消息转发", "飞书", "钉钉", "DevOps"]
category: "工具推荐"
---

## 项目简介

在现代软件开发中，Webhook 已经成为系统间通信的重要方式。然而，不同平台的 Webhook 格式各异，消息格式不统一，这给开发者带来了不少困扰。

**Webhooker** 是一个轻量级的多平台 Webhook 转发网关，它能够将 Slack、飞书、钉钉、企业微信、Discord、Telegram 等平台的消息无缝转发到其他 IM 平台，解决了多平台消息互通的痛点。

![Webhook Architecture](https://img.312522.xyz/file/1772171696611_webhooker_arch.png)

## 核心特性

- **多平台支持**：支持 Slack、飞书、钉钉、企业微信、Discord、Telegram 等主流 IM 平台
- **灵活转发**：支持单平台转发到多平台，实现消息广播
- **多种部署方式**：支持 Cloudflare Workers、Docker、Node.js 三种部署方式
- **零配置使用**：提供公共测试服务，快速上手体验

## 快速开始

### 部署方式

**Cloudflare Workers（推荐）**

```bash
npm install
npm run deploy
```

**Docker**

```bash
docker-compose up -d
```

**Node.js**

```bash
npm run build && npm start
```

### 基本用法

转发接口格式：

```
POST /:source?target=TOKEN
```

例如，将 Slack 消息转发到飞书和钉钉：

```bash
curl -X POST "https://xxx.workers.dev/slack?feishu=TOKEN1&dd=TOKEN2" \
  -H "Content-Type: application/json" \
  -d '{"text": "hello"}'
```

## 支持的平台

### 输入源（Source）

| 参数 | 平台 |
|------|------|
| `slack` | Slack webhook |
| `feishu` | 飞书机器人 |
| `dingtalk` | 钉钉机器人 |
| `wechatwork` | 企业微信 |
| `generic` | 通用 JSON |
| `raw` | 原样输出（兜底） |

### 输出目标（Target 参数）

| 参数 | 平台 | 说明 |
|------|------|------|
| `feishu` / `fs` | 飞书 | 只需 token |
| `dingtalk` / `dd` | 钉钉 | 只需 access_token |
| `wechatwork` / `wxwork` | 企业微信 | 只需 key |
| `discord` / `dc` | Discord | 格式：`ID/TOKEN` |
| `telegram` / `tg` | Telegram | 格式：`BOT_TOKEN:CHAT_ID` |
| `slack` | Slack | 格式：`T.../B.../xxx` |
| `generic` | 自定义 | 完整 URL |

## 使用示例

### Slack 消息转发到飞书

```bash
curl -X POST "https://webhooker.tokenroll.ai/slack?feishu=YOUR_FEISHU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello from Slack!"}'
```

### 飞书消息转发到钉钉

```bash
curl -X POST "https://webhooker.tokenroll.ai/feishu?dd=YOUR_DINGTALK_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"msg_type": "text", "content": {"text": "Hello from Feishu!"}}'
```

### 同时转发到多个平台

```bash
curl -X POST "https://webhooker.tokenroll.ai/slack?feishu=TOKEN1&dd=TOKEN2&dc=ID/TOKEN3" \
  -H "Content-Type: application/json" \
  -d '{"text": "广播消息：同时发送到飞书、钉钉和 Discord"}'
```

## 高级功能

### 自定义消息属性

- `title=xxx` - 覆盖消息标题
- `level=error` - 设置级别（info/success/warning/error）
- `dd_secret=xxx` - 钉钉加签密钥

### 原始数据转发

对于无法解析的消息格式，会走 `/raw` 路由，将 JSON 原样转发：

```bash
curl -X POST "https://xxx.workers.dev/raw?feishu=TOKEN" \
  -d '{"any": "data"}'
# 飞书收到: {"any": "data"}
```

## 本地开发

```bash
npm install
npm run dev        # CF Workers 本地开发
npm run dev:node   # Node.js 本地开发
npm test
```

## 项目地址

GitHub: [https://github.com/TokenRollAI/webhooker](https://github.com/TokenRollAI/webhooker)

## 总结

Webhooker 是一个简洁实用的 Webhook 转发工具，特别适合以下场景：

- **告警通知分发**：将监控系统告警同时发送到多个 IM 平台
- **CI/CD 通知**：将构建结果推送到团队使用的各种通讯工具
- **跨平台消息同步**：实现不同 IM 平台之间的消息互通

如果你正在寻找一个轻量级的消息转发解决方案，不妨试试 Webhooker！
