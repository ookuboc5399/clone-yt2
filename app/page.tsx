import { getVideos } from "@/lib/vimeo";
import { VideoGrid } from "@/components/videos/video-grid";

export default async function Home() {
  const videos = await getVideos();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">おすすめ動画</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}
