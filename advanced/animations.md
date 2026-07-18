# 过渡与动画

恰当的动效让界面“有生命”；过度的动效让用户头晕。本节学习 CSS 动效的两大工具：transition（过渡）和 animation（关键帧动画）。

## transition：状态变化的平滑化

没有过渡时，`:hover` 的样式变化是瞬间跳变；加上 `transition`，变化就有了过程：

```css
.button {
  background: #2563eb;
  transition: background 0.2s ease;
}

.button:hover {
  background: #1d4ed8; /* 0.2 秒内平滑变色 */
}
```

完整语法：

```css
.card {
  /*           属性        时长   缓动函数  延迟 */
  transition: transform 0.3s ease-out 0s;

  /* 多个属性用逗号分隔 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

常用缓动函数：`ease`（默认，通用）、`ease-out`（入场快出场缓，最常用）、`ease-in-out`（两头缓）、`linear`（匀速，适合旋转加载图标）。

## transform：位移、缩放、旋转

```css
.icon {
  transform: translateX(8px);          /* 位移 */
  transform: translate(-50%, -50%);    /* 居中定位的经典配角 */
  transform: scale(1.05);              /* 放大 5% */
  transform: rotate(45deg);            /* 旋转 */
  transform: translateY(-4px) scale(1.02); /* 可以组合，空格分隔 */
}
```

### 为什么动效优先用 transform

改 `left/top/width/margin` 会触发浏览器**重新计算布局**（reflow），页面元素多时明显卡顿；`transform` 和 `opacity` 只在合成层处理，**性能好一个量级**。

> 动效原则：能用 `transform` + `opacity` 完成的动画，不碰布局属性。

## 实战：卡片悬浮效果

几乎每个现代网站都有的效果：

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

## animation：不依赖交互的关键帧动画

transition 需要状态变化触发；animation 可以自动播放、循环播放：

```css
/* 1. 定义关键帧 */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 2. 应用到元素 */
.loading-icon {
  animation: spin 1s linear infinite;
  /*         名称  时长  缓动    循环次数 */
}
```

多阶段关键帧用百分比：

```css
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.badge-new {
  animation: pulse 2s ease-in-out infinite;
}
```

入场动画的常见写法：

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  animation: fade-in-up 0.6s ease-out;
}
```

## 尊重用户的动效偏好

有前庭障碍的用户会在系统里开启“减弱动态效果”。专业的做法是响应它：

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 动效的度

- 交互反馈（悬停、点击）：0.1s ~ 0.3s，快到几乎察觉不到才对。
- 入场动画：0.3s ~ 0.6s。
- 超过 1 秒的 UI 动画基本都是灾难（加载指示器除外）。
- 动效应该**解释界面的变化**（哪里来的、去了哪里），而不是炫技。

## 练习

1. 给你页面里所有按钮和链接加上颜色过渡，实现上面的卡片悬浮效果。
2. 做一个纯 CSS 加载转圈：一个圆环 `border`，其中一段变色，`spin` 无限旋转。
3. 给首页标题加 `fade-in-up` 入场动画；再做一个三个点依次跳动的“输入中…”指示器（提示：`animation-delay` 给每个点错开时间）。
