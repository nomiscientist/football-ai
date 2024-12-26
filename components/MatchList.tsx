'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, BarChart2 } from 'lucide-react'
import Link from 'next/link'

// Mock data for demonstration
const mockMatches = [
  { id: 1, date: '2023-07-15', homeTeam: 'Team A', awayTeam: 'Team B', score: '2-1' },
  { id: 2, date: '2023-07-16', homeTeam: 'Team C', awayTeam: 'Team D', score: '0-0' },
  { id: 3, date: '2023-07-17', homeTeam: 'Team E', awayTeam: 'Team F', score: '3-2' },
]

export default function MatchList() {
  const [matches] = useState(mockMatches)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Matches</CardTitle>
        <CardDescription>View and analyze recent matches</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Home Team</TableHead>
              <TableHead>Away Team</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map((match) => (
              <TableRow key={match.id}>
                <TableCell>{match.date}</TableCell>
                <TableCell>{match.homeTeam}</TableCell>
                <TableCell>{match.awayTeam}</TableCell>
                <TableCell>{match.score}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/match/${match.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/match/${match.id}/analyze`}>
                        <BarChart2 className="mr-2 h-4 w-4" />
                        Analyze
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

