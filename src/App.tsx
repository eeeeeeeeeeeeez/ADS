import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Toolbar from './components/Toolbar'
import AdsTable from './components/AdsTable'
import { adSets } from './data/mockData'

export default function App() {
  const [selected, setSelected] = useState<Set<string>>(new Set(['4']))

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <Toolbar selectedCount={selected.size} />
          <AdsTable selected={selected} onToggleSelect={toggle} />
        </div>
        <footer className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2 text-[11px] text-gray-400">
          <span>共 {adSets.length} 個廣告組合</span>
          <span>AdsHub 廣告組合管理（示意畫面，非真實投遞資料）</span>
        </footer>
      </div>
    </div>
  )
}
