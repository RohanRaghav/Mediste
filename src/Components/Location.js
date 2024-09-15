import React, { useEffect, useRef } from 'react';

const Location = () => {
  const mapRef = useRef(null);
  const map = useRef(null); // Define map as a ref

  useEffect(() => {
    // Function to load the Google Maps script
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Function to initialize the map and places service
    const initMap = () => {
      const infowindow = new window.google.maps.InfoWindow();

      // Initialize the map with a default center
      map.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.867, lng: 151.195 }, // Default to Sydney
        zoom: 15,
      });

      // Function to create a marker on the map
      const createMarker = (place, map, infowindow) => {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new window.google.maps.Marker({
          map,
          position: place.geometry.location,
        });

        marker.addListener('click', () => {
          infowindow.setContent(place.name || "");
          infowindow.open(map);
        });
      };

      // Function to handle location errors
      const handleLocationError = (browserHasGeolocation, infowindow, pos) => {
        infowindow.setPosition(pos);
        infowindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infowindow.open(map.current);
      };

      // Try to get the user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // Update map center to the current location
            map.current.setCenter(currentLocation);

            // Add a marker for the current location
            const userMarker = new window.google.maps.Marker({
              position: currentLocation,
              map: map.current,
              title: "You are here",
            });

            // Optionally open an info window on the marker
            userMarker.addListener("click", () => {
              infowindow.setContent("You are here");
              infowindow.open(map.current, userMarker);
            });

            // Search for medical-related places around the user's location
            const request = {
              location: currentLocation,
              radius: '5000', // 5 km radius
              type: ['hospital', 'clinic', 'pharmacy'], // Medical-related place types
            };

            const service = new window.google.maps.places.PlacesService(map.current);
            service.nearbySearch(request, (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
                for (let i = 0; i < results.length; i++) {
                  createMarker(results[i], map.current, infowindow);
                }
                if (results[0]) {
                  map.current.setCenter(results[0].geometry.location);
                }
              }
            });
          },
          () => {
            handleLocationError(true, infowindow, map.current.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infowindow, map.current.getCenter());
      }
    };

    // Load the Google Maps script and initialize the map
    if (!window.google) {
      loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyyNcPKTD_pks-drgUJAgp8aGBrCuUcfg&libraries=places&callback=initMap`);
      window.initMap = initMap;
    } else {
      initMap();
    }
  }, []);

  return (
    <div style={{paddingLeft:'20px',paddingTop:'20px'}}>
      <div ref={mapRef} style={{ height: '200px', width: '40%',borderRadius:'20px' }}></div>
    </div>
  );
};

export default Location;
