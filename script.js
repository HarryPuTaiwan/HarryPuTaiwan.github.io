(function () {
  const R = window.RESUME;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero
  $("#lead").textContent = R.lead;
  $("#status").innerHTML = R.status;
  $("#highlights").innerHTML = R.highlights.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("");
  const fmt = (k, v) => (k.prefix || "") + v.toFixed(k.decimals || 0) + (k.suffix || "");
  $("#kpis").innerHTML = R.kpis.map((k, i) => `
    <div class="kpi"><div class="kpi-num" data-i="${i}">${esc(fmt(k, k.value))}</div>
    <div class="kpi-label">${esc(k.label)}</div></div>`).join("");

  // 數字動畫：預設即顯示最終值，僅在允許動畫時從 0 跑到最終值
  if (!reduceMotion) {
    $$(".kpi-num").forEach(el => {
      const k = R.kpis[el.dataset.i], t0 = performance.now(), dur = 1100;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(k, k.value * e);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  // Skills：依熟練度排序，底色深淺代表熟練度，並附文字供螢幕閱讀器使用
  $("#skillGroups").innerHTML = R.skillGroups.map(g => `
    <div class="skill-group"><h3>${esc(g.name)}</h3><ul class="chips">
      ${[...g.skills].sort((a, b) => a[1].localeCompare(b[1])).map(([s, lv]) =>
        `<li class="chip lv-${lv}" title="${esc(R.skillLevels[lv])}">${esc(s)}<span class="sr">（${esc(R.skillLevels[lv])}）</span></li>`).join("")}
    </ul></div>`).join("");

  // Timeline
  $("#timeline").innerHTML = R.jobs.map(j => `
    <li class="job" id="job-${j.id}">
      <div class="job-head">
        <div class="job-meta"><span class="job-period">${esc(j.period)}</span><span class="industry">${esc(j.industry)}</span></div>
        <h3><button class="job-toggle" aria-expanded="false" aria-controls="body-${j.id}">${esc(j.title)} <span class="at">@ ${esc(j.company)}</span></button></h3>
        <p class="job-sum">${esc(j.summary)}</p>
        <div class="job-foot">
          <div class="results">${j.results.map(r => `<span>${esc(r)}</span>`).join("")}</div>
          <span class="more" data-n="${j.details.length}">展開 ${j.details.length} 項細節</span>
        </div>
        <span class="chev" aria-hidden="true"></span>
      </div>
      <div class="job-body" id="body-${j.id}"><div class="job-inner">
        <p class="job-intro">${esc(j.intro)}</p>
        <div class="details">${j.details.map(d => `<div class="detail"><h4>${esc(d.h)}</h4><p>${esc(d.p)}</p></div>`).join("")}</div>
        <div class="tags">${j.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div></div>
    </li>`).join("");

  const setOpen = (li, open) => {
    li.classList.toggle("open", open);
    $(".job-toggle", li).setAttribute("aria-expanded", open);
    const more = $(".more", li);
    more.textContent = open ? "收合細節" : `展開 ${more.dataset.n} 項細節`;
  };
  const syncExpandBtn = () => { $("#expandAll").textContent = $$(".job").every(li => li.classList.contains("open")) ? "全部收合" : "全部展開"; };
  // 整張卡片頭可點；鍵盤使用者透過標題按鈕操作
  $$(".job").forEach(li => $(".job-head", li).addEventListener("click", () => { setOpen(li, !li.classList.contains("open")); syncExpandBtn(); }));
  $("#expandAll").addEventListener("click", () => {
    const all = $$(".job").every(li => li.classList.contains("open"));
    $$(".job").forEach(li => setOpen(li, !all));
    syncExpandBtn();
  });

  // Portfolio
  let cat = R.portfolioCats[0];
  const renderPf = () => {
    $("#pfTabs").innerHTML = R.portfolioCats.map(c => `<button class="tab${c === cat ? " on" : ""}" aria-pressed="${c === cat}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    $("#pfCards").innerHTML = R.portfolio.filter(p => cat === R.portfolioCats[0] || p.cat === cat).map(p => `
      <a class="card" href="${esc(p.url || R.portfolioDrive)}" target="_blank" rel="noopener">
        <span class="card-ref">${esc(p.ref)} · ${esc(p.cat)}</span>
        <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="card-more">在 Google Drive 開啟 →</span>
      </a>`).join("");
  };
  $("#pfTabs").addEventListener("click", e => { const t = e.target.closest(".tab"); if (t) { cat = t.dataset.cat; renderPf(); } });
  renderPf();

  // Education / certs / languages
  $("#edu").innerHTML = R.education.map(e => `<div class="row"><strong>${esc(e.school)}・${esc(e.degree)}</strong><span class="muted-t">${esc(e.period)}</span>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>`).join("");
  $("#certs").innerHTML = R.certs.map(c => `<div class="row"><strong>${esc(c.name)}</strong><span class="muted-t">Scrum.org · ${esc(c.date)}</span>
    <p><a href="${c.url}" target="_blank" rel="noopener">線上驗證</a>　<a href="${encodeURI(c.file)}" target="_blank">證書 PDF</a></p></div>`).join("");
  $("#langs").innerHTML = R.languages.map(([l, v]) => `<div class="row"><strong>${esc(l)}</strong><span class="muted-t">${esc(v)}</span></div>`).join("");

  // Toast
  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200); };
  $$(".copy-email").forEach(b => b.addEventListener("click", () => {
    navigator.clipboard.writeText("pontussecret@gmail.com").then(() => toast("已複製 Email"), () => toast("pontussecret@gmail.com"));
  }));

  // 導覽列高亮，並在手機上把目前項目捲入可視範圍
  const nav = $("#nav");
  const navLinks = $$("#nav a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => {
      const on = a.getAttribute("href") === "#" + e.target.id;
      a.classList.toggle("on", on);
      // 只橫向捲動導覽列本身；scrollIntoView 會連帶捲動整個頁面，造成無法往下捲
      if (on && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: a.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2 });
    });
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  const syncNavFade = () => nav.classList.toggle("at-end", nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 4);
  nav.addEventListener("scroll", syncNavFade, { passive: true });
  addEventListener("resize", syncNavFade);
  syncNavFade();

  window.addEventListener("beforeprint", () => $$(".job").forEach(li => setOpen(li, true)));
})();
