import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
  }
}

export default function MatchDetails({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the match data based on the ID
  // For this example, we're using mock data
  const match = matchData

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Match Details</h1>
      <Card>
        <CardHeader>
          <CardTitle>{match.homeTeam} vs {match.awayTeam}</CardTitle>
          <CardDescription>Date: {match.date} | Score: {match.score}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Statistic</TableHead>
                <TableHead>{match.homeTeam}</TableHead>
                <TableHead>{match.awayTeam}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(match.stats).map(([stat, values]) => (
                <TableRow key={stat}>
                  <TableCell className="font-medium">{stat.charAt(0).toUpperCase() + stat.slice(1)}</TableCell>
                  <TableCell>{values.home}</TableCell>
                  <TableCell>{values.away}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

