// ═══════════ DATA ═══════════
const SITES = [
    { name:"Skyflix",         url:"https://skyflix.to",             domain:"skyflix.to",          movies:true,  tv:true,  ad:"green" },
    { name:"MoviesJoy",      url:"https://moviesjoy.bz/home",     domain:"moviesjoy.bz",        movies:true,  tv:true,  ad:"green" },
    { name:"Cinevaro",       url:"https://cinevaro.app",           domain:"cinevaro.app",        movies:true,  tv:true,  ad:"green" },
    { name:"Attacker",       url:"https://attacker.bz",            domain:"attacker.bz",         movies:true,  tv:true,  ad:"green" },
    { name:"CineJoy",        url:"https://cinejoy.to",             domain:"cinejoy.to",          movies:true,  tv:true,  ad:"green" },
    { name:"NightFlix",      url:"https://nightflix.to",           domain:"nightflix.to",        movies:true,  tv:true,  ad:"green" },
    { name:"Dulo",           url:"https://dulo.tv",                domain:"dulo.tv",             movies:true,  tv:true,  ad:"yellow" },
    { name:"CineHD",         url:"https://cinehd.app/home",       domain:"cinehd.app",          movies:true,  tv:true,  ad:"yellow" },
    { name:"Flixeo",         url:"https://flixeo.tv",              domain:"flixeo.tv",           movies:true,  tv:true,  ad:"yellow" },
    { name:"Pantyflix",      url:"https://Pantyflix.com",          domain:"Pantyflix.com",       movies:true,  tv:true,  ad:"yellow" },
    { name:"RedFlix",        url:"https://redflix.one",            domain:"redflix.one",         movies:true,  tv:true,  ad:"yellow" },
    { name:"SFlix",          url:"https://sflix.st/home",          domain:"sflix.st",            movies:true,  tv:true,  ad:"yellow" },
    { name:"MyFlixer",       url:"https://myflixer.sc/home",      domain:"myflixer.sc",         movies:true,  tv:true,  ad:"yellow" },
    { name:"VidPlay",        url:"https://vidplay.top",            domain:"vidplay.top",         movies:true,  tv:true,  ad:"yellow" },
    { name:"HydraHD",        url:"https://hydrahd.info",           domain:"hydrahd.info",        movies:true,  tv:true,  ad:"yellow" },
    { name:"HiMovies",       url:"https://himovies.bz/home",      domain:"himovies.bz",         movies:true,  tv:true,  ad:"yellow" },
    { name:"Soapy",          url:"https://soapy.to/home",         domain:"soapy.to",            movies:true,  tv:true,  ad:"yellow" },
    { name:"CoreFlix",       url:"https://coreflix.tv",            domain:"coreflix.tv",         movies:true,  tv:true,  ad:"yellow" },
    { name:"HDToday",        url:"https://hdtoday.sc/home",       domain:"hdtoday.sc",          movies:true,  tv:true,  ad:"yellow" },
    { name:"StreameX",       url:"https://streamex.net",           domain:"streamex.net",        movies:true,  tv:true,  ad:"yellow" },
    { name:"Rive",           url:"https://rentry.co/rivestream",  domain:"rentry.co",           movies:true,  tv:true,  ad:"yellow" },
    { name:"RidoMovies",     url:"https://ridomovies.tv/home",    domain:"ridomovies.tv",       movies:true,  tv:true,  ad:"yellow" },
    { name:"ezstream",       url:"https://ezstream.wtf",           domain:"ezstream.wtf",        movies:true,  tv:true,  ad:"yellow" },
    { name:"Flixbaba",       url:"https://flixbaba.info",          domain:"flixbaba.info",       movies:true,  tv:true,  ad:"yellow" },
    { name:"StreamingUnity", url:"https://streamingunity.dog",    domain:"streamingunity.dog",  movies:true,  tv:true,  ad:"yellow" },
    { name:"TheFlixBay",     url:"https://theflixbay.com",        domain:"theflixbay.com",      movies:true,  tv:true,  ad:"yellow" },
    { name:"Smashystream",   url:"https://smashystream.xyz",      domain:"smashystream.xyz",    movies:true,  tv:true,  ad:"yellow" },
    { name:"Cineby",         url:"https://cineby.at",              domain:"cineby.at",           movies:true,  tv:true,  ad:"yellow" },
    { name:"MoviePlex",      url:"https://movieplex.online",      domain:"movieplex.online",    movies:true,  tv:true,  ad:"yellow" },
    { name:"NEPU",           url:"https://nepu.to",                domain:"nepu.to",             movies:true,  tv:true,  ad:"yellow" },
    { name:"NetPrime",       url:"https://netprime.to",            domain:"netprime.to",         movies:true,  tv:true,  ad:"yellow" },
    { name:"2Flix",           url:"https://2flix.lol/home",        domain:"2flix.lol",           movies:true,  tv:true,  ad:"yellow" },
    { name:"7Mov",           url:"https://7mov.st/home",          domain:"7mov.st",             movies:true,  tv:true,  ad:"yellow" },
    { name:"OFlix",          url:"https://oflix.st/home",          domain:"oflix.st",            movies:true,  tv:true,  ad:"yellow" },
    { name:"Solarmovie",     url:"https://solarmovie2.com",       domain:"solarmovie2.com",     movies:true,  tv:true,  ad:"yellow" },
    { name:"YesMovies",      url:"https://yesmovies.ag",          domain:"yesmovies.ag",        movies:true,  tv:true,  ad:"yellow" },
    { name:"123Movies",      url:"https://123moviesfree.net/home",domain:"123moviesfree.net",   movies:true,  tv:true,  ad:"yellow" },
    { name:"1Shows",         url:"https://1shows.org",            domain:"1shows.org",          movies:true,  tv:true,  ad:"yellow" },
    { name:"CornClick",      url:"https://cornclick.com",         domain:"cornclick.com",       movies:true,  tv:true,  ad:"yellow" },
    { name:"Flixer",         url:"https://flixer.su",             domain:"flixer.su",           movies:true,  tv:true,  ad:"yellow" },
    { name:"FMovies",        url:"https://fmovies.co/home",      domain:"fmovies.co",          movies:true,  tv:true,  ad:"yellow" },
    { name:"MyFlixerz",      url:"https://myflixerz.org/home",   domain:"myflixerz.org",       movies:true,  tv:true,  ad:"yellow" },
    { name:"PressPlayz",     url:"https://pressplayz.to",        domain:"pressplayz.to",       movies:true,  tv:true,  ad:"yellow" },
    { name:"bCine",          url:"https://bcine.ru",              domain:"bcine.ru",            movies:true,  tv:true,  ad:"yellow" },
    { name:"Movish",         url:"https://movish.to/home",       domain:"movish.to",           movies:true,  tv:true,  ad:"yellow" },
    { name:"VidFlix",        url:"https://vidflix.live",          domain:"vidflix.live",         movies:true,  tv:true,  ad:"yellow" },
    { name:"SeeFlix",        url:"https://seeflix.to/home",      domain:"seeflix.to",           movies:true,  tv:true,  ad:"red" },
    { name:"BoredFlix",      url:"https://boredflix.tv",          domain:"boredflix.tv",         movies:true,  tv:true,  ad:"red" },
    { name:"NOXX",           url:"https://noxx.to",              domain:"noxx.to",              movies:false, tv:true,  ad:"red" },
    { name:"AZMovies",       url:"https://azmovies.to",          domain:"azmovies.to",          movies:true,  tv:false, ad:"red" },
];

const AD_LABELS = { green:"Great", yellow:"Okay", red:"Poor" };

// ═══════════ DOM ═══════════
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const sitesList    = $("#sitesList");
const searchInput  = $("#searchInput");
const resultsCount = $("#resultsCount");
const noResults    = $("#noResults");
const scrollTopBtn = $("#scrollTopBtn");
const chips        = $$(".chip[data-filter]");

// ═══════════ RENDER ═══════════
function renderSites(sites) {
    sitesList.innerHTML = "";
    if (!sites.length) {
        noResults.style.display = "block";
        resultsCount.textContent = "No sites found";
        return;
    }
    noResults.style.display = "none";
    resultsCount.textContent = sites.length === SITES.length
        ? `Showing all ${sites.length} sites`
        : `Showing ${sites.length} of ${SITES.length} sites`;

    const svg = {
        check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>',
        cross: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
        ext:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    };

    sites.forEach((s, i) => {
        const rank = i + 1;
        const row = document.createElement("div");
        row.className = "site-row" + (rank <= 6 ? " top-rank" : "") + (rank <= 3 ? " preferred" : "");
        row.dataset.ad = s.ad;
        row.dataset.name = s.name.toLowerCase();
        row.style.animationDelay = Math.min(i * 20, 400) + "ms";

        const preferredTag = rank <= 3 ? '<span class="preferred-tag">⭐ Preferred by @0xSubhan</span>' : '';

        row.innerHTML = `
            ${preferredTag}
            <div class="site-rank">#${rank}</div>
            <div class="site-info" data-ad="${s.ad}">
                <div class="site-fav"><img alt="" data-src="https://www.google.com/s2/favicons?domain=${s.domain}&sz=24" width="24" height="24"/></div>
                <a class="site-name" href="${s.url}" target="_blank" rel="noopener">${s.name}</a>
            </div>
            <div class="col-center col-movies"><span class="${s.movies?'check':'cross'}">${s.movies?svg.check:svg.cross}</span></div>
            <div class="col-center col-tv"><span class="${s.tv?'check':'cross'}">${s.tv?svg.check:svg.cross}</span></div>
            <div class="col-center col-ad"><span class="ad-pill ad-${s.ad}">${AD_LABELS[s.ad]}</span></div>
            <div class="col-ext"><a class="ext-link" href="${s.url}" target="_blank" rel="noopener" aria-label="Visit ${s.name}">${svg.ext}</a></div>
        `;
        row.addEventListener("click", (e) => {
            if (e.target.closest(".ext-link")) return;
            window.open(s.url, "_blank", "noopener,noreferrer");
        });
        sitesList.appendChild(row);
    });
    lazyFavicons();
}

renderSites(SITES);

// ═══════════ FILTER + SEARCH ═══════════
let activeFilter = "all";

function applyFilters() {
    const q = searchInput.value.toLowerCase().trim();
    const filtered = SITES.filter(s =>
        (!q || s.name.toLowerCase().includes(q)) &&
        (activeFilter === "all" || s.ad === activeFilter)
    );
    renderSites(filtered);
}

searchInput.addEventListener("input", applyFilters);
chips.forEach(c => {
    c.addEventListener("click", () => {
        chips.forEach(x => x.classList.remove("active"));
        c.classList.add("active");
        activeFilter = c.dataset.filter;
        applyFilters();
    });
});

// ═══════════ LAZY FAVICONS ═══════════
function lazyFavicons() {
    const imgs = document.querySelectorAll(".site-fav img[data-src]");
    if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    const img = e.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
                    if (img.complete && img.naturalWidth) img.classList.add("loaded");
                    obs.unobserve(img);
                }
            });
        }, { rootMargin: "150px" });
        imgs.forEach(i => obs.observe(i));
    } else {
        imgs.forEach(i => { i.src = i.dataset.src; i.classList.add("loaded"); });
    }
}
const shareModal   = $("#shareModal");
const shareBtn     = $("#shareBtn");
const modalClose   = $("#modalClose");
const copyBtn      = $("#copyBtn");
const copyInput    = $("#copyInput");

// ═══════════ SCROLL ═══════════
window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("visible", scrollY > 400);
}, { passive: true });

scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ═══════════ SHARE MODAL ═══════════
shareBtn.addEventListener("click", () => {
    copyInput.value = location.href;
    shareModal.classList.add("open");
    document.body.style.overflow = "hidden";
});

function closeModal() {
    shareModal.classList.remove("open");
    document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
shareModal.addEventListener("click", e => { if (e.target === shareModal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ═══════════ COPY ═══════════
let copyTimer;
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyInput.value).then(() => {
        copyBtn.textContent = "Copied!";
        if (copyTimer) clearTimeout(copyTimer);
        copyTimer = setTimeout(() => copyBtn.textContent = "Copy", 2000);
    });
});

// ═══════════ SHARE ═══════════
function shareTo(p) {
    const u = encodeURIComponent(location.href);
    const t = encodeURIComponent(document.title);
    const map = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        twitter:  `https://x.com/intent/tweet?url=${u}&text=${t}`,
        whatsapp: `https://api.whatsapp.com/send?text=${t}%20${u}`,
        reddit:   `https://reddit.com/submit?url=${u}&title=${t}`,
        telegram: `https://t.me/share/url?url=${u}&text=${t}`,
        email:    `mailto:?subject=${t}&body=${u}`,
    };
    if (!map[p]) return;
    p === "email" ? location.href = map[p] : window.open(map[p], "_blank", "noopener,noreferrer");
}
window.shareTo = shareTo;
