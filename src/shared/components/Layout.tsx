import { BarChart3, BrainCircuit, Building2, ChevronLeft, ChevronRight, LayoutDashboard, Settings, Users } from 'lucide-react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
type LayoutProps = { children: ReactNode }
const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { label: 'Companies', icon: Building2, to: '/companies' },
  { label: 'Customers', icon: Users, to: '/customers' },
  { label: 'Analytics', icon: BarChart3, to: '/analytics' },
  { label: 'AI Assistant', icon: BrainCircuit, to: '/ai' },
]
export function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false)
  return <div className={collapsed ? 'app-shell sidebar-collapsed' : 'app-shell'}>
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">EO</div><div><strong>Enterprise</strong><span>Operations</span></div></div>
      <button className="collapse-button" onClick={() => setCollapsed(value => !value)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? <ChevronRight size={16}/> : <ChevronLeft size={16}/>}</button>
      <nav aria-label="Main navigation">{navigation.map(({label,icon:Icon,to}) =>
        <NavLink className={({isActive}) => 'nav-item ' + (isActive ? 'active' : '')} to={to} key={label} title={collapsed ? label : undefined}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom">
        <NavLink className={({isActive}) => 'nav-item ' + (isActive ? 'active' : '')} to="/settings" title={collapsed ? 'Settings' : undefined}><Settings size={18}/><span>Settings</span></NavLink>
        <NavLink className="user-card" to="/settings" aria-label="Open profile and settings"><div className="avatar">MH</div><div><strong>Mauricio</strong><span>Administrator</span></div></NavLink>
      </div>
    </aside>
    <div className="main-content">{children}</div>
  </div>
}