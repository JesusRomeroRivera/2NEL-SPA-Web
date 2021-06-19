<template>
  <section>
    <div class="flex flex-col items-start justify-start">
      <h1 class="titleTop">Confirmar Datos</h1>
    </div>
    <div class="formDiv bg-black">
      <div class="topDetails">
        <div class="datosDetails flex flex-col justify-center">
          <h2>Nombre Completo</h2>
          <h5>****** ****** ******* ***</h5>
          <h2>Habilidades</h2>
          <h5>*** - ******* - ** - ****</h5>
        </div>
        <div class="imgDetails">
          <h2 class="text-center">Foto de perfil</h2>
          <img src="" alt="Tu Perfil" />
        </div>
      </div>
      <div class="descriptionDetail mt-4">
        <h2>Descripción</h2>
        <p class="small">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
    </div>
    <div class="buttonContainer flex justify-around items-center">
      <px-button
        class="text-2xl"
        @custom-click="changePageTwo"
        :color="withBorder"
        >Volver</px-button
      >
      <px-button
        class="text-2xl"
        @custom-click="changePageFourth"
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
    };
  },
  components: {
    PxButton,
  },
  methods: {
    changePageTwo() {
      this.$emit("changePageTwo");
    },
    changePageFourth() {
      this.$emit("changePageFourth");
    },
  },
};
</script>
<style scoped>
h5 {
  font-family: var(--principal-font);
  font-size: 1.6rem;
  margin: 1.4rem 0;
}
.small {
  font-family: var(--text-font);
  font-size: 1.3rem;
  max-width: 50vw;
}
h2 {
  font-size: 1.8rem;
  font-family: var(--principal-font);
}
.topDetails {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
img {
  width: 100%;
  height: 90%;
  background-color: #343434;
}
.titleTop {
  font-size: 3.6rem;
  font-family: var(--principal-font);
}
.formDiv {
  padding: 3rem 5rem;
  color: white;
  display: grid;
  grid-auto-rows: 1fr 1fr;
}
section {
  padding: 0 10vw 5vh 10vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  box-sizing: border-box;
}
</style>
