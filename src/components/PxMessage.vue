<template>
  <section
    :class="isAny.imageUrl"
    class="w-screen Message flex flex-col justify-center items-center"
  >
    <p class="texto text-white text-center">
      <slot></slot>
    </p>
    <small
      v-if="isAny.isText"
      class="TextStartup text-3xl text-white font-medium"
      >Comienza tu propia Startup</small
    >
    <router-link :to="{ name: 'signup' }"
      ><px-button
        v-if="isAny.isButton"
        class="Message--text text-3xl"
        :color="buttonColor"
      >
        Regístrate</px-button
      ></router-link
    >
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  props: ["isAny"],
  data() {
    return {
      buttonColor: "black",
    };
  },
  components: {
    PxButton,
  },
};
</script>
<style scoped>
.image1 {
  background: url("../assets/messageBackground.jpg");
}
.image2 {
  background: url("../assets/messageBackground-2.png");
}
.image3 {
  background: url("../assets/messageBackground-3.png");
}
.image4 {
  background: url("../assets/messageBackground-4.png");
}
.image5 {
  background: url("../assets/messageBackground-5.png");
}
.image6 {
  background: url("../assets/messageBackground-6.png");
}
.texto {
  padding: 0 20rem;
}
.TextStartup {
  margin-bottom: -3rem;
  font-family: var(--principal-font);
}
.Message {
  background-size: 1500px auto;
  background-position: center;
  height: 500px;
  font-family: var(--principal-font);
  font-size: 7rem;
}
</style>
