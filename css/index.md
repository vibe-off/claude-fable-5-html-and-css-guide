# 认识 CSS

CSS（Cascading Style Sheets，层叠样式表）负责网页的**外观**：颜色、字体、间距、布局、动画。HTML 决定“有什么”，CSS 决定“长什么样”。

## CSS 规则的语法

```css
selector {
  property: value;
}
```

一条真实的规则：

```css
p {
  color: #333;
  line-height: 1.6;
}
```

- **选择器（selector）**：`p`——选中页面上所有的段落。
- **声明块**：花括号里的内容。
- **声明（declaration）**：`color: #333;`——属性名、冒号、属性值、分号。

::: warning 两个最常见的语法错误
1. 忘写分号：`color: #333` 后面没有分号，会导致**下一条声明也失效**。
2. 属性名拼错：写成 `colour`、`font-weigth`——CSS 不报错，只是默默忽略。样式没生效时，先检查拼写（DevTools 会用黄色感叹号提示无效属性）。
:::

## 把 CSS 用到页面上的三种方式

### 1. 外部样式表（推荐，实际开发的标准做法）

```html
<!-- index.html 的 head 里 -->
<link rel="stylesheet" href="./styles.css" />
```

```css
/* styles.css */
h1 {
  color: steelblue;
}
```

结构与样式分离、多个页面可以共用同一份 CSS、浏览器还能缓存它。

### 2. 内部样式表

```html
<head>
  <style>
    h1 {
      color: steelblue;
    }
  </style>
</head>
```

适合单文件的小 Demo 和练习。

### 3. 行内样式（尽量避免）

```html
<h1 style="color: steelblue;">标题</h1>
```

样式和结构混在一起、无法复用、优先级极高难以覆盖。只在极少数场景（如 JavaScript 动态计算的样式）里合理。

::: tip 本指南的练习建议
练习时用外部样式表，养成 `index.html` + `styles.css` 两个文件配合的习惯——这就是真实项目的最小结构。
:::

## 注释

```css
/* CSS 只有这一种注释，没有双斜杠注释 */
p {
  color: #333; /* 可以写在行尾 */
}
```

## “层叠”是什么意思

CSS 的第一个字母 C 是 Cascading（层叠）：**多条规则可以同时作用于同一个元素，浏览器按一套固定的规则决定谁生效**。

```css
p {
  color: blue;
}

p {
  color: red; /* 后写的覆盖先写的：段落最终是红色 */
}
```

现在只需要记住“后来者居上”这个最简单的情况。完整的规则（优先级、继承）是核心概念部分的重点，见[层叠、优先级与继承](/concepts/cascade)。

## 书写风格约定

```css
/* 推荐的格式：选择器和花括号之间留空格，每条声明独占一行并缩进 */
.card {
  padding: 16px;
  border-radius: 8px;
}
```

用 Prettier 自动格式化可以省去所有关于格式的纠结。

## 练习

1. 给之前的个人简介页新建 `styles.css` 并用 `<link>` 引入，把 `h1` 改成你喜欢的颜色，给 `body` 设置 `font-family: sans-serif;`。
2. 在同一个文件里对 `h1` 写两条颜色不同的规则，验证“后来者居上”。
3. 故意漏写一个分号，观察后面的声明如何失效，再打开 DevTools 的 Elements 面板看看浏览器如何标记这个错误。
