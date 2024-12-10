import { getVideo } from "@/lib/vimeo";

export default async function WatchPage({
  params,
}: {
  params: { videoId: string };
}) {
  const videoId = params.videoId.replace("/videos/", "");
  const video = await getVideo(videoId);

  return (
    <div className="container py-8">
      <div className="aspect-video mb-4">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=0&autoplay=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">{video.name}</h1>
      <p className="text-muted-foreground">{video.description}</p>
    </div>
  );
} 