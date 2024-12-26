import MatchUploader from '../components/MatchUploader'
import MatchList from '../components/MatchList'
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/card"

export default function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <Tabs defaultValue="post-match">
        <TabsList>
          <TabsTrigger value="post-match">Post-Match Analytics</TabsTrigger>
          <TabsTrigger value="live">Live Analytics</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="post-match">
          <MatchUploader />
          <Separator className="my-8" />
          <MatchList />
        </TabsContent>
        <TabsContent value="live">
          <p>Live match analytics content goes here.</p>
        </TabsContent>
        <TabsContent value="predictive">
          <p>Predictive analytics content goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

