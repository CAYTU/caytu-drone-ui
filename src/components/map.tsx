'use client';

import { useEffect, useState } from 'react';

import Head from 'next/head';

import MapboxDraw from '@mapbox/mapbox-gl-draw';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import Image from 'next/image';

import { Icon } from '@iconify/react';

import styles from './map/styles/map.module.css';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default function DroneMap() {
  const [selected, setSelected] = useState('first');

  const [selectedDrone, setSelecteDrone] = useState('A');
  // when selected choose one of the tabs

  function handleClick(newSelected: string) {
    setSelected(newSelected);
    console.log(selected);
  }

  function handleDroneClick(newSelected: string) {
    setSelecteDrone(newSelected);
    console.log(selectedDrone);
  }

  const points: { lng: number; lat: number }[] = [];

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJkb3Vha2hhZCIsImEiOiJjbHNpeWV4eWcxOTUyMnFtcml4Nng4eWdzIn0.w5_7ELxZJviNFtKSk_1RgQ';

  useEffect(() => {
    // setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-77.02, 38.887],
      center: [-17.011996500113238, 14.46136048601374],
      zoom: 12.5,
      // pitch: 45,
      height: 1000,
    });

    function add_marker(event: any) {
      var coordinates: any = event.lngLat;
      points.push({ lat: coordinates.lat, lng: coordinates.lng });

      var marker = new mapboxgl.Marker(
        // The second argument is the DOM element that represents the marker.
        {
          color: '#FF0000',
          backgroundImage: "url('../../../../public/drone-icon.png')",
          width: '50px',
          height: '50px',
          cursor: 'pointer',
        },
      )
        .setLngLat([coordinates.lng, coordinates.lat])
        .setDraggable(true)
        .addTo(map);

      marker.addClassName('marker');
      console.log('Map:', marker);
    }

    map.on('click', add_marker);

    const draw = new MapboxDraw({
      displayControlsDefault: true,
      controls: {
        // point: true,

        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    });
    map.addControl(draw);

    // initializeMap(mapboxgl, map);
    // setMap(map);

    map.on('load', () => {
      // Load an image from an external URL.
      map.loadImage('/drone-icon.png', (error: any, image: any) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage('cat', image);

        // Add a data source containing one point feature.
        map.addSource('point', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-17.011996500113238, 14.46136048601374],
                },
              },
            ],
          },
        });

        // Add a layer to use the image to represent the data.
        map.addLayer({
          id: 'points',
          type: 'symbol',
          source: 'point', // reference the data source
          layout: {
            'icon-image': 'cat', // reference the image
            'icon-size': 0.05,
          },
        });
      });
    });
  }, [selected]);

  return (
    <>
      <div className="   rounded-xl mb-10">
        <div className="relative right-0">
          <div className="relative grid grid-cols-2 p-1 list-none rounded-xl ">
            <button
              // onClick={() => handleClick('first')}
              onClick={() => handleDroneClick('A')}
              className={`${
                selectedDrone == 'A'
                  ? 'rounded-lg bg-white text-slate-700'
                  : 'bg-inherit text-white'
              } z-30 br-1 flex flex-col items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0  cursor-pointer  `}
            >
              <Image
                src="/drone1.png"
                alt="Drone A"
                width={200}
                height={200}
                className="block"
              />
              {/* <Icon icon="pepicons-print:map" width="24" height="24" /> */}
              <span className="ml-1">DJI Phantom 4 Pro</span>
            </button>
            <button
              onClick={() => handleDroneClick('B')}
              className={`${
                selectedDrone == 'B'
                  ? 'rounded-lg bg-white text-slate-700'
                  : 'bg-inherit text-white'
              } z-30 br-1 flex flex-col items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0  cursor-pointer  `}
            >
              <Image
                src="/drone2.png"
                alt="Drone B"
                width={200}
                height={200}
                className="block"
              />
              {/* <Icon icon="lucide:waypoints" width="40" height="40" /> */}
              <span className="ml-1">DJI Mavic 3 Pro.</span>
            </button>
          </div>
        </div>
      </div>
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
              <span className="ml-1">Waypoint</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <></>
        <main className={styles.main}>
          <div id="my-map" style={{ height: 600, width: '100%' }} />
        </main>
      </div>
    </>
  );
}
