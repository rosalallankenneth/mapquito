import React, { useContext, useEffect, useState } from "react";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Marker } from "react-leaflet";
import { GlobalContext } from "../../context/GlobalContext";

const ClusteredMarkers = () => {
  const { dengueData } = useContext(GlobalContext);
  const [clusteredCases, setClusteredCases] = useState(null);
  const currentData = dengueData.filter(d => {
    const DAdmit = new Date(d.DAdmit);

    return DAdmit.getFullYear() === 2022;
  });

  useEffect(() => {
    const clusters = {};
    currentData.forEach(d => {
      if (clusters[d.Muncity]) {
        clusters[d.Muncity].push(d);
      } else {
        clusters[d.Muncity] = [d];
      }
    });
    setClusteredCases(clusters);
    console.log(clusteredCases);
  }, []);

  return (
    <>
      {clusteredCases &&
        Object.values(clusteredCases).map(cluster => {
          return (
            <MarkerClusterGroup key={Math.random()}>
              {cluster.map(marker => (
                <Marker
                  key={Math.random()}
                  position={[marker.Lat, marker.Lng]}
                />
              ))}
            </MarkerClusterGroup>
          );
        })}
      {/* <MarkerClusterGroup>
        <Marker position={[8.143329652254984, 123.84247183799745]} />
        <Marker position={[8.152360231189745, 123.8320460978381]} />
        <Marker position={[8.156438449983948, 123.84717213186225]} />
      </MarkerClusterGroup> */}
    </>
  );
};

export default ClusteredMarkers;
