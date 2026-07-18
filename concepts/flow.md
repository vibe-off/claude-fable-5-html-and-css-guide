# 文档流与定位

不写任何布局代码时，浏览器如何摆放元素？想把元素挪到别的地方去怎么办？本节回答这两个问题。

## 标准文档流（Normal Flow）

默认规则很简单：

- **块级元素**（block）：独占一行，从上往下排。如 `div`、`p`、`h1`、`ul`、`section`。
- **行内元素**（inline）：在一行内从左往右排，放不下才换行。如 `span`、`a`、`strong`、`em`。

## display：改变元素的呈现方式

```css
span {
  display: block;        /* 行内 → 块级 */
}
li {
  display: inline-block; /* 行内排列，但能设置宽高 */
}
.hidden {
  display: none;         /* 彻底消失，不占空间 */
}
```

三种基础值的对比：

| | 独占一行 | 可设宽高 | 可设垂直 margin/padding |
| --- | --- | --- | --- |
| `block` | ✅ | ✅ | ✅ |
| `inline` | ❌ | ❌ | ❌（padding 显示但不挤开别人） |
| `inline-block` | ❌ | ✅ | ✅ |

::: tip display: none 与 visibility: hidden
`display: none` 元素彻底移出布局，不占位置；`visibility: hidden` 只是看不见，位置还空在那里。
:::

后面两节会讲 `display` 的另两个重要值：`flex` 和 `grid`。

## position：把元素“挪走”

```css
.box {
  position: static;   /* 默认：待在文档流里，top/left 等无效 */
  position: relative; /* 相对定位 */
  position: absolute; /* 绝对定位 */
  position: fixed;    /* 固定定位 */
  position: sticky;   /* 粘性定位 */
}
```

配合 `top` / `right` / `bottom` / `left` 使用。

### relative：相对自己原来的位置偏移

```css
.badge {
  position: relative;
  top: -4px; /* 从原位置向上挪 4px，原来的空位仍然保留 */
}
```

它更常见的用途是下一条——给 absolute 的子元素**当参照物**。

### absolute：脱离文档流，相对“定位祖先”定位

```css
.card {
  position: relative; /* 参照物 */
}
.card .corner-tag {
  position: absolute;
  top: 8px;
  right: 8px; /* 相对 .card 的右上角 */
}
```

规则（**必考**）：absolute 元素相对**最近的、position 不是 static 的祖先**定位；一个都找不到，就相对整个页面。所以经典组合是：

> **子绝父相**——子元素 `absolute`，父元素 `relative`。

absolute 元素完全脱离文档流：不占位置，其他元素当它不存在。适合角标、弹出菜单、封面上的文字等“叠加”场景。

### fixed：钉在浏览器窗口上

```css
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px; /* 滚动页面也不动，如“回到顶部”按钮 */
}
```

### sticky：滚到临界点就吸附

```css
.table-header {
  position: sticky;
  top: 0; /* 滚到距视口顶部 0px 时吸住，如吸顶导航、表头 */
}
```

## z-index：谁盖住谁

定位元素重叠时，用 `z-index` 控制层叠顺序，数值大的在上：

```css
.modal {
  position: fixed;
  z-index: 100;
}
```

::: warning
`z-index` 只对设置了 `position`（非 static）或 flex/grid 子项生效。“z-index 不管用”的第一排查项就是这个。
:::

## float：了解即可的历史

`float` 原本用于文字环绕图片，在 Flexbox 出现前被广泛滥用于整页布局（配合 `clear` 清除浮动）。**新代码的布局一律用 Flexbox / Grid**；学 float 的意义在于看懂老项目：

```css
img {
  float: left;
  margin-right: 16px; /* 文字环绕图片——float 的本职工作 */
}
```

## 什么时候用什么

| 需求 | 方案 |
| --- | --- |
| 页面整体、列表、导航等常规布局 | Flexbox / Grid（下两节） |
| 元素叠加：角标、遮罩、下拉菜单 | 子绝父相 |
| 吸顶导航、回到顶部 | sticky / fixed |
| 文字环绕图片 | float |

## 练习

1. 做一张商品卡片，右上角用“子绝父相”放一个红色“限时特惠”角标。
2. 做一个 `position: fixed` 的“回到顶部”按钮，页面内容写长一点，滚动验证。
3. 把一段新闻列表的日期栏做成 `position: sticky` 的吸顶分组标题，观察多个 sticky 元素依次替换的效果。
