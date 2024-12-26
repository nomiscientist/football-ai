'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Video, MessageCircle, BarChart2 } from 'lucide-react'
import { Bot, TrendingUp } from 'lucide-react'; // Import Bot and TrendingUp icons

const FootballGround = () => (
  <svg viewBox="0 0 700 500" className="w-full h-auto">
    <defs>
      <radialGradient id="fieldGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" style={{stopColor: '#38a169', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#2f855a', stopOpacity: 1}} />
      </radialGradient>
    </defs>
    <rect width="700" height="500" fill="url(#fieldGradient)" />
    <rect x="0" y="30" width="700" height="440" fill="none" stroke="white" strokeWidth="2" />
    <circle cx="350" cy="250" r="75" fill="none" stroke="white" strokeWidth="2" />
    <rect x="0" y="200" width="50" height="100" fill="none" stroke="white" strokeWidth="2" />
    <rect x="650" y="200" width="50" height="100" fill="none" stroke="white" strokeWidth="2" />
    <line x1="350" y1="30" x2="350" y2="470" stroke="white" strokeWidth="2" />
    
    {/* Team A Players (red) */}
    <circle cx="175" cy="250" r="10" fill="red" />
    <circle cx="300" cy="175" r="10" fill="red" />
    <circle cx="300" cy="325" r="10" fill="red" />
    <circle cx="425" cy="250" r="10" fill="red" />
    <circle cx="550" cy="250" r="10" fill="red" />

    {/* Team B Players (blue) */}
    <circle cx="525" cy="175" r="10" fill="blue" />
    <circle cx="525" cy="325" r="10" fill="blue" />
    <circle cx="400" cy="175" r="10" fill="blue" />
    <circle cx="400" cy="325" r="10" fill="blue" />
    <circle cx="150" cy="250" r="10" fill="blue" />

    {/* Football */}
    <circle cx="350" cy="250" r="5" fill="white" stroke="black" strokeWidth="1" />
  </svg>
)

export default function LiveStream() {
  const [activeCamera, setActiveCamera] = useState('main')

  const cameras = [
    { id: 'main', label: 'Main Camera' },
    { id: 'side', label: 'Side View' },
    { id: 'goal', label: 'Goal Line' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Video className="mr-2 h-5 w-5" />
          AI-Enhanced Live Stream
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            Real-time AI Analysis
          </h3>
          <p>AI is currently analyzing player movements, ball possession, and team formations to provide real-time insights.</p>
        </div>
        <Tabs defaultValue="cameras" className="w-full">
          <TabsList>
            <TabsTrigger value="cameras"><Camera className="mr-2 h-4 w-4" /> Camera Angles</TabsTrigger>
            <TabsTrigger value="stats"><BarChart2 className="mr-2 h-4 w-4" /> Live Stats</TabsTrigger>
            <TabsTrigger value="chat"><MessageCircle className="mr-2 h-4 w-4" /> Live Chat</TabsTrigger>
          </TabsList>
          <TabsContent value="cameras">
            <div className="grid grid-cols-3 gap-4 mt-4">
              {cameras.map((camera) => (
                <Button
                  key={camera.id}
                  variant={activeCamera === camera.id ? 'default' : 'outline'}
                  onClick={() => setActiveCamera(camera.id)}
                >
                  {camera.label}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stats">
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Live Match Statistics</h3>
              <ul className="space-y-2">
                <li>Possession: Team A 60% - 40% Team B</li>
                <li>Shots on Target: Team A 5 - 3 Team B</li>
                <li>Corner Kicks: Team A 4 - 2 Team B</li>
                <li>Yellow Cards: Team A 1 - 2 Team B</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="chat">
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md h-40 overflow-y-auto">
                <p className="mb-2"><strong>User1:</strong> Great save by the goalkeeper!</p>
                <p className="mb-2"><strong>User2:</strong> Team A is dominating possession.</p>
                <p><strong>User3:</strong> What a goal! Incredible strike!</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            AI-Powered Match Overview
          </h3>
          <FootballGround />
        </div>
      </CardContent>
    </Card>
  )
}

