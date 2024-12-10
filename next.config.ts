import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.vimeocdn.com"], // 必要なホスト名を追加
  },
  // 他の設定があればここに記述
};

export default nextConfig;