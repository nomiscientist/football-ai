import MatchUploader from '../components/MatchUploader'
import MatchList from '../components/MatchList'
import { Separator } from "@/components/ui/separator"

export default function PostMatchAnalytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Post-Match Analytics</h1>
      <MatchUploader />
      <Separator className="my-8" />
      <MatchList />
    </div>
  )
}

