const { createApp, ref } = Vue;

createApp({
  setup() {
    const count = ref(0);
    const reset = () => {
      count.value = 0;
    };

    return {
      count,
      reset,
    };
  },
}).mount("#app");
