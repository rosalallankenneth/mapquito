import React, { useState, useContext } from "react";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Tooltip,
  ZoomControl
} from "react-leaflet";
import dataGeoJson from "../../data/municities-province-ph104200000.0.1.json";
import { MapContext } from "../../context/MapContext";

const Map = () => {
  const { mapKey } = useContext(MapContext);
  const [layerSelected, setLayerSelected] = useState("");
  const centerLoc = [8.323365, 123.686847];

  const onEachLayer = (muncity, layer) => {
    const muncityName = muncity.properties.ADM3_EN;

    const onLayerClick = () => {
      setLayerSelected(muncityName);
      layer.bringToFront();
    };

    layer.options.fillOpacity = Math.random() * 1;
    layer.on({
      click: onLayerClick
    });
  };

  return (
    <>
      <MapContainer
        key={mapKey}
        center={centerLoc}
        zoom={11}
        className="w-full h-full z-0"
        minZoom={9}
        zoomControl={false}
        // dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />

        {dataGeoJson.features.map(geoJson => {
          return (
            <GeoJSON
              key={geoJson.properties.ADM3_EN}
              style={{
                fillColor: "#F52828",
                color:
                  layerSelected === geoJson.properties.ADM3_EN
                    ? "#fab719"
                    : "#CCC",
                weight: layerSelected === geoJson.properties.ADM3_EN ? 3 : 1
              }}
              data={geoJson}
              onEachFeature={onEachLayer}
            >
              <Tooltip>{geoJson.properties.ADM3_EN}</Tooltip>
            </GeoJSON>
          );
        })}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </>
  );
};

export default Map;
