import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';

const MapWithMenu = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const  googleMapsApiKey='AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';

  const regions = [
    {
      id: 1, name: 'Oxnard', coordinates: [
        { lat: 34.1975, lng: -119.1771 },
        { lat: 34.2054, lng: -119.1806 },
        // Добавьте остальные координаты для Oxnard
      ]
    },
    {
      id: 2, name: 'Port Hueneme', coordinates: [
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


  const { isLoaded } = useJsApiLoader({ googleMapsApiKey });
  if (!isLoaded) {

    return null;
  }

  return (
    <div className='map_container'>
      <div className="map_container">
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
      </div>
      <div className="regions_cntainer">
        <div className="regions_list">
          <Scrollbar style={{ width: 'auto', height: 'auto' }}>
            <div className="region_block">
              <a href="/#" className="region_link">Oxnard</a>
              <a href="/#" className="region_link ">Port Hueneme</a>
              <a href="/#" className="region_link">Ventura</a>
              <a href="/#" className="region_link">Camarillo</a>
              <a href="/#" className="region_link selected">Moorpark</a>
              <a href="/#" className="region_link">Thousand Oaks</a>
              <a href="/#" className="region_link">Westlake Village</a>
              <a href="/#" className="region_link">Newbury Park</a>
              <a href="/#" className="region_link">Simi Valley</a>
              <a href="/#" className="region_link">Santa Paula</a>
              <a href="/#" className="region_link">Malibu </a>
              <a href="/#" className="region_link">Calabasas</a>
              <a href="/#" className="region_link">Agoura Hills </a>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default MapWithMenu;
