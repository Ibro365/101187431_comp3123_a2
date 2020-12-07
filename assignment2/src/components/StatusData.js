import React from 'react'

export const StatusData = ({ status }) => {
  let statusMessage = '';

  switch (status) {
    default:
      statusMessage = 'init';
      break;
    case 'fetching':
      statusMessage = 'fetching weather data';
      break;
    case 'unable':
      statusMessage = 'unable to retrieve weather data';
      break;
    
  }

  return (
    <h3 className='status-message'>{statusMessage}</h3>
  );
}