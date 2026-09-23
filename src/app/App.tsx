import { Navigate, Route, Routes } from 'react-router-dom'
import { AnalyticsPage } from '../features/analytics/pages/AnalyticsPage'
import { AIAssistantPage } from '../features/ai-assistant/pages/AIAssistantPage'
import { CompaniesPage } from '../features/companies/pages/CompaniesPage'
import { DashboardPage } from '../features/dashboard/pages/DashboardPage'
import { Layout } from '../shared/components/Layout'

function CustomersPage() {
  return <main className="page"><header className="page-header"><div><span className="eyebrow">Relationships</span><h1>Customers</h1><p>Track customer activity, health and engagement.</p></div><button className="primary-button">Add customer</button></header><section className="panel placeholder-panel"><h2>Customer workspace</h2><p>Customer management is ready for the API and data layer.</p></section></main>
}
function SettingsPage() {
  return <main className="page"><header className="page-header"><div><span className="eyebrow">Configuration</span><h1>Settings</h1><p>Manage workspace preferences and operational controls.</p></div></header><section className="settings-grid"><article className="panel setting-card"><span className="eyebrow">Workspace</span><h2>Enterprise Operations</h2><p>Centralized configuration for the organization workspace.</p><button className="secondary-button">Configure workspace</button></article><article className="panel setting-card"><span className="eyebrow">Access</span><h2>Administrator</h2><p>Role-based access control is prepared for the authentication layer.</p><button className="secondary-button">Manage access</button></article></section></main>
}
export function App() {
  return <Layout><Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/companies" element={<CompaniesPage />} />
    <Route path="/customers" element={<CustomersPage />} />
    <Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/ai" element={<AIAssistantPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes></Layout>
}