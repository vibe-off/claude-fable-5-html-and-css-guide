import { defineConfig } from 'vitepress'

const zhNav = [
  { text: '首页', link: '/' },
  { text: '开始学习', link: '/start/' },
  { text: 'HTML 基础', link: '/html/' },
  { text: 'CSS 基础', link: '/css/' },
  { text: '核心概念', link: '/concepts/box-model' },
  { text: '拓展主题', link: '/advanced/variables' }
]

const zhSidebar = [
  {
    text: '开始之前',
    items: [
      { text: '导读：如何使用本指南', link: '/start/' },
      { text: '开发环境与网页工作原理', link: '/start/setup' }
    ]
  },
  {
    text: '第一部分 · HTML 基础',
    items: [
      { text: '认识 HTML', link: '/html/' },
      { text: '文本与标题', link: '/html/text' },
      { text: '链接、图片与多媒体', link: '/html/links-images' },
      { text: '列表与表格', link: '/html/lists-tables' },
      { text: '表单', link: '/html/forms' },
      { text: '语义化 HTML', link: '/html/semantic' }
    ]
  },
  {
    text: '第二部分 · CSS 基础',
    items: [
      { text: '认识 CSS', link: '/css/' },
      { text: '选择器', link: '/css/selectors' },
      { text: '颜色与单位', link: '/css/colors-units' },
      { text: '文字与字体', link: '/css/text-fonts' }
    ]
  },
  {
    text: '第三部分 · 核心概念',
    items: [
      { text: '盒模型', link: '/concepts/box-model' },
      { text: '层叠、优先级与继承', link: '/concepts/cascade' },
      { text: '文档流与定位', link: '/concepts/flow' },
      { text: 'Flexbox 弹性布局', link: '/concepts/flexbox' },
      { text: 'Grid 网格布局', link: '/concepts/grid' },
      { text: '响应式设计', link: '/concepts/responsive' }
    ]
  },
  {
    text: '第四部分 · 拓展主题',
    items: [
      { text: 'CSS 变量与主题', link: '/advanced/variables' },
      { text: '过渡与动画', link: '/advanced/animations' },
      { text: '现代 CSS 特性速览', link: '/advanced/modern-css' },
      { text: '命名规范与代码组织', link: '/advanced/naming' },
      { text: '开发者工具与调试', link: '/advanced/devtools' },
      { text: '与 AI 一起学前端', link: '/advanced/ai' },
      { text: '综合练习与项目', link: '/advanced/projects' }
    ]
  }
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Get Started', link: '/en/start/' },
  { text: 'HTML', link: '/en/html/' },
  { text: 'CSS', link: '/en/css/' },
  { text: 'Key Concepts', link: '/en/concepts/box-model' },
  { text: 'Extended Topics', link: '/en/advanced/variables' }
]

const enSidebar = [
  {
    text: 'Before You Start',
    items: [
      { text: 'How to Use This Guide', link: '/en/start/' },
      { text: 'Setup & How the Web Works', link: '/en/start/setup' }
    ]
  },
  {
    text: 'Part 1 · HTML Fundamentals',
    items: [
      { text: 'Getting to Know HTML', link: '/en/html/' },
      { text: 'Text & Headings', link: '/en/html/text' },
      { text: 'Links, Images & Media', link: '/en/html/links-images' },
      { text: 'Lists & Tables', link: '/en/html/lists-tables' },
      { text: 'Forms', link: '/en/html/forms' },
      { text: 'Semantic HTML', link: '/en/html/semantic' }
    ]
  },
  {
    text: 'Part 2 · CSS Fundamentals',
    items: [
      { text: 'Getting to Know CSS', link: '/en/css/' },
      { text: 'Selectors', link: '/en/css/selectors' },
      { text: 'Colors & Units', link: '/en/css/colors-units' },
      { text: 'Text & Fonts', link: '/en/css/text-fonts' }
    ]
  },
  {
    text: 'Part 3 · Key Concepts',
    items: [
      { text: 'The Box Model', link: '/en/concepts/box-model' },
      { text: 'Cascade, Specificity & Inheritance', link: '/en/concepts/cascade' },
      { text: 'Document Flow & Positioning', link: '/en/concepts/flow' },
      { text: 'Flexbox', link: '/en/concepts/flexbox' },
      { text: 'Grid', link: '/en/concepts/grid' },
      { text: 'Responsive Design', link: '/en/concepts/responsive' }
    ]
  },
  {
    text: 'Part 4 · Extended Topics',
    items: [
      { text: 'CSS Variables & Theming', link: '/en/advanced/variables' },
      { text: 'Transitions & Animations', link: '/en/advanced/animations' },
      { text: 'Modern CSS at a Glance', link: '/en/advanced/modern-css' },
      { text: 'Naming & Code Organization', link: '/en/advanced/naming' },
      { text: 'DevTools & Debugging', link: '/en/advanced/devtools' },
      { text: 'Learning Frontend with AI', link: '/en/advanced/ai' },
      { text: 'Projects & Practice', link: '/en/advanced/projects' }
    ]
  }
]

export default defineConfig({
  title: 'HTML 与 CSS 学习指南',
  description: '面向大学生的前端入门教程：HTML 与 CSS 基础、核心概念与拓展主题',
  // GitHub Pages 项目站点部署在 /<repo>/ 子路径下，base 必须与之一致
  base: '/claude-fable-5-html-and-css-guide/',
  srcExclude: ['README.md', 'README.zh-CN.md'],

  head: [
    // head 中的资源路径不会自动附加 base，需要手动带上
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/claude-fable-5-html-and-css-guide/favicon.svg' }]
  ],

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关结果',
                resetButtonTitle: '清除搜索条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: { prev: '上一节', next: '下一节' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '外观',
        langMenuLabel: '切换语言',
        footer: {
          message: '基础打牢，AI 加持 · Built with Claude Fable 5',
          copyright: '面向大学生的前端入门课程讲义'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'HTML & CSS Learning Guide',
      description:
        'A front-end starter course for college students: HTML & CSS fundamentals, key concepts, and extended topics',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Solid fundamentals, amplified by AI · Built with Claude Fable 5',
          copyright: 'A front-end starter course for college students'
        }
      }
    }
  }
})
