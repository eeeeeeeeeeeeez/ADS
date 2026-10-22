export interface AdSetRow {
  id: string
  name: string
  link?: string
  on: boolean
  status: '草稿' | '刊登中' | '已關閉' | '已暫停'
  delivery: string
  action?: string
  attribution: string
  results: number | null
  resultLabel?: string
  costPerResult: number | null
  budget: string
  budgetType?: string
  spend: number | null
  impressions: number | null
  highlight?: boolean
}

export const adSets: AdSetRow[] = [
  {
    id: '1',
    name: '新的互動廣告組合',
    on: true,
    status: '草稿',
    delivery: '草稿',
    attribution: '—',
    results: null,
    costPerResult: null,
    budget: '使用行銷活動預算',
    spend: null,
    impressions: null,
  },
  {
    id: '2',
    name: '新的互動廣告組合',
    on: true,
    status: '草稿',
    delivery: '草稿',
    attribution: '—',
    results: null,
    costPerResult: null,
    budget: 'NT$360',
    budgetType: '單日',
    spend: null,
    impressions: null,
  },
  {
    id: '3',
    name: '未命名的廣告組合',
    on: true,
    status: '草稿',
    delivery: '草稿',
    attribution: '—',
    results: null,
    costPerResult: null,
    budget: '使用行銷活動預算',
    spend: null,
    impressions: null,
  },
  {
    id: '4',
    name: '〔2026/10/05〕開始推廣',
    link: 'https://adshub.example.co/line',
    on: true,
    status: '刊登中',
    delivery: '行銷活動已關閉',
    action: '點擊後7天或…',
    attribution: '所有轉換',
    results: 665,
    resultLabel: '連結頁面瀏覽',
    costPerResult: 10,
    budget: '使用行銷活動預算',
    spend: 6845,
    impressions: 59328,
    highlight: true,
  },
]

export const campaigns = [
  { id: 'c1', name: '亨波趨勢', accounts: 1 },
  { id: 'c2', name: '好放貸', accounts: 2 },
  { id: 'c3', name: '成信理財車', accounts: 2 },
  { id: 'c4', name: '銀行先生—債務諮商', accounts: 1 },
]
