// 认知提升 - 文章数据与渲染
const articles = [
    {
        id: '2026-06-29-fupan',
        date: '2026-06-29',
        title: '6月29日股市复盘：大盘分化，半导体主线强势',
        desc: '上证指数冲高回落，京东方A涨5.01%，圣晖集成涨停，立昂微冲高回落。半导体产业链全线活跃，硅片涨价周期开启。',
        tags: ['每日复盘', '半导体', '芯片'],
        category: '每日复盘'
    }
];

// 渲染文章列表
function renderArticleList() {
    const container = document.getElementById('articles-container');
    if (!container) return;

    if (articles.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">📝</div>
                <p>还没有文章，复盘内容即将上线...</p>
            </div>`;
        return;
    }

    container.innerHTML = articles.map(a => `
        <a href="posts/${a.id}.html" class="article-card">
            <div class="card-meta">
                <span class="card-date">${a.date}</span>
                ${a.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
            </div>
            <div class="card-title">${a.title}</div>
            <div class="card-desc">${a.desc}</div>
        </a>
    `).join('');
}

// 渲染标签云
function renderTagCloud() {
    const cloud = document.getElementById('tag-cloud');
    if (!cloud) return;

    const tagCount = {};
    articles.forEach(a => {
        a.tags.forEach(t => {
            tagCount[t] = (tagCount[t] || 0) + 1;
        });
    });

    cloud.innerHTML = Object.entries(tagCount)
        .map(([tag, count]) => `<a href="#">${tag} (${count})</a>`)
        .join('');
}

// 渲染归档
function renderArchive() {
    const list = document.getElementById('archive-list');
    if (!list) return;

    const monthCount = {};
    articles.forEach(a => {
        const month = a.date.substring(0, 7);
        monthCount[month] = (monthCount[month] || 0) + 1;
    });

    list.innerHTML = Object.entries(monthCount)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([month, count]) => `
            <li><a href="#"><span>${month}</span><span class="count">${count}</span></a></li>
        `).join('');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderArticleList();
    renderTagCloud();
    renderArchive();
});
