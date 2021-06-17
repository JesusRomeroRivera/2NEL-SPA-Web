<template>
  <section class="principal flex flex-col justify-center w-screen">
    <h2 class="principal-title">Tu éxito empieza <br />con nosotros</h2>
    <p class="principal-text mt-4 fs-4 py-6">
      Conecta con inversores, freelancers y potencia tu empresa, conecta con
      empresas y busca donde trabajar, conecta con emprendimientos y busca donde
      invertir. Nosotros te ayudaremos a hacerlo
    </p>
    <router-link :to="{ name: 'signup' }"
      ><px-button class="text-2xl" :color="buttonColor">
        Regístrate
      </px-button></router-link
    >
  </section>
</template>

<script>
import PxButton from "@/components/PxButton";

export default {
  name: "PxPrincipal",
  components: {
    PxButton,
  },
  data() {
    return {
      buttonColor: "white",
    };
  },
};
</script>

<style scoped>
.principal {
  height: 600px;
  background-image: url("../../assets/principalBackground.png");
  background-size: 1560px auto;
  background-position: center center;
  padding: 0 100px;
  color: white;
}
.principal-title {
  font-family: "DM Serif Display", serif;
  font-style: italic;
  text-transform: uppercase;
  line-height: 6.6rem;
  font-size: 7rem;
  margin: 0;
}
.principal-text {
  margin-top: 4.5rem;
  font-family: "DM Serif Display", serif;
  font-style: regular;
  font-size: 1.5rem;
  width: 40vw;
}
</style>
