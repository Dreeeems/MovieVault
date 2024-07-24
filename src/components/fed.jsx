import React from "react";
import VideoCard from "./videoCard";

const Feed = (props) => {
  const items = props.videos;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto h-[90vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {items.map((item, index) => (
          <VideoCard key={index} video={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
