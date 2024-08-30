import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = (props) => {
  const navigate = useNavigate();
  const video = props.video;

  // Calcul du score
  const score = Math.round(video.vote_average * 10);

  // Fonction pour obtenir la couleur basée sur le score
  const getColor = () => {
    if (score <= 20) {
      return "#f32013";
    } else if (score <= 40) {
      return "#F1D429";
    } else if (score <= 60) {
      return "#F49123";
    } else if (score <= 80) {
      return "#bbce5b";
    } else {
      return "#346751";
    }
  };

  const color = getColor();

  const handleNavigation = () => {
    navigate(`/movie/${video.id}`);
  };

  return (
    <div className="w-max m-5">
      <div className="relative" onClick={handleNavigation}>
        <img
          className="rounded-lg cursor-pointer"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${video.backdrop_path}`}
          alt={video.title}
        />
        <div className="absolute bottom-2 left-2 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(${color} ${score}%, #081c22 ${score}%)`,
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))",
              }}
            ></div>
            <div className="w-10 h-10 bg-slate-800 rounded-full text-sm flex items-center justify-center">
              <span className="font-black text-white">{score}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col mt-2">
        <span className="text-white font-semibold">{video.title}</span>
        <span className="font-light text-gray-400">{video.release_date}</span>
      </div>
    </div>
  );
};

export default VideoCard;
