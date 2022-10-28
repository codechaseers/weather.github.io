const api_key = '1210254713360736499061f17ac801b0';
const search = document.getElementById('search');
const serch_btn = document.getElementById('serch_btn');
const weather = document.getElementById('weather')
const now = new Date()
  .toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  .toLowerCase();
 const date= new Date()
 let year=date.getFullYear()
 let month=date.getMonth()
 let day=date.getDate()
 


async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    data = await data.json()
    console.log(data);
    return showWeather(data)
}

function showWeather(data) {
    if(data.cod!= 200){
        weather.innerHTML=  `  <div>
        <h5>Ooops...😑 City not found </h5> 
         
     </div>
     `
    return
    }
    weather.innerHTML=`
     
        <div>
            <h5>${data.name}</h5>
        </div>
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>

        <div>
            <h3>${data.main.temp} ℃</h3>
            <h5> ${data.weather[0].main}</h5>
            <h6> ${day+"/"+month+"/"+year}</h6>
            <h6> ${now}</h6>
        </div>
         `
}
console.log("ok");
serch_btn.addEventListener("click", function (e) {
    getWeather(search.value)
})

// https://api.openweathermap.org/data/2.5/weather?q=${user_city}&appid=1210254713360736499061f17ac801b0