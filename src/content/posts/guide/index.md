---
title: 使用指南
published: 2024-04-01
description: "如何使用这个博客模板。"
image: "https://www.toopic.cn/public/uploads/small/1634204730217163420473049.jpg"
tags: ["博客", "自定义"]
category: 指南
draft: false
---

> 封面图片来源：[Toopic](https://www.toopic.cn/)

这个博客模板是用[Astro](https://astro.build/)构建的。对于本指南中未提及的内容，您可以在[Astro文档](https://docs.astro.build/)中找到答案。

## 文章的Front-matter

```yaml
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我新的Astro博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: 前端
draft: false
```

| 属性          | 描述                                                                                                                                                                                                        |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题。                                                                                                                                                                                                  |
| `published`   | 文章发布时间。                                                                                                                                                                                              |
| `description` | 文章的简短描述。显示在首页。                                                                                                                                                                                 |
| `image`       | 文章的封面图片路径。<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：使用`public`目录中的图片<br/>3. 不带任何前缀：相对于Markdown文件的位置                                 |
| `tags`        | 文章的标签。                                                                                                                                                                                                |
| `category`    | 文章的分类。                                                                                                                                                                                                |
| `draft`       | 如果这篇文章是草稿，将不会显示。                                                                                                                                                                             |

## 文章文件放置位置

您的文章文件应放置在`src/content/posts/`目录中。您还可以创建子目录，以更好地组织您的文章和资源。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```