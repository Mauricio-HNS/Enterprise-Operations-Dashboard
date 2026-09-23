import { BarChart3, BrainCircuit, Building2, LayoutDashboard, Settings, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type LayoutProps = { children: ReactNode }
const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Companies', icon: Building2, to: '/companies' },
  { label: 'Customers', icon: Users, to: '/customers' },
  { label: 'Analytics', icon: BarChart3, to: '/analytics' },
  { label: 'AI Assistant', icon: BrainCircuit, to: '/ai' },
]

export function Layout({ children }: LayoutProps) {
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">EO</div><div><strong>Enterprise</strong><span>Operations</span></div></div>
      <nav aria-label="Main navigation">{navigation.map(({label,icon:Icon,to}) =>
        <NavLink className={({isActive}) => 'nav-item ' + (isActive ? 'active' : '')} to={to} key={label}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom">
        <NavLink className="nav-item" to="/settings"><Settings size={18}/><span>Settings</span></NavLink>
        <div className="user-card"><div className="avatar">MH</div><div><strong>Mauricio</strong><span>Administrator</span></div></div>
      </div>
    </aside>
    <div className="main-content">{children}</div>
  </div>
}