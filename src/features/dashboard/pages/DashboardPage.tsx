import { ArrowUpRight, BriefcaseBusiness, CircleDollarSign, Users } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { metrics, revenue } from '../data'

const icons = [CircleDollarSign, Users, BriefcaseBusiness, ArrowUpRight]

export function DashboardPage() {
  return <main className="page">
    <header className="page-header">
      <div><span className="eyebrow">Operations</span><h1>Enterprise overview</h1><p>Monitor business performance and operational health.</p></div>
      <button className="primary-button">Generate report</button>
    </header>
    <section className="metric-grid" aria-label="Business metrics">
      {metrics.map((metric, index) => { const Icon = icons[index]; return <article className="metric-card" key={metric.label}>
        <div className="metric-icon"><Icon size={20} /></div><span>{metric.label}</span><strong>{metric.value}</strong>
        <small className="positive">+{metric.change}% vs previous period</small>
      </article> })}
    </section>
    <section className="content-grid">
      <article className="panel">
        <div className="panel-header"><div><span className="eyebrow">Financial performance</span><h2>Revenue vs target</h2></div><span className="status">Live data</span></div>
        <div className="chart"><ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenue}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="month" /><YAxis /><Tooltip />
            <Bar dataKey="revenue" radius={[6,6,0,0]} /><Bar dataKey="target" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer></div>
      </article>
      <article className="panel"><div className="panel-header"><div><span className="eyebrow">Operational health</span><h2>Systems</h2></div></div>
        <div className="system-list">{['Core API','Payments','Notifications','Analytics'].map(system => <div className="system-row" key={system}>
          <span className="health-dot" /><span>{system}</span><small>Operational</small>
        </div>)}</div>
      </article>
    </section>
  </main>
}