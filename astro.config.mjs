import sitemap from '@astrojs/sitemap' // 引入站点地图插件
import svelte from '@astrojs/svelte' // 引入 Svelte 集成
import tailwind from '@astrojs/tailwind' // 引入 Tailwind CSS 集成
import swup from '@swup/astro' // 引入 Swup 集成，用于页面切换动画
import Compress from 'astro-compress' // 引入压缩插件
import icon from 'astro-icon' // 引入图标插件
import { defineConfig } from 'astro/config' // 引入 Astro 配置函数
import Color from 'colorjs.io' // 引入颜色转换库
import rehypeAutolinkHeadings from 'rehype-autolink-headings' // 引入 rehype 插件，自动为标题添加链接
import rehypeComponents from 'rehype-components' // rehype 插件，渲染自定义指令内容
import rehypeKatex from 'rehype-katex' // 引入 rehype 插件，支持 KaTeX 数学公式
import rehypeSlug from 'rehype-slug' // 引入 rehype 插件，为标题生成 slug
import remarkDirective from 'remark-directive' // 引入 remark 插件，处理指令
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives' // 将 GitHub 警告转换为指令
import remarkMath from 'remark-math' // 引入 remark 插件，支持 Markdown 中的数学公式
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs' // 引入自定义警告组件
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs' // 引入自定义 GitHub 卡片组件
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js' // 引入自定义指令解析插件
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs' // 引入自定义插件，计算阅读时间

// oklch 颜色转换为 hex 颜色
const oklchToHex = str => {
  const DEFAULT_HUE = 250
  const regex = /-?\d+(\.\d+)?/g
  const matches = str.string.match(regex)
  const lch = [matches[0], matches[1], DEFAULT_HUE]
  return new Color('oklch', lch).to('srgb').toString({
    format: 'hex',
  })
}

// https://astro.build/config
export default defineConfig({
  site: 'https://wan.li1023.cn/', // 站点 URL
  base: '/', // 基础路径
  trailingSlash: 'always', // URL 末尾总是带斜杠
  integrations: [
    tailwind(), // 集成 Tailwind CSS
    swup({
      theme: false,
      animationClass: 'transition-',
      containers: ['main'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      globalInstance: true,
    }), // 集成 Swup
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }), // 集成图标插件
    Compress({
      Image: false,
    }), // 集成压缩插件，禁用图像压缩
    svelte(), // 集成 Svelte
    sitemap(), // 生成站点地图
  ],
  markdown: {
    remarkPlugins: [
      remarkMath, // 支持数学公式
      remarkReadingTime, // 计算阅读时间
      remarkGithubAdmonitionsToDirectives, // 转换 GitHub 警告为指令
      remarkDirective, // 处理指令
      parseDirectiveNode, // 自定义指令解析
    ],
    rehypePlugins: [
      rehypeKatex, // 支持 KaTeX 数学公式
      rehypeSlug, // 为标题生成 slug
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent, // GitHub 卡片组件
            note: (x, y) => AdmonitionComponent(x, y, 'note'), // Note 警告组件
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'), // Tip 警告组件
            important: (x, y) => AdmonitionComponent(x, y, 'important'), // Important 警告组件
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'), // Caution 警告组件
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'), // Warning 警告组件
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              className: ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // 临时抑制此警告
          if (
            warning.message.includes('is dynamically imported by') &&
            warning.message.includes('but also statically imported by')
          ) {
            return
          }
          warn(warning)
        },
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex: oklchToHex, // 定义自定义颜色转换函数
          },
        },
      },
    },
  },
})
