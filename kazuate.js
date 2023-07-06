// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let c = document.querySelector('button#hantei');
c.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="number"]');
  let number = i.value;
  console.log(number);
  
  // 課題3-1: 正解判定する
  kaisu=kaisu+1;
  let k1=document.querySelector("span#kaisu");
  k1.textContent=kaisu;

  let yoso = number;
  let a1=document.querySelector("span#answer");
  a1.textContent=yoso;

  let u=document.querySelector("p#result");
  
  if(kaisu<4){
    if(yoso<kotae){
      u.textContent="まちがい．答えはもっと大きいですよ";
    } else if(kotae<yoso){
      u.textContent="まちがい．答えはもっと小さいですよ";
    } 
    
    if((kaisu-1)&&yoso===kotae){
      u.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
    }else if(yoso==kotae){
      u.textContent="正解です.おめでとう！";
    }}

    if(kaisu===4){
      if((kaisu-1)&&yoso===kotae){
        u.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
      }else if(yoso==kotae){
        u.textContent="正解です.おめでとう！";
      }else{
        u.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
      }

    if(kaisu>=5){
      u.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
    }
  }
  
  // kotae と yoso が一致するかどうか調べて結果を出力

  // 課題3-1における出力先はコンソール
}
