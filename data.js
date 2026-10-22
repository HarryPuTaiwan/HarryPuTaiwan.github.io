// 履歷內容集中於此，之後翻譯英文版只需新增對應語系資料
window.RESUME = {
  lead: "擁有 7 年以上資料分析、資料工程與機器學習經驗，橫跨銀行、金融科技 SaaS、線上平台與電商產業。擅長從需求訪談到資料管線、模型與 BI 報表的端到端交付，並持續將 AI Agent 與 MCP 應用於日常工作流程。",
  highlights: [
    ["端到端資料解決方案", "設計 ETL/ELT 管線、預測模型、詐欺偵測與互動式 BI 報表（Python、SQL、Airflow、AWS Redshift／RDS、BI 工具）"],
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
  // 技能後的 A/B/C 為熟練度，只用於排序（熟練的排前面），不在畫面上顯示
  skillGroups: [
    { name: "資料分析與 BI", skills: [["SQL（MySQL、Hive、Trino）", "A"], ["Metabase", "A"], ["Zeppelin", "A"], ["指標與儀表板設計", "A"], ["Tableau", "B"], ["Power BI", "B"]] },
    { name: "資料工程", skills: [["Python", "A"], ["ETL／ELT 管線設計", "A"], ["Airflow", "A"], ["資料品質驗證", "A"], ["AWS（Redshift、RDS）", "B"], ["Spark", "C"], ["Hadoop／Kafka／Elasticsearch", "C"], ["Databricks", "C"]] },
    { name: "機器學習與統計", skills: [["LightGBM", "A"], ["預測模型", "A"], ["統計檢定", "A"], ["推薦系統（協同過濾）", "B"], ["A/B 測試", "B"], ["詐欺與異常偵測", "B"], ["模型監控與再訓練", "B"], ["R", "B"]] },
    { name: "AI 應用與自動化", skills: [["AI Agent", "A"], ["MCP", "A"], ["Claude Code", "A"], ["Windsurf", "A"], ["RPA（Python）", "A"], ["Chrome Extension", "A"], ["JavaScript／D3.js", "C"]] },
    { name: "產業領域", skills: [["反洗錢（AML）", "B"], ["銀行資料倉儲與核心系統轉換", "B"], ["電商營運", "B"], ["線上平台詐欺偵測", "B"]] },
    { name: "專案與協作", skills: [["需求訪談", "A"], ["內部教育訓練", "A"], ["利害關係人管理", "B"], ["Scrum（PSM／PSPO）", "B"]] }
  ],
  jobs: [
    {
      id: "coupang", industry: "電商",
      title: "Senior Data Analyst",
      company: "Coupang",
      period: "2026.01 – 2026.08",
      intro: "電商平台。支援客服部門與高階主管的資料需求。",
      summary: "提供客服部門與主管端到端資料方案：SQL 查詢、根因分析（RCA）臨時需求報表、即時營運報表、互動式儀表板、Chrome Extension 與自動化資料管線。",
      details: [
        { h: "客服查詢資料解決方案", p: "提供 Chrome Extension、即時營運報表等資料工具，解決客服部門的資料查詢問題：整合跨系統資料、串接查詢 API 並支援大量批次查詢，讓營運專員能快速完成業務流程。" },
        { h: "品牌審核規則（Brand Gating Rules）設計", p: "商家上架品牌商品需經審核。以 Python 搭配 AI 建立規則產製流程，大量產生 gating regex 規則，並以歷史資料驗證 Recall。相較人工撰寫（缺少完整 Recall 驗證、容易寫錯、條件過嚴或過寬），規則品質更穩定；共處理約 500 個品牌，每個品牌約省 5 分鐘，累計約 40 小時。" },
        { h: "AI Agent 與 MCP 的實務應用", p: "使用 Windsurf（搭配工作 skills）、Claude Code，以及內部工具——串接內部 Wiki 的 MCP（彙整文件產出知識報告）、Slack 知識問答機器人、由歷史 SQL 萃取商業知識的「資料表使用說明」——加速知識檢索、程式開發與 BI 報表製作。" },
        { h: "根因分析報告加速", p: "原本需要半天到一天才能完成的根因分析報告，運用 AI 工具後約 2 小時即可產出第一版。" }
      ],
      results: ["根因報告初版：半天～1 天 → 約 2 小時", "約 500 個品牌規則，省下約 40 小時"],
      tags: ["Python", "SQL（MySQL、Hive、Trino）", "Zeppelin", "Power BI", "指標與儀表板設計", "ETL／ELT 管線設計", "AI Agent", "MCP", "Claude Code", "Windsurf", "Chrome Extension", "電商營運", "需求訪談"]
    },
    {
      id: "tookitaki", industry: "AML 合規 SaaS",
      title: "Data Scientist",
      company: "Tookitaki",
      period: "2025.07 – 2026.01",
      intro: "反洗錢（AML）合規 SaaS 公司。客戶為菲律賓、新加坡、馬來西亞、澳洲、紐西蘭等地金融機構。",
      summary: "於客戶服務端對接金融機構，協助設定大型合規 SaaS 解決方案，使產品行為符合 AML 態樣、名單篩檢與各機構需求。",
      details: [
        { h: "客戶問題技術排解", p: "企業客戶在產品使用上遇到問題時，運用 AI 協助剖析反洗錢系統，釐清資料管線與產品行為並回覆客戶；排查範圍涵蓋 Hadoop、Spark、Kafka、Elasticsearch 與 AWS 上的工作流程。" },
        { h: "參數設定建議", p: "依客戶特性（風險偏好），以及分析警示（alert）的 true positive／false positive 狀況，建議產品參數設定。" },
        { h: "分析流程自動化", p: "以 Python 與 SQL 自動化分析流程，每位客戶每季可減少 1.5 天的警示資料處理時間。" }
      ],
      results: ["每客戶每季節省 1.5 天警示資料處理時間"],
      tags: ["Python", "SQL（MySQL、Hive、Trino）", "Spark", "Hadoop／Kafka／Elasticsearch", "AI Agent", "詐欺與異常偵測", "反洗錢（AML）", "需求訪談", "利害關係人管理"]
    },
    {
      id: "opennet", industry: "線上娛樂平台",
      title: "Data Analytics Engineer",
      company: "Opennet",
      period: "2024.03 – 2025.07",
      intro: "線上娛樂平台開發商（遊戲機制、BI、維運）。",
      summary: "負責資料管線、BI 報表與詐欺偵測，支援 3,500 萬以上用戶規模的分析需求。",
      details: [
        { h: "新市場（南非）ETL 整合專案", p: "主導南非新市場上線的 ETL 整合專案規劃與執行，自行拆解工作項目，確保新國家資料與既有 BI 邏輯一致；並透過資料品質驗證與基礎設施設定，維持 BI 服務不中斷。" },
        { h: "打假球（詐欺）偵測流程", p: "以資料找出可疑行為模式——多名使用者在相近時間點下注相似組合——建置整合 Slack 與 DAG 排程警示的偵測流程，將合規監控嵌入產品系統，單季減少 USD 100K 損失。" },
        { h: "資料管線與儀表板", p: "以 Airflow 與 AWS（Redshift／RDS）設計並優化資料管線，支援 OKR、營運與顧客終身價值（LTV）儀表板，提升跨團隊資訊透明度。" }
      ],
      results: ["單季減少 USD 100K 損失", "支援 35M+ 用戶分析", "南非新市場資料上線"],
      tags: ["Python", "SQL（MySQL、Hive、Trino）", "Airflow", "AWS（Redshift、RDS）", "ETL／ELT 管線設計", "資料品質驗證", "Metabase", "指標與儀表板設計", "詐欺與異常偵測", "線上平台詐欺偵測"]
    },
    {
      id: "esun-ba", industry: "銀行",
      title: "Business Analyst",
      company: "玉山銀行 E.SUN Commercial Bank",
      period: "2021.11 – 2024.03",
      intro: "由 Data Scientist 內部轉職，參與海外核心系統轉換專案。",
      summary: "參與海外核心銀行系統轉換專案的規劃與執行，負責資料倉儲轉換的需求分析。",
      details: [
        { h: "資料倉儲轉換需求分析", p: "分析 108 項資料需求並遷移至集中式資料平台，確保資料倉儲順利轉換，預估每年可節省新台幣 1 億元維運成本。" },
        { h: "跨部門協作", p: "與 50 位以上業務與 IT 同仁協作，主動與利害關係人溝通，處理新核心系統與資料中台的整合問題。" },
        { h: "資料血緣視覺化", p: "以 JavaScript 與 D3.js 製作資料倉儲血緣（lineage）Sankey 圖，協助團隊掌握資料相依關係與系統異動影響範圍。（見作品集 Ref3）" },
        { h: "RPA 行政流程優化", p: "以 Python 開發 RPA 並包裝成 exe 執行檔，自動化行政作業流程。" },
        { h: "業務績效 BI 報表自動化", p: "將原本以 Excel、人工蒐集數據製作的業務績效報表，改為 Tableau 自動產生，提升營運可視性並減少 60% 報表工作量。" }
      ],
      results: ["108 項資料需求分析", "預估年省 NTD 1 億元維運成本", "績效報表工作量減少 60%"],
      tags: ["需求訪談", "利害關係人管理", "SQL（MySQL、Hive、Trino）", "Tableau", "指標與儀表板設計", "RPA（Python）", "JavaScript／D3.js", "銀行資料倉儲與核心系統轉換", "Scrum（PSM／PSPO）"]
    },
    {
      id: "esun-ds", industry: "銀行",
      title: "Data Scientist",
      company: "玉山銀行 E.SUN Commercial Bank",
      period: "2019.07 – 2021.11",
      intro: "負責機器學習模型開發與數位轉型相關專案。",
      summary: "開發並維運正式環境的機器學習模型，支援行銷與風險評分；並推動內部數據與自動化教育訓練。",
      details: [
        { h: "獲客預測模型", p: "以 LightGBM 建立顧客獲客預測模型，透過 A/B 測試驗證，轉換率為傳統方法的 1.9 倍。模型包含效能監控、自動再訓練與調校機制。（見作品集 Ref1）" },
        { h: "投資組合再平衡系統", p: "參與以夏普值（Sharpe ratio）進行最佳化的投資組合再平衡系統，提供理專財務建議，達到 60% 客戶採用率，預估年營收新台幣 1 億元。" },
        { h: "顧客輪廓分析", p: "與行銷團隊合作分析顧客輪廓，發現某產品關鍵的 20 天獲客窗口，提供行銷決策參考。" },
        { h: "推薦系統", p: "實作協同過濾（Collaborative Filtering）推薦系統，離線評估網站點擊數提升 42%。（見作品集 Ref2）" },
        { h: "內部教育訓練", p: "主辦 Python、RPA 工作坊（每場約 30 人）與部門推力理論（Nudge）講座（100+ 人），協助同仁建立資料素養與自動化能力。" }
      ],
      results: ["轉換率 1.9 倍", "60% 客戶採用率", "推薦系統離線點擊 +42%"],
      tags: ["Python", "SQL（MySQL、Hive、Trino）", "LightGBM", "預測模型", "統計檢定", "A/B 測試", "推薦系統（協同過濾）", "模型監控與再訓練", "RPA（Python）", "內部教育訓練"]
    }
  ],
  portfolioDrive: "https://drive.google.com/drive/folders/1uxhiTcDH05uTJdzGqUAjDpVywo7NNsLn",
  portfolioCats: ["全部", "專案與機器學習", "視覺化", "工作坊"],
  portfolio: [
    { ref: "Ref1", cat: "專案與機器學習", title: "顧客分群與行銷最佳化", desc: "分析顧客人口特徵、瀏覽與交易行為，建立預測模型最佳化受眾投放，A/B 測試轉換率為基準方法的 1.9 倍。", url: "https://drive.google.com/file/d/1D5LhoMamfdwvVnsv8O4gSoZv9PnhibtD/view?usp=drive_link" },
    { ref: "Ref2", cat: "專案與機器學習", title: "協同過濾推薦系統", desc: "實作協同過濾推薦系統提升商品探索，離線評估網站點擊數提升 42%。", url: "https://drive.google.com/file/d/1yGiZ8J0o3bZa5uD1iREtmxPKZ5cgrz7v/view?usp=drive_link" },
    { ref: "Ref3", cat: "視覺化", title: "玉山資料倉儲血緣圖（D3.js）", desc: "以 D3.js Sankey 圖呈現資料倉儲端到端血緣，協助快速辨識 schema 異動影響範圍。", url: "https://drive.google.com/file/d/1vs_44O8m32M-Qx2qWPpAPBz7qjWmgLtq/view?usp=drive_link" },
    { ref: "Ref4", cat: "視覺化", title: "Tableau 顧客推薦 KPI 儀表板", desc: "第一頁為 Tableau 互動儀表板示範；第二頁為玉山銀行實際專案：視覺化推薦（referral）KPI 並分析後續顧客行為。", url: "https://drive.google.com/file/d/1A5EMbNzbKxeSt8HlJyvViLaH7qm9O3zZ/view?usp=drive_link" },
    { ref: "Ref5", cat: "視覺化", title: "美國參議員意識形態分析", desc: "以分群與視覺化分析參議院投票紀錄，將參議員依投票模式歸納為不同意識形態群組。", url: "https://drive.google.com/file/d/1Q7CS7apyVd2fFjI_AOx2Rs_b2fjZzzVV/view?usp=drive_link" },
    { ref: "Ref6", cat: "工作坊", title: "部門講座：推力理論與行為改變", desc: "百人以上部門講座，介紹 Nudge 理論於決策設計與數位轉型的應用。", url: "https://drive.google.com/file/d/16BZ_gDMfhnVmpWh8cMdpt8DkoeyJsVPJ/view?usp=drive_link" },
    { ref: "Ref7", cat: "工作坊", title: "RPA & Python 工作坊（一）", desc: "Python 基礎與簡易 RPA 開發，每場約 30 位跨部門同仁參加。", url: "https://drive.google.com/file/d/1pi_isUAmY0_miUR3sShkmnpX41ctiCk-/view?usp=drive_link" },
    { ref: "Ref8", cat: "工作坊", title: "RPA & Python 工作坊（二）", desc: "延續課程，協助同仁建立資料素養並動手打造自動化小工具。", url: "https://drive.google.com/file/d/1PFOuIg9dmW87c9CJnBjAXgoC68q-tY5X/view?usp=drive_link" }
  ],
  education: [
    { school: "國立臺灣大學", degree: "心理學系 碩士", period: "2015.09 – 2018.04", note: "論文：從臉型特徵預測性格、價值觀與朋友關係" },
    { school: "國立臺灣大學", degree: "心理學系 學士", period: "2011.09 – 2015.06" }
  ],
  certs: [
    { name: "Professional Scrum Master I (PSM I)", date: "2020.02", url: "https://scrum.org/certificates/510007", file: "Professional Scrum Master I.pdf" },
    { name: "Professional Scrum Product Owner I (PSPO I)", date: "2020.02", url: "https://scrum.org/certificates/510532", file: "Professional Scrum Product Owner I.pdf" }
  ],
  languages: [
    ["中文", "母語"],
    ["台語", "流利"],
    ["英文", "專業工作能力（TOEFL iBT 95/120）"]
  ]
};
