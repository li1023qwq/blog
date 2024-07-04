// 从配置类型定义文件中引入 Favicon 类型
import type { Favicon } from '@/types/config.ts'

// 定义默认的 favicon 配置数组
export const defaultFavicons: Favicon[] = [
  {
    src: '/favicon/favicon-light-32.png', // 图标文件路径
    theme: 'light', // 主题，表示该图标用于浅色主题
    sizes: '32x32', // 图标尺寸
  },
  {
    src: '/favicon/favicon-light-128.png', // 图标文件路径
    theme: 'light', // 主题，表示该图标用于浅色主题
    sizes: '128x128', // 图标尺寸
  },
  {
    src: '/favicon/favicon-light-180.png', // 图标文件路径
    theme: 'light', // 主题，表示该图标用于浅色主题
    sizes: '180x180', // 图标尺寸
  },
  {
    src: '/favicon/favicon-light-192.png', // 图标文件路径
    theme: 'light', // 主题，表示该图标用于浅色主题
    sizes: '192x192', // 图标尺寸
  },
  {
    src: '/favicon/favicon-dark-32.png', // 图标文件路径
    theme: 'dark', // 主题，表示该图标用于深色主题
    sizes: '32x32', // 图标尺寸
  },
  {
    src: '/favicon/favicon-dark-128.png', // 图标文件路径
    theme: 'dark', // 主题，表示该图标用于深色主题
    sizes: '128x128', // 图标尺寸
  },
  {
    src: '/favicon/favicon-dark-180.png', // 图标文件路径
    theme: 'dark', // 主题，表示该图标用于深色主题
    sizes: '180x180', // 图标尺寸
  },
  {
    src: '/favicon/favicon-dark-192.png', // 图标文件路径
    theme: 'dark', // 主题，表示该图标用于深色主题
    sizes: '192x192', // 图标尺寸
  },
]
