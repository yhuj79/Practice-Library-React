import OpenWeatherAPI, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '28a43d239b4d9d8ccc465676e8edb0a5',
        lat: '37.517235',
        lon: '127.047325',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    const customStyles = {
        fontFamily: 'Segoe UI',
        gradientStart: '#B2CCFF',
        gradientMid: '#A0BAED',
        gradientEnd: '#8EA8DB',
        locationFontColor: '#223C6F',
        todayTempFontColor: '#223C6F',
        todayDateFontColor: '#223C6F',
        todayRangeFontColor: '#223C6F',
        todayDescFontColor: '#223C6F',
        todayInfoFontColor: '#223C6F',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#FFF',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7',
    };
    return (
        <OpenWeatherAPI
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="SEOUL"
            unitsLabels={{ temperature: '℃', windSpeed: 'Km/h' }}
            showForecast
        />
    );
};
export default Weather;