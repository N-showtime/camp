const { createApp, ref } = Vue;

createApp({
  setup() {
    const fruits = ref(["Apple", "Banana", "Orange"]);

    return { fruits };
  },
}).mount("#app");
