import React from 'react';

import MissionType from '@/components/mission-type';

const GraphicDesignPage = () => {
  return (
    <>
      <div className="my-10">
        <span className="font-bold text-4xl">Drone 1</span>
      </div>

      {/* <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div> */}
      <MissionType />
    </>
  );
};

export default GraphicDesignPage;
