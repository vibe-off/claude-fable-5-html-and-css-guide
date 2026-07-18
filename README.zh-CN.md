# HTML 与 CSS 学习指南

[English](./README.md) | **简体中文**

面向大学生的前端入门讲义，基于 [VitePress](https://vitepress.dev/) 构建。

**在线阅读**：<https://vibe-off.github.io/claude-fable-5-html-and-css-guide/>

**双语支持（i18n）**：中文为默认语言（`/`），完整英文版位于 [`/en/`](https://vibe-off.github.io/claude-fable-5-html-and-css-guide/en/)，右上角导航栏可随时切换语言。中英文内容一一对应，均为完整版本。

## 内容结构

- **开始之前**：导读、开发环境、网页工作原理
- **第一部分 · HTML 基础**：文本、链接图片、列表表格、表单、语义化
- **第二部分 · CSS 基础**：选择器、颜色单位、文字字体
- **第三部分 · 核心概念**：盒模型、层叠优先级、文档流定位、Flexbox、Grid、响应式
- **第四部分 · 拓展主题**：CSS 变量、动画、现代 CSS、BEM 命名、DevTools 调试、AI 协作学习、综合项目

## 本地运行

```bash
npm install       # 首次运行安装依赖
npm run docs:dev  # 启动开发服务器
```

> 注意：为适配 GitHub Pages，站点配置了 `base: '/claude-fable-5-html-and-css-guide/'`，
> 本地开发地址为 `http://localhost:5173/claude-fable-5-html-and-css-guide/`。

## 构建与部署

```bash
npm run docs:build    # 构建静态站点，输出到 .vitepress/dist
npm run docs:preview  # 本地预览构建产物
```

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署到 GitHub Pages。

## 目录说明

```
├── .github/workflows/deploy.yml  # GitHub Pages 自动部署
├── .vitepress/config.mts         # 站点配置（双语导航、侧边栏、搜索）
├── public/favicon.svg            # 站点图标
├── index.md                      # 中文首页
├── start/  html/  css/  concepts/  advanced/   # 中文内容
└── en/                           # 英文版（结构与中文版一一对应）
    ├── index.md
    └── start/  html/  css/  concepts/  advanced/
```

## 致谢

本指南由 **Claude Fable 5**（Anthropic）协助构建——从双语内容撰写、站点配置到部署上线。感谢 Claude Fable 5 的贡献。🙏
