// 履歷內容集中於此。
// shared：兩種語言共用的資料（技能、連結、經歷用到的技能）
// zh / en：各語言的文字內容；修改中文時只動 zh，英文只動 en
window.RESUME = {
  shared: {
    updated: "2026.10",
    // 技能：lv 為熟練度（A 精通、B 熟練、C 具實務經驗），只用於排序，不在畫面上顯示
    skills: {
      sql: { lv: "A", zh: "SQL（MySQL、Hive、Trino）", en: "SQL (MySQL, Hive, Trino)" },
      metabase: { lv: "A", zh: "Metabase", en: "Metabase" },
      zeppelin: { lv: "A", zh: "Zeppelin", en: "Zeppelin" },
      dashboard: { lv: "A", zh: "指標與儀表板設計", en: "Metrics & dashboard design" },
      tableau: { lv: "B", zh: "Tableau", en: "Tableau" },
      powerbi: { lv: "B", zh: "Power BI", en: "Power BI" },
      python: { lv: "A", zh: "Python", en: "Python" },
      etl: { lv: "A", zh: "ETL／ELT 管線設計", en: "ETL/ELT pipeline design" },
      airflow: { lv: "A", zh: "Airflow", en: "Airflow" },
      dq: { lv: "A", zh: "資料品質驗證", en: "Data quality validation" },
      aws: { lv: "B", zh: "AWS（Redshift、RDS）", en: "AWS (Redshift, RDS)" },
      spark: { lv: "C", zh: "Spark", en: "Spark" },
      hadoop: { lv: "C", zh: "Hadoop／Kafka／Elasticsearch", en: "Hadoop / Kafka / Elasticsearch" },
      databricks: { lv: "C", zh: "Databricks", en: "Databricks" },
      lightgbm: { lv: "A", zh: "LightGBM", en: "LightGBM" },
      predictive: { lv: "A", zh: "預測模型", en: "Predictive modeling" },
      stats: { lv: "A", zh: "統計檢定", en: "Statistical testing" },
      recsys: { lv: "B", zh: "推薦系統（協同過濾）", en: "Recommender systems (collaborative filtering)" },
      abtest: { lv: "B", zh: "A/B 測試", en: "A/B testing" },
      fraud: { lv: "B", zh: "詐欺與異常偵測", en: "Fraud & anomaly detection" },
      mlops: { lv: "B", zh: "模型監控與再訓練", en: "Model monitoring & retraining" },
      r: { lv: "B", zh: "R", en: "R" },
      agent: { lv: "A", zh: "AI Agent", en: "AI agents" },
      mcp: { lv: "A", zh: "MCP", en: "MCP" },
      claudecode: { lv: "A", zh: "Claude Code", en: "Claude Code" },
      windsurf: { lv: "A", zh: "Windsurf", en: "Windsurf" },
      rpa: { lv: "A", zh: "RPA（Python）", en: "RPA (Python)" },
      chromeext: { lv: "A", zh: "Chrome Extension", en: "Chrome extensions" },
      d3: { lv: "C", zh: "JavaScript／D3.js", en: "JavaScript / D3.js" },
      aml: { lv: "B", zh: "反洗錢（AML）", en: "Anti-money laundering (AML)" },
      bankdw: { lv: "B", zh: "銀行資料倉儲與核心系統轉換", en: "Bank data warehouse & core system migration" },
      ecom: { lv: "B", zh: "電商營運", en: "E-commerce operations" },
      platformfraud: { lv: "B", zh: "線上平台詐欺偵測", en: "Online platform fraud detection" },
      reqs: { lv: "A", zh: "需求訪談", en: "Requirements gathering" },
      training: { lv: "A", zh: "內部教育訓練", en: "Internal training" },
      stakeholder: { lv: "B", zh: "利害關係人管理", en: "Stakeholder management" },
      scrum: { lv: "B", zh: "Scrum（PSM／PSPO）", en: "Scrum (PSM / PSPO)" }
    },
    skillGroups: [
      { zh: "資料分析與 BI", en: "Data Analytics & BI", skills: ["sql", "metabase", "zeppelin", "dashboard", "tableau", "powerbi"] },
      { zh: "資料工程", en: "Data Engineering", skills: ["python", "etl", "airflow", "dq", "aws", "spark", "hadoop", "databricks"] },
      { zh: "機器學習與統計", en: "Machine Learning & Statistics", skills: ["lightgbm", "predictive", "stats", "recsys", "abtest", "fraud", "mlops", "r"] },
      { zh: "AI 應用與自動化", en: "AI & Automation", skills: ["agent", "mcp", "claudecode", "windsurf", "rpa", "chromeext", "d3"] },
      { zh: "產業領域", en: "Domain Knowledge", skills: ["aml", "bankdw", "ecom", "platformfraud"] },
      { zh: "專案與協作", en: "Project & Collaboration", skills: ["reqs", "training", "stakeholder", "scrum"] }
    ],
    // 每段經歷用到的技能（點選技能時用來標示經歷）
    jobSkills: {
      coupang: ["python", "sql", "zeppelin", "powerbi", "dashboard", "etl", "agent", "mcp", "claudecode", "windsurf", "chromeext", "ecom", "reqs"],
      tookitaki: ["python", "sql", "spark", "hadoop", "agent", "aml", "reqs", "stakeholder"],
      opennet: ["python", "sql", "airflow", "aws", "etl", "dq", "metabase", "dashboard", "fraud", "platformfraud"],
      "esun-ba": ["reqs", "stakeholder", "sql", "tableau", "dashboard", "rpa", "d3", "bankdw", "scrum"],
      "esun-ds": ["python", "sql", "lightgbm", "predictive", "stats", "abtest", "recsys", "mlops", "rpa", "training"]
    },
    portfolioDrive: "https://drive.google.com/drive/folders/1uxhiTcDH05uTJdzGqUAjDpVywo7NNsLn",
    portfolioUrls: {
      Ref1: "https://drive.google.com/file/d/1D5LhoMamfdwvVnsv8O4gSoZv9PnhibtD/view?usp=drive_link",
      Ref2: "https://drive.google.com/file/d/1yGiZ8J0o3bZa5uD1iREtmxPKZ5cgrz7v/view?usp=drive_link",
      Ref3: "https://drive.google.com/file/d/1vs_44O8m32M-Qx2qWPpAPBz7qjWmgLtq/view?usp=drive_link",
      Ref4: "https://drive.google.com/file/d/1A5EMbNzbKxeSt8HlJyvViLaH7qm9O3zZ/view?usp=drive_link",
      Ref5: "https://drive.google.com/file/d/1Q7CS7apyVd2fFjI_AOx2Rs_b2fjZzzVV/view?usp=drive_link",
      Ref6: "https://drive.google.com/file/d/16BZ_gDMfhnVmpWh8cMdpt8DkoeyJsVPJ/view?usp=drive_link",
      Ref7: "https://drive.google.com/file/d/1pi_isUAmY0_miUR3sShkmnpX41ctiCk-/view?usp=drive_link",
      Ref8: "https://drive.google.com/file/d/1PFOuIg9dmW87c9CJnBjAXgoC68q-tY5X/view?usp=drive_link"
    },
    certs: [
      { name: "Professional Scrum Master I (PSM I)", date: "2020.02", url: "https://scrum.org/certificates/510007", file: "Professional Scrum Master I.pdf" },
      { name: "Professional Scrum Product Owner I (PSPO I)", date: "2020.02", url: "https://scrum.org/certificates/510532", file: "Professional Scrum Product Owner I.pdf" }
    ],
    // 訪客統計：到 goatcounter.com 註冊後，把代碼（例如 "guanjipu"）填在這裡即可啟用；留空則不載入
    goatcounter: "guanjipu"
  },

  zh: {
    ui: {
      htmlLang: "zh-Hant-TW",
      title: "蒲冠吉 Guan-Ji Pu｜資料分析 · 資料工程 · AI 應用",
      langBtn: "EN", langBtnLabel: "Switch to English",
      nav: { about: "簡介", skills: "技能", experience: "經歷", portfolio: "作品集", education: "學歷證照", contact: "聯絡" },
      print: "列印", printLabel: "列印或另存 PDF",
      eyebrow: "資料分析 · 資料工程 · 機器學習 · AI 應用",
      copyEmail: "複製 Email", copied: "已複製 Email",
      skillsTitle: "專業技能", skillsHint: "點選技能，下方會標示用到它的工作經歷",
      expTitle: "工作經歷", expHint: "點擊各段經歷，可展開工作細節與成果",
      expandAll: "全部展開", collapseAll: "全部收合",
      more: n => `展開 ${n} 項細節`, less: "收合細節",
      uses: s => `用到 ${s}`,
      hlBar: (s, n) => `已標示用到「${s}」的 ${n} 段經歷`,
      hlToast: n => `已在下方工作經歷標示 ${n} 段`,
      notAtWork: s => `「${s}」為工作以外的學習經驗`,
      hlClear: "清除標示",
      duration: (y, m) => [y && `${y} 年`, m && `${m} 個月`].filter(Boolean).join(" "),
      pfTitle: "作品集", pfCats: { all: "全部", ml: "專案與機器學習", viz: "視覺化", ws: "工作坊" }, pfOpen: "在 Google Drive 開啟 →",
      eduTitle: "學歷 · 證照 · 語言", edu: "學歷", certs: "證照", langs: "語言",
      verify: "線上驗證", certPdf: "證書 PDF",
      contactTitle: "聯絡我", contactText: "歡迎透過 LinkedIn 或 Email（pontussecret@gmail.com）與我聯繫。",
      updated: d => `最後更新：${d}`,
      printNote: "線上互動版：harryputaiwan.github.io"
    },
    lead: "擁有 7 年以上資料分析、資料工程與機器學習經驗，橫跨銀行、金融科技 SaaS、線上平台與電商產業。擅長從需求訪談到資料管線、模型與 BI 報表的端到端交付，並將 AI Agent 與 MCP 導入日常工作流程。",
    highlights: [
      ["端到端資料解決方案", "設計 ETL／ELT 管線、預測模型、詐欺偵測與互動式 BI 報表（Python、SQL、Airflow、AWS Redshift／RDS、BI 工具）"],
      ["AI 工具實務應用", "運用 AI Agent 與 MCP 加速知識檢索、報告產出與程式開發"],
      ["商業與 IT 的橋樑", "需求訪談、利害關係人溝通，參與 50+ 人跨部門大型系統轉換專案"]
    ],
    status: "目前正在進修 AI 課程（<a href=\"https://ai-talent.tw/\" target=\"_blank\" rel=\"noopener\">ai-talent.tw</a>），開放 AI 應用／BI 相關職缺洽談",
    kpis: [
      { value: 7, suffix: "+ 年", label: "資料相關工作經驗" },
      { value: 100, prefix: "USD ", suffix: "K", label: "詐欺偵測單季減少損失" },
      { value: 35, suffix: "M+", label: "資料管線支援的用戶規模" },
      { value: 2, prefix: "約 ", suffix: " 小時", label: "根因報告初版產出時間" }
    ],
    jobs: [
      {
        id: "coupang", industry: "電商",
        title: "Senior Data Analyst",
        company: "Coupang",
        period: "2026.01 – 2026.08",
        intro: "電商平台。支援客服部門與高階主管的資料需求。",
        summary: "為客服部門與主管提供端到端資料方案：SQL 查詢、根因分析（RCA）臨時需求報表、即時營運報表、互動式儀表板、Chrome Extension 與自動化資料管線。",
        details: [
          { h: "客服查詢資料解決方案", p: "提供 Chrome Extension、即時營運報表等資料工具，解決客服部門的查詢需求：整合跨系統資料、串接查詢 API、支援大量批次查詢，讓營運專員快速完成業務流程。" },
          { h: "品牌審核規則（Brand Gating Rules）設計", p: "商家上架品牌商品需經審核。以 Python 搭配 AI 建立規則產製流程，大量產生 gating regex 規則，並用歷史資料驗證 Recall。相較人工撰寫（缺乏完整驗證、容易出錯、條件過嚴或過寬），規則品質更穩定；共處理約 500 個品牌，每個約省 5 分鐘，累計約 40 小時。" },
          { h: "AI Agent 與 MCP 的實務應用", p: "日常以 Windsurf（搭配工作 skills）與 Claude Code 開發，並運用內部工具加速知識檢索、程式開發與 BI 報表製作，包括：串接內部 Wiki 的 MCP（彙整文件產出知識報告）、Slack 知識問答機器人，以及從歷史 SQL 萃取商業知識的「資料表使用說明」。" },
          { h: "根因分析報告加速", p: "運用 AI 工具後，原需半天到一天的根因分析報告，約 2 小時即可產出第一版。" }
        ],
        results: ["根因報告初版：半天～1 天 → 約 2 小時", "約 500 個品牌規則，省下約 40 小時"]
      },
      {
        id: "tookitaki", industry: "AML 合規 SaaS",
        title: "Data Scientist",
        company: "Tookitaki",
        period: "2025.07 – 2026.01",
        intro: "反洗錢（AML）合規 SaaS 公司。客戶為菲律賓、新加坡、馬來西亞、澳洲、紐西蘭等地金融機構。",
        summary: "在客戶服務團隊對接金融機構，協助設定大型合規 SaaS 方案，使產品行為符合 AML 態樣、名單篩檢與各機構需求。",
        details: [
          { h: "客戶問題技術排解", p: "客戶遇到產品問題時，運用 AI 剖析反洗錢系統、釐清資料管線與產品行為並回覆客戶；排查範圍涵蓋 Hadoop、Spark、Kafka、Elasticsearch 與 AWS 上的工作流程。" },
          { h: "參數設定建議", p: "依客戶的風險偏好，並分析警示（alert）的 true positive／false positive 狀況，建議產品參數設定。" },
          { h: "分析流程自動化", p: "以 Python 與 SQL 自動化分析流程，每位客戶每季可減少 1.5 天的警示資料處理時間。" }
        ],
        results: ["每客戶每季節省 1.5 天警示資料處理時間"]
      },
      {
        id: "opennet", industry: "線上娛樂平台",
        title: "Data Analytics Engineer",
        company: "Opennet",
        period: "2024.03 – 2025.07",
        intro: "線上娛樂平台開發商（遊戲機制、BI、維運）。",
        summary: "負責資料管線、BI 報表與詐欺偵測，支援 3,500 萬以上用戶規模的分析需求。",
        details: [
          { h: "新市場（南非）ETL 整合專案", p: "主導南非新市場上線的 ETL 整合專案，自行拆解工作項目，確保新國家資料與既有 BI 邏輯一致，並透過資料品質驗證與基礎設施設定，維持 BI 服務不中斷。" },
          { h: "打假球（詐欺）偵測流程", p: "從資料中找出可疑模式（多名使用者在相近時間下注相似組合），建置結合 Slack 與 DAG 排程警示的偵測流程，將合規監控嵌入產品系統，單季減少 USD 100K 損失。" },
          { h: "資料管線與儀表板", p: "以 Airflow 與 AWS（Redshift／RDS）設計並優化資料管線，支援 OKR、營運與顧客終身價值（LTV）儀表板，提升跨團隊資訊透明度。" }
        ],
        results: ["單季減少 USD 100K 損失", "支援 35M+ 用戶分析", "南非新市場資料上線"]
      },
      {
        id: "esun-ba", industry: "銀行",
        title: "Business Analyst",
        company: "玉山銀行 E.SUN Commercial Bank",
        period: "2021.11 – 2024.03",
        intro: "由 Data Scientist 內部轉職，參與海外核心系統轉換專案。",
        summary: "參與海外核心銀行系統轉換專案的規劃與執行，負責資料倉儲轉換的需求分析。",
        details: [
          { h: "資料倉儲轉換需求分析", p: "分析 108 項資料需求並遷移至集中式資料平台，確保資料倉儲順利轉換；預估每年節省新台幣 1 億元維運成本。" },
          { h: "跨部門協作", p: "與 50 位以上業務與 IT 同仁協作，主動與利害關係人溝通，處理新核心系統與資料中台的整合問題。" },
          { h: "資料血緣視覺化", p: "以 JavaScript 與 D3.js 製作資料倉儲血緣（lineage）Sankey 圖，協助團隊掌握資料相依關係與系統異動影響範圍。（見作品集 Ref3）" },
          { h: "RPA 行政流程優化", p: "以 Python 開發 RPA 並包裝成 exe 執行檔，自動化行政作業流程。" },
          { h: "業務績效 BI 報表自動化", p: "將原本以 Excel 人工蒐集數據的業務績效報表，改為 Tableau 自動產生，提升營運可視性並減少 60% 報表工作量。" }
        ],
        results: ["108 項資料需求分析", "預估年省 NTD 1 億元維運成本", "績效報表工作量減少 60%"]
      },
      {
        id: "esun-ds", industry: "銀行",
        title: "Data Scientist",
        company: "玉山銀行 E.SUN Commercial Bank",
        period: "2019.07 – 2021.11",
        intro: "負責機器學習模型開發與數位轉型相關專案。",
        summary: "開發並維運正式環境的機器學習模型，支援行銷與風險評分，並推動內部資料分析與自動化教育訓練。",
        details: [
          { h: "獲客預測模型", p: "以 LightGBM 建立獲客預測模型，經 A/B 測試驗證，轉換率為傳統方法的 1.9 倍；並建置效能監控、自動再訓練與調校機制。（見作品集 Ref1）" },
          { h: "投資組合再平衡系統", p: "參與以夏普值（Sharpe ratio）最佳化的投資組合再平衡系統，提供理專財務建議；客戶採用率達 60%，預估年營收新台幣 1 億元。" },
          { h: "顧客輪廓分析", p: "與行銷團隊合作分析顧客輪廓，發現某產品關鍵的 20 天獲客窗口，提供行銷決策參考。" },
          { h: "推薦系統", p: "實作協同過濾（Collaborative Filtering）推薦系統，離線評估網站點擊數提升 42%。（見作品集 Ref2）" },
          { h: "內部教育訓練", p: "主辦 Python、RPA 工作坊（每場約 30 人）與部門推力理論（Nudge）講座（100+ 人），協助同仁建立資料素養與自動化能力。" }
        ],
        results: ["轉換率 1.9 倍", "60% 客戶採用率", "推薦系統離線點擊 +42%"]
      }
    ],
    portfolio: [
      { ref: "Ref1", cat: "ml", title: "顧客分群與行銷最佳化", desc: "分析顧客人口特徵、瀏覽與交易行為，建立預測模型最佳化受眾投放，A/B 測試轉換率為基準方法的 1.9 倍。" },
      { ref: "Ref2", cat: "ml", title: "協同過濾推薦系統", desc: "實作協同過濾推薦系統提升商品探索，離線評估網站點擊數提升 42%。" },
      { ref: "Ref3", cat: "viz", title: "玉山資料倉儲血緣圖（D3.js）", desc: "以 D3.js Sankey 圖呈現資料倉儲端到端血緣，協助快速辨識 schema 異動影響範圍。" },
      { ref: "Ref4", cat: "viz", title: "Tableau 顧客推薦 KPI 儀表板", desc: "第一頁為 Tableau 互動儀表板示範；第二頁為玉山銀行實際專案：視覺化推薦（referral）KPI 並分析後續顧客行為。" },
      { ref: "Ref5", cat: "viz", title: "美國參議員意識形態分析", desc: "以分群與視覺化分析參議院投票紀錄，將參議員依投票模式歸納為不同意識形態群組。" },
      { ref: "Ref6", cat: "ws", title: "部門講座：推力理論與行為改變", desc: "百人以上部門講座，介紹 Nudge 理論於決策設計與數位轉型的應用。" },
      { ref: "Ref7", cat: "ws", title: "RPA & Python 工作坊（一）", desc: "Python 基礎與簡易 RPA 開發，每場約 30 位跨部門同仁參加。" },
      { ref: "Ref8", cat: "ws", title: "RPA & Python 工作坊（二）", desc: "延續課程，協助同仁建立資料素養並動手打造自動化小工具。" }
    ],
    education: [
      { school: "國立臺灣大學", degree: "心理學系 碩士", period: "2015.09 – 2018.04", note: "論文：從臉型特徵預測性格、價值觀與朋友關係" },
      { school: "國立臺灣大學", degree: "心理學系 學士", period: "2011.09 – 2015.06" }
    ],
    languages: [
      ["中文", "母語"],
      ["台語", "流利"],
      ["英文", "專業工作能力（TOEFL iBT 95/120）"]
    ]
  },

  en: {
    ui: {
      htmlLang: "en",
      title: "Guan-Ji Pu | Data Analytics · Data Engineering · AI Applications",
      langBtn: "中文", langBtnLabel: "切換為中文",
      nav: { about: "About", skills: "Skills", experience: "Experience", portfolio: "Portfolio", education: "Education", contact: "Contact" },
      print: "Print", printLabel: "Print or save as PDF",
      eyebrow: "Data Analytics · Data Engineering · Machine Learning · AI Applications",
      copyEmail: "Copy email", copied: "Email copied",
      skillsTitle: "Skills", skillsHint: "Click a skill to highlight the roles where I used it",
      expTitle: "Experience", expHint: "Click a role to see details and results",
      expandAll: "Expand all", collapseAll: "Collapse all",
      more: n => `Show ${n} details`, less: "Hide details",
      uses: s => `Uses ${s}`,
      hlBar: (s, n) => `Highlighting ${n} role${n > 1 ? "s that use" : " that uses"} “${s}”`,
      hlToast: n => `${n} role${n > 1 ? "s" : ""} highlighted in Experience below`,
      notAtWork: s => `“${s}” was learned outside of work`,
      hlClear: "Clear",
      duration: (y, m) => [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" "),
      pfTitle: "Portfolio", pfCats: { all: "All", ml: "Projects & ML", viz: "Visualization", ws: "Workshops" }, pfOpen: "Open in Google Drive →",
      eduTitle: "Education · Certifications · Languages", edu: "Education", certs: "Certifications", langs: "Languages",
      verify: "Verify online", certPdf: "Certificate PDF",
      contactTitle: "Contact", contactText: "Feel free to reach me on LinkedIn or by email (pontussecret@gmail.com).",
      updated: d => `Last updated: ${d}`,
      printNote: "Interactive version: harryputaiwan.github.io"
    },
    lead: "Data professional with 7+ years of experience across data analytics, data engineering and machine learning, spanning banking, fintech SaaS, online platforms and e-commerce. I deliver end to end — from requirements gathering to data pipelines, models and BI dashboards — and bring AI agents and MCP into everyday workflows.",
    highlights: [
      ["End-to-end data solutions", "ETL/ELT pipelines, predictive models, fraud detection and interactive BI dashboards (Python, SQL, Airflow, AWS Redshift/RDS, BI tools)"],
      ["Hands-on AI tooling", "Using AI agents and MCP to speed up knowledge retrieval, reporting and code development"],
      ["Business–IT bridge", "Requirements gathering and stakeholder communication; part of a 50+ person cross-functional system migration"]
    ],
    status: "Currently taking an AI program (<a href=\"https://ai-talent.tw/\" target=\"_blank\" rel=\"noopener\">ai-talent.tw</a>); open to AI application and BI roles",
    kpis: [
      { value: 7, suffix: "+ yrs", label: "Experience in data roles" },
      { value: 100, prefix: "USD ", suffix: "K", label: "Saved in one quarter by fraud detection" },
      { value: 35, suffix: "M+", label: "Users supported by my data pipelines" },
      { value: 2, prefix: "~", suffix: " hrs", label: "Time to a first-draft RCA report" }
    ],
    jobs: [
      {
        id: "coupang", industry: "E-commerce",
        title: "Senior Data Analyst",
        company: "Coupang",
        period: "2026.01 – 2026.08",
        intro: "E-commerce platform. Supported the data needs of Customer Service and senior leadership.",
        summary: "Delivered end-to-end data solutions for Customer Service and leadership: SQL queries, ad-hoc root-cause (RCA) reports, real-time operations reports, interactive dashboards, Chrome extensions and automated data pipelines.",
        details: [
          { h: "Data tools for Customer Service", p: "Built data tools such as Chrome extensions and real-time operations reports to solve Customer Service data lookups — integrating cross-system data, connecting to query APIs and supporting large batch queries so operations specialists could complete their workflows quickly." },
          { h: "Brand gating rule design", p: "Sellers listing branded products must pass a review. Built a Python + AI workflow that generated gating regex rules at scale and validated their recall against historical data. Compared with hand-written rules (no full recall check, error-prone, often too strict or too loose), rule quality was more consistent; covered about 500 brands at roughly 5 minutes saved per brand — about 40 hours in total." },
          { h: "Applying AI agents and MCP", p: "Developed daily with Windsurf (with work skills) and Claude Code, and used internal tools to speed up knowledge retrieval, coding and BI reporting: an MCP connected to the internal wiki that compiles documents into knowledge reports, a Slack Q&A bot, and table usage guides that extract business knowledge from historical SQL." },
          { h: "Faster root-cause reports", p: "With AI tools, root-cause analysis reports that took half a day to a full day now reach a first draft in about 2 hours." }
        ],
        results: ["RCA first draft: ½–1 day → ~2 hrs", "~500 brand rules, ~40 hrs saved"]
      },
      {
        id: "tookitaki", industry: "AML compliance SaaS",
        title: "Data Scientist",
        company: "Tookitaki",
        period: "2025.07 – 2026.01",
        intro: "Anti-money-laundering (AML) compliance SaaS company serving financial institutions in the Philippines, Singapore, Malaysia, Australia and New Zealand.",
        summary: "Client-facing role working with financial institutions to configure a large-scale compliance SaaS solution, aligning product behavior with AML typologies, watchlist screening and each institution's requirements.",
        details: [
          { h: "Technical troubleshooting for clients", p: "When enterprise clients ran into product issues, used AI to dissect the AML system, clarify data pipelines and product behavior, and respond to the client — covering workflows on Hadoop, Spark, Kafka, Elasticsearch and AWS." },
          { h: "Parameter recommendations", p: "Recommended product parameter settings based on each client's risk appetite and on analysis of alert true and false positives." },
          { h: "Workflow automation", p: "Automated analytical workflows with Python and SQL, cutting alert-data processing time by 1.5 days per client per quarter." }
        ],
        results: ["1.5 days saved per client per quarter on alert data"]
      },
      {
        id: "opennet", industry: "Online entertainment platform",
        title: "Data Analytics Engineer",
        company: "Opennet",
        period: "2024.03 – 2025.07",
        intro: "Developer of an online entertainment platform (game mechanics, BI, operations).",
        summary: "Owned data pipelines, BI reporting and fraud detection, supporting analytics for 35M+ users.",
        details: [
          { h: "New-market (South Africa) ETL integration", p: "Led the planning and execution of the ETL integration for the South Africa launch, defining work items independently to keep new-country data consistent with existing BI logic, and keeping BI running through data quality validation and infrastructure setup." },
          { h: "Match-fixing (fraud) detection", p: "Identified suspicious patterns in the data (multiple users placing similar bets at nearly the same time) and built a detection workflow with Slack and DAG-scheduled alerts, embedding compliance monitoring into the product and saving USD 100K in a single quarter." },
          { h: "Pipelines and dashboards", p: "Designed and optimized pipelines with Airflow and AWS (Redshift/RDS) powering OKR, operations and customer lifetime value (LTV) dashboards, improving cross-team visibility." }
        ],
        results: ["USD 100K saved in one quarter", "Analytics for 35M+ users", "South Africa market data launched"]
      },
      {
        id: "esun-ba", industry: "Banking",
        title: "Business Analyst",
        company: "E.SUN Commercial Bank",
        period: "2021.11 – 2024.03",
        intro: "Internal transfer from Data Scientist to an overseas core banking system migration project.",
        summary: "Planned and executed an overseas core banking system migration, owning requirements analysis for the data warehouse transition.",
        details: [
          { h: "Data warehouse migration requirements", p: "Analyzed 108 data requirements and migrated them to a centralized data platform for a smooth data warehouse transition, with an estimated NTD 100 million in annual maintenance savings." },
          { h: "Cross-functional collaboration", p: "Worked with 50+ business and IT colleagues, proactively communicating with stakeholders to resolve integration issues between the new core system and the data middle platform." },
          { h: "Data lineage visualization", p: "Built a data warehouse lineage Sankey diagram with JavaScript and D3.js, helping teams understand data dependencies and the impact of system changes. (See portfolio Ref3)" },
          { h: "RPA for administrative workflows", p: "Developed RPA tools in Python, packaged as .exe executables, to automate administrative processes." },
          { h: "Automated performance reporting", p: "Replaced Excel-based, manually compiled business performance reports with automated Tableau dashboards, improving visibility and cutting reporting workload by 60%." }
        ],
        results: ["108 data requirements analyzed", "Est. NTD 100M annual maintenance savings", "60% less performance-reporting work"]
      },
      {
        id: "esun-ds", industry: "Banking",
        title: "Data Scientist",
        company: "E.SUN Commercial Bank",
        period: "2019.07 – 2021.11",
        intro: "Machine learning model development and digital transformation projects.",
        summary: "Built and maintained production machine learning models for marketing and risk scoring, and led internal data and automation training.",
        details: [
          { h: "Customer acquisition model", p: "Built a LightGBM customer acquisition model; A/B testing showed a 1.9x conversion rate versus the traditional approach. Set up performance monitoring, auto-retraining and tuning. (See portfolio Ref1)" },
          { h: "Portfolio rebalancing system", p: "Contributed to a portfolio rebalancing system optimized on the Sharpe ratio, providing financial guidance to advisors; reached 60% client adoption with an estimated NTD 100 million in annual revenue." },
          { h: "Customer profiling", p: "Partnered with marketing to analyze customer profiles, uncovering a key 20-day acquisition window for a product to inform marketing decisions." },
          { h: "Recommender system", p: "Implemented a collaborative filtering recommender; offline evaluation showed a 42% increase in website clicks. (See portfolio Ref2)" },
          { h: "Internal training", p: "Ran Python and RPA workshops (about 30 participants each) and a department seminar on Nudge theory (100+ participants), helping colleagues build data literacy and automation skills." }
        ],
        results: ["1.9x conversion rate", "60% client adoption", "Recommender: +42% clicks (offline)"]
      }
    ],
    portfolio: [
      { ref: "Ref1", cat: "ml", title: "Customer Segmentation & Marketing Optimization", desc: "Profiled customers by demographics, browsing and transactions and built a predictive model to optimize audience targeting; A/B testing showed a 1.9x conversion rate versus baseline." },
      { ref: "Ref2", cat: "ml", title: "Collaborative Filtering Recommender", desc: "Implemented a collaborative filtering recommender to improve product discovery; offline evaluation showed a 42% increase in website clicks." },
      { ref: "Ref3", cat: "viz", title: "E.SUN Data Warehouse Lineage (D3.js)", desc: "A D3.js Sankey diagram of end-to-end data warehouse lineage for quickly spotting the impact of schema changes." },
      { ref: "Ref4", cat: "viz", title: "Tableau Customer Referral KPI Dashboard", desc: "Page 1 is an interactive Tableau demo; page 2 is a real E.SUN Bank project visualizing referral KPIs and subsequent customer behavior." },
      { ref: "Ref5", cat: "viz", title: "Ideological Analysis of U.S. Senators", desc: "Clustered and visualized Senate voting records to group senators into ideological clusters by voting pattern." },
      { ref: "Ref6", cat: "ws", title: "Department Seminar: Nudge Theory & Behavioral Change", desc: "A department-wide seminar (100+ participants) on applying Nudge theory to decision design and digital transformation." },
      { ref: "Ref7", cat: "ws", title: "RPA & Python Workshop (1)", desc: "Python fundamentals and simple RPA development; about 30 participants from various departments per session." },
      { ref: "Ref8", cat: "ws", title: "RPA & Python Workshop (2)", desc: "Follow-up sessions helping colleagues build data literacy and create their own automation tools." }
    ],
    education: [
      { school: "National Taiwan University", degree: "M.S. in Psychology", period: "2015.09 – 2018.04", note: "Thesis: Predicting personality, values and friendships from facial features" },
      { school: "National Taiwan University", degree: "B.S. in Psychology", period: "2011.09 – 2015.06" }
    ],
    languages: [
      ["Mandarin", "Native"],
      ["Taiwanese Hokkien", "Fluent"],
      ["English", "Proficient (TOEFL iBT 95/120)"]
    ]
  }
};
