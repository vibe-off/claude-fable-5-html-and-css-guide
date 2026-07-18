# Grid 网格布局

Grid 是**二维布局**方案：同时控制行和列。整页框架、照片墙、仪表盘这类“行列都要对齐”的场景，Grid 比 Flexbox 更直接。

## 定义网格

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 三列：固定 200px + 剩余空间平分两份 */
  grid-template-rows: 60px auto;        /* 两行：60px + 内容自适应 */
  gap: 16px;
}
```

### fr 单位与 repeat()

- `fr`（fraction）：剩余空间的份数，Grid 专属单位。
- `repeat()`：重复模式的简写。

```css
.container {
  grid-template-columns: repeat(3, 1fr);      /* 等宽三列 */
  grid-template-columns: repeat(4, 1fr);      /* 等宽四列 */
  grid-template-columns: 240px repeat(2, 1fr); /* 混用 */
}
```

子元素会**自动按顺序填入格子**，多数场景到这里就够用了。

## 让项目跨行跨列

```css
.item-featured {
  grid-column: 1 / 3;  /* 从第 1 条列线到第 3 条列线（占 2 列） */
  grid-row: 1 / 2;
  /* 或者用 span 语法，更直观： */
  grid-column: span 2; /* 占 2 列 */
}
```

::: tip 线的编号
`1 / 3` 里的数字是**网格线**编号，不是格子编号。3 列网格有 4 条列线，从 1 数起。DevTools 里点击 grid 徽标可以把线号直接画在页面上。
:::

## grid-template-areas：像画图一样布局

给区域起名字，直观到令人感动：

```css
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 64px 1fr 48px;
  gap: 0;
  min-height: 100vh;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

这就是经典的“管理后台”布局：通栏页头、左侧边栏、主内容区、通栏页脚——以后写 Vue 后台项目会反复用到。

## 自适应卡片墙：一行魔法

不写任何媒体查询，卡片数量随屏幕宽度自动增减：

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
```

解读：每列最窄 240px、最宽 1fr，能塞几列塞几列，塞不下自动换行。**这行代码值得背下来**，商品列表、相册、卡片流全靠它。

## 对齐

```css
.container {
  justify-items: center; /* 每个格子里的项目水平对齐 */
  align-items: center;   /* 垂直对齐 */
  justify-content: center; /* 整个网格在容器里的水平位置（网格比容器小时） */
  align-content: center;
}
```

记忆锚点：`-items` 管格子里的项目，`-content` 管整张网格。

## Flexbox 还是 Grid？

| 场景 | 选择 |
| --- | --- |
| 一行/一列内排列、对齐（导航、按钮组、标签） | Flexbox |
| 行列都要对齐的二维结构（整页框架、照片墙） | Grid |
| 内容数量不定、希望“有多少排多少” | 都行；卡片流用 Grid 的 auto-fill 更省事 |

两者不是竞争关系：**页面框架用 Grid，组件内部用 Flexbox** 是常见组合。

## 练习

1. 用 `grid-template-areas` 实现上面的管理后台布局，并在窗口里拉伸验证。
2. 用 auto-fill 卡片墙做一个 12 张卡片的“课程列表”，缩放窗口观察列数变化。
3. 做一个 4×4 照片墙，让第一张图占 2×2 的位置（跨两行两列），其余自动排列。
