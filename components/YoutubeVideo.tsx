"use client"
import React from 'react'

function YoutubeVideo() {

  // Get screen width
  const screenWidth = (typeof window !== 'undefined' && window.innerWidth) || 0;

  const videoSize = screenWidth > 520 ? 520 : screenWidth - 40;
  console.log(videoSize);

  const videoSizes = {
    width: videoSize,
    height: videoSize * 0.5625
  }

  return (
    <div
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
