"use client"
import React, { useEffect, useState } from 'react'

function YoutubeVideo() {

  const [mounted, setMounted] = useState(false);
  const [videoSizes, setVideoSizes] = useState({ width: 1024, height: 1024 * 0.5625 });


  function getWidth(windowWidth: number) {
    if (windowWidth > 1024) {
      return 1024;
    } else if (windowWidth > 400 && windowWidth < 1024) {
      return windowWidth / 1.5;
    } else {
      return windowWidth - 40;
    }
  }

  useEffect(() => {
    const videoSize = getWidth(window.innerWidth);
    setMounted(true);
    setVideoSizes({
      width: videoSize,
      height: videoSize * 0.5625
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full flex justify-center items-center py-10 bg-zinc-900">
      <div className="bg-[#222] rounded-2xl overflow-hidden">
        <iframe
          width={videoSizes.width}
          height={videoSizes.height}
          src="https://www.youtube.com/embed/4FT19RdkdNU"
          title="WellScout"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div >
  )
}

export default YoutubeVideo
