import { useState } from 'react'
import { Info, X, ChevronDown, RefreshCw, Trash2, SlidersHorizontal, Bell } from 'lucide-react'
import { campaigns } from '../data/mockData'
import CampaignSwitcher from './CampaignSwitcher'

export default function TopBar() {
  const [noticeOpen, setNoticeOpen] = useState(true)
  const [switcherOpen, setSwitcherOpen] = useState(false)
  const [active, setActive] = useState(campaigns[0])

  return (
    <div className="border-b border-gray-200 bg-white">
      {noticeOpen && (
        <div className="flex items-start gap-2 border-b border-gray-100 bg-[#fafbfc] px-4 py-2 text-xs text-gray-600">
          <Info size={14} className="mt-0.5 shrink-0 text-gray-400" />
          <p className="flex-1 leading-relaxed">
            我們持續改善成效衡量方式。2026 年 3 月 17 日起，點擊成效只會在連結點擊後回報網站和資費頁面轉換數（如購買頁），互動成效將會在所有其他廣告動作後回報這些轉換數。
          </p>
          <button className="shrink-0 text-xs font-medium text-brand-600 hover:underline">關於本次更新</button>
          <button onClick={() => setNoticeOpen(false)} className="shrink-0 text-gray-400 hover:text-gray-600">
            <X size={14} />
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 px-4 py-2.5">
        <h1 className="text-[15px] font-semibold text-gray-900">廣告組合</h1>

        <div className="relative">
          <button
            onClick={() => setSwitcherOpen((v) => !v)}
            className="flex items-center gap-2 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-mint-100 text-[10px] font-bold text-emerald-700">
              {active.name.slice(0, 1)}
            </span>
            <span className="font-medium">1760134838654454 (176…</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          {switcherOpen && (
            <CampaignSwitcher
              active={active}
              onSelect={(c) => {
                setActive(c)
                setSwitcherOpen(false)
              }}
              onClose={() => setSwitcherOpen(false)}
            />
          )}
        </div>

        <button className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
          <span>綜合分數</span>
          <span className="rounded bg-gray-100 px-1 font-semibold">100</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
            <RefreshCw size={14} /> 剛剛更新
          </button>
          <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
            <Trash2 size={14} /> 捨棄草稿
          </button>
          <button className="rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-600">
            檢查並發布 (9)
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-50">
            <SlidersHorizontal size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-50">
            <Bell size={16} />
          </button>
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-500 to-purple-500" />
        </div>
      </div>
    </div>
  )
}
