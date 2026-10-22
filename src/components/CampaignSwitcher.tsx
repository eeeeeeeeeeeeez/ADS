import { useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { campaigns } from '../data/mockData'

interface Props {
  active: (typeof campaigns)[number]
  onSelect: (c: (typeof campaigns)[number]) => void
  onClose: () => void
}

export default function CampaignSwitcher({ active, onSelect, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="absolute left-0 top-full z-20 mt-1 w-72 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
    >
      <div className="mb-2 flex items-center gap-2 rounded-md border border-gray-200 px-2 py-1.5">
        <Search size={14} className="text-gray-400" />
        <input
          placeholder="搜尋帳戶"
          className="w-full text-xs outline-none placeholder:text-gray-400"
        />
      </div>
      <p className="px-1 pb-1 text-[11px] font-medium text-gray-400">商家管理平台帳戶</p>
      {campaigns.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c)}
          className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs hover:bg-gray-50 ${
            c.id === active.id ? 'bg-brand-50' : ''
          }`}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-mint-100 text-[10px] font-bold text-emerald-700">
            {c.name.slice(0, 1)}
          </span>
          <span className="flex-1 text-gray-800">{c.name}</span>
          <span className="text-gray-400">{c.accounts} 個廣告帳戶</span>
        </button>
      ))}
      <button className="mt-1 w-full rounded-md border border-gray-200 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50">
        建立商家管理平台帳戶
      </button>
    </div>
  )
}
