import React from "react";
import VideoCard from "./videoCard";

const Feed = (props) => {
  const populars = props.populars;
  const topRate = props.topRate;
  const upcomming = props.upcomming;

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto h-[90vh]">
      <div>
        <h2 className="text-2xl font-black text-white"> Top rated movies</h2>
        <div className="grid grid-flow-col-dense gap-4 overflow-y-auto">
          {topRate.map((item, index) => (
            <VideoCard key={index} video={item} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-2xl font-black text-white">Populars</h2>
          <div>
            <div className="grid grid-flow-col-dense gap-4 overflow-y-auto">
              {populars.map((item, index) => (
                <VideoCard key={index} video={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black text-white">Upcomming</h2>
        <div className="grid grid-flow-col-dense gap-4 overflow-y-auto">
          {upcomming.map((item, index) => (
            <VideoCard key={index} video={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Feed;
