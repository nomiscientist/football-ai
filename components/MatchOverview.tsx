'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import dynamic from 'next/dynamic'

const DynamicHeatmap = dynamic(() => import('./Heatmap'), { ssr: false })

export default function MatchOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Ball Possession</h3>
            <div className="flex items-center justify-between mb-1">
              <span>Team A</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="w-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Player Heatmap</h3>
            <DynamicHeatmap />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

