---
title: 第一个exe程序
published: 2024-07-07
description: '这是我的第一个exe程序的介绍。'
image: ''
tags: [java, exe, Markdown]
category: 'Java'
draft: false 
---

## 前言

由于php网站搭建基本完成，也没有什么新东西可以写，所以就写写exe程序吧。

## 正文

### 准备工作

首先，你需要安装idea，然后创建一个java项目，然后创建一个main方法。

### 编写代码

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```


### 编译运行

编译运行，你会看到控制台输出`Hello World!`，说明程序运行成功。

### 改进

然后，我们可以改进一下程序，让它可以读取接受后端数据，并打印出来。

```java
代码略

```


### 打包成jar文件

1. 右键项目，选择`Build`，然后选择`Build Artifacts`，然后选择`jar`，然后点击`Build`。
2. 找到`target`文件夹，找到`jar`文件，右键，选择`Open`。
3. 打开后，你会看到一个`MANIFEST.MF`文件，这个文件是jar包的配置文件。
4. 编辑`MANIFEST.MF`文件，添加`Main-Class`属性，值为`HelloWorld`，然后保存。
5. 右键jar文件，选择`Build`，然后选择`Build`。

### 编译为exe文件

1. 下载`exe4j`，安装。
2. 打开`exe4j`，点击`New`，然后选择`Java Application`。
3. 输入项目名称，点击`Next`。
4. 选择`Use existing JRE`，然后点击`Next`。
5. 选择`Add JAR/WAR/Ear`，然后选择刚才编译好的jar文件，点击`Next`。
6. 点击`Finish`。
7. 点击`Project`，然后点击`Build`。
8. 找到`dist`文件夹，找到`exe`文件，右键，选择`Open`。
9. 打开后，你会看到一个`exe`文件，双击运行。


## 后记

这是一个简单的exe程序，仅供参考。
下载链接：[蓝奏云](https://li1023.lanzouw.com/inQ7F23iy1pe)