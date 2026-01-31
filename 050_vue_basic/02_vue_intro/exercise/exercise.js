const { createApp, ref } = Vue;
createApp({
    setup() {
        // ここからコードを追記してください
        // 名前を管理する変数を作成（初期値は自分の名前）
        const name = ref('洋野 太郎');
        // 年齢を管理する変数を作成（初期値は自分の年齢）
        const age = ref('40');
        // 趣味を管理する変数を作成（初期値は自分の趣味）
        const hobby = ref('サーフィン');
        // 好きな食べ物を管理する変数を作成（初期値は自分の好きな食べ物）
        const favoriteFood = ref('いちご');
        // 一言メッセージを管理する変数を作成（初期値は自分の一言）
        const message = ref('スパルタキャンプ頑張ります！！');
        // returnで返す変数を指定
        return {
            // ここに必要な変数を追加してください
            name,
            age,
            hobby,
            favoriteFood,
            message
        };
    }
}).mount('#app');
