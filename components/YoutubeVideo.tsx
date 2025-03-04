"use client"
import React, { useEffect, useState } from 'react'

function YoutubeVideo() {

  const [mounted, setMounted] = useState(false);
  const [videoSizes, setVideoSizes] = useState({ width: 1024, height: 1024 * 0.5625 });

  useEffect(() => {
    const maxWidth = window.innerWidth - 160 > 1024 ? 1024 : window.innerWidth / 1.5;
    setMounted(true);
    const screenWidth = window.innerWidth;
    const videoSize = screenWidth > maxWidth ? maxWidth : screenWidth - 40;
    setVideoSizes({
      width: videoSize,
      height: videoSize * 0.5625
    });
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="relative"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#111",
      }}
    >
      <div
        style={{
          background: "#222",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
        }}
      >
        <iframe
          width={videoSizes.width}
          height={videoSizes.height}
          src="https://www.youtube.com/embed/4FT19RdkdNU"
          title="WellScout"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YoutubeVideo
