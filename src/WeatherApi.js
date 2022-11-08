import React from 'react';

function WeatherApi(apiCall) {
    return new Promise((resolve, reject) => {
      fetch(apiCall)
        .then(res => resolve(res.json()))
        .catch(res => reject(res));
    });
  }

  export default WeatherApi;
