import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';

const MapWithMenu = ({ geojsonData }) => {

  const [selectedRegion, setSelectedRegion] = useState(null);
  const googleMapsApiKey = 'AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';
  const mapRef = useRef(null);
  const [polygons, setPolygons] = useState([]);
  const [mapzoom, setmapzoom] = useState(11);
  const [cordinatCenter, setCordinatCenter] = useState({ lat: 34.0522, lng: -118.2437 });

  const handleRegionClick = (regionName, coordinates , regionRadius) => {
 
    const newCircle = {
      id: regionName,
      center: coordinates,
      radius: regionRadius,
      options: {
        fillOpacity: 0.4,
        fillColor: '#3bb8cf',
        strokeColor: '#00525D',
        strokeOpacity: 0.5,
        strokeWeight: 2,
      },
    };
    setPolygons([newCircle]);
    setCordinatCenter(coordinates);
    setSelectedRegion(regionName);

    setTimeout(() => {
      if(window.innerWidth < 570){
        setmapzoom(10+0.001);
      }else{
        setmapzoom(mapzoom+0.001);
      }
    }, 200);
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
          zoom={mapzoom}
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
                const regionCoordinates = feature.location;
                return (
                  <a
                    key={regionName}
                    href="/#"
                    className={`region_link ${selectedRegion && selectedRegion === regionName ? 'selected' : ''}`}
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
