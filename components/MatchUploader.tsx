'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Play } from 'lucide-react'

export default function MatchUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      setVideoUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    // Here you would typically upload the file to your server
    // For this example, we'll just simulate an upload
    await new Promise(resolve => setTimeout(resolve, 2000))
    setUploading(false)
    alert('Match data uploaded successfully!')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Match Data</CardTitle>
        <CardDescription>Upload match data files for analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="match-file">Match Data File</Label>
          <Input id="match-file" type="file" onChange={handleFileChange} accept="video/*,.csv,.json" />
        </div>
        {videoUrl && (
          <div className="mt-4">
            <video controls className="w-full max-w-md">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
          <Upload className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

