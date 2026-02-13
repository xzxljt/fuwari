---
title: iFlow CLI 重磅更新：内置智谱 GLM-5 和 MiniMax-M2.5 两大顶流模型
published: 2026-02-13T15:22:53
description: 阿里心流AI团队推出的免费终端AI智能体iflowCLI迎来重磅更新，内置智谱GLM-5和MiniMax-M2.5两大最新大模型
image: https://img.312522.xyz/file/1770963306818_Screenshot_2026-02-13-14-14-23-064_com.server.auditor.ssh.client-edit.jpg
tags: [AI, 开发工具, iflowCLI, 智谱GLM-5, MiniMax]
category: 技术分享
---

# iFlow CLI 重磅更新：内置智谱 GLM-5 和 MiniMax-M2.5 两大顶流模型

![iflowCLI](https://img.312522.xyz/file/1770963306818_Screenshot_2026-02-13-14-14-23-064_com.server.auditor.ssh.client-edit.jpg)

对于开发者而言，高效又免费的 AI 编程助手堪称"摸鱼神器"。不用切换窗口、不用繁琐配置、无需付费，打开终端就能调用 AI 搞定代码相关需求，这样的工具谁能拒绝？

就在刚刚，阿里心流 AI 团队推出的免费终端 AI 智能体 iflowCLI 迎来重磅更新，核心亮点的是内置智谱 GLM-5 和 MiniMax-M2.5 两大最新大模型，开发者必冲！

## 两大顶流模型内置，实现"模型自由"

iflowCLI 最让开发者们省心的地方，就是无需用户自行申请 API、手动配置，国产顶流模型直接打包内置，安装后即可调用，打通"终端+AI"使用壁垒。

**GLM-5（智谱）**作为开源 SOTA 级模型，编程体验接近行业标杆，擅长复杂系统开发、bug 调试和技术文档生成，实力出众；**MiniMax-M2.5**其编程与智能体性能 (Coding & Agentic) 比肩国际顶尖模型，直接对标 Claude Opus 4.6，支持 PC、App、跨端应用的全栈编程开发，尤其在 Excel 高阶处理、深度调研、PPT 等 Office 核心生产力场景中均处于行业领先（SOTA）地位。

## 零门槛上手，免费无负担

iflowCLI 全程免费，无需付费订阅，无论是资深开发者还是新手，都能快速上手。支持多系统，安装命令简单，附上最简上手教程（含更新最新版本、切换模型操作），看完即会：

### 1. 安装

**macOS/Linux**

```bash
# 一键安装脚本，会安装全部所需依赖
bash -c "$(curl -fsSL https://gitee.com/iflow-ai/iflow-cli/raw/main/install.sh)"

# 已有 Node.js 22+
npm i -g @iflow-ai/iflow-cli@latest
```

**Windows**

1. 访问 https://nodejs.org/zh-cn/download 下载最新的 Node.js 安装程序
2. 运行安装程序来安装 Node.js
3. 重启终端：CMD(Windows + r 输入cmd) 或 PowerShell
4. 运行 `npm install -g @iflow-ai/iflow-cli@latest` 来安装 iFlow CLI
5. 运行 `iflow` 来启动 iFlow CLI

### 2. 更新

更新至最新版本（0.5.13 版，才能使用 GLM-5 和 MiniMax）：

```bash
# 更新命令
npm i -g @iflow-ai/iflow-cli@latest

# 查看最新版本
iflow -v
```

等待安装完成即可，无需卸载旧版本，会自动覆盖更新，更新后可输入 `iflow -v` 验证是否为最新版。

全程操作简单，高效不打断工作流，新手也能一键上手。

## 不止编程，多场景全能适配

除了核心的编程辅助，iflowCLI 还能处理文档转换、通过自然语言执行终端命令，灵活性拉满。

阿里出品保障稳定性，免费 + 多模型 + 零配置，iflowCLI 这次更新直接击中开发者痛点。目前更新已全面上线，感兴趣的开发者可自行安装体验。

---

> 💡 **关注我的微信公众号**
>
> 更多技术干货和工具分享，欢迎关注我的微信公众号：[点击关注](https://mp.weixin.qq.com/s/9VRq3eKcSi3YVBKU4g129Q)
>
> 每周更新最新技术动态和实战经验，期待与您交流！