<template>
  <main>
    <px-header ></px-header>
    <router-view class="container px-5 flex justify-center"></router-view>

    <px-footer ></px-footer>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: {
    PxHeader,
    PxFooter
  },
};
</script>

<style>
#app {
  font-family: 'DM Serif Display', serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
