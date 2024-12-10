import { VideoCard } from "@/components/videos/video-card";
import type { VimeoVideo } from "@/lib/vimeo";

interface VideoGridProps {
  videos: VimeoVideo[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  if (!videos.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">動画が見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.uri} video={video} />
      ))}
    </div>
  );
} 