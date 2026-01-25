// 関数を定義
function greet(name) {
  return "こんにちは" + name + "さん";
}

// 関数の実行
const message = greet("N");
console.log(message);

// 別の人でも使える
console.log(greet("yamada"));


// 複数の引数を受け取る
function introduce(name, age) {
  return name+ "さんは" + age +"歳です";

}

console.log(introduce("yamada", 25));

