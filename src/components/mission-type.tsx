'use client';

import React, { useState } from 'react';

import DroneMap from '@/components/map';
import { Icon } from '@iconify/react';

const MissionType = () => {
  const [selected, setSelected] = useState('first');
  // when selected choose one of the tabs

  function handleClick(newSelected: string) {
    setSelected(newSelected);
    console.log(selected);
  }

  return (
    <>
      <div className=" bg-gray-800  rounded-xl ">
        <div className="relative right-0">
          <div className="relative grid grid-cols-2 p-1 list-none rounded-xl ">
            <button
              onClick={() => handleClick('first')}
              className={`${
                selected == 'first'
                  ? 'rounded-lg bg-white text-slate-700'
                  : 'bg-inherit text-white'
              } z-30 br-1  col-span-1 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0  cursor-pointer  `}
            >
              <Icon icon="pepicons-print:map" width="24" height="24" />
              <span className="ml-1">Mapping</span>
            </button>
            <button
              onClick={() => handleClick('second')}
              className={`${
                selected == 'second'
                  ? 'rounded-lg bg-white text-slate-700'
                  : 'bg-inherit text-white'
              } z-30 br-1  col-span-1 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0  cursor-pointer  `}
            >
              <Icon icon="lucide:waypoints" width="24" height="24" />
              <span className="ml-1">Waypooint</span>
            </button>
          </div>
        </div>
      </div>
      <DroneMap />
    </>
  );
};

export default MissionType;
