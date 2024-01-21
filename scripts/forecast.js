const API_KEY = config.apikey

// async - await 세트
// 비동기를 동기화 시키기 위한 문법
const getCity = async (city_input) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${API_KEY}&q=${city_input}`
    
    const response = await fetch(base+query); // response는 문자열 데이터
    const data = await response.json() // .json()은 문자열 데이터를 객체화 시키기 위해 필요한 규격
    
    // console.log(data[0])
    return data[0]; //도시 기본정보 데이터객체 반환
}

const getWeather = async (city_Key) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${city_Key}?apikey=${API_KEY}`

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0]; //도시 날씨정보 데이터객체 반환
}