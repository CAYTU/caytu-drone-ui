import React from 'react';

import DroneCard from '@/components/DroneCard';

const ProjectsPage = () => {
  return (
    <>
      <span className="font-bold text-4xl">All drones</span>

      <div className=" border-zinc-500 w-full rounded-lg">
        <DroneCard />
      </div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </>
  );
};

export default ProjectsPage;
