# Flexbox 弹性布局

Flexbox 是**一维布局**方案：把一堆元素在一行或一列里排好、对齐、分配空间。导航栏、卡片列表、居中对齐——日常布局需求的 80% 它都能优雅解决。

## 两个角色，一根轴线

```css
.container {
  display: flex; /* 它成为 flex 容器，直接子元素自动成为 flex 项目 */
}
```

- **主轴（main axis）**：项目排列的方向，默认水平向右。
- **交叉轴（cross axis）**：垂直于主轴的方向。

**容器上的属性管全局排列，项目上的属性管个体行为。** 这是理解 Flexbox 的总纲。

## 容器属性

### flex-direction：主轴方向

```css
.container {
  flex-direction: row;    /* 默认：水平排列 */
  flex-direction: column; /* 垂直排列 */
}
```

### justify-content：主轴上如何分布

```css
.container {
  justify-content: flex-start;    /* 默认：靠起点 */
  justify-content: center;        /* 居中 */
  justify-content: flex-end;      /* 靠终点 */
  justify-content: space-between; /* 两端顶格，中间平分 */
  justify-content: space-around;  /* 每个项目两侧留等距 */
}
```

### align-items：交叉轴上如何对齐

```css
.container {
  align-items: stretch;    /* 默认：拉伸填满容器高度 */
  align-items: center;     /* 居中（垂直居中神器） */
  align-items: flex-start; /* 靠交叉轴起点 */
}
```

### gap：项目间距

```css
.container {
  gap: 16px; /* 告别用 margin 手动隔开还要处理最后一个的时代 */
}
```

### flex-wrap：放不下要不要换行

```css
.container {
  flex-wrap: wrap; /* 默认 nowrap 会把项目压缩到挤在一行 */
}
```

## 完全居中：背下来

```css
.center {
  display: flex;
  justify-content: center; /* 主轴（水平）居中 */
  align-items: center;     /* 交叉轴（垂直）居中 */
}
```

在 Flexbox 之前，“垂直居中”是 CSS 著名难题；现在它是三行代码。

## 项目属性

### flex-grow / shrink / basis 与 flex 简写

```css
.item {
  flex-grow: 1;   /* 有剩余空间时，按比例分掉多少份 */
  flex-shrink: 1; /* 空间不够时，按比例缩小多少份 */
  flex-basis: 200px; /* 分配前的基准尺寸 */

  /* 简写：grow shrink basis */
  flex: 1;        /* = 1 1 0，最常用：平分空间 */
  flex: 0 0 200px; /* 固定 200px，不伸不缩（侧边栏经典写法） */
}
```

### align-self：单个项目的特立独行

```css
.item-special {
  align-self: flex-end; /* 其他人居中，就它沉底 */
}
```

## 三个高频实战模式

### 1. 导航栏：Logo 在左，菜单在右

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
```

### 2. 侧边栏 + 自适应主内容

```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 240px; /* 固定 240px */
}
.main {
  flex: 1; /* 占据剩余全部空间 */
}
```

### 3. 等宽卡片列表（可换行）

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 280px; /* 基准 280px，随空间伸缩，不够就换行 */
}
```

::: tip 调试利器
DevTools 中，flex 容器旁会显示一个 “flex” 徽标，点击可以打开可视化叠加层，直观看到主轴、间距和对齐方式。
:::

## 练习

1. 实现上面的导航栏：左侧网站名，右侧 4 个链接横向排列、间距 24px、整体垂直居中。
2. 做一个满屏（`100vh`）的登录页，登录框在屏幕正中央。
3. 做“侧边栏 + 主内容”布局，然后把侧边栏的 `flex-basis` 改成不同值感受变化；再给主内容里放一段超长英文单词（如 300 个 a），观察溢出问题，尝试用 `min-width: 0` 修复——记下这个坑，工作里会再见到它。
