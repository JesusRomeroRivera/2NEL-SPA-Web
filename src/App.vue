<template>
  <main>
    <px-header></px-header>
    <router-view class="w-screen flex justify-center"></router-view>

    <px-footer></px-footer>
  </main>
</template>

<script>
import PxHeader from "@/components/welcomeComponents/PxHeader";
import PxFooter from "@/components/welcomeComponents/PxFooter";

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter,
  },
};
</script>

<style>
:root {
  --principal-font: "DM Serif Display", serif;
  --title-font: "Krona One", sans-serif;
  --text-font: "Noto Serif TC", serif;
  --off-white: #ffffff;
  --soft-gray: #d1d1cf;
  --strong-gray: #7f7f7f;
  --off-black: #000000;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  font-family: var(--principal-font);
  overflow-x: hidden;
}
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
