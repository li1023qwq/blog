import fs from 'fs' // 引入文件系统模块
import path from 'path' // 引入路径模块

// 获取当前日期并格式化为 YYYY-MM-DD
function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

// 获取命令行参数
const args = process.argv.slice(2)

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`) // 错误提示，没有提供文件名参数
  process.exit(1) // 终止脚本并返回错误代码1
}

let fileName = args[0]

// 如果文件名没有扩展名，则添加 .md 扩展名
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += '.md'
}

const targetDir = './src/content/posts/' // 目标目录
const fullPath = path.join(targetDir, fileName) // 生成完整路径

if (fs.existsSync(fullPath)) {
  console.error(`Error：File ${fullPath} already exists `) // 错误提示，文件已存在
  process.exit(1)
}

// Markdown 文件内容，包含前端数据
const content = `---
title: ${args[0]}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
---
`

// 写入文件
fs.writeFileSync(path.join(targetDir, fileName), content)

console.log(`Post ${fullPath} created`) // 成功提示，文件已创建
