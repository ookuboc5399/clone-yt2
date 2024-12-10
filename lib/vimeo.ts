import { Vimeo } from "@vimeo/vimeo";

const client = new Vimeo(
  process.env.VIMEO_CLIENT_ID!,
  process.env.VIMEO_CLIENT_SECRET!,
  process.env.VIMEO_ACCESS_TOKEN!
);

export interface VimeoVideo {
  uri: string;
  name: string;
  description: string;
  pictures: {
    sizes: Array<{
      link: string;
      width: number;
      height: number;
    }>;
  };
  stats: {
    plays: number;
  };
  created_time: string;
}

export async function getVideos(): Promise<VimeoVideo[]> {
  return new Promise((resolve, reject) => {
    client.request({
      method: "GET",
      path: "/me/videos",
      query: {
        per_page: 12,
        sort: "date",
        direction: "desc"
      }
    }, (error, body) => {
      if (error) {
        console.error("Error fetching videos:", error);
        resolve([]);
        return;
      }
      resolve(body.data);
    });
  });
}

export async function initializeUpload(name: string, size: number) {
  return new Promise((resolve, reject) => {
    client.request({
      method: "POST",
      path: "/me/videos",
      body: {
        upload: {
          approach: "tus",
          size: size
        },
        name: name,
        description: "Uploaded via web application",
        privacy: { view: "anybody" }
      }
    }, (error, body) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(body);
    });
  });
} 