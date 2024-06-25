import React, { useState } from 'react';
import axios from 'axios';

const UserLocation = () => {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getAddress(lat, lon);
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An unknown error occurred.");
    }
  };

  const getAddress = async (lat, lon) => {
    try {
      const apiKey = "AIzaSyC3-aUClZ77OdxlBcgPT9RjnbCG-IhsBpc";  // Replace with your API key
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`);
      console.log(response)
      if (response.data.status) {
        
        const address = response.data.results[0].formatted_address;
        setAddress(address);
      } else {
        setError('Error fetching the address: ' + response.data.status);
      }
    } catch (error) {
      setError('Error fetching the address: ' + error.message);
      console.error("Error details:", error);
    }
  };

  return (
    <div>
      <button onClick={getUserLocation}>Get Address</button>
      {address && <p>Address: {address}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UserLocation;
