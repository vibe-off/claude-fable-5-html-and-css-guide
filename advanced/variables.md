# CSS 变量与主题

CSS 自定义属性（俗称 **CSS 变量**）让你“定义一次，处处使用”。它是现代 CSS 工程化的基石，也是实现换肤、暗色模式的标准方案。

## 基本语法

```css
/* 定义：变量名以 -- 开头，通常放在 :root（即 html 元素）上全局可用 */
:root {
  --color-primary: #2563eb;
  --color-text: #333;
  --spacing: 16px;
  --radius: 8px;
}

/* 使用：var() 函数 */
.button {
  background: var(--color-primary);
  padding: var(--spacing);
  border-radius: var(--radius);
}

.link {
  color: var(--color-primary); /* 同一个主色，改一处全站生效 */
}
```

## 为什么值得用

没有变量的项目里改主色，要全局搜索替换几十处 `#2563eb`，还可能误伤；有变量的项目改一行。变量表达的是**设计决策**：“这是主色”“这是标准间距”，而不是孤立的魔法数字。

## 后备值

```css
.button {
  background: var(--color-primary, #2563eb); /* 变量未定义时使用后备值 */
}
```

## 作用域与覆盖

变量遵循普通的层叠与继承规则——**在更具体的选择器里重新定义，就能局部覆盖**：

```css
:root {
  --card-bg: white;
}

.card {
  background: var(--card-bg);
}

/* 局部覆盖：VIP 卡片区域内的所有卡片自动变金色 */
.vip-section {
  --card-bg: gold;
}
```

这正是它比预处理器（Sass/Less）变量强的地方：**运行时生效、可被 JavaScript 读写、参与层叠**，而预处理器变量在编译后就不存在了。

## 实战：暗色模式

方案一：跟随系统设置：

```css
:root {
  --bg: #ffffff;
  --text: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111827;
    --text: #e5e7eb;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

方案二：手动切换（配合一行 JavaScript 给 `html` 加 class）：

```css
:root {
  --bg: #ffffff;
  --text: #1f2937;
}

.dark {
  --bg: #111827;
  --text: #e5e7eb;
}
```

两种方案的共同点：**业务代码只认变量，主题切换只改变量**。样式和主题解耦，这是值得体会的架构思想。

## 起一套像样的变量名

小项目也建议一开始就定义这几类：

```css
:root {
  /* 颜色 */
  --color-primary: #2563eb;
  --color-text: #333;
  --color-text-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-bg: #fff;

  /* 间距（等比数列，避免 13px、17px 这种随手值） */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 40px;

  /* 其他 */
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

以后接触 Element Plus 等组件库时你会发现，它们的整套主题就是几百个 CSS 变量——你现在学的就是行业标准做法。

## 练习

1. 把你之前任意一个练习页面的颜色、间距全部抽成变量，体会重构过程。
2. 实现 `prefers-color-scheme` 暗色模式，用 DevTools（渲染面板可以模拟深色模式）验证。
3. 做一个“主题色切换”演示：三个按钮分别给 `html` 加不同的 class（红/绿/蓝主题），页面所有按钮和链接颜色跟着变。JS 只需一行 `document.documentElement.className = 'theme-red'`，可以让 AI 帮你写，但 CSS 变量结构要自己设计。
