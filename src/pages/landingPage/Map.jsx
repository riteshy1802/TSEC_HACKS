import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";

// Define custom icons
const hotspotIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const siteIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Define the JSON data for hotspots and sites
const locations = {
  hotspots: [
    { id: 1, name: "Hotspot 1", lat: 19.076, lng: 72.8777, siteId: 1 },
    // { id: 2, name: "Hotspot 2", lat: 19.2183, lng: 72.9781, siteId: 2 },
    { id: 3, name: "Hotspot 3", lat: 19.033, lng: 73.0297, siteId: 3 },
    { id: 4, name: "Hotspot 4", lat: 19.1448, lng: 72.8297, siteId: 4 },
    { id: 5, name: "Hotspot 5", lat: 19.1587, lng: 72.9987, siteId: 5 },
  ],
  sites: [
    { id: 1, name: "Site 1", lat: 19.0355, lng: 73.0192 },
    // { id: 2, name: "Site 2", lat: 19.2183, lng: 72.9781 },
    { id: 3, name: "Site 3", lat: 19.2557, lng: 72.9665 },
    { id: 4, name: "Site 4", lat: 19.3919, lng: 72.8397 },
    { id: 5, name: "Site 5", lat: 19.082, lng: 72.882 },
  ],
};

// Custom hook to add search functionality
const Search = () => {
  const map = useMap();
  React.useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: false,
      autoClose: true,
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);
  return null;
};

const Map = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const flyToSite = (siteId) => {
    const site = locations.sites.find((s) => s.id === siteId);
    if (site) {
      const map = L.map("map").setView([site.lat, site.lng], 13);
      map.flyTo([site.lat, site.lng], 13);
    }
  };

  // Generate route lines between hotspots and their corresponding sites
  const routeLines = locations.hotspots.map((hotspot) => {
    const site = locations.sites.find((s) => s.id === hotspot.siteId);
    return {
      id: hotspot.id,
      positions: [
        [hotspot.lat, hotspot.lng],
        [site.lat, site.lng],
      ],
    };
  });

  return (
    <div className="relative w-full h-screen">
      <MapContainer
        center={[19.076, 72.8777]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        id="map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Search />

        {/* Add route lines */}
        {routeLines.map((route) => (
          <Polyline
            key={route.id}
            positions={route.positions}
            color="#667eea"
            weight={2}
            opacity={0.7}
            dashArray="5, 10"
          />
        ))}

        {locations.hotspots.map((hotspot) => (
          <Marker
            key={hotspot.id}
            position={[hotspot.lat, hotspot.lng]}
            icon={hotspotIcon}
            eventHandlers={{
              click: () => {
                setSelectedHotspot(hotspot);
                flyToSite(hotspot.siteId);
              },
            }}
          >
            <Popup>
              {hotspot.name} takes you to{" "}
              {locations.sites.find((site) => site.id === hotspot.siteId).name}
            </Popup>
          </Marker>
        ))}
        {locations.sites.map((site) => (
          <Marker key={site.id} position={[site.lat, site.lng]} icon={siteIcon}>
            <Popup>{site.name}</Popup>
          </Marker>
        ))}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md z-[1000]">
          <div className="text-sm font-semibold mb-2">Legend</div>
          <div className="flex items-center mb-1">
            <img
              src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
              alt="Hotspot"
              className="h-6 mr-2"
            />
            <span>Hotspot</span>
          </div>
          <div className="flex items-center mb-1">
            <img
              src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
              alt="Site"
              className="h-6 mr-2"
            />
            <span>Site</span>
          </div>
          <div className="flex items-center">
            <div
              className="w-6 h-0.5 bg-blue-500 mr-2"
              style={{ borderStyle: "dashed" }}
            ></div>
            <span>Route</span>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default Map;
