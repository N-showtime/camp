const fruits = ["Apple", "Banana", "Grape"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(`配列の長さ： ${fruits.length}`);

fruits.forEach((fruit) => {
  console.log(fruit);
});

// 配列をmapで変換（新しい配列を作る）
console.log("--- 配列を変換（map） ---");
const upperFruits = fruits.map((fruit) => {
  return fruit.toUpperCase(); // 大文字に変換
});
console.log("元の配列:", fruits); // ["Apple", "Banana", "Grape"]
console.log("変換後の配列:", upperFruits); // ["APPLE", "BANANA", "GRAPE"]

// オブジェクトの作成
const user = {
  name: "taro",
  age: 25,
  email: "taro@example.com",
};

console.log("名前：", user.name);

// オブジェクトの配列
// const items = [
//     { name: "ペン", price: 100 },
//     { name: "ノート", price: 200 },
//     { name: "消しゴム", price: 50 },
// ];

// 全商品の情報を表示（forEachを使う）
// console.log("--- 商品一覧 ---");
// items.forEach((item) => {
//     console.log(item.name + " は " + item.price + "円");
// });

// 演習
// 商品データ（オブジェクトの配列）

console.log("演習問題");
const items = [
  { name: "ペン", price: 100 },
  { name: "ノート", price: 200 },
  { name: "消しゴム", price: 50 },
];

items.forEach((item) => {
  console.log(item.name, ":", item.price + "円");
});

let total = 0;
items.forEach((item) => {
  total += item.price;
});

console.log(`合計：${total}円`);
