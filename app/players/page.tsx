'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Users, User, Shield } from 'lucide-react'

const players = [
  { id: 1, name: 'John Doe', position: 'Forward', team: 'Team A', age: 25, goals: 10, assists: 5 },
  { id: 2, name: 'Jane Smith', position: 'Midfielder', team: 'Team B', age: 27, goals: 5, assists: 12 },
  { id: 3, name: 'Mike Johnson', position: 'Defender', team: 'Team A', age: 29, goals: 1, assists: 3 },
  // Add more players...
]

const teams = [
  { id: 1, name: 'Team A', coach: 'Alex Brown', founded: 1950, league: 'Premier League' },
  { id: 2, name: 'Team B', coach: 'Sarah Wilson', founded: 1963, league: 'Premier League' },
  // Add more teams...
]

export default function PlayersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.coach.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Players & Teams</h1>
      <Input
        type="search"
        placeholder="Search players or teams..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Tabs defaultValue="players">
        <TabsList>
          <TabsTrigger value="players"><Users className="mr-2 h-4 w-4" /> Players</TabsTrigger>
          <TabsTrigger value="teams"><Shield className="mr-2 h-4 w-4" /> Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="players">
          <Card>
            <CardHeader>
              <CardTitle>Player List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Goals</TableHead>
                    <TableHead>Assists</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPlayers.map((player) => (
                    <TableRow key={player.id}>
                      <TableCell>{player.name}</TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>{player.team}</TableCell>
                      <TableCell>{player.age}</TableCell>
                      <TableCell>{player.goals}</TableCell>
                      <TableCell>{player.assists}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Team List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Coach</TableHead>
                    <TableHead>Founded</TableHead>
                    <TableHead>League</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeams.map((team) => (
                    <TableRow key={team.id}>
                      <TableCell>{team.name}</TableCell>
                      <TableCell>{team.coach}</TableCell>
                      <TableCell>{team.founded}</TableCell>
                      <TableCell>{team.league}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

