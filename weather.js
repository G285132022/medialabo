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

console.log(data.name);
for(let co of "name"){
  console.log(co.name);
}

//let b = document.querySelector('button#btn');
//b.addEventListener('click',showSelectResult);

function showSelectResult() {
  let a = document.querySelector('select#t');
  let idx = a.selectedIndex; 
  
  let as = a.querySelectorAll('option');  
  let q = as.item(idx);      
  
  span=0;
    if(span>1){
      let w = document.querySelector('span#pt');			
      w.remove();
      span=span+1;
      let span=document.querySelector("span#pt");
      let p=document.createElement("p");
      let img=document.createElement("img");
      img.setAttribute=("src");
      img.src="photojs/"+v+".jpeg";
      p.insertAdjacentElement("beforeend", img);
      span.insertAdjacentElement("beforeend", p);
      console.log(img)
    }	else{
      //span=span+1;
      let span=document.querySelector("span#pt");
      let p=document.createElement("p");
      let img=document.createElement("img");
      img.setAttribute=("src");
      img.src="photojs/"+v+".jpeg";
      p.insertAdjacentElement("beforeend", img);
      span.insertAdjacentElement("beforeend", p);
      console.log(img)
    }
    /*let span=document.querySelector("span#pt");
    let p=document.createElement("p");
    let img=document.createElement("img");
    img.setAttribute=("src");
    img.src="photojs/"+v+".jpeg";
    p.insertAdjacentElement("beforeend", img);
    span.insertAdjacentElement("beforeend", p);
    span=span+1;
    console.log(img)*/

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




  console.log(data.name);
  console.log(data.weather[0].description);
  console.log(data.coord.lon);
  console.log(data.coord.lat);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.wind.speed);
  console.log(data.wind.deg);



  // データをコンソールに出力
  let q1=document.querySelector("span#s1");
  q1.textContent=data.name;
  let q2=document.querySelector("span#s2");
  q2.textContent=data.weather[0].description;
  let q3=document.querySelector("span#s3");
  q3.textContent=data.coord.lon;
  let q4=document.querySelector("span#s4");
  q4.textContent=data.coord.lat;
  let q5=document.querySelector("span#s5");
  q5.textContent=data.main.temp_min;
  let q6=document.querySelector("span#s6");
  q6.textContent=data.main.temp_max;
  let q7=document.querySelector("span#s7");
  q7.textContent=data.main.humidity;
  let q8=document.querySelector("span#s8");
  q8.textContent=data.wind.speed;
  let q9=document.querySelector("span#s9");
  q9.textContent=data.wind.deg;

}


function showError(err) {
  console.log(err);
}


function finish() {
  console.log('通信が終わりました');
}