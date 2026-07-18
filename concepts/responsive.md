# 响应式设计

用户可能用 6 英寸的手机、13 英寸的笔记本或 27 英寸的显示器打开你的页面。**响应式设计**让同一份代码在不同屏幕上都有合理的呈现。如今移动端流量占大头，这不是加分项，而是基本要求。

## 前提：viewport meta 标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

没有这一行，手机浏览器会假装自己是 980px 宽的桌面屏幕来渲染页面，然后整体缩小——你写的任何响应式代码都不会生效。**这行是响应式的开关**，写在每个页面的 `<head>` 里。

## 媒体查询：按屏幕宽度应用不同样式

```css
/* 基础样式：所有屏幕生效 */
.cards {
  display: grid;
  grid-template-columns: 1fr; /* 手机：单列 */
  gap: 16px;
}

/* 屏幕宽度 ≥ 640px 时 */
@media (min-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* 平板：两列 */
  }
}

/* 屏幕宽度 ≥ 1024px 时 */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* 桌面：三列 */
  }
}
```

## 移动优先（Mobile First）

上面的写法叫**移动优先**：默认样式为最小屏幕设计，再用 `min-width` 逐级增强。

为什么推荐移动优先？

1. 手机屏幕小，约束多，先做难的，放大总是容易的。
2. 手机布局往往最简单（单列），作为“默认值”代码最少。
3. 与业界主流实践一致（Bootstrap、Tailwind 都是 min-width 体系）。

常用断点参考（不必死记，够用就好）：

| 断点 | 设备 |
| --- | --- |
| `640px` | 大屏手机 / 小平板 |
| `768px` | 平板竖屏 |
| `1024px` | 平板横屏 / 小笔记本 |
| `1280px` | 桌面 |

::: warning 断点不是照着 iPhone 设的
断点应该由**内容**决定：拖动窗口，哪里开始变丑，哪里就需要断点。设备型号年年变，内容驱动的断点不会过时。
:::

## 流式布局：能不写媒体查询就不写

响应式 ≠ 疯狂写媒体查询。弹性的基础布局能消化大部分尺寸变化：

```css
/* 容器：小屏吃满，大屏封顶居中 */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* 图片：永远不超出容器（必备全局规则） */
img {
  max-width: 100%;
  height: auto;
}

/* 卡片墙：零媒体查询的自适应（上一节学过） */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
```

优先顺序：**先用弹性布局（%、max-width、flex、grid、minmax）吸收变化，实在不行再上媒体查询**。

## 常见响应式模式

```css
/* 导航：桌面横排，手机竖排 */
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media (min-width: 768px) {
  .nav-links {
    flex-direction: row;
    gap: 24px;
  }
}

/* 手机上隐藏次要内容 */
.sidebar-ads {
  display: none;
}
@media (min-width: 1024px) {
  .sidebar-ads {
    display: block;
  }
}
```

## 用 DevTools 测试

按 F12 打开 DevTools，点击左上角的**设备工具栏**图标（手机平板样式），可以：

- 模拟各种手机型号的屏幕尺寸
- 自由拖动尺寸，观察断点切换的瞬间
- 模拟触摸操作

开发时养成习惯：**每写一段布局，拖一遍宽度从 320px 到 1400px**，确保没有断裂点。

## 练习

1. 给之前的卡片墙补上移动优先的媒体查询版本，再对比 auto-fill 版本，体会两种思路。
2. 把个人简介页做成响应式：手机单列，桌面“侧边栏（头像+联系方式）+ 主内容”两列。
3. 用设备工具栏分别在 iPhone SE（375px）和 iPad（768px）尺寸下检查你的页面，修掉所有横向滚动条——出现横向滚动条通常意味着某个元素宽度溢出了。
