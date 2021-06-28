<template>
  <div class="theCard">
    <div class="theTitle flex justify-center items-center rounded-t-3xl p-10">
      <h1 class="text-center">Membresía <br />{{ this.title }}</h1>
    </div>
    <div class="theText bg-white p-6">
      <slot class=""></slot>
    </div>
    <div class="theBotton bg-white flex justify-center items-center p-4">
      <px-button class="justTheBotton" :color="buttonBlack"
        >Obtener {{ this.getCost }}
      </px-button>
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
  computed: {
    getCost() {
      let cost = 0;
      if (this.title == "Pro") cost = 3;
      if (this.title == "Premium") cost = 5;
      return `${this.title} ${cost}$`;
    },
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
  height: 22rem;
}
.theBotton {
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
}
@media only screen and (max-width: 1024px) {
  .theText {
    height: 24rem;
  }
  h1 {
    font-size: 2.6rem;
  }
  .theTitle {
    padding: 1rem !important;
  }
  .theBotton {
    padding: 1rem 1rem !important;
  }
  .justTheBotton {
    padding: 0.8rem 2.5rem !important;
  }
}
@media only screen and (max-width: 768px) {
  .theText {
    height: auto;
  }
}
</style>
