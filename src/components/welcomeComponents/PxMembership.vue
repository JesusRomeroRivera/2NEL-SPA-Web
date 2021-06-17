<template>
  <section
    class="w-screen flex justify-between"
    :class="direction == 'right' ? 'right' : ''"
  >
    <div
      class="theImg"
      :class="numberImg == 1 ? 'first' : numberImg == 2 ? 'second' : 'third'"
    ></div>
    <div
      class="px-20 container--detail flex flex-col items-center justify-center"
    >
      <h1 class="text-center">{{ title }}</h1>
      <p class="mt-8 mb-10 text-justify">{{ text }}</p>
      <router-link :to="{ name: 'signup' }">
        <px-button class="text-2xl" :color="buttonColor"
          >Hazte miembro</px-button
        >
      </router-link>
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  props: ["direction", "title", "numberImg", "text"],
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
.theImg {
  width: 50%;
  height: 100%;
  background-position: center;
}
.first {
  background-image: url("../../assets/membership-1.png");
}
.second {
  background-image: url("../../assets/membership-2.png");
}
.third {
  background-image: url("../../assets/membership-3.png");
}
.right {
  flex-direction: row-reverse;
}
.container--detail {
  width: 50%;
  height: 100%;
}
section {
  height: 450px;
}
h1 {
  font-family: var(--principal-font);
  font-size: 3.6rem;
}
p {
  font-family: var(--text-font);
  font-size: 2rem;
}
</style>
