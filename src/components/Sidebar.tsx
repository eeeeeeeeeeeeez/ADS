import {
  LayoutGrid,
  Megaphone,
  Users,
  Layers,
  BarChart3,
  Settings,
  HelpCircle,
  Search,
} from 'lucide-react'

const items = [
  { icon: Megaphone, label: '行銷活動' },
  { icon: LayoutGrid, label: '總覽', active: true },
  { icon: Layers, label: '素材庫' },
  { icon: Users, label: '受眾' },
  { icon: BarChart3, label: '成效報告' },
]

export default function Sidebar() {
  return (
    <aside className="flex w-14 flex-col items-center justify-between border-r border-gray-200 bg-white py-3">
      <div className="flex flex-col items-center gap-1">
        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
          A
        </div>
        {items.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            title={label}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              active ? 'bg-brand-50 text-brand-600' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 pb-1">
        <button title="搜尋" className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100">
          <Search size={18} />
        </button>
        <button title="說明" className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100">
          <HelpCircle size={18} />
        </button>
        <button title="設定" className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100">
          <Settings size={18} />
        </button>
      </div>
    </aside>
  )
}
