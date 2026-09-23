import type { Metric } from './types'

export const metrics: Metric[] = [
  { label: 'Revenue', value: '€248.5K', change: 12.8 },
  { label: 'Active customers', value: '1,284', change: 8.4 },
  { label: 'Projects', value: '86', change: 4.2 },
  { label: 'Conversion', value: '8.7%', change: 1.9 },
]
export const revenue = [
  { month: 'Jan', revenue: 132, target: 120 }, { month: 'Feb', revenue: 148, target: 130 },
  { month: 'Mar', revenue: 156, target: 145 }, { month: 'Apr', revenue: 171, target: 155 },
  { month: 'May', revenue: 193, target: 175 }, { month: 'Jun', revenue: 221, target: 200 },
  { month: 'Jul', revenue: 248, target: 220 },
]