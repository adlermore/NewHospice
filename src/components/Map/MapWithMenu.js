import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';

const MapWithMenu = ({ geojsonData }) => {

  const [selectedRegion, setSelectedRegion] = useState(null);
  const googleMapsApiKey = 'AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';
  const mapRef = useRef(null);
  const [polygons, setPolygons] = useState([]);
  const [cordinatCenter, setCordinatCenter] = useState({ lat: 34.0522, lng: -118.2437 });
  const [locationZoom , setlocationZoom] = useState(13);

  const handleRegionClick = (regionName, coordinates , regionRadius) => {
    const newCircle = {
      id: regionName,
      center: coordinates,
      radius: regionRadius,
      options: {
        fillOpacity: 0.7,
        fillColor: '#3bb8cf',
        strokeColor: '#00525D',
        strokeOpacity: 0.7,
        strokeWeight: 2,
      },
    };
    setPolygons([newCircle]);
    setCordinatCenter(coordinates);
    console.log(coordinates);
    // Set the map zoom and center based on the clicked circle
    // const bounds = new window.google.maps.LatLngBounds(coordinates);
    // coordinates.forEach(({ lat, lng }) =>
    //   bounds.extend(new window.google.maps.LatLng(lat, lng))
    // );
    // mapRef.current.fitBounds(bounds);
    setTimeout(() => {
      setlocationZoom(regionRadius/2000);
    }, 100);
    // setlocationZoom(regionRadius/1000);
    // mapRef.current.setZoom(regionRadius/500); 
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

  const mapOptions = {
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  };


  if (!isLoaded || !geojsonData) {
    return null;
  }

console.log(geojsonData);
  return (
    <div className="map_container">
      <div className="map_container">
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={locationZoom}
          options={mapOptions}
          center={cordinatCenter}
          onClick={handleMapClick}
          ref={mapRef}
        >
          {polygons.map((circle) => (
            <Circle
              key={circle.id}
              center={circle.center}
              radius={circle.radius}
              options={circle.options}
              onClick={() => handleRegionClick(circle.id, [circle.center])}
            />
          ))}
        </GoogleMap>
      </div>
      <div className="regions_cntainer">
        <div className="regions_list">
          <Scrollbar style={{ width: 'auto', height: 'auto' }}>
            <div className="region_block">
              {geojsonData.locationCircle.map((feature) => {
                const regionName = feature.regionName;
                const regionRadius = feature.radius;
                // const regionCoordinates = feature.coordinates[0][0].map(([lng, lat]) => ({ lat, lng }));
                const regionCoordinates = feature.location;
                return (
                  <a
                    key={regionName}
                    href="/#"
                    className={`region_link ${selectedRegion && selectedRegion.id === regionName ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRegionClick(regionName, regionCoordinates, regionRadius );
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
