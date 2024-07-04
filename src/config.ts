// 引入所需的类型定义
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'

// 导航栏链接预设类型
import { LinkPreset } from './types/config'

// 网站配置
export const siteConfig: SiteConfig = {
  title: '晚夜深秋', // 网站标题
  subtitle: 'li1023.cn', // 网站副标题
  lang: 'zh_CN', // 网站语言设置为简体中文
  themeColor: {
    hue: 250, // 主题色的色相，范围从0到360。这里设置为青色
    fixed: false, // 是否固定主题色，这里设置为不固定
  },
  banner: {
    enable: true, // 是否启用横幅广告
    src: 'assets/images/demo-banner.png', // 横幅广告图片路径，相对于 /src 目录
    position: 'center', // 图片在横幅中的位置，默认居中
  },
  favicon: [
    // 网站图标配置，这里留空表示使用默认图标
    {
      src: 'favicon/icon.png', // 图标路径，相对于 /public 目录
      theme: 'light', // （可选）'light'或'dark'，仅在有不同主题模式下使用不同图标时设置
      sizes: '32x32', // （可选）图标大小，仅在有多个大小的图标时设置
    },
  ],
}

// 导航栏配置
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home, // 预设的主页链接
    LinkPreset.Archive, // 预设的存档链接
    LinkPreset.About, // 预设的关于页面链接
    {
      name: 'GitHub', // 自定义链接名称
      url: 'https://github.com/li1023qwq/blog', // 链接地址，这是一个外部链接
      external: true, // 是否为外部链接，将在新标签页中打开
    },
  ],
}

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png', // 头像路径，相对于 /src 目录
  name: '晚夜深秋', // 姓名
  bio: '光是遇见,就已经很美好了!❤️', // 个人简介
  links: [
    {
      name: 'Twitter', // 社交链接名称
      icon: 'fa6-brands:twitter', // 图标代码，参见 https://icones.js.org/ 获取图标代码
      // 如果需要使用对应的图标集，请安装对应的图标集
      // `pnpm add @iconify-json/<icon-set-name>`
      url: '#', // 链接地址
    },
    {
      name: 'Steam', // 社交链接名称
      icon: 'fa6-brands:steam', // Steam 的图标代码
      url: '#', // 链接地址
    },
    {
      name: 'GitHub', // 社交链接名称
      icon: 'fa6-brands:github', // GitHub 的图标代码
      url: 'https://github.com/li1023qwq/blog', // 链接地址
    },
  ],
}

// 版权信息配置
export const licenseConfig: LicenseConfig = {
  enable: true, // 启用版权信息显示
  name: 'CC BY-NC-SA 4.0', // 版权名称
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // 版权协议链接地址
}
