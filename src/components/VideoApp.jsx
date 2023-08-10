import React from "react";

const VideoApp = ({ video }) => {
  return (
    <article key={video.id}>
      <iframe
        width="100%"
        // height="315"
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </article>
  );
};

export default VideoApp;
