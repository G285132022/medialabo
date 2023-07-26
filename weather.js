let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう


  console.log('都市名 '+data.name);
  console.log('緯度 '+data.coord.lat + " °");
  console.log('経度 '+data.coord.lon + " °");
  console.log('天気 '+data.weather[0].main);
  console.log('最低気温 '+data.main.temp_min + " °C");
  console.log('最高気温 '+data.main.temp_max + " °C");
  console.log('湿度 '+data.main.humidity + " %");
  console.log('風速 '+data.wind.speed + " m/s");
  console.log('風向 '+data.wind.deg + " kt");

  let cpt = document.querySelector('#button');
  cpt.addEventListener('click', sendRequest);
  
  function sendRequest(){
    let q = document.querySelector('select#u');
    let idx = q.selectedIndex; 

    let us = q.querySelectorAll('option');  
    let app = us.item(idx);     
    
    
      let id = app.getAttribute("id");
      let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id +'.json';
      console.log(url);
    
  
    axios.get(url)
          .then(showResult)   
          .catch(showError)   
          .then(finish);      
  }
  
  function showResult(resp) {
    let data = resp.data;
  
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    console.log(data);
    console.log(data.x); //ここまでOK

    //ここから下の部分が問題の箇所
  
    let p1 =document.querySelector('caption.city');
    p1.textContent = data.name;
    let p2 =document.querySelector('td#lat');
    p2.textContent = data.coord.lat;
    let p3 = document.querySelector('td#lon');
    p3.textContent = data.coord.lon;
    let p4 = document.querySelector('td#weather');
    p4.textContent = data.weather[0].description;
    let p5 = document.querySelector('td#temp_min');
    p5.textContent = data.main.temp_min;
    let p6 = document.querySelector('td#temp_max');
    p6.textContent = data.main.temp_max;
    let p7 = document.querySelector('td#humidity');
    p7.textContent = data.main.humidity;
    let p8 = document.querySelector('td#speed');
    p8.textContent = data.wind.speed;
    let p9 = document.querySelector('td#deg');
    p9.textContent = data.wind.deg;
  }
  
  function showError(err) {
    console.log("errが発生しました");
  }
  
  function finish() {
    console.log("Ajax 通信が終わりました");
  }

  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);
  console.log(data.wind.deg);
  console.log(data.wind.speed);