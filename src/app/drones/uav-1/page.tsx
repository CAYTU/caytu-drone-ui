import React from 'react';

import Image from 'next/image';

import DroneMap from '@/components/map';
import MapSettings from '@/components/MapSetting';
import MissionType from '@/components/mission-type';

const GraphicDesignPage = () => {
  return (
    <>
      <div className="my-10">
        <span className="font-bold text-4xl">Dji Drones</span>
      </div>
      {/* <div className="bg-white rounded-lg flex justify-center">
        <Image
          src="/drone3.png"
          height={200}
          width={300}
          alt="Desktop perfume image"
          className=" h-full min-w-[250px]"
        />
      </div> */}

      {/* <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div> */}
      {/* <MissionType /> */}
      <div className="">
        <div className="">
          <DroneMap />
        </div>
        <div className="">
          <MapSettings />
        </div>
      </div>
      <div>
        <button className="bg-sky-500 hover:bg-sky-600 text-white p-4 w-full my-5 rounded-lg">
          Connect to Aircraft
        </button>
      </div>
    </>
  );
};

export default GraphicDesignPage;
