(function () {
  const D = window.RESUME, S = D.shared;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

  // 語言：網址 ?lang= 優先，其次是上次手動切換的選擇，再依瀏覽器語言（中文→中文，其他→英文）
  const browserLang = () => ((navigator.languages && navigator.languages[0]) || navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  let lang = new URLSearchParams(location.search).get("lang") || store.get("lang") || browserLang();
  if (!D[lang]) lang = "zh";
  let L, U;

  const toast = msg => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200); };
  const skillName = k => S.skills[k][lang];

  // 任職長度（含首尾月份）
  const duration = period => {
    const [a, b] = period.split("–").map(s => s.trim().split(".").map(Number));
    const months = (b[0] - a[0]) * 12 + (b[1] - a[1]) + 1;
    return U.duration(Math.floor(months / 12), months % 12);
  };

  // 數字動畫：預設即顯示最終值，僅在允許動畫時從 0 跑到最終值
  const fmt = (k, v) => (k.prefix || "") + v.toFixed(k.decimals || 0) + (k.suffix || "");
  const countUp = () => {
    if (reduceMotion || matchMedia("print").matches) return;
    $$(".kpi-num").forEach(el => {
      const k = L.kpis[el.dataset.i], t0 = performance.now(), dur = 1100;
      const step = now => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        if (el.dataset.done) return;
        el.textContent = fmt(k, k.value * e);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };

  // 高亮動畫：經歷卡片進入畫面時才播放，避免在畫面外播完
  const pulse = li => { li.classList.remove("pulse"); void li.offsetWidth; li.classList.add("pulse"); delete li.dataset.pending; };
  const pulseObserver = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && e.target.dataset.pending) pulse(e.target);
  }), { threshold: 0.4 });
  const inView = el => { const r = el.getBoundingClientRect(); return r.top < innerHeight * 0.85 && r.bottom > 60; };

  let active = null, cat = "all";

  const render = () => {
    L = D[lang]; U = L.ui;
    document.documentElement.lang = U.htmlLang;
    document.title = U.title;
    $$("[data-i18n]").forEach(el => { el.textContent = el.dataset.i18n.split(".").reduce((o, k) => o[k], U); });
    $("#langBtn").textContent = U.langBtn;
    $("#langBtn").setAttribute("aria-label", U.langBtnLabel);
    $("#langBtn").lang = lang === "zh" ? "en" : "zh-Hant";
    $("#printBtn").setAttribute("aria-label", U.printLabel);
    $("#updated").textContent = U.updated(S.updated);

    // Hero
    $("#lead").textContent = L.lead;
    $("#status").innerHTML = L.status;
    $("#highlights").innerHTML = L.highlights.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("");
    $("#kpis").innerHTML = L.kpis.map((k, i) => `
      <div class="kpi"><div class="kpi-num" data-i="${i}">${esc(fmt(k, k.value))}</div>
      <div class="kpi-label">${esc(k.label)}</div></div>`).join("");

    // Skills：外觀一致，依熟練度排序（熟練的排前面）
    $("#skillGroups").innerHTML = S.skillGroups.map(g => `
      <div class="skill-group"><h3>${esc(g[lang])}</h3><div class="chips">
        ${[...g.skills].sort((a, b) => S.skills[a].lv.localeCompare(S.skills[b].lv)).map(k =>
          `<button class="chip" data-skill="${k}" aria-pressed="false">${esc(skillName(k))}</button>`).join("")}
      </div></div>`).join("");

    // Timeline
    $("#timeline").innerHTML = L.jobs.map(j => `
      <li class="job" id="job-${j.id}" data-id="${j.id}">
        <div class="job-head">
          <div class="job-meta"><span class="job-period">${esc(j.period)}</span><span class="job-dur">${esc(duration(j.period))}</span><span class="industry">${esc(j.industry)}</span><span class="match" aria-hidden="true"></span></div>
          <h3><button class="job-toggle" aria-expanded="false" aria-controls="body-${j.id}">${esc(j.title)} <span class="at">@ ${esc(j.company)}</span></button></h3>
          <p class="job-sum">${esc(j.summary)}</p>
          <div class="job-foot">
            <div class="results">${j.results.map(r => `<span>${esc(r)}</span>`).join("")}</div>
            <span class="more">${esc(U.more(j.details.length))}</span>
          </div>
          <span class="chev" aria-hidden="true"></span>
        </div>
        <div class="job-body" id="body-${j.id}"><div class="job-inner">
          <p class="job-intro">${esc(j.intro)}</p>
          <div class="details">${j.details.map(d => `<div class="detail"><h4>${esc(d.h)}</h4><p>${esc(d.p)}</p></div>`).join("")}</div>
          <div class="tags">${S.jobSkills[j.id].map(k => `<span class="tag">${esc(skillName(k))}</span>`).join("")}</div>
        </div></div>
      </li>`).join("");
    $$(".job").forEach(li => pulseObserver.observe(li));
    syncExpandBtn();

    renderPf();

    // Education / certs / languages
    $("#edu").innerHTML = L.education.map(e => `<div class="row"><strong>${esc(e.school)}・${esc(e.degree)}</strong><span class="muted-t">${esc(e.period)}</span>${e.note ? `<p>${esc(e.note)}</p>` : ""}</div>`).join("");
    $("#certs").innerHTML = S.certs.map(c => `<div class="row"><strong>${esc(c.name)}</strong><span class="muted-t">Scrum.org · ${esc(c.date)}</span>
      <p><a href="${c.url}" target="_blank" rel="noopener">${esc(U.verify)}</a>　<a href="${encodeURI(c.file)}" target="_blank">${esc(U.certPdf)}</a></p></div>`).join("");
    $("#langs").innerHTML = L.languages.map(([l, v]) => `<div class="row"><strong>${esc(l)}</strong><span class="muted-t">${esc(v)}</span></div>`).join("");

    // 切換語言時保留技能標示
    const keep = active; active = null;
    if (keep) highlight(keep, true); else { $("#hlBar").hidden = true; $("#expHint").hidden = false; }
  };

  const renderPf = () => {
    $("#pfTabs").setAttribute("aria-label", U.pfTitle);
    $("#pfTabs").innerHTML = Object.entries(U.pfCats).map(([k, v]) => `<button class="tab${k === cat ? " on" : ""}" aria-pressed="${k === cat}" data-cat="${k}">${esc(v)}</button>`).join("");
    $("#pfCards").innerHTML = L.portfolio.filter(p => cat === "all" || p.cat === cat).map(p => `
      <a class="card" href="${esc(S.portfolioUrls[p.ref] || S.portfolioDrive)}" target="_blank" rel="noopener">
        <span class="card-ref">${esc(p.ref)} · ${esc(U.pfCats[p.cat])}</span>
        <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><span class="card-more">${esc(U.pfOpen)}</span>
      </a>`).join("");
  };

  // 經歷展開
  const setOpen = (li, open) => {
    li.classList.toggle("open", open);
    $(".job-toggle", li).setAttribute("aria-expanded", open);
    $(".more", li).textContent = open ? U.less : U.more($$(".detail", li).length);
  };
  const syncExpandBtn = () => { $("#expandAll").textContent = $$(".job").every(li => li.classList.contains("open")) ? U.collapseAll : U.expandAll; };
  // 整張卡片頭可點；鍵盤使用者透過標題按鈕操作
  $("#timeline").addEventListener("click", e => {
    const head = e.target.closest(".job-head");
    if (!head) return;
    const li = head.closest(".job");
    setOpen(li, !li.classList.contains("open"));
    syncExpandBtn();
  });
  $("#expandAll").addEventListener("click", () => {
    const all = $$(".job").every(li => li.classList.contains("open"));
    $$(".job").forEach(li => setOpen(li, !all));
    syncExpandBtn();
  });

  // 點技能 → 標示用到它的經歷（不展開細節、不捲動頁面）
  const highlight = (skill, quiet) => {
    active = active === skill ? null : skill;
    $$(".chip[data-skill]").forEach(c => { const on = c.dataset.skill === active; c.classList.toggle("on", on); c.setAttribute("aria-pressed", on); });
    const hits = [];
    $$(".job").forEach(li => {
      const hit = !!active && S.jobSkills[li.dataset.id].includes(active);
      li.classList.toggle("hit", hit);
      li.classList.remove("pulse");
      delete li.dataset.pending;
      if (hit) { hits.push(li); if (!quiet) inView(li) ? pulse(li) : (li.dataset.pending = "1"); }
      li.classList.toggle("dim", !!active && !hit);
      $(".match", li).textContent = hit ? U.uses(skillName(active)) : "";
    });
    $("#hlBar").hidden = !active;
    $("#expHint").hidden = !!active;
    if (!active) return;
    const name = skillName(active);
    $("#hlText").textContent = hits.length ? U.hlBar(name, hits.length) : U.notAtWork(name);
    if (!quiet) toast(hits.length ? U.hlToast(hits.length) : U.notAtWork(name));
  };
  $("#skillGroups").addEventListener("click", e => { const c = e.target.closest(".chip[data-skill]"); if (c) highlight(c.dataset.skill); });
  $("#hlClear").addEventListener("click", () => highlight(active));

  $("#pfTabs").addEventListener("click", e => { const t = e.target.closest(".tab"); if (t) { cat = t.dataset.cat; renderPf(); } });

  $$(".copy-email").forEach(b => b.addEventListener("click", () => {
    navigator.clipboard.writeText("pontussecret@gmail.com").then(() => toast(U.copied), () => toast("pontussecret@gmail.com"));
  }));
  $("#printBtn").addEventListener("click", () => window.print());

  $("#langBtn").addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    store.set("lang", lang);
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
    render();
  });

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

  // 導覽列左右淡出：還有內容可滑動的一側才淡出
  const syncNavFade = () => {
    nav.classList.toggle("at-start", nav.scrollLeft <= 4);
    nav.classList.toggle("at-end", nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 4);
  };
  nav.addEventListener("scroll", syncNavFade, { passive: true });
  addEventListener("resize", syncNavFade);

  // 列印前展開全部經歷，並讓數字直接顯示最終值
  window.addEventListener("beforeprint", () => {
    $$(".job").forEach(li => setOpen(li, true));
    $$(".kpi-num").forEach(el => { el.dataset.done = "1"; el.textContent = fmt(L.kpis[el.dataset.i], L.kpis[el.dataset.i].value); });
  });

  // 訪客統計（填入 GoatCounter 代碼後才會載入）
  if (S.goatcounter) {
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.dataset.goatcounter = `https://${S.goatcounter}.goatcounter.com/count`;
    document.body.appendChild(s);
  }

  render();
  syncNavFade();
  countUp();
})();
