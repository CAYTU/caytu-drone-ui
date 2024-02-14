import React from 'react';

import Link from 'next/link';

const menuItems = [
  {
    href: '/',
    slide: true,
    value: 200,
    title: 'Flight Level',
  },
  {
    href: '/',
    slide: true,
    value: 700,
    title: 'Altitude Above Ground Level (AGL)',
  },
  {
    href: '/',
    slide: true,
    value: 1300,
    title: 'Transition Altitude',
  },
  {
    href: '/',
    slide: true,
    value: 900,
    title: 'Heading',
  },
  {
    href: '/',
    slide: false,
    value: 20,
    title: 'Takeoff Speed(mph)',
  },
  {
    href: '/',
    slide: false,
    value: 20,
    title: 'Elevation optimization',
  },
];

const MapSettings = () => {
  return (
    <>
      <ul className=" border-[#0070f3] border-[10px]  h-full">
        {menuItems.map(({ href, title, slide, value }) => (
          <li
            className="border-b-2 p-4 border-b-gray-900 grid  relative"
            key={title}
          >
            <Link href={href}>{title}</Link>
            {slide ? (
              <div className="relative mb-6">
                <label htmlFor="labels-range-input" className="sr-only">
                  Labels range
                </label>
                <input
                  id={`labels-range-input-${title}`}
                  type="range"
                  defaultValue={value}
                  min="100"
                  max="1500"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  Min (m100)
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  m500
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  m1000
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  Max (m1500)
                </span>
              </div>
            ) : (
              <label
                htmlFor={`labels-checkbox-${title}`}
                className=" absolute right-10 top-4 inline-flex items-center cursor-pointer"
              >
                <input
                  id={`labels-range-input-${title}`}
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapSettings;
