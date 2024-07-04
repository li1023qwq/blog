<script lang="ts">
import { onMount } from 'svelte'
import { url } from "@utils/url-utils.ts"
import { i18n } from '@i18n/translation';
import I18nKey from '@i18n/i18nKey';

let keywordDesktop = '' // 桌面端搜索关键词
let keywordMobile = '' // 移动端搜索关键词
let result = [] // 搜索结果数组

// 假的搜索结果数据，仅用于开发环境
const fakeResult = [{
    url: url('/'),
    meta: {
        title: '这是假搜索结果'
    },
    excerpt: '因为搜索在开发环境中无法工作。'
}, {
    url: url('/'),
    meta: {
        title: '如果你想测试搜索'
    },
    excerpt: '请尝试运行 <mark>npm build && npm preview</mark>。'
}]

// 定义搜索函数
let search = (关键词: string, 是桌面端: boolean) => {}

// 组件挂载时执行的操作
onMount(() => {
    search = async (关键词: string, 是桌面端: boolean) => {
        let 面板 = document.getElementById('search-panel')
        if (!面板) return

        if (!关键词 && 是桌面端) {
            面板.classList.add("float-panel-closed")
            return
        }

        let 搜索结果 = [];
        if (import.meta.env.PROD) {
            const 返回结果 = await pagefind.search(关键词)
            for (const 项目 of 返回结果.results) {
                搜索结果.push(await 项目.data())
            }
        } else {
            // 非生产环境下使用假数据
            搜索结果 = fakeResult
        }

        if (!搜索结果.length && 是桌面端) {
            面板.classList.add("float-panel-closed")
            return
        }

        if (是桌面端) {
            面板.classList.remove("float-panel-closed")
        }
        result = 搜索结果
    }
})

// 切换搜索面板的显示状态
const 切换面板 = () => {
    let 面板 = document.getElementById('search-panel')
    面板?.classList.toggle("float-panel-closed")
}

// 监视 keywordDesktop 和 keywordMobile 的变化，触发搜索
$: search(keywordDesktop, true)
$: search(keywordMobile, false)
</script>

<!-- 桌面端的搜索栏 -->
<div id="search-bar" class="hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg白/10
">
    <slot name="search-icon"></slot>
    <input placeholder="{i18n(I18nKey.search)}" bind:value={keywordDesktop} on:focus={() => search(keywordDesktop, true)}
           class="transition-all pl-10 text-sm bg-transparent outline-0
         h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"
    >
</div>

<!-- 手机/平板端的搜索按钮 -->
<button on:click={切换面板} aria-label="搜索面板" id="search-switch"
        class="btn-plain scale-animation lg:hidden rounded-lg w-11 h-11 active:scale-90">
    <slot name="search-switch"></slot>
</button>

<!-- 搜索面板 -->
<div id="search-panel" class="float-panel float-panel-closed search-panel absolute md:w-[30rem]
top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2">

    <!-- 面板内的搜索栏（用于手机/平板） -->
    <div id="search-bar-inside" class="flex relative lg:hidden transition-all items-center h-11 rounded-xl
      bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06]
      dark:bg白/5 dark:hover:bg白/10 dark:focus-within:bg白/10
  ">
        <slot name="search-icon"></slot>
        <input placeholder="搜索" bind:value={keywordMobile}
               class="pl-10 absolute inset-0 text-sm bg-transparent outline-0
               focus:w-60 text-black/50 dark:text-white/50"
        >
    </div>

    <!-- 搜索结果展示 -->
    {#each result as 项目}
        <a href={项目.url}
           class="transition first-of-type:mt-2 lg:first-of-type:mt-0 group block
       rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]">
            <div class="transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]">
                {项目.meta.title}<slot name="arrow-icon"></slot>
            </div>
            <div class="transition text-sm text-50">
                {@html 项目.excerpt}
            </div>
        </a>
    {/each}
</div>
