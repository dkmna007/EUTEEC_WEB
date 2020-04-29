import React from "react";
import YouTube from "react-youtube";

export default function YouTubePlayer({ url }) {
  const YouTubeGetID = url => {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <YouTube
      videoId={YouTubeGetID(url ? url : "")}
      opts={opts}
      onReady={onReady}
    />
  );
}
