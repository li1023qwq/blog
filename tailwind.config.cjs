/** @type {import('tailwindcss').Config} */
// 引入 Tailwind CSS 的默认主题配置
const defaultTheme = require('tailwindcss/defaultTheme')

// 导出 Tailwind CSS 配置
module.exports = {
  // 指定需要扫描以生成样式的文件路径
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}'],
  // 配置暗黑模式，使用类名进行切换
  darkMode: 'class', // 允许手动切换暗黑模式
  theme: {
    // 扩展默认主题配置
    extend: {
      // 扩展字体系列
      fontFamily: {
        sans: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // 加载 Tailwind CSS 插件
  plugins: [
    require('@tailwindcss/typography'), // 引入排版插件
  ],
}
