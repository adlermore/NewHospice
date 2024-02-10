// MapWithMenu.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

const MapWithMenu = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    { id: 1, name: 'Oxnard', coordinates: [
        { lat: 34.1975, lng: -119.1771 },
        { lat: 34.2054, lng: -119.1806 },
        // Добавьте остальные координаты для Oxnard
      ]
    },
    { id: 2, name: 'Port Hueneme', coordinates: [
        { lat: 34.1544, lng: -119.2025 },
        { lat: 34.1568, lng: -119.1958 },
        // Добавьте остальные координаты для Port Hueneme
      ]
    }
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleMapClick = () => {
    setSelectedRegion(null);
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <LoadScript googleMapsApiKey="AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y">
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={8}
          center={{ lat: 34.0522, lng: -118.2437 }} // Координаты центра карты (Los Angeles)
          onClick={handleMapClick}
        >
          {regions.map((region) => (
            <Polygon
              key={region.id}
              path={region.coordinates}
              onClick={() => handleRegionClick(region)}
              options={{
                fillColor: selectedRegion === region ? '#FF0000' : '#0000FF',
                fillOpacity: 0.4,
                strokeColor: '#000000',
                strokeOpacity: 1,
                strokeWeight: 1,
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedRegion && (
        <div>
          <h2>{selectedRegion.name}</h2>
          {/* Здесь можете добавить дополнительную информацию или компоненты для региона */}
        </div>
      )}
    </div>
  );
};

export default MapWithMenu;
