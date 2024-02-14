'use client';

import { useEffect, useState } from 'react';

import Head from 'next/head';

import ReactMapGL, { Marker } from 'react-map-gl';
import useSWR from 'swr';

import { addDataLayer } from './map/addDataLayer';
import { fetcher } from './map/fetcher';
import { initializeMap } from './map/initializeMap';
import styles from './map/styles/map.module.css';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default function DroneMap() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState<mapboxgl.Map | undefined>(undefined);
  const { data, error } = useSWR('/api/liveMusic', fetcher);

  if (error) {
    console.error(error);
  }

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWJkb3Vha2hhZCIsImEiOiJjbHNpeWV4eWcxOTUyMnFtcml4Nng4eWdzIn0.w5_7ELxZJviNFtKSk_1RgQ';

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: 'my-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-77.02, 38.887],
      // center: [14.46136048601374, -17.011996500113238],
      center: [-122.420679, 37.772537],
      zoom: 12.5,
      pitch: 45,
      height: 1000,
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && data) {
      Map?.on('load', function () {
        addDataLayer(Map, data);
      });
    }
  }, [pageIsMounted, setMap, data, Map]);

  var marker = new mapboxgl.Marker();

  function add_marker(event: any) {
    var coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(Map);
  }

  Map?.on('click', add_marker);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div id="my-map" style={{ height: 600, width: '100%' }} />
      </main>
    </div>
  );
}
