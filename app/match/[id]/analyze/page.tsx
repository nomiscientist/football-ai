'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveHeatMap } from '@nivo/heatmap'

// Mock data for demonstration
const matchData = {
  id: 1,
  date: '2023-07-15',
  homeTeam: 'Team A',
  awayTeam: 'Team B',
  score: '2-1',
  stats: {
    possession: { home: 60, away: 40 },
    shots: { home: 15, away: 10 },
    shotsOnTarget: { home: 8, away: 5 },
    corners: { home: 6, away: 4 },
    fouls: { home: 10, away: 12 },
  },
  heatmapData: [
    { x: 'Defense', y: 'Team A', value: 30 },
    { x: 'Midfield', y: 'Team A', value: 50 },
    { x: 'Attack', y: 'Team A', value: 20 },
    { x: 'Defense', y: 'Team B', value: 40 },
    { x: 'Midfield', y: 'Team B', value: 40 },
    { x: 'Attack', y: 'Team B', value: 20 },
  ]
}

export default function MatchAnalysis({ params }: { params: { id: string } }) {
  const [match] = useState(matchData)

  const barData = Object.entries(match.stats).map(([key, value]) => ({
    stat: key,
    [match.homeTeam]: value.home,
    [match.awayTeam]: value.away,
  }))

  const pieData = [
    { id: match.homeTeam, value: match.stats.possession.home },
    { id: match.awayTeam, value: match.stats.possession.away },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Match Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>{match.homeTeam} vs {match.awayTeam}</CardTitle>
          <CardDescription>Date: {match.date} | Score: {match.score}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="stats">
            <TabsList>
              <TabsTrigger value="stats">Match Statistics</TabsTrigger>
              <TabsTrigger value="possession">Possession</TabsTrigger>
              <TabsTrigger value="heatmap">Team Heatmap</TabsTrigger>
            </TabsList>
            <TabsContent value="stats">
              <div style={{ height: '400px' }}>
                <ResponsiveBar
                  data={barData}
                  keys={[match.homeTeam, match.awayTeam]}
                  indexBy="stat"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Statistic',
                    legendPosition: 'middle',
                    legendOffset: 32
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Value',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  legends={[
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                    }
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="possession">
              <div style={{ height: '400px' }}>
                <ResponsivePie
                  data={pieData}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="heatmap">
              <div style={{ height: '400px' }}>
                <ResponsiveHeatMap
                  data={match.heatmapData}
                  margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
                  valueFormat=">-.2s"
                  axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -90,
                    legend: '',
                    legendOffset: 46
                  }}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Team',
                    legendPosition: 'middle',
                    legendOffset: 36
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Position',
                    legendPosition: 'middle',
                    legendOffset: -40
                  }}
                  colors={{
                    type: 'sequential',
                    scheme: 'blues'
                  }}
                  emptyColor="#555555"
                  legends={[
                    {
                      anchor: 'bottom',
                      translateX: 0,
                      translateY: 30,
                      length: 400,
                      thickness: 8,
                      direction: 'row',
                      tickPosition: 'after',
                      tickSize: 3,
                      tickSpacing: 4,
                      tickOverlap: false,
                      tickFormat: '>-.2s',
                      title: 'Value →',
                      titleAlign: 'start',
                      titleOffset: 4
                    }
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

