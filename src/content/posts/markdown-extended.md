---
title: Markdown 扩展功能
published: 2024-05-01
description: '阅读更多关于Markdown功能的信息'
image: ''
tags: [示例, 例子, Markdown]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
你可以添加链接到GitHub仓库的动态卡片，页面加载时，仓库信息会从GitHub API中获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建一个GitHub仓库卡片。

```markdown
::github{repo="li1023qwq/blog"}
```

## 警告框

支持以下类型的警告框：`note` `tip` `important` `warning` `caution`

:::note
强调用户在浏览时应注意的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
需要用户立即注意的关键内容，因存在潜在风险。
:::

:::caution
行动可能产生的负面后果。
:::

```markdown
:::note
强调用户在浏览时应注意的信息。
:::

:::tip
帮助用户更成功的可选信息。
:::
```

警告框的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::
```

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也被支持。

```
> [!NOTE]
> 也支持GitHub语法。

> [!TIP]
> 也支持GitHub语法。
```