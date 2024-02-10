import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';

const MapWithMenu = ({ geojsonData }) => {

    const [selectedRegion, setSelectedRegion] = useState(null);
    const googleMapsApiKey = 'AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';
    const mapRef = useRef(null);
    const [polygons, setPolygons] = useState([]);

    const handleRegionClick = (regionName, coordinates) => {
        // Create a new polygon object
        const newPolygon = {
          id: regionName,
          coordinates: coordinates,
          options: {
            fillOpacity: 0.4,
            strokeColor: '#000000',
            strokeOpacity: 1,
            strokeWeight: 1,
          },
        };

        // Update the state with the new polygon, removing all existing polygons
        setPolygons([newPolygon]);
    
        // Fit the bounds to the new polygon
        fitBoundsToPolygons([newPolygon]);
      };
    
    
      const fitBoundsToPolygons = (polygonsArray) => {
        if (mapRef.current && polygonsArray.length > 0) {
          const bounds = new window.google.maps.LatLngBounds();
          polygonsArray.forEach((polygon) => {
            polygon.coordinates.forEach(({ lat, lng }) => bounds.extend(new window.google.maps.LatLng(lat, lng)));
          });
          mapRef.current.fitBounds(bounds);
        }
      };
    const handleMapClick = () => {
      setSelectedRegion(null);
    };
  
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey });
  
    useEffect(() => {
      if (isLoaded) {
        mapRef.current = new window.google.maps.Map(document.createElement('div'));
      }
    }, [isLoaded]);
  
    useEffect(() => {
      if (isLoaded && mapRef.current && selectedRegion) {
        const bounds = new window.google.maps.LatLngBounds();
        selectedRegion.coordinates.forEach(({ lat, lng }) =>
          bounds.extend(new window.google.maps.LatLng(lat, lng))
        );
        mapRef.current.fitBounds(bounds);
      }
    }, [isLoaded, selectedRegion]);
  
    if (!isLoaded || !geojsonData) {
      return null;
    }


  return (
    <div className="map_container">
      <div className="map_container">
      <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={12}
          center={{ lat: 34.0522, lng: -118.2437 }}
          onClick={handleMapClick}
        >
          {/* Render existing polygons */}
          {polygons.map((polygon) => (
            <Polygon
              key={polygon.id}
              path={polygon.coordinates}
              options={polygon.options}
              onClick={() => handleRegionClick(polygon.id, polygon.coordinates)}
            />
          ))}

        </GoogleMap>
      </div>
      <div className="regions_cntainer">
      <div className="regions_list">
        <Scrollbar style={{ width: 'auto', height: 'auto' }}>
          <div className="region_block">
            {geojsonData.features.map((feature) => {
              const regionName = feature.properties.name;
              const regionCoordinates = feature.geometry.coordinates[0][0].map(([lng, lat]) => ({ lat, lng }));

              return (
                <a
                  key={regionName}
                  href="/#"
                  className={`region_link ${selectedRegion && selectedRegion.id === regionName ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegionClick(regionName, regionCoordinates);
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
