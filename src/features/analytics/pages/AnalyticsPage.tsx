import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { revenue } from '../../dashboard/data'
export function AnalyticsPage() {
 return <main className="page"><header className="page-header"><div><span className="eyebrow">Insights</span><h1>Analytics</h1><p>Explore trends across revenue and operational performance.</p></div></header>
 <section className="panel"><span className="eyebrow">Trend analysis</span><h2>Revenue trajectory</h2><div className="chart large-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={revenue}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis/><Tooltip/><Area dataKey="revenue" type="monotone" fillOpacity={0.18}/></AreaChart></ResponsiveContainer></div></section></main>
}