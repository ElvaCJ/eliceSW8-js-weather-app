const cityForm = document.querySelector("form")
const details = document.querySelector('.details')
const card = document.querySelector('.card')

const updateCity = async (city_input) => {
    const cityInfo = await getCity(city_input);
    if (!cityInfo) {
        throw new Error('No city found');
    }
    const cityWeather = await getWeather(cityInfo.Key);

    return {
        info: cityInfo,
        weather: cityWeather,
    };
}

const updateUI = (data) => {
    const cityInfo = data.info;
    const weather = data.weather;

    if (weather.IsDayTime) {
        details.innerHTML = `
            <img class="card-img-top" src="./img/dayimage.png" alt="">
            <h5 class="my-3">${cityInfo.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `
    } else {
        details.innerHTML = `
            <img class="card-img-top" src="./img/nightimage.png" alt="">
            <h5 class="my-3">${cityInfo.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `
    }

    // card display show-up
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}


cityForm.addEventListener('submit', e => {
    e.preventDefault(); //잊지마! 자동새로고침 방지!!

    const city = cityForm.getElementsByTagName('input')[0].value;

    updateCity(city)
        .then(data => updateUI(data))
})