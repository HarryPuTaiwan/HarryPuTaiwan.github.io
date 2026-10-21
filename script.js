(function () {
  const R = window.RESUME;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Hero
  $("#lead").textContent = R.lead;
  $("#status").innerHTML = R.status;
  $("#highlights").innerHTML = R.highlights.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("");
  $("#kpis").innerHTML = R.kpis.map(k => `
    <div class="kpi"><div class="kpi-num" data-v="${k.value}" data-d="${k.decimals || 0}" data-p="${esc(k.prefix || "")}" data-s="${esc(k.suffix || "")}">${esc(k.prefix || "")}0${esc(k.suffix || "")}</div>
    <div class="kpi-label">${esc(k.label)}</div></div>`).join("");

  // 數字動畫
  const countUp = el => {
    const v = +el.dataset.v, d = +el.dataset.d, t0 = performance.now(), dur = 1100;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = el.dataset.p + (v * e).toFixed(d) + el.dataset.s;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  // Skills
  const usage = {};
  R.jobs.forEach(j => j.tags.forEach(t => (usage[t] = (usage[t] || 0) + 1)));
  $("#skillGroups").innerHTML = R.skillGroups.map(g => `
    <div class="skill-group"><h3>${esc(g.name)}</h3><div class="chips">
      ${g.skills.map(s => `<button class="chip${usage[s] ? "" : " muted"}" data-skill="${esc(s)}">${esc(s)}${usage[s] ? `<em>${usage[s]}</em>` : ""}</button>`).join("")}
    </div></div>`).join("");

  // Timeline
  $("#timeline").innerHTML = R.jobs.map(j => `
    <li class="job" id="job-${j.id}" data-tags="${esc(j.tags.join("|"))}">
      <button class="job-head" aria-expanded="false">
        <div class="job-main">
          <span class="job-period">${esc(j.period)}</span>
          <h3>${esc(j.title)} <span class="at">@ ${esc(j.company)}</span></h3>
          <p class="job-sum">${esc(j.summary)}</p>
          <div class="results">${j.results.map(r => `<span>${esc(r)}</span>`).join("")}</div>
        </div>
        <span class="chev" aria-hidden="true"></span>
      </button>
      <div class="job-body"><div class="job-inner">
        <p class="job-intro">${esc(j.intro)}</p>
        <div class="details">${j.details.map(d => `<div class="detail"><h4>${esc(d.h)}</h4><p>${esc(d.p)}</p></div>`).join("")}</div>
        <div class="tags">${j.tags.map(t => `<span class="tag" data-skill="${esc(t)}">${esc(t)}</span>`).join("")}</div>
      </div></div>
    </li>`).join("");

  const setOpen = (li, open) => {
    li.classList.toggle("open", open);
    $(".job-head", li).setAttribute("aria-expanded", open);
  };
  $$(".job").forEach(li => $(".job-head", li).addEventListener("click", () => { setOpen(li, !li.classList.contains("open")); syncExpandBtn(); }));
  const syncExpandBtn = () => { $("#expandAll").textContent = $$(".job").every(li => li.classList.contains("open")) ? "全部收合" : "全部展開"; };
  $("#expandAll").addEventListener("click", () => {
    const all = $$(".job").every(li => li.classList.contains("open"));
    $$(".job").forEach(li => setOpen(li, !all));
    syncExpandBtn();
  });

  // 技能篩選
  let active = null;
  const applyFilter = skill => {
    active = active === skill ? null : skill;
    $$(".chip").forEach(c => c.classList.toggle("on", c.dataset.skill === active));
    $$(".tag").forEach(t => t.classList.toggle("on", t.dataset.skill === active));
    let n = 0;
    $$(".job").forEach(li => {
      const hit = active && li.dataset.tags.split("|").includes(active);
      if (hit) n++;
      li.classList.toggle("hit", !!hit);
      li.classList.toggle("dim", !!active && !hit);
      if (hit) setOpen(li, true);
    });
    syncExpandBtn();
    $("#filterBar").hidden = !active;
    if (active) {
      $("#filterName").textContent = active;
      $("#filterCount").textContent = `— ${n} 段經歷使用`;
      const first = $(".job.hit");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  $("#skillGroups").addEventListener("click", e => { const c = e.target.closest(".chip"); if (c && !c.classList.contains("muted")) applyFilter(c.dataset.skill); });
  $("#timeline").addEventListener("click", e => { const t = e.target.closest(".tag"); if (t) applyFilter(t.dataset.skill); });
  $("#clearFilter").addEventListener("click", () => applyFilter(active));

  // Portfolio
  let cat = R.portfolioCats[0];
  const renderPf = () => {
    $("#pfTabs").innerHTML = R.portfolioCats.map(c => `<button class="tab${c === cat ? " on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
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
  $("#langBtn").addEventListener("click", () => toast("英文版即將推出"));
  $("#copyEmail").addEventListener("click", () => {
    navigator.clipboard.writeText("pontussecret@gmail.com").then(() => toast("已複製 Email"), () => toast("pontussecret@gmail.com"));
  });

  // 進場動畫與導覽列高亮
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    $$(".kpi-num", e.target).forEach(countUp);
    io.unobserve(e.target);
  }), { threshold: 0.15 });
  $$(".hero, .section").forEach(s => io.observe(s));

  const navLinks = $$("#nav a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach(s => spy.observe(s));

  window.addEventListener("beforeprint", () => $$(".job").forEach(li => setOpen(li, true)));
})();
