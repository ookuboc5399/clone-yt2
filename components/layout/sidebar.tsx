"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Film, Search, Upload, Library, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={cn(
      "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      collapsed ? "w-[60px]" : "w-[240px]"
    )}>
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-3">
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-4 py-4">
            <div className="px-3">
              <div className="space-y-1">
                <Link href="/">
                  <Button variant="ghost" size={collapsed ? "icon" : "default"} className="w-full justify-start">
                    <Home className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">ホーム</span>}
                  </Button>
                </Link>
                <Link href="/search">
                  <Button variant="ghost" size={collapsed ? "icon" : "default"} className="w-full justify-start">
                    <Search className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">検索</span>}
                  </Button>
                </Link>
                <Link href="/library">
                  <Button variant="ghost" size={collapsed ? "icon" : "default"} className="w-full justify-start">
                    <Library className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">ライブラリ</span>}
                  </Button>
                </Link>
                <Link href="/upload">
                  <Button variant="ghost" size={collapsed ? "icon" : "default"} className="w-full justify-start">
                    <Upload className="h-5 w-5" />
                    {!collapsed && <span className="ml-2">アップロード</span>}
                  </Button>
                </Link>
              </div>
            </div>
            {!collapsed && (
              <div className="px-3">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  カテゴリ
                </h2>
                <div className="space-y-1">
                  {["音楽", "ゲーム", "スポーツ", "エンタメ", "ニュース"].map((category) => (
                    <Link href={`/category/${category}`} key={category}>
                      <Button variant="ghost" className="w-full justify-start">
                        <Film className="mr-2 h-4 w-4" />
                        {category}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
} 