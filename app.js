

// fetch(``)

// .then(res => res.json())
// .then(res => {
//     console.log(res);
// })
// .catch(rej =>{
//     console.log(rej)
// })


let city = (recevie = "karachi" ) => {
  // let karachi="karachi"

 let apiUrl= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${recevie} &appid=5b8c20ec1658c6e3187968c3b9a989bb&units=metric`)
  
 
 .then(res => res.json())
    .then(res => {
      let main = document.getElementById("main")
      console.log(res)
      var nature = res.weather[0].main;
      console.log(nature)
      switch (nature) {
        case "Smoke":
          var whether = `images/smoke.svg`
          break;
        case "Clouds":
          whether = `images/cloud.svg`
          break;
        case "Thunderstorm":
          whether = `images/thunderstorms-night-overcast-rain.svg`
          break;
        case "Clear":
          whether = `images/clear-day.svg`
          break;
        case "Rain":
          whether = `images/rain.svg`
          break;
        case "Dust":
          whether = `images/dust.svg`
          break;
        case "Haze":
          whether = `images/haze.svg`
          break;
        case "Fog":
          whether = `images/fog.svg`
          break;
        default:
          whether = `images/smoke.svg`
          break;
      }
      var date=moment().format('ll');
console.log(moment)      
      main.innerHTML = `
    <div class="input-sec">
    <input type="text"  placeholder="city" id="input"><span><img src="images/954591.png" onclick="search()" alt="" width="44px"></span>
    </div>
      <div class="card-body">
      <h4 class="card-title">${res.name}<h4>
        <h5 class="card-text">${res.sys.country}</h5>
        <p href="#" class="date">${date}</p>
       
      </div>
      <div class="loc-sec">
      <div class="inform-img"><img src="${whether}" alt="" width="100px"></div>
      <div class="sec">
      <p class="temp">${Math.round(res.main.temp)}'C</p>
      <div class="text">${res.weather[0].main}</div>
      </div>
      </div>
      <div class="blocks">
      <div class="humidity">
      <img src="./images/icons8-rain-cloud.gif" alt="">
      <p class="box-title">Humidity</p>
      </div>
      <div class="value">${res.main.humidity}%</div>
      </div>
      <div class="blocks">
      <div class="humidity">
      <img src="./images/wind.svg" alt="" width="50px">
      <p class="box-title">Wind</p>
      </div>
<div class="value">${Math.floor(res.wind.speed * 3.6)}km/h</div>
</div>
<div class="blocks">
<div class="humidity">
<img src="${whether}" alt="" width="50px">
<p class="box-title">${res.weather[0].main}</p>
</div>
<div class="value">${res.clouds.all}%</div>
</div>
`

    })

    .catch(rej => sweetAlert("Sorry...", "City Is Inccorect", "error"));
    
}

city();

let search = () => {
  let input = document.getElementById("input")
  console.log(input.value)
  city(input.value);
}

