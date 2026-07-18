# 链接、图片与多媒体

“超文本”的“超”，指的就是页面之间可以互相链接。链接和图片是网页最基本的构件。

## 链接：a 标签

```html
<!-- 外部链接 -->
<a href="https://developer.mozilla.org/zh-CN/">MDN 中文文档</a>

<!-- 在新标签页打开 -->
<a href="https://www.example.com" target="_blank" rel="noopener">新窗口打开</a>

<!-- 站内相对路径链接 -->
<a href="./about.html">关于我们</a>

<!-- 页内锚点：跳到 id 为 section-2 的元素 -->
<a href="#section-2">跳到第二节</a>

<!-- 邮件与电话 -->
<a href="mailto:hello@example.com">给我发邮件</a>
<a href="tel:+8613800000000">拨打电话</a>
```

::: tip target="_blank" 的安全习惯
新标签页打开的链接建议加上 `rel="noopener"`，防止新页面通过 `window.opener` 操作原页面。现代浏览器已默认处理，但写上是好习惯。
:::

## 理解路径

初学者一半的“图片不显示”问题出在路径上。假设文件结构：

```
project/
├── index.html
├── about/
│   └── team.html
└── images/
    └── logo.png
```

| 在哪个文件里 | 想引用 logo.png | 写法 |
| --- | --- | --- |
| `index.html` | 同级 images 文件夹里 | `./images/logo.png` 或 `images/logo.png` |
| `about/team.html` | 上一级的 images 里 | `../images/logo.png` |

- `./` 当前目录（可省略）
- `../` 上一级目录
- `/` 开头表示网站根目录（本地直接双击打开文件时会失效，这是用 Live Server 的另一个理由）

## 图片：img 标签

```html
<img src="./images/cat.jpg" alt="一只橘猫趴在窗台上晒太阳" width="600" height="400" />
```

- `src`：图片地址。
- `alt`：**替代文本**，图片加载失败时显示；读屏软件会朗读它；搜索引擎靠它理解图片。**每张有意义的图片都必须写 alt**，纯装饰图片写 `alt=""`。
- `width` / `height`：提前声明尺寸，浏览器可以预留空间，避免页面加载时内容“跳动”。

::: warning
`alt` 不是可选项。面试官和代码审查者会通过它判断你是否专业。写 alt 时描述图片内容，而不是写“图片”“照片”这种废话。
:::

### 配图与说明：figure

```html
<figure>
  <img src="./images/chart.png" alt="2025 年各季度销售额柱状图，第四季度最高" />
  <figcaption>图 1：2025 年季度销售趋势</figcaption>
</figure>
```

## 音频与视频

```html
<video src="./media/intro.mp4" controls width="640" poster="./images/cover.jpg">
  你的浏览器不支持 video 标签。
</video>

<audio src="./media/podcast.mp3" controls>
  你的浏览器不支持 audio 标签。
</audio>
```

`controls` 显示播放控件；`poster` 是视频封面；标签内的文字是不支持时的降级提示。

## 内嵌页面：iframe

```html
<iframe
  src="https://www.example.com"
  width="800"
  height="450"
  title="嵌入的示例页面"
></iframe>
```

常用于嵌入地图、视频网站的分享播放器等。注意很多网站出于安全考虑禁止被嵌入。

## 练习

1. 建立本节示例中的文件夹结构，在 `about/team.html` 里正确引用 `images/logo.png`，并放一个回到 `index.html` 的链接。
2. 给你上一节写的个人简介页加一张照片（或任意图片），认真写好 `alt`。
3. 故意把 `src` 路径写错，观察 `alt` 文本如何显示；再打开 DevTools 的 Network 面板，看看那条红色的失败请求。
