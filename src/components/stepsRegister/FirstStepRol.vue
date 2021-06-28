<template>
  <section class="">
    <div class="flex flex-col items-center justify-start">
      <h1>¿Qué rol deseas en la aplicación?</h1>
      <p>Esta opción se podrá cambiar más adelante</p>
    </div>
    <div class="images grid">
      <div @click="selectedFirst" class="img bg-gray-100 investor">
        <img v-show="first" src="@/assets/check.png" alt="check" />
        <p class="text-center">Inversor</p>
      </div>
      <div @click="selectedSecond" class="img bg-gray-100 freelancer">
        <img v-show="second" src="@/assets/check.png" alt="check" />
        <p class="text-center">Freelancer</p>
      </div>
      <div @click="selectedThird" class="img bg-gray-100 entrepeneur">
        <img v-show="third" src="@/assets/check.png" alt="check" />
        <p class="text-center">Emprendedor</p>
      </div>
    </div>
    <div class="buttonContainer flex justify-around items-center">
      <router-link :to="{ name: 'signup' }">
        <px-button class="text-2xl" :color="withBorder">Volver</px-button>
      </router-link>
      <px-button
        class="text-2xl"
        @custom-click="changePageTwo"
        :color="bottonBlack"
        >Siguiente</px-button
      >
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      first: false,
      second: false,
      third: false,
    };
  },
  computed: {
    isAnySelected() {
      return this.first || this.second || this.third;
    },
    whatSelected() {
      return this.first
        ? "entrepeneur"
        : this.second
        ? "freelancer"
        : this.third
        ? "investor"
        : "";
    },
  },
  components: {
    PxButton,
  },
  methods: {
    changePageTwo() {
      if (this.isAnySelected) {
        this.$emit("changePageTwo");
        this.$emit("getUser", this.whatSelected);
      }
    },
    selectedFirst() {
      this.first = true;
      this.second = false;
      this.third = false;
    },
    selectedSecond() {
      this.first = false;
      this.second = true;
      this.third = false;
    },
    selectedThird() {
      this.first = false;
      this.second = false;
      this.third = true;
    },
  },
};
</script>
<style scoped>
.investor {
  background-image: url("../../assets/investorIcon.png");
  background-size: 40% auto;
  background-position: center;
  background-repeat: no-repeat;
}
.freelancer {
  background-image: url("../../assets/freelancerIcon.png");
  background-size: 40% auto;
  background-position: center;
  background-repeat: no-repeat;
}
.entrepeneur {
  background-image: url("../../assets/entepreneurIcon.png");
  background-size: 40% auto;
  background-position: center;
  background-repeat: no-repeat;
}
.img {
  height: 30vh;
  border-radius: 2rem;
  border: 3px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.images {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
img {
  width: 2rem;
  height: 2rem;
}
section {
  padding: 5vh 12.5vw 10vh 12.5vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  box-sizing: border-box;
}
h1 {
  font-size: 4rem;
  font-family: var(--principal-font);
  text-align: center;
}
p {
  font-family: var(--text-font);
  font-size: 1.8rem;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  section {
    padding: 2.55vh 7.5vw 7.5vh 7.5vw;
    height: 80vh;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    box-sizing: border-box;
  }
  h1 {
    font-size: 3.6rem;
  }
  p {
    font-size: 1.6rem;
  }
  .images {
    gap: 1.6rem;
  }
}
@media only screen and (max-width: 580px) {
  section {
    padding: 2.55vh 7.5vw 7.5vh 7.5vw;
    height: 140vh;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    box-sizing: border-box;
  }
  h1 {
    font-size: 2.8rem;
  }
  p {
    font-size: 1.5rem;
  }
  .images {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}
</style>
