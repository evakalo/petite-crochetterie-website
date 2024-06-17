import React from "react";
import { useLocation } from "react-router-dom";
import videoStyles from "../styles/Video.module.css";

const VideoComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  // Replace 'your-secure-token' with the actual token
  const isValidToken = token === "crochet-bunny-tutorial";

  return (
    <main className={videoStyles.videoPageWrapper}>
      <div className={videoStyles.videoWrapper}>
        <h3>Crochet Bunny Purse tutorial</h3>

        {isValidToken ? (
          <iframe
            src="https://www.youtube.com/embed/453U1IvCDr8?si=9ZaF9lMaXWr2Xz2Z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={videoStyles.videoBox}
          ></iframe>
        ) : (
          <p>Access denied</p>
        )}
      </div>
    </main>
  );
};

export default VideoComponent;
