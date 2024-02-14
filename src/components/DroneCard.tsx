'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@iconify/react';

const data = [
  {
    title: 'DJI Phantom series (Phantom 4 Pro, Phantom 4 Advanced, etc.)',
    description:
      'DJI Phantom series: Known for their reliability and advanced features, the Phantom series drones are popular among both hobbyists and professionals. They offer high-quality aerial photography and videography capabilities.',
    price: '$99/M',
    link: '/drones/uav-1',
    image: '/drone3.png',
    disable: false,
  },
  {
    title: 'DJI Mavic series (Mavic 2 Pro, Mavic 2 Zoom, Mavic Air, etc.)',
    description:
      'DJI Mavic series: The Mavic series offers portability and performance to meet the needs of drone enthusiasts and professionals alike. They are known for their impressive flight performance, compact design, and ease of use.',
    price: '$79/M',
    link: '/drones/uav-2',
    image: '/drone5.png',
    disable: true,
  },

  {
    title: 'DJI Inspire series (Inspire 2, Inspire 1, etc.)',
    description:
      'DJI Inspire series: The Inspire series is a professional series of camera drones known for their high-quality aerial photography and videography capabilities. They are designed for professional filmmakers and content creators.',
    price: '$199/M',
    link: '/drones/uav-1',
    image: '/drone1.png',
    disable: true,
  },
];

function DroneCard() {
  return (
    <>
      <div className="grid xl:grid-cols-2 grid-cols-1">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row rounded-lg my-10 sm:max-w-2xl"
            >
              <div className="bg-white rounded-lg">
                <Image
                  src={item.image}
                  height={200}
                  width={300}
                  alt="Desktop perfume image"
                  className="sm:block hidden h-full min-w-[250px]"
                />
              </div>
              <div className="px-5 space-y-4 py-5">
                <h2 className="text-3xl text-[--colors-dark-blue]">
                  {item.title}
                </h2>
                <p className={`text-[--colors-grey-blue] text-sm font-medium`}>
                  {item.description}
                </p>
                <div className="flex space-x-2 items-center">
                  <span className="text-[--colors-dark-cyan] text-3xl">
                    {item.price}
                  </span>
                </div>
                <Link
                  href={item.link}
                  className={`${
                    item.disable
                      ? 'cursor-not-allowed bg-gray-300 '
                      : 'cursor-pointer bg-sky-500 hover:bg-sky-800'
                  }text-[--colors-white] flex items-center justify-center space-x-2 py-3 w-full max-w-md  p-4 rounded-lg`}
                >
                  <div className={`flex flex-row items-center`}>
                    <span className="text-[--colors-white] text-lg f font-bold">
                      Louer
                    </span>
                    <Icon icon="lucide:chevron-right" width="24" height="24" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DroneCard;
