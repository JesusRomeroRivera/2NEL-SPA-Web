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

@media only screen and (max-width: 1024px) {
  .principal {
    padding: 0 70px;
  }
}

@media only screen and (max-width: 768px) {
  .principal {
    padding: 0 60px;
  }
  .principal-title {
    line-height: 5.6rem;
    font-size: 6rem;
  }
}
@media only screen and (max-width: 580px) {
  .principal {
    padding: 0 50px;
    height: 400px;
    align-items: center;
  }
  .principal-title {
    line-height: 4rem;
    font-size: 4.4rem;
    text-align: center;
  }
  .principal-text {
    margin-top: 4.5rem;
    font-size: 1.5rem;
    width: auto;
    text-align: center;
  }
}
</style>
