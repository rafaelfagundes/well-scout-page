import React from 'react'

function YoutubeVideo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#000",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        margin: "20px"
      }}
    >
      <div
        style={{
          background: "#222",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4FT19RdkdNU"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YoutubeVideo
