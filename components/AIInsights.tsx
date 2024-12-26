import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot } from 'lucide-react'

export default function AIInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2" />
          AI Insights
        </CardTitle>
        <CardDescription>AI-generated insights based on recent match data</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Team A's possession has increased by 15% in the last 3 matches, indicating improved midfield control.</li>
          <li>Player X's shot accuracy has improved significantly, suggesting focused training is paying off.</li>
          <li>The opposition team tends to concede goals in the last 15 minutes, highlighting a potential weakness to exploit.</li>
        </ul>
      </CardContent>
    </Card>
  )
}

