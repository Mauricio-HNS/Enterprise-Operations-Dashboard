export type Status = 'active' | 'paused' | 'completed' | 'at-risk'
export type Company = { id: string; name: string; industry: string; status: Status; revenue: number }
export type Project = { id: string; name: string; company: string; owner: string; status: Status; progress: number }