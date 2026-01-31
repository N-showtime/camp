const { createApp, ref } = Vue;

createApp({
  setup() {
    const imageUrl = ref("https://placehold.co/100");
    const linkURL = ref("https://google.com");
    const isActive = ref("true");

    return {
      imageUrl,
      linkURL,
      isActive,
    };
  },
}).mount("#app");
