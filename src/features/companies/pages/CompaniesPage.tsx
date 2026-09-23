import { Search, TrendingUp } from 'lucide-react'
import { companies } from '../data'
export function CompaniesPage() {
 return <main className="page"><header className="page-header"><div><span className="eyebrow">Customers</span><h1>Companies</h1><p>Manage organizations and monitor account health.</p></div><button className="primary-button">Add company</button></header>
 <div className="toolbar"><div className="search"><Search size={16}/><input placeholder="Search companies..." aria-label="Search companies"/></div></div>
 <section className="table-panel panel"><table><thead><tr><th>Company</th><th>Industry</th><th>Status</th><th>Revenue</th><th>Trend</th></tr></thead><tbody>
 {companies.map(company => <tr key={company.id}><td><strong>{company.name}</strong></td><td>{company.industry}</td><td><span className={"badge "+company.status}>{company.status}</span></td><td>€{company.revenue.toLocaleString()}</td><td><TrendingUp size={16}/></td></tr>)}
 </tbody></table></section></main>
}