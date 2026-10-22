import { useState } from 'react'
import { ChevronUp, ChevronDown, ExternalLink, Pencil, FileStack, BarChart2, MoreHorizontal } from 'lucide-react'
import { adSets, type AdSetRow } from '../data/mockData'

const columns = [
  { key: 'name', label: '廣告組合', sortable: true },
  { key: 'delivery', label: '投遞狀態', sortable: true },
  { key: 'action', label: '動作' },
  { key: 'attribution', label: '歸因設定' },
  { key: 'results', label: '成效', sortable: true },
  { key: 'cost', label: '每次成效成本', sortable: true },
  { key: 'budget', label: '預算', sortable: true },
  { key: 'spend', label: '花費金額', sortable: true },
  { key: 'impressions', label: '曝光次數', sortable: true },
]

function fmt(n: number | null) {
  if (n === null) return '—'
  return n.toLocaleString('zh-TW')
}

export default function AdsTable({
  selected,
  onToggleSelect,
}: {
  selected: Set<string>
  onToggleSelect: (id: string) => void
}) {
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    Object.fromEntries(adSets.map((r) => [r.id, r.on])),
  )

  const totals = {
    results: adSets.reduce((s, r) => s + (r.results ?? 0), 0),
    spend: adSets.reduce((s, r) => s + (r.spend ?? 0), 0),
    impressions: adSets.reduce((s, r) => s + (r.impressions ?? 0), 0),
  }

  return (
    <div className="mx-4 mb-4 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="thin-scroll overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-xs">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-gray-500">
              <th className="w-10 px-3 py-2 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="w-10 px-1 py-2" />
              {columns.map((c) => (
                <th key={c.key} className="whitespace-nowrap px-3 py-2 text-left font-medium">
                  <span className="inline-flex cursor-pointer items-center gap-1 hover:text-gray-700">
                    {c.label}
                    {c.sortable && (
                      <span className="flex flex-col leading-none text-gray-300">
                        <ChevronUp size={9} />
                        <ChevronDown size={9} className="-mt-1" />
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {adSets.map((row) => (
              <Row
                key={row.id}
                row={row}
                checked={selected.has(row.id)}
                on={toggles[row.id]}
                onToggleOn={() => setToggles((t) => ({ ...t, [row.id]: !t[row.id] }))}
                onCheck={() => onToggleSelect(row.id)}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200 bg-gray-50 text-gray-600">
              <td colSpan={2} />
              <td className="px-3 py-2.5 font-medium">4 個廣告組合的成果 ⓘ</td>
              <td className="px-3 py-2.5">
                點擊後7天或…
                <div className="text-[10px] text-gray-400">所有轉換</div>
              </td>
              <td />
              <td />
              <td className="px-3 py-2.5 font-semibold">{fmt(totals.results)}</td>
              <td className="px-3 py-2.5">NT$10</td>
              <td />
              <td className="px-3 py-2.5 font-semibold">NT${fmt(totals.spend)}</td>
              <td className="px-3 py-2.5 font-semibold">{fmt(totals.impressions)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

function Row({
  row,
  checked,
  on,
  onToggleOn,
  onCheck,
}: {
  row: AdSetRow
  checked: boolean
  on: boolean
  onToggleOn: () => void
  onCheck: () => void
}) {
  const [hover, setHover] = useState(false)
  const statusColor =
    row.status === '刊登中'
      ? 'text-emerald-600'
      : row.status === '草稿'
      ? 'text-amber-500'
      : 'text-gray-400'

  return (
    <tr
      className={`border-b border-gray-100 last:border-0 ${row.highlight && checked ? 'bg-brand-50/60' : 'hover:bg-gray-50'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <td className="px-3 py-2.5">
        <input type="checkbox" checked={checked} onChange={onCheck} className="rounded border-gray-300" />
      </td>
      <td className="px-1 py-2.5">
        <button
          onClick={onToggleOn}
          className="switch"
          data-on={on}
          aria-pressed={on}
          aria-label="切換投遞狀態"
        >
          <span className="switch-knob" style={{ transform: on ? 'translateX(18px)' : 'translateX(2px)' }} />
        </button>
      </td>
      <td className="px-3 py-2.5">
        <div className="flex items-center gap-1 font-medium text-brand-700">
          {row.name}
          {row.link && <ExternalLink size={11} className="text-gray-400" />}
        </div>
        {row.link && <div className="text-[10px] text-gray-400">{row.link}</div>}
        {hover && (
          <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-400">
            <IconLabel icon={BarChart2} label="摘要" />
            <IconLabel icon={Pencil} label="編輯" />
            <IconLabel icon={FileStack} label="建立複本" />
            <IconLabel icon={MoreHorizontal} label="比較" />
          </div>
        )}
      </td>
      <td className="px-3 py-2.5">
        <span className={`inline-flex items-center gap-1 ${statusColor}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {row.delivery}
        </span>
      </td>
      <td className="px-3 py-2.5 text-gray-600">{row.action ?? '—'}</td>
      <td className="px-3 py-2.5 text-gray-600">{row.attribution}</td>
      <td className="px-3 py-2.5">
        <div className="font-semibold text-gray-800">{fmt(row.results)}</div>
        {row.resultLabel && <div className="text-[10px] text-gray-400">{row.resultLabel}</div>}
      </td>
      <td className="px-3 py-2.5 text-gray-600">{row.costPerResult !== null ? `NT$${row.costPerResult}` : '—'}</td>
      <td className="px-3 py-2.5 text-gray-600">
        {row.budget}
        {row.budgetType && <div className="text-[10px] text-gray-400">{row.budgetType}</div>}
      </td>
      <td className="px-3 py-2.5 font-medium text-gray-800">{row.spend !== null ? `NT$${fmt(row.spend)}` : '—'}</td>
      <td className="px-3 py-2.5 text-gray-600">{fmt(row.impressions)}</td>
    </tr>
  )
}

function IconLabel({ icon: Icon, label }: { icon: typeof Pencil; label: string }) {
  return (
    <span className="inline-flex items-center gap-0.5 hover:text-gray-600">
      <Icon size={11} /> {label}
    </span>
  )
}
