// アラートを表示させる記述
// let hello = 'Hello World';
// alert(hello);


// みかんとリンゴの条件分岐
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//     alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//     alert('みかんとりんごが同じ値段');
// } else{
//     alert('みかんの値段がリンゴより高い');
// }


// while文で100を超えるまで2を掛け続ける処理文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//     num = num * 2;
//     count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// for文の使い方
// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

// let i;
// let num = 0;

// for(i=1; i<11; i++){
//     num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// 足し算
// alert(3 + 3);
// // 引き算
// alert(2 - 2);
// // 掛け算
// alert(4 * 2);
// // 割り算
// alert(6 / 2);


// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }


// メイン部分
// let alertString;

// 作成した関数を呼び出し、変数へ格納
// alertString = addString("Webcanp")

// 変数の中身をアラートで表示する
// alert(alertString);

// 作成した関数
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }


// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);


// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// グーチョキパー以外を選ぶと文章が表示される
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// じゃんけんの手をランダムに生成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name == "パー";
  }

  return hand_name;
}

// ユーザーの手と  Javascriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr ="勝ち";
    } else if(js == "パー"){
      winLoseStr ="負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

    return winLoseStr;
  }