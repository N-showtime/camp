const { createApp, ref } = Vue;

createApp( {
  setup() {
    const message = ref("");
    const isOpen = ref(false);
  
    return { message, isOpen };
  }



}).mount("#app");
