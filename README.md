# 认知提升 📈

> 投资本质上是认知的变现。

每日股市复盘与投资学习笔记。记录从亏损到回本、从追涨杀跌到顺势而为的认知迭代过程。

## 🌐 网站

https://lucky-bqr.github.io/renzhi-tisheng/

## 📂 目录结构

```
renzhi-tisheng/
├── index.html          # 首页 - 文章列表
├── css/
│   └── style.css       # 样式（暗色主题）
├── js/
│   └── main.js         # 文章数据 & 页面渲染
├── posts/              # 文章详情页
│   └── 2026-06-29-fupan.html
└── README.md
```

## ✍️ 添加新文章

1. 在 `posts/` 下创建 `YYYY-MM-DD-title.html`
2. 在 `js/main.js` 的 `articles` 数组中添加条目：

```js
{
    id: '2026-06-29-fupan',
    date: '2026-06-29',
    title: '文章标题',
    desc: '文章摘要描述',
    tags: ['每日复盘', '半导体'],
    category: '每日复盘'
}
```

3. Push 到 GitHub，Pages 自动部署。

## ⚠️ 免责声明

本站内容仅为个人学习记录，不构成任何投资建议。投资有风险，入市需谨慎。

## 📄 License

MIT
