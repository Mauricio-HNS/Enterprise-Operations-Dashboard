import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../features/dashboard/pages/DashboardPage'
import { Layout } from '../shared/components/Layout'

export function App() {
  return <Layout><Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes></Layout>
}