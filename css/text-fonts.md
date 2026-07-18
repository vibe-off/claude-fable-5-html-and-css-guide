# 文字与字体

网页 90% 的内容是文字。把文字排好，页面立刻显得专业。

## 字体族：font-family

```css
body {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

浏览器**从左到右依次尝试**，用户电脑上装了哪个就用哪个，所以这串列表叫**字体栈（font stack）**，最后一定要兜底一个通用族：

- `sans-serif`：无衬线（现代、干净，界面首选）
- `serif`：衬线（如宋体，正文阅读）
- `monospace`：等宽（代码）

::: tip 中文字体的现实
中文字体文件动辄数 MB，一般不通过网络加载，而是依赖用户系统自带字体：macOS 的苹方（PingFang SC）、Windows 的微软雅黑（Microsoft YaHei）。上面的字体栈就是这个思路：优先苹方，其次雅黑，最后交给系统默认无衬线体。
:::

## 字号、字重与样式

```css
h1 {
  font-size: 2rem;      /* 字号 */
  font-weight: 700;     /* 字重：400 正常，700 加粗，数字越大越粗 */
}
em {
  font-style: italic;   /* 斜体（中文场景慎用，效果通常不佳） */
}
```

## 行高：line-height

行高对可读性的影响超过大多数属性：

```css
body {
  line-height: 1.6; /* 正文推荐 1.5 ~ 1.8 */
}
h1 {
  line-height: 1.2; /* 标题可以紧一些 */
}
```

::: tip 单行文字垂直居中的老技巧
让 `line-height` 等于容器 `height`，单行文字即垂直居中。不过现在更通用的做法是 Flexbox，见 [Flexbox 布局](/concepts/flexbox)。
:::

## 文本排版属性

```css
.article {
  text-align: left;         /* left / center / right / justify */
  text-indent: 2em;         /* 首行缩进两个字（em 在这里天然合适） */
  letter-spacing: 0.05em;   /* 字间距 */
  text-decoration: none;    /* 常用于去掉链接下划线 */
  text-transform: uppercase; /* 英文转大写 */
}
```

## 常用文字效果

### 文字阴影

```css
.title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  /*           右移  下移  模糊   颜色 */
}
```

### 单行超长省略号

这是实际开发的高频需求（列表标题、卡片摘要）：

```css
.ellipsis {
  white-space: nowrap;     /* 不换行 */
  overflow: hidden;        /* 超出隐藏 */
  text-overflow: ellipsis; /* 显示 … */
}
```

三行缺一不可，建议背下来。多行省略见[现代 CSS 特性](/advanced/modern-css)。

## 网络字体：@font-face

需要特殊字体（多见于英文标题、Logo 字体）时，可以让用户下载字体文件：

```css
@font-face {
  font-family: "MyFont";
  src: url("./fonts/myfont.woff2") format("woff2");
  font-display: swap; /* 字体加载完成前先用系统字体显示，避免文字空白 */
}

h1 {
  font-family: "MyFont", sans-serif;
}
```

也可以直接使用 Google Fonts 等字体服务生成的 `<link>` 标签。注意版权：商用项目要确认字体授权。

## 一份可以直接抄的正文排版

```css
body {
  font-family: system-ui, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
}
h1, h2, h3 {
  line-height: 1.3;
  color: #111;
}
a {
  color: #2563eb;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
```

## 练习

1. 把上面的正文排版应用到你的个人简介页，对比前后观感。
2. 做一张“新闻卡片”：标题单行省略号，摘要两行后截断（先用固定高度 + `overflow: hidden` 近似实现，学完现代 CSS 后再改进）。
3. 挑一个免费英文字体（如 Google Fonts 上的），用 `@font-face` 或 `<link>` 引入，只应用于 `h1`。
