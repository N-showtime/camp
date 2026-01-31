// Vueオブジェクトから必要な機能を取り出す（分割代入）

const { createApp, ref } = Vue;

// createApp: Vueアプリケーションを作成する関数
createApp( {
  // setup: コンポーネントのロジックを書く関数
  setup() {
    // ref: リアクティブな変数を作る関数
    // 値が変わると、自動的に画面が更新される

    const message = ref('Hello Vue!');
    const message2 = ref('追加メッセージです');
    const count = ref(0);

    // return: HTMLで使う変数を使える
    // ここで返した変数だけがHTMLの{{ }}で使える

    return {
      message,
      message2,
      count
    };
  }
}).mount('#app');
