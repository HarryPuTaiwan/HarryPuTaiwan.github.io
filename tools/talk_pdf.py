"""匯出課程簡報的備案 PDF：talk/蒲冠吉_簡報.pdf。

網頁版的履歷頁是可捲動的內嵌頁；PDF 則改用 talk/index.html 依 data.js
產生的履歷文字版投影片（只在列印時出現）。修改 data.js 或 talk/index.html 後執行：
    python3 tools/talk_pdf.py
"""
import pathlib, shutil, subprocess, tempfile, time, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 8799
BASE = f"http://localhost:{PORT}"

tmp = pathlib.Path(tempfile.mkdtemp())
server = subprocess.Popen(["python3", "-m", "http.server", str(PORT), "--directory", str(ROOT)],
                          stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(50):
        try:
            urllib.request.urlopen(BASE + "/talk/"); break
        except OSError:
            time.sleep(0.1)
    pdf = ROOT / "talk" / "蒲冠吉_簡報.pdf"
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", f"--user-data-dir={tmp / 'profile'}",
                    "--virtual-time-budget=8000", "--no-pdf-header-footer",
                    f"--print-to-pdf={pdf}", f"{BASE}/talk/?pdf"],
                   capture_output=True, check=True)
    print(f"-> {pdf.relative_to(ROOT)}")
finally:
    server.terminate()
    shutil.rmtree(tmp, ignore_errors=True)
