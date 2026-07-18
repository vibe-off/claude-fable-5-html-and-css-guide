# 现代 CSS 特性速览

CSS 近几年进化神速：许多曾经需要 JavaScript 或各种奇技淫巧的需求，现在一行 CSS 就能解决。本节带你速览已经可以放心使用的现代特性——**知道它们存在**，需要时能想起来查，就达到目的了。

## aspect-ratio：固定宽高比

```css
.video-cover {
  width: 100%;
  aspect-ratio: 16 / 9; /* 高度自动按比例计算 */
}
.avatar {
  width: 64px;
  aspect-ratio: 1; /* 正方形 */
  border-radius: 50%;
}
```

过去要用“padding-top 百分比”这样的黑魔法，现在一行搞定。

## object-fit：图片如何填充容器

```css
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover; /* 裁剪填满，不变形——卡片封面图必备 */
}
```

`cover` 裁剪填满、`contain` 完整显示留白、`fill`（默认）拉伸变形。图片变形是新手页面显得“业余”的头号原因，`object-fit: cover` 是解药。

## clamp()：带上下限的自适应值

```css
h1 {
  /*        最小值   理想值   最大值 */
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

字号跟随视口缩放，但被夹在 1.5rem 和 3rem 之间——流式排版（fluid typography）一行实现，媒体查询都省了。

## 多行文本省略

单行省略的三件套之外，多行截断也有了标准方案：

```css
.summary {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 最多显示 3 行，超出显示 … */
  overflow: hidden;
}
```

带 `-webkit-` 前缀但所有主流浏览器都支持，放心用。

## :has()：“父选择器”终于来了

根据**子元素的情况**选中父元素，CSS 等了二十年的能力：

```css
/* 含有图片的卡片，取消内边距（图片通栏） */
.card:has(img) {
  padding: 0;
}

/* 输入框校验失败时，让整个表单项的 label 变红 */
.form-field:has(input:invalid) label {
  color: red;
}
```

## 原生嵌套

不用预处理器也能嵌套了：

```css
.card {
  padding: 16px;

  & .title {
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
```

浅层嵌套提升可读性，但别嵌套太深（还记得选择器优先级吗）。

## 容器查询：组件自己响应自己的宽度

媒体查询看的是**视口**宽度，容器查询看的是**父容器**宽度——同一个卡片组件，在宽栏里横排、在窄侧边栏里竖排，组件自己适应：

```css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row; /* 容器够宽时图文横排 */
  }
}
```

组件化开发（如 Vue 组件）的天作之合。

## 滚动行为

```css
html {
  scroll-behavior: smooth; /* 锚点跳转变平滑滚动 */
}
.section {
  scroll-margin-top: 80px; /* 锚点定位时给吸顶导航留出高度 */
}
```

## 如何跟上 CSS 的进化

1. **查支持度**：[caniuse.com](https://caniuse.com) 输入特性名，各浏览器支持情况一目了然。
2. **查用法**：MDN 是权威词典；“CSS 某需求 怎么实现 2026”也很好用。
3. **问 AI**：“CSS 现在有没有原生方法实现 XX？”——AI 对“XX 能不能做”的回答质量很高，但**支持度数据一定要在 caniuse 上核实**，AI 的训练数据可能滞后。

## 练习

1. 做一个视频封面卡片：`aspect-ratio: 16/9` + `object-fit: cover` + 三行摘要省略。
2. 用 `clamp()` 让页面主标题在手机和桌面之间平滑缩放，拖动窗口验证。
3. 用 `:has()` 实现：勾选“同意协议”复选框之前，提交按钮显示为灰色（提示：`form:has(input:checked)` 选中后再覆盖按钮样式）。
