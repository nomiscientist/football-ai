import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from 'lucide-react'

export default function PredictiveAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2" />
          Predictive Analysis
        </CardTitle>
        <CardDescription>AI-powered predictions for upcoming matches</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Team A has a 65% chance of winning their next match against Team B.</li>
          <li>Player Y is likely to score at least one goal in the upcoming game, based on recent form and historical data.</li>
          <li>There's a high probability of at least 3 yellow cards in the next match due to the teams' aggressive playing styles.</li>
        </ul>
      </CardContent>
    </Card>
  )
}

