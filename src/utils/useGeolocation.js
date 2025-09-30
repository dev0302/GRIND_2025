import React from 'react';
export function useGeolocation(options = { enableHighAccuracy: true, timeout: 15000, maximumAge: 600000 }) {
  const [coords, setCoords] = React.useState(null);
  const [status, setStatus] = React.useState('idle'); // idle | requesting | granted | denied | unsupported | error
  const [error, setError] = React.useState(null);

  const request = React.useCallback(() => {
    if (!('geolocation' in navigator)) {
      setStatus('unsupported');
      setError(new Error('Geolocation not supported'));
      return;
    }

    setStatus('requesting');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
        setStatus('granted');
        setError(null);
      },
      (err) => {
        // Permission denied, timeout, or other errors
        setStatus(err.code === 1 ? 'denied' : 'error');
        setError(err);
      },
      options
    );
  }, [options]);

  return { coords, status, error, request };
}


