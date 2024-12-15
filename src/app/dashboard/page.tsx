'use client'

import { DashboardStats } from '@/components/dashboard/overview/dashboard-stats'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          A summary of your team&#39;s progress and activities
        </p>
      </div>
      <DashboardStats/>
    </div>
  )
}
