



import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Alex Johnson",
    art: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Sophia Adams",
    art: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300&q=80",
  },
];

export default function ScrollAreaHorizontalDemo() {
  return (
    <div className="px-8 mt-8">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-8">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md group">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-[400px] w-[375px] object-cover transition-transform duration-300 group-hover:scale-110"
                  width={375}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
