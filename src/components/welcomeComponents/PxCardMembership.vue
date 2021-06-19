<template>
  <div class="theCard">
    <div class="theTitle flex justify-center items-center rounded-t-3xl p-10">
      <h1 class="text-center">Membresía <br />{{ this.title }}</h1>
    </div>
    <div class="theText bg-white p-6">
      <slot class=""></slot>
    </div>
    <div class="theBotton bg-white flex justify-center items-center p-4">
      <px-button :color="buttonBlack">Obtener {{ this.title }}</px-button>
    </div>
  </div>
</template>

<script>
import PxButton from "@/components/PxButton";

export default {
  props: ["title"],
  components: {
    PxButton,
  },
  data() {
    return {
      buttonBlack: "black",
    };
  },
};
</script>
<style scoped>
h1 {
  color: white;
  font-family: var(--principal-font);
  font-size: 4rem;
}
.theCard {
  display: grid;
  grid-template-rows: 4fr 4fr 2fr;
}
.theText {
  font-family: var(--text-font);
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.theBotton {
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
</style>
