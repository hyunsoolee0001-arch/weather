const API_KEY = `4b5733eba1d43b626e11264543452044`;

async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById(`result`).innerHTML = `
        <p>온도: ${data.main.temp}</p>
        <p>날씨: ${data.weather[0].description}</p>
        <p>습도: ${data.main.humidity}</p>
        <p>풍속: ${data.wind.speed}</p>
        `;
    }
    catch(error) {
        document.getElementById(`result`).innerHTML = `<p>오류 발생</p>`;
    }

    document.getElementById('result').style.fontWeight = 'bold'; // 굵게


}

