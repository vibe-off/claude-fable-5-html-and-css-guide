# 命名规范与代码组织

代码是写给人看的，顺便让机器执行。一个人写 Demo 时命名混乱无所谓；进了团队，**命名和组织就是你专业素养的名片**——也是 Code Review 里被挑剔最多的地方。

## 命名的第一原则：表达用途，而不是样子

```css
/* ❌ 按样子命名：设计一改，名字就成了谎言 */
.red-text { color: red; }
.left-box { float: left; }

/* ✅ 按用途命名：样式怎么改都成立 */
.error-message { color: red; }
.sidebar { }
```

想象一下 `.red-text { color: orange; }` 有多讽刺——而这种代码在烂项目里比比皆是。

## BEM：块、元素、修饰符

BEM（Block / Element / Modifier）是最广泛使用的 CSS 命名约定：

```
.block            块：独立的组件
.block__element   元素：块的组成部分（双下划线）
.block--modifier  修饰符：块的变体状态（双连字符）
```

一个完整例子：

```html
<div class="card card--featured">
  <img class="card__cover" src="cover.jpg" alt="课程封面" />
  <div class="card__body">
    <h3 class="card__title">课程标题</h3>
    <p class="card__desc">课程简介……</p>
    <button class="card__btn card__btn--disabled">已下架</button>
  </div>
</div>
```

```css
.card { }
.card--featured { border-color: gold; }   /* 精选卡片变体 */
.card__title { font-size: 1.125rem; }
.card__btn--disabled { opacity: 0.5; }
```

### BEM 换来了什么

1. **看类名就知道结构**：`card__title` 一定在 `card` 里面。
2. **选择器全部是单个 class**：优先级扁平，不会陷入覆盖大战。
3. **改样式不心惊胆战**：`.card__title` 只可能影响卡片标题，而 `.title` 天知道会命中什么。

::: tip
BEM 名字长是有意为之——它把嵌套关系编码进了名字里，换来了选择器的扁平。初看丑，用过回不去。Vue 的 scoped style 解决了部分隔离问题，但组件内部命名依然普遍沿用 BEM 思路。
:::

## 文件组织

单文件写到几百行就该拆分了。小项目的典型结构：

```
styles/
├── base.css      /* 重置、body 字体、全局变量 */
├── layout.css    /* 页面框架：header、footer、栅格 */
├── components.css /* 按钮、卡片、表单等组件 */
└── pages.css     /* 单个页面特有的样式 */
```

```html
<link rel="stylesheet" href="./styles/base.css" />
<link rel="stylesheet" href="./styles/layout.css" />
<link rel="stylesheet" href="./styles/components.css" />
```

学到 Vue 后，样式会跟着组件走（单文件组件），但“按职责划分”的思想完全一致。

## 几条实用军规

1. **选择器嵌套不超过 2 层**。`.sidebar .menu li a span` 这种链条脆弱且难覆盖。
2. **不要用 id 写样式**，优先级太高。
3. **magic number 要注释**：`margin-top: 37px; /* 对齐 banner 底部斜切角 */`——没有注释的 37px 三个月后没人敢动。
4. **重复三次就抽取**：同样的按钮样式写第三遍时，停下来抽成 `.btn` 类或 CSS 变量。
5. **格式交给 Prettier**，把审美精力留给命名和结构。

## 给 AI 时代的补充

AI 生成的 CSS 常见问题恰恰在这些地方：类名泛滥（`.container1`、`.wrapper2`）、样式重复不抽取、偶尔冒出行内样式。**用本节的标准去审查 AI 的输出**，是极好的练习——你能一眼看出问题，说明你真的掌握了；看不出，说明还要再练。

## 练习

1. 把你的“产品卡片”练习用 BEM 重命名所有 class。
2. 把目前最大的一个练习页面的 CSS 拆分成 base / layout / components 三个文件。
3. 让 AI 生成一个“带图标、可禁用、有主次两种风格的按钮组件”的 HTML+CSS，然后按照本节的军规给它做一次 Code Review，列出问题并动手修正。
