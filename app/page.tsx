import MatchOverview from './components/MatchOverview'
import PlayerPerformance from './components/PlayerPerformance'
import TeamStats from './components/TeamStats'
import LiveStream from './components/LiveStream'
import AIInsights from './components/AIInsights'
import PredictiveAnalysis from './components/PredictiveAnalysis'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI-Generated Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-500">Matches Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-500">Goals Predicted</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">78%</p>
                <p className="text-sm text-gray-500">Win Probability</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-500">Key Players</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <MatchOverview />
        <PlayerPerformance />
      </div>
      <div className="mt-8">
        <TeamStats />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AIInsights />
        <PredictiveAnalysis />
      </div>
      <div className="mt-8">
        <LiveStream />
      </div>
    </div>
  )
}

