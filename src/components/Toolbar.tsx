import { useState } from 'react'
import {
  Plus,
  Copy,
  Pencil,
  Trash2,
  FlaskConical,
  ChevronDown,
  Columns3,
  SlidersHorizontal,
  Share2,
  Download,
  Settings2,
} from 'lucide-react'

const tabs = ['所有廣告', '已投遞', '刊登中的廣告', '動作']

export default function Toolbar({ selectedCount }: { selectedCount: number }) {
  const [tab, setTab] = useState('動作')

  return (
    <div className="space-y-2 px-4 pt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 text-xs">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                tab === t ? 'bg-brand-500 text-white' : 'text-gray-600 hover:bg-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1.5 rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
          <Plus size={14} /> 建立瀏覽畫面
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
          <Plus size={14} /> 建立
        </button>
        <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
          <Copy size={14} /> 建立複本 <ChevronDown size={12} />
        </button>
        <button
          disabled={!selectedCount}
          className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Pencil size={14} /> 編輯 <ChevronDown size={12} />
        </button>
        <button
          disabled={!selectedCount}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Trash2 size={14} />
        </button>
        <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
          <FlaskConical size={14} /> A/B 測試
        </button>
        <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
          更多 <ChevronDown size={12} />
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
            <Columns3 size={14} /> 直欄：成效 <ChevronDown size={12} />
          </button>
          <button className="flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
            <SlidersHorizontal size={14} /> 分析項目 <ChevronDown size={12} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50">
            <Share2 size={14} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50">
            <Download size={14} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50">
            <Settings2 size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-2 text-xs">
        <span className="text-gray-400">搜尋以篩選：名稱、編號或衡量指標</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 pb-1">
        <FilterChip label="行銷活動" value="已選擇 1 個" />
        <FilterChip label="廣告組合" value="已選擇 1 個" active />
        <FilterChip label="廣告針對" value="1 個廣告組合" />
        <div className="ml-auto flex items-center gap-1 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
          過去 30 天：2026年9月22日－2026年10月21日 <ChevronDown size={12} />
        </div>
      </div>
    </div>
  )
}

function FilterChip({ label, value, active }: { label: string; value: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs ${
        active ? 'border-brand-200 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-600'
      }`}
    >
      <span className="text-gray-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
