const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "379f49cb4amshb2ceed08c4b2986p1f34d1jsna45711442ca4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather= (city)=>{
cityName.innerHTML=city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct.innerHTML = response.cloud_pct;
    cloud_pct2.innerHTML = response.cloud_pct;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    max_temp.innerHTML = response.max_temp;
    min_temp.innerHTML = response.min_temp;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    temp.innerHTML = response.temp;
    temp2.innerHTML= response.temp;
    wind_degrees.innerHTML = response.wind_degrees;
    wind_speed.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));
}
const getDelhi= (city)=>{
    //cityName.innerHTML=city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
    
        a.innerHTML = response.cloud_pct;
        b.innerHTML = response.feels_like;
        c.innerHTML = response.humidity;
        d.innerHTML = response.max_temp;
        e.innerHTML = response.min_temp;
        f.innerHTML = response.sunrise;
        g.innerHTML = response.sunset;
        h.innerHTML= response.temp;
        i.innerHTML = response.wind_degrees;
        j.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
    }
    const getMumbai= (city)=>{
        //cityName.innerHTML=city;
        fetch(
          "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
          options
        )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
        
            a1.innerHTML = response.cloud_pct;
            b1.innerHTML = response.feels_like;
            c1.innerHTML = response.humidity;
            d1.innerHTML = response.max_temp;
            e1.innerHTML = response.min_temp;
            f1.innerHTML = response.sunrise;
            g1.innerHTML = response.sunset;
            h1.innerHTML= response.temp;
            i1.innerHTML = response.wind_degrees;
            j1.innerHTML = response.wind_speed;
          })
          .catch((err) => console.error(err));
        }
        const getBanglore= (city)=>{
            //cityName.innerHTML=city;
            fetch(
              "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
              options
            )
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
            
                a2.innerHTML = response.cloud_pct;
                b2.innerHTML = response.feels_like;
                c2.innerHTML = response.humidity;
                d2.innerHTML = response.max_temp;
                e2.innerHTML = response.min_temp;
                f2.innerHTML = response.sunrise;
                g2.innerHTML = response.sunset;
                h2.innerHTML= response.temp;
                i2.innerHTML = response.wind_degrees;
                j2.innerHTML = response.wind_speed;
              })
              .catch((err) => console.error(err));
            }

submit.addEventListener("click", (event) => {
    event.preventDefault();
    getWeather(city.value)
    getDelhi("Delhi")
    getMumbai("Mumbai")
    getBanglore("Bengaluru")
})
