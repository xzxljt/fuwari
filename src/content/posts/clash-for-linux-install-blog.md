---
title: "Clash for Linux Install：优雅地使用 Linux 代理环境"
published: 2026-02-18T10:40:11
description: "一键部署 Clash/Mihomo 代理环境，支持主流 Linux 发行版，提供完整的命令行管理工具"
image: "https://img.312522.xyz/file/1771382322578_preview.webp"
tags: ["Linux", "Clash", "代理", "Mihomo", "开源工具"]
category: "工具推荐"
---

在 Linux 环境下配置代理环境一直是许多用户的痛点。手动下载内核、配置服务、设置系统代理……每一步都可能踩坑。今天给大家推荐一款优雅的解决方案 —— **Clash for Linux Install**，一条命令搞定所有配置！

## 项目简介

![Clash for Linux Install](https://img.312522.xyz/file/1771382322578_preview.webp)

Clash for Linux Install 是一个开箱即用的 Linux 代理环境部署脚本，支持一键安装 `mihomo` 与 `clash` 代理内核，让你在 Linux 终端中也能享受流畅的网络体验。

### 核心特性

- ✅ **一键安装**：支持 `mihomo` 与 `clash` 代理内核
- ✅ **兼容性强**：支持 `root` 与普通用户环境
- ✅ **广泛适配**：适配主流 Linux 发行版，兼容 AutoDL 等容器化环境
- ✅ **智能端口**：自动检测端口占用，冲突时随机分配可用端口
- ✅ **自动识别**：自动识别系统架构与初始化系统，下载匹配的内核与依赖
- ✅ **订阅转换**：支持调用 subconverter 进行本地订阅转换

## 快速安装

在终端中执行以下命令即可完成安装：

```bash
git clone --branch master --depth 1 https://gh-proxy.org/https://github.com/nelvko/clash-for-linux-install.git \
  && cd clash-for-linux-install \
  && bash install.sh
```

安装完成后，你将获得一套完整的命令行管理工具。

## 命令详解

### 全局命令

```bash
clashctl COMMAND [OPTIONS]
```

| 命令 | 说明 |
|------|------|
| `on` | 开启代理 |
| `off` | 关闭代理 |
| `status` | 查看内核状况 |
| `proxy` | 系统代理控制 |
| `ui` | Web 面板管理 |
| `secret` | Web 密钥管理 |
| `sub` | 订阅管理 |
| `upgrade` | 升级内核 |
| `tun` | Tun 模式 |
| `mixin` | Mixin 配置 |

💡 提示：`clashon` 同 `clashctl on`，支持 `Tab` 补全更方便！

## 常用操作

### 启停代理

```bash
$ clashon
😼 已开启代理环境

$ clashoff
😼 已关闭代理环境
```

启停代理内核的同时会同步设置系统代理，也可以通过 `clashproxy` 单独控制系统代理。

### Web 控制台

```bash
$ clashui
╔═══════════════════════════════════════════════╗
║                😼 Web 控制台                  ║
║═══════════════════════════════════════════════║
║                                               ║
║     🔓 注意放行端口：9090                      ║
║     🏠 内网：http://192.168.0.1:9090/ui       ║
║     🌏 公网：http://8.8.8.8:9090/ui          ║
║     ☁️ 公共：http://board.zash.run.place      ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

通过浏览器访问 Web 控制台，可以进行可视化操作，如切换节点、查看日志等。默认使用 zashboard 作为控制台前端。

### 密钥管理

```bash
$ clashsecret mysecret
😼 密钥更新成功，已重启生效

$ clashsecret
😼 当前密钥：mysecret
```

### Mixin 配置

Mixin 允许你自定义配置内容，会与原始订阅进行深度合并，具有最高优先级：

```bash
$ clashmixin        # 查看 Mixin 配置
$ clashmixin -e     # 编辑 Mixin 配置
$ clashmixin -c     # 查看原始订阅配置
$ clashmixin -r     # 查看运行时配置
```

### 订阅管理

```bash
$ clashsub -h
Usage: 
  clashsub COMMAND [OPTIONS]
Commands:
  add <url>       添加订阅
  ls              查看订阅
  del <id>        删除订阅
  use <id>        使用订阅
  update [id]     更新订阅
  log             订阅日志
Options:
  update:
    --auto        配置自动更新
    --convert     使用订阅转换
```

- 支持添加本地订阅：`file:///root/clashctl/resources/config.yaml`
- 订阅链接包含特殊字符时，请使用引号包裹

### 内核升级

```bash
$ clashupgrade
😼 请求内核升级...
{"status":"ok"}
😼 内核升级成功
```

升级过程由代理内核自动完成，添加 `-v` 可查看详细日志。

### Tun 模式

```bash
$ clashtun
😾 Tun 状态：关闭

$ clashtun on
😼 Tun 模式已开启
```

Tun 模式可实现本机及 Docker 等容器的所有流量路由到 clash 代理、DNS 劫持等功能。

## 卸载

如需卸载，执行：

```bash
bash uninstall.sh
```

## 注意事项

1. 本项目主要目的为学习和研究 Shell 编程
2. 请勿将本项目内容用于违反法律法规的用途
3. 若需将控制台暴露到公网，建议定期更换访问密钥或使用 SSH 端口转发

## 项目链接

- **GitHub**：https://github.com/nelvko/clash-for-linux-install

---

如果你也在寻找一款简单易用的 Linux 代理解决方案，不妨试试这个项目，一键部署，开箱即用！
