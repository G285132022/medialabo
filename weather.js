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
  console.log('緯度 '+data.coord.lat);
  console.log('経度 '+data.coord.lon);
  console.log('天気 '+data.weather[0].main);
  console.log('最低気温 '+data.main.temp_min);
  console.log('最高気温 '+data.main.temp_max);
  console.log('湿度 '+data.main.humidity);
  console.log('風速 '+data.wind.speed);
  console.log('風向 '+data.wind.deg);

  let cpt = document.querySelector('#button');
  cpt.addEventListener('click', sendRequest);
  
  function sendRequest(){
    let q = document.querySelector('select#u');
    let idx = q.selectedIndex; 

    let us = q.querySelectorAll('option');  
    let app = us.item(idx);     
    
    
      let id = app.getAttribute('id');
      let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
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
    console.log(data.x); 

  
    let tenki1 = document.querySelector("span#p1");
    tenki1.textContent = data.name; 
    let tenki2 = document.querySelector("span#p2");
    tenki2.textContent = data.coord.lon + " °";
    let tenki3 = document.querySelector("span#p3");
    tenki3.textContent = data.coord.lat + " °";
    let tenki4 = document.querySelector("span#p4");
    tenki4.textContent = data.weather[0].description;
    let tenki5 = document.querySelector("span#p5");
    tenki5.textContent = data.main.temp_min + " °C";
    let tenki6 = document.querySelector("span#p6");
    tenki6.textContent = data.main.temp_max + " °C";
    let tenki7 = document.querySelector("span#p7");
    tenki7.textContent = data.main.humidity + " %";
    let tenki8 = document.querySelector("span#p8");
    tenki8.textContent = data.wind.speed + " m/s";
    let tenki9 = document.querySelector("span#p9");
    tenki9.textContent = data.wind.deg + " kt";
  }
  
  function showError(err) {
    console.log("errが発生しました");
  }
  
  function finish() {
    console.log("Ajax 通信が終わりました");
  }
