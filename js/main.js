// 认知提升 - 文章数据与渲染
const articles = [
    {
        id: '2026-06-30-fupan',
        date: '2026-06-30',
        title: '6月30日复盘：科创50+3.51%站上2200再创新高，半导体+军工双主线爆发，6月收益+25.60%',
        desc: '上证微红收4082附近，科创50+3.51%站上2200点历史新高。半导体+军工双主线，京东方A+9.18%，斯达半导涨停+10%，立昂微-1.64%深V拉回。6月账户+25.60%（+60,821元），跑赢上证24.97%。',
        tags: ['每日复盘', '市场分析', '半导体', '军工', '科创50', '月度收益', '持仓分析'],
        category: '每日复盘'
    },
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
    },
    {
        id: 'stock-compare-technical',
        date: '2026-06-29',
        title: '📊 五只股票技术指标综合评分与中长期走势分析',
        desc: '京东方A/立昂微/圣晖集成/斯达半导/泰和新材技术指标横向对比。趋势信号(30%)+KDJ(20%)+RSI(20%)+量能(15%)+涨跌(15%)加权评分。斯达半导87分第1，京东方A81分第2。中长期走势定性分析。',
        tags: ['股票分析', '技术指标', '综合评分', '走势分析', '横向对比', 'MACD', 'KDJ', 'RSI'],
        category: '股票分析'
    },
    {
        id: 'stock-compare-fundamental',
        date: '2026-06-29',
        title: '📋 五只股票基本面深度横向对比',
        desc: '基于2025年报的核心财务指标全维度对比：毛利率（斯达26%最高）、净利率、ROE（圣晖13.75%最高）、成长性、估值分析。综合排名：斯达半导第1，圣晖集成第2，京东方A第3。',
        tags: ['股票分析', '基本面', '横向对比', '财务分析', '估值分析', 'ROE', '毛利率'],
        category: '股票分析'
    },
    {
        id: 'stock-boe',
        date: '2026-06-29',
        title: '🔍 京东方A（000725）深度技术分析报告',
        desc: '面板龙头技术面分析：MACD金叉红柱放大，均线多头排列，KDJ接近超买。6/26振幅近12%成交45亿+天量博弈。钙钛矿+玻璃基板双重催化。综合评分82/100偏多。',
        tags: ['股票分析', '京东方A', '000725', '面板', '技术分析', 'MACD', 'KDJ'],
        category: '股票分析'
    },
    {
        id: 'stock-liangwei',
        date: '2026-06-29',
        title: '🔍 立昂微（605358）深度技术分析报告',
        desc: '半导体硅片涨价龙头：MACD金叉红柱放大，均线完美多头排列，J值超买。7月1日涨价10-15%即将生效，核心逻辑确定。综合评分85/100偏多，趋势极强。',
        tags: ['股票分析', '立昂微', '605358', '半导体硅片', '技术分析', '硅片涨价'],
        category: '股票分析'
    },
    {
        id: 'stock-shenghui',
        date: '2026-06-29',
        title: '🔍 圣晖集成（603163）深度技术分析报告',
        desc: '洁净室龙头连续3天涨停：MACD红柱极强，均线完美多头，但KDJ-J值105极度超买，RSI高达92。三重逻辑（洁净室+可转债+三星扩产）。⚠️建议减仓锁定利润。综合评分78/100。',
        tags: ['股票分析', '圣晖集成', '603163', '洁净室', '技术分析', '超买预警'],
        category: '股票分析'
    },
    {
        id: 'stock-sida',
        date: '2026-06-29',
        title: '🔍 斯达半导（603290）深度技术分析报告',
        desc: 'IGBT龙头：MACD金叉，均线多头排列，KDJ/RSI中性健康，集合竞价+4.5%。一季报净利同比-74%但周期底部。综合评分75/100中性偏多，技术指标最健康。',
        tags: ['股票分析', '斯达半导', '603290', 'IGBT', '技术分析', '功率半导体'],
        category: '股票分析'
    },
    {
        id: 'stock-taihe',
        date: '2026-06-29',
        title: '🔍 泰和新材（002254）深度技术分析报告',
        desc: '芳纶龙头涨停次日大幅回调：MACD金叉，均线多头排列。6/26冲21.50（+6.6%）后回落收-4%，换手率20.55%天量。涨停次日规律兑现。综合评分68/100中性偏多，等待缩量企稳。',
        tags: ['股票分析', '泰和新材', '002254', '芳纶', '技术分析', '涨停次日'],
        category: '股票分析'
    },
    // ═══════════ 行业分析板块（待添加） ═══════════
    // 将行业分析的 markdown 文件放到项目根目录后，在这里添加文章条目
    // 示例格式：
    // {
    //     id: 'industry-xxx',
    //     date: '2026-06-30',
    //     title: '🏭 半导体行业深度分析',
    //     desc: '行业描述...',
    //     tags: ['行业分析', '半导体', ...],
    //     category: '行业分析'
    // },
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
    '投资学习': { icon: '📖', label: '投资学习' },
    '股票分析': { icon: '📈', label: '股票分析' },
    '行业分析': { icon: '🏭', label: '行业分析' }
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
