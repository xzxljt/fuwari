---
title: "MTranServer: 一款超低资源消耗的离线翻译服务器"
published: 2026-02-28T08:08:34
description: "仅需1G内存即可运行的离线翻译服务器，平均响应时间50ms，支持全球主要语言翻译，翻译质量与Google翻译相当。"
image: "https://img.312522.xyz/file/1772237519583_mtranserver_cover.jpg"
tags: [翻译, Docker, 自建服务, 开源]
category: 工具推荐
draft: false
---

## 前言

在日常工作和学习中，我们经常需要进行跨语言翻译。虽然市面上有很多在线翻译服务，但它们要么需要联网，要么有使用限制，要么存在隐私问题。今天给大家介绍一款开源的离线翻译服务器——**MTranServer**，它超低资源消耗、超快响应速度，完全可以私有化部署。

## 项目简介

MTranServer 是一个离线翻译服务器，具有以下特点：

- **超低资源消耗**：仅需 1G 内存即可运行，无需显卡
- **极速响应**：单个请求平均响应时间 50ms
- **多语言支持**：支持全世界主要语言的翻译
- **私有部署**：完全离线运行，保护隐私数据
- **翻译质量优秀**：与 Google 翻译质量相当

## 性能对比

| 项目名称 | 内存占用 | 并发性能 | 翻译效果 | 速度 | 其他信息 |
|---|---|---|---|---|---|
| facebook/nllb | 很高 | 差 | 一般 | 慢 | Android 移植版占用仍然高 |
| LibreTranslate | 很高 | 一般 | 一般 | 中等 | 中端 CPU 每秒处理 3 句 |
| OPUS-MT | 高 | 一般 | 略差 | 快 | 性能较好 |
| 其他大模型 | 超高 | 动态 | 好 | 很慢 | 32B 及以上参数效果不错，但硬件要求高 |
| **MTranServer** | **低** | **高** | **一般** | **极快** | **单个请求平均响应时间 50ms** |

## 部署方式

### 环境要求

- 目前仅支持 amd64 架构 CPU 的 Docker 部署
- CPU 需要支持 AVX2 指令集
- ARM、RISC-V 架构正在适配中

### 服务器部署

#### 1. 创建配置目录

```bash
mkdir mtranserver
cd mtranserver
touch compose.yml
mkdir models
```

#### 2. 配置 Docker Compose

创建 `compose.yml` 文件：

```yaml
services:
  mtranserver:
    image: xxnuo/mtranserver:latest
    container_name: mtranserver
    restart: unless-stopped
    ports:
      - "8989:8989"
    volumes:
      - ./models:/app/models
    environment:
      - CORE_API_TOKEN=your_token  # 建议设置密码保护服务
```

> **安全提示**：如果是云服务器部署，强烈建议设置 `CORE_API_TOKEN` 密码，防止服务被扫描、攻击或滥用。

#### 3. 下载模型

根据需要下载对应语言模型，解压到 `models` 文件夹内。

英译中模型的文件结构：

```
models/
├── enzh
│   ├── lex.50.50.enzh.s2t.bin
│   ├── model.enzh.intgemm.alphas.bin
│   └── vocab.enzh.spm
```

多模型示例（中译英 + 英译中）：

```
models/
├── enzh
│   └── ...
├── zhen
│   ├── lex.50.50.zhen.t2s.bin
│   ├── model.zhen.intgemm.alphas.bin
│   └── vocab.zhen.spm
```

> **注意**：中译日需要两个模型 `zhen`（中译英）和 `enja`（英译日），其他语言翻译过程类似。

#### 4. 启动服务

测试启动：

```bash
docker compose up
```

正常输出示例：

```
[+] Running 2/2
✔ Network sample_default Created 0.1s
✔ Container mtranserver Created 0.1s
Attaching to mtranserver
mtranserver | (2025-03-03 12:49:24) [INFO ] Using maximum available worker count: 16
mtranserver | (2025-03-03 12:49:24) [INFO ] Starting Translation Service
mtranserver | Successfully loaded model for language pair: enzh
mtranserver | (2025-03-03 12:49:24) [INFO ] Models loaded.
```

确认正常后，后台运行：

```bash
docker compose up -d
```

## 使用方法

### 与翻译插件配合

MTranServer 可以与主流浏览器翻译插件配合使用：

#### 沉浸式翻译

| 类型 | URL |
|---|---|
| 无密码 | `http://localhost:8989/imme` |
| 有密码 | `http://localhost:8989/imme?token=your_token` |

在设置页面启用开发者模式的 Beta 特性，然后在翻译服务中配置自定义 API。

#### 简约翻译

| 类型 | URL |
|---|---|
| 无密码 | `http://localhost:8989/kiss` |
| 有密码 | `http://localhost:8989/kiss` (KEY 填 your_token) |

### API 接口

Base URL: `http://localhost:8989`

| 名称 | URL | 请求格式 | 返回格式 |
|---|---|---|---|
| 服务版本 | `/version` | 无 | 版本信息 |
| 语言对列表 | `/models` | 无 | 支持的语言对 |
| 普通翻译 | `/translate` | `{"from": "en", "to": "zh", "text": "Hello"}` | `{"result": "你好"}` |
| 批量翻译 | `/translate/batch` | `{"from": "en", "to": "zh", "texts": [...]}` | `{"results": [...]}` |
| 健康检查 | `/health` | 无 | `{"status": "ok"}` |

### 示例请求

```bash
curl -X POST http://localhost:8989/translate \
  -H "Content-Type: application/json" \
  -d '{"from": "en", "to": "zh", "text": "Hello, world!"}'
```

返回：

```json
{"result": "你好，世界！"}
```

## 国内用户优化

如果无法正常拉取 Docker 镜像，可以手动下载镜像文件：

```bash
docker load -i mtranserver.image.tar
```

## 更新方法

```bash
docker compose down
docker pull xxnuo/mtranserver:latest
docker compose up -d
```

同时记得更新模型文件。

## 项目信息

- **GitHub**: [https://github.com/xxnuo/MTranServer](https://github.com/xxnuo/MTranServer)
- **推理框架**: C++ Marian-NMT 框架
- **翻译模型**: firefox-translations-models

## 总结

MTranServer 是一款非常优秀的离线翻译服务器解决方案，特别适合：

- 需要私有化部署的企业或个人
- 对翻译速度有较高要求的场景
- 资源有限的服务器环境
- 注重数据隐私的用户

如果你正在寻找一个轻量、快速、可自建的翻译服务，MTranServer 绝对值得一试！
