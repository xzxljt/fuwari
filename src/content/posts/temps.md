---
title: "Temps：一款开源的自托管部署平台，替代 Vercel + Sentry + PostHog"
published: 2026-02-23T12:55:18
description: "Temps 是一个用 Rust 编写的自托管部署平台，集成了 Git 部署、Web 分析、错误追踪、会话回放、运行监控、事务邮件等功能，一键安装即可替代多个 SaaS 工具。"
image: "https://img.312522.xyz/file/1771822418996_temps-logo-light.webp"
tags: ["自托管", "部署平台", "Rust", "DevOps", "开源"]
category: "技术工具"
---

## 前言

如果你正在寻找一个可以自托管的部署平台，既能像 Vercel 一样简单部署，又想摆脱各种 SaaS 工具的订阅费用，那么 Temps 可能正是你需要的。

![Temps Demo](https://img.312522.xyz/file/1771822423209_temps-demo.gif)

Temps 是一个开源的自托管部署平台，从裸服务器到完全部署只需要不到 3 分钟。它用单个二进制文件替代了部署平台、分析工具、错误追踪、会话回放、运行监控和事务邮件等多个服务。

## 主要功能

### 一、Git Push 即可部署

![Deployments](https://img.312522.xyz/file/1771822418951_deployments.webp)

推送到 Git，Temps 自动构建并部署。它能够自动检测框架、创建预览 URL，并处理零停机部署。支持任何语言、任何框架，自动检测或使用自定义 Dockerfile。

### 二、内置 Web 分析与会话回放

![Analytics](https://img.312522.xyz/file/1771822418943_analytics.webp)

无需外部服务即可获得：
- Web 分析与漏斗分析
- 访客追踪
- 会话回放（基于 rrweb）
- Sentry 兼容的错误追踪

### 三、Pingora 驱动的代理

![Domains](https://img.312522.xyz/file/1771822419434_domains.webp)

运行在 Cloudflare 的 Pingora 引擎上，提供：
- 通过 Let's Encrypt 自动 TLS（支持 HTTP-01 和 DNS-01）
- 自定义域名
- 完整的请求日志记录

### 四、托管服务

![Monitoring](https://img.312522.xyz/file/1771822414553_monitoring-detail.webp)

一键配置 Postgres、Redis、S3 (MinIO) 和 MongoDB，Temps 负责创建、备份和销毁。

### 五、请求日志与代理可见性

![Proxy Logs](https://img.312522.xyz/file/1771822416364_proxy-logs.webp)

每个 HTTP 请求都会记录方法、路径、状态、响应时间和路由元数据，支持过滤和搜索，无需额外工具。

### 六、监控与告警

![Project Overview](https://img.312522.xyz/file/1771822419630_project-overview.webp)

监控部署失败、运行时崩溃、证书过期和备份健康状态，在问题影响用户之前收到通知。

### 七、事务邮件

通过 UI 添加带有 DKIM 记录的发件人域名，使用 `@temps-sdk/node-sdk` 发送事务邮件，无需外部邮件服务。

### 八、AI 就绪

内置 Model Context Protocol 服务器（`@temps-sdk/mcp`），让 AI 代理能够通过自然语言部署、监控和管理基础设施。

## 成本对比

| 你获得的功能 | 替代的 SaaS 工具 |
|-------------|-----------------|
| Git 部署 + 预览 URL | Vercel / Netlify / Railway ($20+/月) |
| Web 分析 + 漏斗 | PostHog / Plausible ($0-450/月) |
| 会话回放 | PostHog / FullStory ($0-2000/月) |
| 错误追踪 | Sentry ($26+/月) |
| 运行监控 | Better Uptime / Pingdom ($20+/月) |
| 托管 Postgres/Redis/S3 | AWS RDS / ElastiCache ($50+/月) |
| 事务邮件 + DKIM | Resend / SendGrid ($20-100/月) |
| 请求日志 + 代理 | Cloudflare ($0-200/月) |
| **Temps 总计** | **$0（自托管）** |

## 功能对比表

| 功能 | Temps | Coolify | CapRover | Dokku | Railway | Vercel |
|-----|-------|---------|----------|-------|---------|--------|
| 自托管 | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| 单二进制安装 | ✓ | ✗ | ✗ | ✗ | -- | -- |
| Git push 部署 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Web 分析 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 会话回放 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 错误追踪（Sentry 兼容） | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 运行监控 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 事务邮件 + DKIM | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 托管 Postgres/Redis/S3 | ✓ | ✓ | 部分 | 插件 | ✓ | 插件 |
| Pingora 代理 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 自动 TLS | ✓ | ✓ | ✓ | 插件 | ✓ | ✓ |
| 请求级日志 | ✓ | ✗ | ✗ | ✗ | 部分 | 部分 |
| 预览部署 | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ |
| Rust 构建 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| 免费开源 | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |

## 技术栈

- **后端**：Rust、Axum、Sea-ORM、Pingora（Cloudflare 的代理引擎）、Bollard（Docker API）
- **前端**：React 19、TypeScript、Tailwind CSS、shadcn/ui
- **数据库**：PostgreSQL + TimescaleDB
- **架构**：30+ 工作空间 crate，三层服务架构

## SDK 支持

| 包名 | 描述 |
|-----|-----|
| `@temps-sdk/node-sdk` | 平台 API 客户端 + Sentry 兼容错误追踪 |
| `@temps-sdk/react-analytics` | React 分析、会话回放、Web Vitals、参与度追踪 |
| `@temps-sdk/kv` | Serverless 键值存储 |
| `@temps-sdk/blob` | 文件存储（S3 兼容） |
| `@temps-sdk/cli` | 命令行接口 |
| `@temps-sdk/mcp` | AI 代理的 Model Context Protocol 服务器 |

## 使用示例

### 分析追踪

只需包裹你的 React 应用，其他都是自动的：

```tsx
import { TempsAnalyticsProvider } from '@temps-sdk/react-analytics';

export default function App({ children }) {
  return <TempsAnalyticsProvider>{children}</TempsAnalyticsProvider>;
}
```

### 错误追踪

Sentry 兼容，可直接替换：

```ts
import { ErrorTracking } from '@temps-sdk/node-sdk';

ErrorTracking.init({ dsn: 'https://key@your-instance.temps.dev/1' });

try {
  riskyOperation();
} catch (error) {
  ErrorTracking.captureException(error);
}
```

### KV 存储

类似 Redis 的 API，零配置：

```ts
import { kv } from '@temps-sdk/kv';

await kv.set('user:123', { name: 'Alice', plan: 'pro' }, { ex: 3600 });
const user = await kv.get('user:123');
```

### 文件存储

上传和服务文件：

```ts
import { blob } from '@temps-sdk/blob';

const { url } = await blob.put('avatars/user-123.png', fileBuffer);
const files = await blob.list({ prefix: 'avatars/' });
```

## 快速安装

一条命令即可部署：

```bash
curl -fsSL https://temps.sh/deploy.sh | sh
```

**测试环境**：Ubuntu 24.04 / 22.04 | 也支持 macOS

## 开源信息

- **GitHub**：[https://github.com/gotempsh/temps](https://github.com/gotempsh/temps)
- **许可证**：MIT 或 Apache 2.0 双许可

## 总结

Temps 是一个功能丰富的自托管部署平台，它将部署、分析、监控、邮件等多个功能整合到一个二进制文件中。对于想要摆脱 SaaS 订阅费用、拥有完全控制权的开发者来说，这是一个值得尝试的开源项目。

如果你正在寻找 Vercel、Sentry、PostHog 等工具的自托管替代方案，不妨给 Temps 一个机会。
