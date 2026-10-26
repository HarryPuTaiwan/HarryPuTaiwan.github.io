"""把 JavaScript 產生的中文內容預先寫進 index.html 的 <main>。

不執行 JavaScript 的讀取者（搜尋引擎、AI 工具抓取網址）也能看到完整履歷；
瀏覽器載入後 script.js 會照常重新繪製。修改 data.js 後執行：
    python3 tools/prerender.py
"""
import pathlib, re, subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
index = ROOT / "index.html"

dom = subprocess.run(
    [CHROME, "--headless=new", "--disable-gpu", "--virtual-time-budget=5000",
     "--dump-dom", (ROOT / "index.html").as_uri() + "?lang=zh"],
    capture_output=True, text=True, check=True).stdout
main = re.search(r'<main id="top">.*?</main>', dom, re.S).group(0)
# 預先繪製的狀態一律為初始狀態（收合、未標示）
main = re.sub(r' class="job open"', ' class="job"', main)

src = index.read_text()
src = re.sub(r'<main id="top">.*?</main>', lambda _: main, src, count=1, flags=re.S)
index.write_text(src)
print("prerendered", len(main), "chars into index.html")
