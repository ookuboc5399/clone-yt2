import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { VimeoVideo } from "@/lib/vimeo";
import Link from "next/link";

interface VideoCardProps {
  video: VimeoVideo;
}

export function VideoCard({ video }: VideoCardProps) {
  const videoId = video.uri.replace("/videos/", "");
  const thumbnail = video.pictures.sizes[3]?.link;
  const views = video.stats.plays || 0;
  const uploadDate = new Date(video.created_time).toLocaleDateString();

  return (
    <Link href={`/watch/${videoId}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <AspectRatio ratio={16 / 9}>
          <img
            src={thumbnail}
            alt={video.name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-2">{video.name}</h3>
          <div className="text-sm text-muted-foreground">
            <p>{views} 回視聴</p>
            <p>{uploadDate}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
} 