---
title: 免费薅羊毛！英伟达NIM平台开放GLM-4.7和MiniMax-M2，3分钟获取免费API
published: 2026-02-20T17:51:57
description: '英伟达 NIM 平台提供 1000 免费积分，可调用 GLM-4.7 和 MiniMax-M2 等顶级国产模型。GLM-4.7 参数量 358B，AIME 2025 得分 95.7%；MiniMax-M2 为 230B MoE 架构，SWE-bench Verified 达 69.4。'
image: 'https://img.312522.xyz/file/1771580808403_nvidia_nim_1.png'
tags: [AI, NVIDIA, NIM, 免费API, GLM-4.7, MiniMax]
category: '技术教程'
draft: false
lang: ''
---

## 前言

英伟达 NIM 平台提供 **1000 免费积分**，可调用包括 **GLM-4.7** 和 **MiniMax-M2** 在内的 180+ 顶级模型！

![NVIDIA NIM 平台](https://img.312522.xyz/file/1771580808403_nvidia_nim_1.png)

这两个国产模型有多强？

- **GLM-4.7**：358B 参数，AIME 2025 数学竞赛得分 95.7%，HMMT Feb. 2025 达 97.1%
- **MiniMax-M2**：230B 总参数 / 10B 激活参数，SWE-bench Verified 69.4，编程能力直逼 Claude

下面手把手教你 3 分钟获取免费 API Key。

---

## 模型详解

### GLM-4.7

GLM-4.7 是智谱 AI（Zhipu AI）开发的大型语言模型，专为编程、推理和工具调用优化。

**核心参数：**

| 参数 | 值 |
|------|-----|
| 总参数量 | 358B |
| 上下文长度 | 131,072 tokens |
| 基础模型 | GLM-4.5/GLM-4.6 |
| 发布时间 | 2026年1月 |

**特色能力：**
- 🧠 **Interleaved Thinking**：交错思维模式，更稳定的复杂任务执行
- 🔧 **工具调用**：原生支持多轮工具调用
- 💻 **多语言编程**：支持多语言智能体编程
- 🖥️ **终端任务**：优化终端自动化操作
- 🎨 **UI 生成**：增强的界面生成能力

**基准测试成绩：**

| 基准测试 | GLM-4.7 | 说明 |
|----------|---------|------|
| AIME 2025 | 95.7% | 数学竞赛 |
| HMMT Feb. 2025 | 97.1% | 高级数学 |
| GPQA-Diamond | 85.7% | 科学问答 |
| LiveCodeBench-v6 | 84.9% | 编程能力 |
| SWE-bench Verified | 73.8% | 软件工程 |
| τ²-Bench | 87.4% | 智能体任务 |

### MiniMax-M2

MiniMax-M2 是 MiniMax 公司推出的开源 MoE（Mixture-of-Experts）模型，专为编程和智能体工作流设计。

**核心参数：**

| 参数 | 值 |
|------|-----|
| 总参数量 | 230B |
| 激活参数 | 10B |
| 上下文长度 | 128,000 tokens |
| 发布时间 | 2025年10月 |

**特色能力：**
- ⚡ **高效推理**：仅激活 10B 参数，速度快、成本低
- 🛠️ **端到端工具调用**：多文件编辑、运行-修复循环
- 🖥️ **终端操作**：复杂长链工具调用
- 🌐 **网页浏览**：检索、引用一体化

**基准测试成绩：**

| 基准测试 | MiniMax-M2 | 说明 |
|----------|------------|------|
| SWE-bench Verified | 69.4 | 软件工程 |
| Multi-SWE-Bench | 36.2 | 多语言编程 |
| Terminal-Bench | 46.3 | 终端操作 |
| MMLU-Pro | 82 | 综合能力 |
| LiveCodeBench | 83 | 编程能力 |
| GPQA-Diamond | 78 | 科学问答 |

---

## 1、注册账号（3 分钟搞定）

打开 [build.nvidia.com](https://build.nvidia.com)，点击右上角 **Login**。

![登录入口](https://img.312522.xyz/file/1771580815402_nvidia_nim_2.png)

填写邮箱注册账号，手机号码可以填国内手机号，前面改成 **+86** 即可。

![注册页面](https://img.312522.xyz/file/1771580823039_nvidia_nim_3.png)

---

## 2、生成 API Key

登录后，点击 **Manage API Keys**，进入后点击 **Generate API Key**。

![API Key 管理](https://img.312522.xyz/file/1771580829042_nvidia_nim_4.png)

给 Key 起个名字，过期时间选 **永不过期**（100 年）。

赶紧复制保存！这个 Key 能调用 NIM 上所有模型，相当于一张**通吃卡**。

---

## 3、免费额度说明

注册即可获得：

- **1000 免费 API 积分**（初始额度）
- 可申请额外 **4000 积分**
- **40 请求/分钟** 速率限制
- 无需信用卡

---

## 4、Cherry Studio 配置

接入 Cherry Studio 进行测试：

1. 右上角小齿轮 → **设置** → **模型服务** → **添加**
2. 输入「NVIDIA」，点击确定

### 配置连接信息

| 配置项 | 值 |
|--------|-----|
| API 密钥 | 粘贴刚才生成的 Key |
| API 地址 | `https://integrate.api.nvidia.com/v1` |

### 可用模型

- `z-ai/glm4.7` - GLM-4.7
- `minimaxai/minimax-m2` - MiniMax-M2

![Cherry Studio 配置](https://img.312522.xyz/file/1771580832633_nvidia_nim_5.png)

---

## 使用示例

### Python 调用

```python
import openai

client = openai.OpenAI(
    api_key="your-nvidia-api-key",
    base_url="https://integrate.api.nvidia.com/v1"
)

response = client.chat.completions.create(
    model="z-ai/glm4.7",
    messages=[
        {"role": "user", "content": "你好，请介绍一下你自己"}
    ]
)

print(response.choices[0].message.content)
```

### cURL 调用

```bash
curl https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Authorization: Bearer your-nvidia-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "z-ai/glm4.7",
    "messages": [{"role": "user", "content": "你好"}]
  }'
```

---

## 更多免费模型

NVIDIA NIM 平台支持 180+ 模型，部分热门模型：

| 模型 | 提供商 | 说明 |
|------|--------|------|
| GLM-4.7 | Z.ai (智谱) | 358B 参数，编程推理强 |
| MiniMax-M2 | MiniMax | 230B MoE，智能体优化 |
| DeepSeek-V3 | DeepSeek | 国产开源旗舰 |
| Kimi-K2 | Moonshot | 长文本处理优秀 |
| Llama 3.1 | Meta | 开源标杆 |
| Qwen2.5 | 阿里 | 多语言能力强 |

---

## 常见问题

### Q: API 是完全免费的吗？

注册送 1000 积分，可申请额外 4000 积分。速率限制 40 请求/分钟。

### Q: 支持哪些客户端？

支持所有兼容 OpenAI API 格式的客户端：
- Cherry Studio
- ChatBox
- NextChat
- LobeChat
- Cursor

### Q: 国内可以访问吗？

NVIDIA 服务器在国内可正常访问，无需代理。

---

## 总结

英伟达 NIM 平台的免费 API 福利：

- ✅ 注册即送 1000 积分，可申请额外 4000
- ✅ 支持 180+ 顶级模型
- ✅ 40 请求/分钟，无信用卡
- ✅ 兼容 OpenAI API 格式

赶快去薅羊毛吧！

---

**相关链接**：
- [NVIDIA NIM 平台](https://build.nvidia.com)
- [GLM-4.7 Model Card](https://build.nvidia.com/z-ai/glm4_7/modelcard)
- [MiniMax-M2 Model Card](https://build.nvidia.com/minimaxai/minimax-m2/modelcard)
- [智谱 AI 官网](https://bigmodel.cn)
- [MiniMax 官网](https://minimaxi.com)
