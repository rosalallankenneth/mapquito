import React, { useState, useContext, useEffect, useCallback } from "react";
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
import { getCases, getRanges } from "../../utils/MapUtils";
import { MapContext } from "../../context/MapContext";
import { MapFilterContext } from "../../context/MapFilterContext";
import { GlobalContext } from "../../context/GlobalContext";
import ClusteredMarkers from "./ClusteredMarkers.js";

const Map = () => {
  const {
    year,
    muncity,
    setMuncity,
    setMuncityCasesCount,
    setPrevYearCase,
    setAgeChildrenCases,
    setAgeYouthCases,
    setAgeAdultsCases,
    setAgeSeniorsCases,
    mapKey
  } = useContext(MapContext);
  const { dengueData } = useContext(GlobalContext);
  const value = useContext(MapFilterContext);
  const [layerSelected, setLayerSelected] = useState("");
  const centerLoc = [8.323365, 123.686847];
  const filters = {
    ageFilter: {
      children: value.ageCheckChildren,
      youth: value.ageCheckYouth,
      adults: value.ageCheckAdults,
      seniors: value.ageCheckSeniors
    },
    genderFilter: {
      M: value.maleCheck,
      F: value.femaleCheck
    }
  };

  // get all cases, previous/latest year cases, age group and gender cases
  const { casesCount, casesPrevious, casesAgeGroup } = getCases(
    dengueData,
    year,
    filters
  );
  // get lowest and highest case muncity for computing interval/range
  const casesValues = Object.values(casesCount);
  const maxCasesCount = Math.max(...casesValues);
  const minCasesCount = Math.min(...casesValues);

  // get interval and range of cases based on min and max cases
  const interval = Math.floor((maxCasesCount - minCasesCount) / 5);
  const ranges = getRanges(minCasesCount, interval);

  // events for each geojson layer
  const onEachLayer = (muncity, layer) => {
    const muncityName = muncity.properties.ADM3_EN;

    const onLayerClick = () => {
      setMuncity(muncityName);
      setLayerSelected(muncityName);
      layer.bringToFront();
    };

    const muncityCases = casesCount[muncityName.toUpperCase()];
    const rangeCases = ranges.filter(
      r => r.min <= muncityCases && r.max >= muncityCases
    )[0];
    layer.options.fillOpacity =
      muncityCases === 0 || muncityCases === undefined ? 0 : rangeCases.opacity;
    layer.on({
      click: onLayerClick
    });
  };

  const setCasesData = useCallback(
    (numberOfCases, previousCases, ageGroupCases) => {
      // set muncityCasesCount
      if (numberOfCases) {
        setMuncityCasesCount(numberOfCases);
      } else {
        setMuncityCasesCount(0);
      }
      // set prevYearCase
      if (previousCases) {
        setPrevYearCase(previousCases);
      } else {
        setPrevYearCase(0);
      }
      // set ageGroupCases
      if (ageGroupCases) {
        setAgeChildrenCases(ageGroupCases.children);
        setAgeYouthCases(ageGroupCases.youth);
        setAgeAdultsCases(ageGroupCases.adults);
        setAgeSeniorsCases(ageGroupCases.seniors);
      } else {
        setAgeChildrenCases(0);
        setAgeYouthCases(0);
        setAgeAdultsCases(0);
        setAgeSeniorsCases(0);
      }
    },
    [
      setMuncityCasesCount,
      setPrevYearCase,
      setAgeChildrenCases,
      setAgeYouthCases,
      setAgeAdultsCases,
      setAgeSeniorsCases
    ]
  );

  useEffect(() => {
    const numberOfCases = casesCount[muncity.toUpperCase()];
    const previousCases = casesPrevious[muncity.toUpperCase()];
    const ageGroupCases = casesAgeGroup[muncity.toUpperCase()];
    setCasesData(numberOfCases, previousCases, ageGroupCases);
  }, [casesCount, casesPrevious, casesAgeGroup, muncity, setCasesData]);

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
        {/* <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=4uThU4o90RRvKR2XeMf9"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          opacity={0.7}
        /> */}
        {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        {parseInt(year) !== 2022 ? (
          dataGeoJson.features.map(geoJson => {
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
          })
        ) : (
          <ClusteredMarkers />
        )}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </>
  );
};

export default Map;
