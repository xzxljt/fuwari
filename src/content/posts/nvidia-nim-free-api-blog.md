---
title: 免费薅羊毛！英伟达NIM平台开放GLM-4.7和MiniMax M2.1，3分钟获取免费API
published: 2026-02-20T17:38:23
description: '老黄的英伟达 NIM 平台悄咪咪上了两个国产顶流模型：智谱 GLM-4.7 和 MiniMax M2.1，API 免费调用！本文手把手教你 3 分钟获取免费 API Key。'
image: 'https://img.312522.xyz/file/1771579635665_v2-105f6d3244693f10204cc66021596080_1440w.webp'
tags: [AI, NVIDIA, NIM, 免费API, GLM-4.7, MiniMax]
category: '技术教程'
draft: false
lang: ''
---

## 前言

老黄的英伟达 NIM 平台悄咪咪上了两个国产顶流：**智谱 GLM-4.7** 和 **MiniMax M2.1**，API 免费调用！

![NVIDIA NIM 平台](https://img.312522.xyz/file/1771579635665_v2-105f6d3244693f10204cc66021596080_1440w.webp)

这意味着你可以免费使用这两个强大的国产大模型，无需繁琐的申请流程，注册即用。下面手把手教你 3 分钟搞定。

---

## 1、注册账号（3 分钟搞定）

打开 [build.nvidia.com](https://build.nvidia.com)，点击右上角 **Login**。

![登录入口](https://img.312522.xyz/file/1771579637568_v2-26394ccfdd51c309fbc1f0d50265cc6a_1440w.webp)

填写邮箱注册账号，手机号码可以填国内手机号，前面改成 **+86** 即可。

![注册页面](https://img.312522.xyz/file/1771579640421_v2-bd714a21982a2042e6661f8e4ffaf872_1440w.webp)

---

## 2、生成 API Key

登录后，点击 **Manage API Keys**，进入后点击 **Generate API Key**。

![API Key 管理](https://img.312522.xyz/file/1771579635822_v2-d823336645158a4bf0286cad3e2395d7_1440w.webp)

给 Key 起个名字，过期时间选 **永不过期**（就是 100 年）。

赶紧复制保存！这个 Key 能调用 NIM 上所有免费模型，相当于一张**通吃卡**。

---

## 3、Cherry Studio 测试

接入 Cherry Studio 进行测试：

1. 右上角小齿轮 → **设置** → **模型服务** → **添加**
2. 输入「老黄」，点击确定

### 配置连接信息

| 配置项 | 值 |
|--------|-----|
| API 密钥 | 粘贴刚才生成的 Key |
| API 地址 | `https://integrate.api.nvidia.com/v1` |

### 可用模型

- `z-ai/glm4.7`
- `minimaxai/minimax-m2.1`

![Cherry Studio 配置](https://img.312522.xyz/file/1771579642977_v2-199fc20ab776adfdd5710a4e49591999_1440w.webp)

---

## 可用模型列表

NVIDIA NIM 平台目前支持的免费模型：

| 模型 | 提供商 | 说明 |
|------|--------|------|
| GLM-4.7 | 智谱 AI | 国产顶流，综合能力强 |
| MiniMax M2.1 | MiniMax | 长文本处理优秀 |

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

## 常见问题

### Q: API 是完全免费的吗？

目前 NIM 平台提供免费额度，具体限制请查看官网说明。

### Q: 支持哪些客户端？

支持所有兼容 OpenAI API 格式的客户端，如：
- Cherry Studio
- ChatBox
- NextChat
- LobeChat
- 等等

### Q: 国内可以访问吗？

NVIDIA 服务器在国内可正常访问，无需代理。

---

## 总结

英伟达 NIM 平台开放国产模型是一个利好消息：

- ✅ 注册简单，3 分钟搞定
- ✅ API Key 永不过期
- ✅ 支持多个国产顶流模型
- ✅ 兼容 OpenAI API 格式

赶快去薅羊毛吧！

---

**相关链接**：
- [NVIDIA NIM 平台](https://build.nvidia.com)
- [智谱 AI 官网](https://bigmodel.cn)
- [MiniMax 官网](https://minimaxi.com)
