import axios from 'axios';

const API_KEY = "bbb90688ba91fd10e00e891a55d7d341";
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}