# AdsHub 廣告組合管理（示意畫面）

React + Vite + TypeScript + Tailwind 打造的廣告管理後台 UI，
風格參考常見廣告投放平台的「廣告組合列表」版面（分頁、篩選、
可切換投遞狀態的資料表格），但使用原創品牌與配色，不含任何
第三方商標或 Logo。資料為假資料，僅供展示版面用。

## 本機開發

```bash
npm install
npm run dev
```

## 部署到 Vercel（全部在瀏覽器操作，不需要終端機）

1. 先把這個資料夾推上 GitHub：
   - 到 https://github.com/new 建立一個新的 repository（例如 `adshub-dashboard`）。
   - 在 repo 頁面點 **uploading an existing file**，把這個資料夾內「除了 node_modules、dist 之外」的所有檔案拖曳上傳，然後 Commit。
2. 到 https://vercel.com → **Add New… → Project**。
3. 選擇剛剛建立的 GitHub repository，Import。
4. Framework Preset 會自動偵測為 **Vite**，保持預設設定（Build Command: `npm run build`，Output Directory: `dist`）。
5. 點 **Deploy**，等待建置完成即可拿到網址。

之後每次在 GitHub 上更新程式碼，Vercel 會自動重新部署。

## 專案結構

```
src/
  components/   UI 元件（側邊欄、頂部列、工具列、表格）
  data/         假資料
  App.tsx       主畫面組裝
```
