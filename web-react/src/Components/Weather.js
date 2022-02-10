import OpenWeatherAPI, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '28a43d239b4d9d8ccc465676e8edb0a5',
        lat: '37.517235',
        lon: '127.047325',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <OpenWeatherAPI
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Seoul"
            unitsLabels={{ temperature: '℃', windSpeed: 'Km/h' }}
            showForecast
        />
    );
};
export default Weather;