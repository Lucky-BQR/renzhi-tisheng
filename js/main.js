// 认知提升 - 文章数据与渲染
const articles = [
    {
        id: '2026-06-29-fupan',
        date: '2026-06-29',
        title: '6月29日复盘：科创50暴涨4.61%创历史新高，半导体主线全面强化',
        desc: '上证+1.16%收4073.90，科创50暴涨+4.61%创历史新高2126.01。半导体设备+7.41%、半导体材料+6.94%霸占涨幅榜。PCB概念-3.11%，资金从高位AI向硬核科技大规模迁移。持仓四只全红，单日+1.4万。',
        tags: ['每日复盘', '市场分析', '半导体', '科创50', '硅片涨价', '持仓分析'],
        category: '每日复盘'
    },
    {
        id: '2026-06-29-renzhi',
        date: '2026-06-29',
        title: '「去伪存真」结构性行情中，资金从高位概念炒作向硬核科技迁移的逻辑',
        desc: '从今日盘面提炼五条核心认知：去伪存真（资金从概念到硬核的迁移逻辑）、主线的力量（暴跌抗跌反弹领涨）、方向>择时（选对方向个股自然跟涨）、卖在一致（极度超买纪律性减仓）、窗口期思维（理解参与者约束条件）。',
        tags: ['认知笔记', '方向判断', '结构性行情', '去伪存真', '卖在一致', '主线思维'],
        category: '认知笔记'
    },
    {
        id: '2026-06-29-touzi-xuexi',
        date: '2026-06-29',
        title: '📖 股票投资入门基础概念手册：K线、技术指标、结构性行情、主线判断等13个核心概念',
        desc: '图文并茂的入门手册，覆盖：结构性行情、K线图解、KDJ/RSI/MACD/布林带/均线五大技术指标、主线判断三步法、涨停板机制、卖在一致买在分歧、窗口期思维、板块轮动vs结构性迁移、A股指数体系。每概念配SVG图解+实战案例。',
        tags: ['投资学习', '基础概念', 'K线', '技术指标', 'KDJ', 'RSI', 'MACD', '入门', '新手友好'],
        category: '投资学习'
    },
    {
        id: '2026-06-29-trade-essence',
        date: '2026-06-29',
        title: '💡 交易的本质：应对不确定性的艺术——欢喜趋势交易哲学体系深度解读',
        desc: '来自欢喜趋势大神的交易底层认知：交易不是技术指标，是应对不确定性的艺术。人性是最大变量，波段趋势交易是最适合散户的模式。详解三大交易体系、选股六原则、持股四纪律、五个认知误区。每模块配SVG图解+关联今日复盘实战。',
        tags: ['认知笔记', '交易哲学', '交易体系', '波段趋势', '人性博弈', '交易纪律', '欢喜趋势'],
        category: '认知笔记'
    }
];

// 获取当前分类（从 URL 参数 ?category=xxx）
function getCurrentCategory() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || '';
}

// 分类名称映射
const categoryMeta = {
    '每日复盘': { icon: '📊', label: '每日复盘' },
    '认知笔记': { icon: '💡', label: '认知笔记' },
    '投资学习': { icon: '📖', label: '投资学习' }
};

// 渲染文章列表
function renderArticleList() {
    const container = document.getElementById('articles-container');
    const sectionTitle = document.getElementById('section-title');
    if (!container) return;

    const category = getCurrentCategory();
    const filtered = category ? articles.filter(a => a.category === category) : articles;

    // 更新标题
    if (sectionTitle) {
        const meta = categoryMeta[category];
        sectionTitle.textContent = meta ? `${meta.icon} ${meta.label}` : '📋 全部文章';
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">📝</div>
                <p>该分类下还没有文章，敬请期待...</p>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map(a => `
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

// 高亮当前导航
function highlightNav() {
    const category = getCurrentCategory();
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    if (!category) {
        // 全部文章
        const allLink = document.querySelector('.nav-link[data-category=""]');
        if (allLink) allLink.classList.add('active');
    } else {
        const catLink = document.querySelector(`.nav-link[data-category="${category}"]`);
        if (catLink) catLink.classList.add('active');
    }
}

// 渲染标签云
function renderTagCloud() {
    const cloud = document.getElementById('tag-cloud');
    if (!cloud) return;

    const category = getCurrentCategory();
    const source = category ? articles.filter(a => a.category === category) : articles;

    const tagCount = {};
    source.forEach(a => {
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

    const category = getCurrentCategory();
    const source = category ? articles.filter(a => a.category === category) : articles;

    const monthCount = {};
    source.forEach(a => {
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
    highlightNav();
    renderArticleList();
    renderTagCloud();
    renderArchive();
});
