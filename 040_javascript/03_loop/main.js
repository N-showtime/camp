for (let i = 1; i <= 5; i++) {
  console.log(`${i} 回目のこんにちは！`)
  
}

let total = 0;
for (let i = 0; i <= 100; i++) {
  total = total + i;
  
}

console.log(`1から100までの合計は：${total}`);


// 変数のスコープの確認
for (let i = 0; i < 3; i++) {
    console.log("ループ内のi:", i);
}
// console.log(i); // Error! iはfor文の外では使えない

// 外で宣言した変数は使える
let count = 0;
for (let i = 0; i < 5; i++) {
    count = count + 1;
}
console.log("count:", count); // 5
