# 选择器

选择器决定“样式作用到谁身上”。选择器用得准，CSS 就写得少而清晰。

## 基础选择器

```css
/* 元素选择器：选中所有 p */
p {
  line-height: 1.6;
}

/* 类选择器：选中所有 class 含有 card 的元素（最常用！） */
.card {
  border: 1px solid #ddd;
}

/* id 选择器：选中 id="site-logo" 的那一个元素 */
#site-logo {
  width: 120px;
}

/* 通配选择器：选中所有元素（常用于样式重置） */
* {
  box-sizing: border-box;
}
```

对应的 HTML：

```html
<div class="card">一个卡片</div>
<div class="card highlight">一个元素可以有多个类，用空格分开</div>
<img id="site-logo" src="logo.png" alt="站点 Logo" />
```

::: tip class 还是 id？
日常写样式**几乎总是用 class**：可复用、优先级适中。`id` 在一个页面中必须唯一，优先级又高得难以覆盖，一般留给锚点跳转和 JavaScript 使用。
:::

## 组合与关系

```css
/* 分组：同时选中多种元素，逗号分隔 */
h1,
h2,
h3 {
  font-family: "Noto Sans SC", sans-serif;
}

/* 后代选择器（空格）：.card 里面所有层级的 a */
.card a {
  color: steelblue;
}

/* 子选择器（>）：.menu 的直接子元素 li，孙辈不算 */
.menu > li {
  display: inline-block;
}

/* 相邻兄弟（+）：紧跟在 h2 后面的第一个 p */
h2 + p {
  margin-top: 0;
}

/* 交集：同时具有 card 和 active 两个类的元素（中间没有空格！） */
.card.active {
  border-color: orange;
}
```

::: warning `.card.active` 和 `.card .active` 完全不同
没有空格是“同一个元素同时有两个类”；有空格是“card 里面的 active 后代”。这个空格是新手 Bug 的高发地。
:::

## 属性选择器

```css
/* 有 disabled 属性的 input */
input[disabled] {
  background: #eee;
}

/* type 恰好为 checkbox 的 input */
input[type="checkbox"] {
  width: 18px;
}
```

## 伪类：元素的特定状态

```css
/* 鼠标悬停 */
a:hover {
  text-decoration: underline;
}

/* 键盘聚焦（可访问性重要！不要随手删除 outline） */
input:focus {
  outline: 2px solid steelblue;
}

/* 结构伪类 */
li:first-child {
  font-weight: bold;
}
li:last-child {
  border-bottom: none;
}
tr:nth-child(even) {
  background: #f7f7f7; /* 表格隔行变色 */
}

/* 否定伪类 */
button:not(.primary) {
  background: #eee;
}
```

## 伪元素：创造“虚拟元素”

```css
/* 在元素内容前/后插入内容 */
.required::before {
  content: "* ";
  color: red;
}

/* 首行 / 选中文字 / 占位符 */
p::first-line {
  font-weight: bold;
}
::selection {
  background: gold;
}
input::placeholder {
  color: #aaa;
}
```

记法：伪类单冒号（状态），伪元素双冒号（虚拟元素）。

## 选择器的使用原则

1. **优先用 class**，命名表达用途（`.price` 而不是 `.red-text`）。
2. **嵌套层级不要太深**：`.sidebar .menu li a span` 又长又脆弱，通常直接给目标元素一个 class 更好。
3. 想“为什么这个样式没生效”之前，先确认选择器真的选中了目标——在 DevTools 里点选元素即可验证。

## 练习

1. 写一个 5 个链接的导航列表：默认灰色、悬停变蓝色并加下划线、当前页（`.active` 类）加粗。
2. 用 `nth-child` 给上一章的课程表实现隔行变色，并给鼠标悬停的行加背景色。
3. 用 `::before` 给所有 `.required` 表单项的 label 前面加红色星号。
