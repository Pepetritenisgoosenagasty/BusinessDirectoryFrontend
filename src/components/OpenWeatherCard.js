import ReactWeather, { useOpenWeather } from 'react-open-weather';

 const openWeatherMap = () => {
 
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default openWeatherMap
