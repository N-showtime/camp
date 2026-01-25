// // const title = document.querySelector('#title');
// // const button = document.querySelector('#btn');

// // title.textContent = '書き換えました！';
// // title.style.color = "red";

// // button.addEventListener('click', function(){
// //   alert("ボタンが押されました！");
// //   title.textContent = "クリック済み";
// //   title.style.color = "blue";
// // });

// // 入力フォームとの連携
// const nameInput = document.querySelector("#name-input");
// const greetButton = document.querySelector("#greet-btn");
// const greeting = document.querySelector("#greeting");

// greetButton.addEventListener("click", function () {
//   const name = nameInput.value;
//   if (name.trim() === "") {
//     greeting.textContent = "名前を入力してください";
//   } else {
//     greeting.textContent = "こんにちは、" + name + "さん";
//   }
// });

// FizzBuzz演習
const runButton = document.querySelector('#run');
const resultList = document.querySelector('#result');

runButton.addEventListener('click', function() {
    resultList.innerHTML = ""; // クリア

    // ここで1から100までループさせる
    for (let i = 1; i <= 100; i++) {
    // 条件分岐をして各処理を実施する
      if (i % 15 === 0) {
        resultList.innerHTML += "<li>FizzBuzz</li>";
      } else if (i % 5 === 0) {
        resultList.innerHTML += "<li>Buzz</li>";
      } else if (i % 3 === 0) {
        resultList.innerHTML += "<li>Fizz</li>";
      } else {
        resultList.innerHTML += `<li>${i}</li>`;
      }
    }
    
});
