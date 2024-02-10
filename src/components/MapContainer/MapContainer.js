import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { Scrollbar } from 'react-scrollbars-custom';
// import { Link } from 'react-router-dom';


const MapContainer = ({ array }) => {

  const googleMapsApiKey = 'AIzaSyB1gaI096ADqTOstjRjOWt2Xx21zH29v5Y';


  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});
  const defaultCenter = {
    lat: 34.055462,
    lng: -118.258283
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }


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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const { isLoaded } = useJsApiLoader({ googleMapsApiKey });
  if (!isLoaded) {

    return null;
  }

  return (
    <div className='map_container'>
      <div className="map_container">
        <GoogleMap
          // key={array.Id}
          id='example-map'
          // mapContainerStyle={mapStyles()}
          draggable={true}
          options={mapOptions}
          zoom={15}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
          {
            array ?
              array.map(item => {
                return (
                  <Marker
                    key={item.Id}
                    position={item.location}
                    onClick={() => onSelect(item)}
                  />
                )
              }) : null
          }
          {
            selected.location ?
              (
                <InfoWindow
                  position={selected.location}
                  onCloseClick={() => setSelected({})}
                >
                  <div className="infowindow restaurant_block">
                    {/* <img src={selected.Image} className="small-image" alt="rental" />
                    <Link 
                    to="/"  
                    className='rest_name'
                  >
                    {selected.Name}
                  </Link> */}
                    <div className='rest_rate'>
                      {(() => {
                        const result = [];
                        for (let index = 0; index < selected.Rate; index++) {
                          result.push(<span key={index} className='icon-star'></span>);
                        }
                        return result;
                      })()}
                    </div>
                    <p className='rest_description'>Address: {selected.Country}</p>
                  </div>
                </InfoWindow>
              ) : null
          }
        </GoogleMap>
      </div>
      <div className="regions_cntainer">
        <div className="regions_list">
          <Scrollbar style={{ width: 180, height: 250 }}>
            <div className="region_block">
              <a href="/#" className="region_link">Oxnard</a>
              <a href="/#" className="region_link">Port Hueneme</a>
              <a href="/#" className="region_link">Ventura</a>
              <a href="/#" className="region_link">Camarillo</a>
              <a href="/#" className="region_link">Moorpark</a>
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
  )
}

export default MapContainer;

