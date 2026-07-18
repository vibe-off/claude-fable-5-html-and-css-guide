# 盒模型

**页面上的每个元素都是一个矩形盒子。** 理解盒子由什么组成、如何计算大小，是 CSS 布局的第一块基石，也是面试必考题。

## 盒子的四层结构

从内到外：

```
┌─────────────────── margin（外边距）───────────────────┐
│  ┌───────────────── border（边框）─────────────────┐  │
│  │  ┌────────────── padding（内边距）─────────────┐ │  │
│  │  │                                            │ │  │
│  │  │            content（内容区）                │ │  │
│  │  │                                            │ │  │
│  │  └────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

- **content**：文字、图片等实际内容，`width`/`height` 默认控制的就是它。
- **padding**：内容与边框之间的“呼吸空间”，背景色会延伸到这里。
- **border**：边框。
- **margin**：盒子与其他盒子之间的距离，**透明**，不属于盒子本身。

```css
.card {
  width: 300px;
  padding: 16px;
  border: 2px solid #ddd;
  margin: 24px;
}
```

## 简写语法

`padding` 和 `margin` 支持 1~4 个值，**顺时针（上右下左）**：

```css
.box {
  padding: 10px;                 /* 四边都是 10px */
  padding: 10px 20px;            /* 上下 10，左右 20 */
  padding: 10px 20px 30px;       /* 上 10，左右 20，下 30 */
  padding: 10px 20px 30px 40px;  /* 上 10，右 20，下 30，左 40 */
}
```

## box-sizing：这个盒子到底多宽？

默认情况下（`box-sizing: content-box`）：

```
盒子实际占宽 = width + 左右 padding + 左右 border
```

上面 `.card` 的实际宽度是 `300 + 16×2 + 2×2 = 336px`——写着 300，占着 336，这是无数布局 Bug 的根源。

解决方案是让 `width` 直接等于“边框以内的总宽度”：

```css
/* 现代项目的标配，写在每个项目的第一行 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

设置后，`width: 300px` 就是实打实占 300px，padding 和 border 向内挤压内容区。**从今天起，每个练习项目都先写上这条。**

## margin 的两个特殊行为

### 1. 水平居中

```css
.container {
  max-width: 960px;
  margin: 0 auto; /* 上下 0，左右自动平分剩余空间 → 居中 */
}
```

块级元素水平居中的经典写法（元素必须有宽度）。

### 2. 外边距合并（margin collapse）

**垂直方向**相邻的两个 margin 会合并成一个，取较大值：

```css
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
/* 两个相邻段落之间的间距是 20px，不是 40px */
```

父子元素之间也会发生：子元素的 `margin-top` 可能“穿透”到父元素外面。遇到“给子元素加 margin-top，结果父元素整个被推下来了”，就是它在作怪。给父元素加 `padding-top`、边框，或使用 Flexbox/Grid 布局（flex 容器内不合并）都能解决。

::: warning
外边距合并只发生在垂直方向。水平方向的 margin 永远不合并。
:::

## min / max 尺寸

```css
.container {
  width: 90%;
  max-width: 1200px; /* 大屏封顶 */
  min-height: 400px; /* 内容太少时也保持基本高度 */
}
```

## overflow：内容装不下怎么办

```css
.box {
  height: 200px;
  overflow: visible; /* 默认：溢出照样显示（常导致“文字跑出盒子”） */
  overflow: hidden;  /* 裁掉 */
  overflow: auto;    /* 需要时出滚动条 */
}
```

## 在 DevTools 里“看见”盒模型

右键元素 → 检查 → Styles 面板下方有一张彩色盒模型图：蓝色是 content，绿色是 padding，黄色是 margin。**排查间距问题时先看这张图**，谁占的空间一目了然。

## 练习

1. 做一张产品卡片：固定宽度、内边距、1px 边框、圆角（`border-radius`）、鼠标悬停时加阴影（`box-shadow`）。先不加 `box-sizing: border-box` 计算实际宽度，再加上对比。
2. 两个段落上下相邻，分别设置 `margin-bottom: 30px` 和 `margin-top: 20px`，用 DevTools 测量实际间距，验证外边距合并。
3. 用 `max-width + margin: 0 auto` 做一个居中的文章容器，拖动窗口大小观察它的行为。
