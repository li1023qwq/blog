// 从配置类型定义文件中引入 LinkPreset 和 NavBarLink 类型
import { LinkPreset, type NavBarLink } from '@/types/config'
// 从 i18n 文件中引入 I18nKey 枚举类型
import I18nKey from '@i18n/i18nKey'
// 引入 i18n 翻译函数
import { i18n } from '@i18n/translation'

// 定义 LinkPresets 对象，用于存储导航栏链接的预设配置
export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  // 首页链接预设
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home), // 链接名称，通过 i18n 函数获取本地化的文本
    url: '/', // 链接 URL
  },
  // 关于页链接预设
  [LinkPreset.About]: {
    name: i18n(I18nKey.about), // 链接名称，通过 i18n 函数获取本地化的文本
    url: '/about/', // 链接 URL
  },
  // 存档页链接预设
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive), // 链接名称，通过 i18n 函数获取本地化的文本
    url: '/archive/', // 链接 URL
  },
}
