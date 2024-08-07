import React from "react";
import { useNavigate } from "react-router-dom";
const VideoCard = (props) => {
  const video = props.video;
  const navagation = useNavigate();
  const goToMoviePage = (id) => {
    navagation(`/movie/${id}`);
  };
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        class="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w500/${video.backdrop_path}`}
        alt=""
      />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {video.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {video.overview.slice(0, 80) + " ..."}
        </p>
        <a
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => goToMoviePage(video.id)}
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
