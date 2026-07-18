# 开发环境与网页工作原理

## 需要安装什么

前端入门的门槛极低，只需要两样：

1. **一个现代浏览器**：推荐 Chrome 或 Edge，自带强大的开发者工具（DevTools）。
2. **一个代码编辑器**：推荐 [VS Code](https://code.visualstudio.com/)，免费、轻量、生态丰富。

### 推荐的 VS Code 扩展

| 扩展 | 作用 |
| --- | --- |
| Live Server | 右键一键启动本地服务器，保存文件后浏览器自动刷新 |
| Prettier | 自动格式化代码，保持缩进和风格统一 |
| Chinese (Simplified) Language Pack | 界面中文化（可选） |

## 你的第一个网页

1. 新建一个文件夹，比如 `my-first-page`，用 VS Code 打开它。
2. 新建文件 `index.html`，输入以下内容：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>我的第一个网页</title>
  </head>
  <body>
    <h1>你好，世界！</h1>
    <p>这是我写的第一个网页。</p>
  </body>
</html>
```

3. 右键文件 → **Open with Live Server**（或直接双击文件用浏览器打开）。

看到页面了吗？恭喜，你已经是一名（初级的初级的）前端开发者了。

::: tip 小技巧
在 VS Code 的 HTML 文件中输入 `!` 然后按 Tab 键，会自动生成完整的 HTML 骨架。这是 Emmet 缩写功能，后面会经常用到。
:::

## 网页是如何到达你眼前的

理解这个流程，很多概念会突然变得清晰：

1. **你输入网址（URL）**：如 `https://www.example.com/index.html`。
2. **浏览器发起 HTTP 请求**：向该网址对应的服务器要文件。
3. **服务器返回 HTML 文件**：本质上就是一个文本文件。
4. **浏览器解析 HTML**：遇到 `<link>` 就去下载 CSS，遇到 `<img>` 就去下载图片，遇到 `<script>` 就去下载并执行 JavaScript。
5. **浏览器渲染页面**：把 HTML 结构和 CSS 样式结合起来，画在屏幕上。

用 Live Server 打开页面时，你的电脑同时扮演了“服务器”和“浏览器”两个角色。

## 前端三件套的分工

| 技术 | 角色 | 类比 |
| --- | --- | --- |
| HTML | 结构：页面上**有什么** | 房子的骨架和房间 |
| CSS | 表现：页面**长什么样** | 装修、涂料和家具摆放 |
| JavaScript | 行为：页面**能做什么** | 水电、开关和电器 |

本指南专注前两者。**结构与表现分离**是前端最重要的设计原则之一：HTML 只管内容和语义，样式交给 CSS。你以后会不断看到这个原则的影子。

## 练习

1. 完成上面的“第一个网页”，把 `<h1>` 里的文字换成你的名字。
2. 故意删掉 `</h1>` 的斜杠（写成 `<h1>`），保存后观察页面变化，再改回来。
3. 在 `<body>` 里多加两个 `<p>` 段落，写写你为什么想学前端。
