import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';

const MapWithMenu = ({ geojsonData }) => {
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const googleMapsApiKey = 'AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';
  const mapRef = useRef(null);

  const handleRegionClick = (regionId, coordinates) => {
    setSelectedRegionId(regionId);

    // Если есть картографическая ссылка, позволяющая управлять картой
    if (mapRef.current) {
      const bounds = new window.google.maps.LatLngBounds();

      // Добавляем координаты полигона к границам
      coordinates.forEach(({ lat, lng }) => bounds.extend(new window.google.maps.LatLng(lat, lng)));

      // Зумируем и центрируем карту по границам полигона
      mapRef.current.fitBounds(bounds);
    }
  };

  const handleMapClick = () => {
    setSelectedRegionId(null);
  };

  const { isLoaded } = useJsApiLoader({ googleMapsApiKey });

  useEffect(() => {
    // Убеждаемся, что карты загружены перед тем, как использовать ссылку на карту
    if (isLoaded) {
      // Доступ к экземпляру карты
      mapRef.current = new window.google.maps.Map(document.createElement('div'));
    }
  }, [isLoaded]);

  if (!isLoaded || !geojsonData) {
    return null;
  }

  return (
    <div className="map_container">
      <div className="map_container">
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={8}
          center={{ lat: 34.0522, lng: -118.2437 }}
          onClick={handleMapClick}
        >
          {geojsonData.features.map((feature) => {
            const regionId = feature.properties.id;
            const coordinates = feature.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }));

            return (
              <Polygon
                key={regionId}
                path={coordinates}
                options={{
                  fillColor: selectedRegionId === regionId ? '#FF0000' : '#0000FF',
                  fillOpacity: 0.4,
                  strokeColor: '#000000',
                  strokeOpacity: 1,
                  strokeWeight: 1,
                }}
                onClick={() => handleRegionClick(regionId, coordinates)}
              />
            );
          })}
        </GoogleMap>
      </div>
      <div className="regions_cntainer">
        <div className="regions_list">
          <Scrollbar style={{ width: 'auto', height: 'auto' }}>
            <div className="region_block">
              {geojsonData.features.map((feature) => {
                const regionId = feature.properties.id;
                const regionName = feature.properties.name;
                const regionCoordinates = feature.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }));

                return (
                  <a
                    key={regionId}
                    href="/#"
                    className={`region_link ${selectedRegionId === regionId ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRegionClick(regionId, regionCoordinates);
                    }}
                  >
                    {regionName}
                  </a>
                );
              })}
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default MapWithMenu;
