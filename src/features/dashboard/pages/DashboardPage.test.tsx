import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DashboardPage } from './DashboardPage'

describe('DashboardPage', () => {
  it('renders core operational metrics', () => {
    render(<DashboardPage />)
    expect(screen.getByRole('heading', { name: /enterprise overview/i })).toBeInTheDocument()
    expect(screen.getByText('Active customers')).toBeInTheDocument()
    expect(screen.getByText('Revenue vs target')).toBeInTheDocument()
  })
})