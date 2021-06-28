<template>
  <div class="w-screen mx-0 px-0">
    <section class="w-screen grid">
      <img src="../assets/loginImage.png" alt="" />
      <article
        class="login--container p-40 pb-20 flex flex-col justify-between"
      >
        <h1>Regístrate</h1>
        <p>
          ¿Ya tienes una cuenta?
          <router-link class="hover:underline" :to="{ name: 'login' }"
            >Iniciar Sesión</router-link
          >
        </p>
        <form class="my-6">
          <label for="email">E-mail</label>
          <input id="emailForm" type="text" name="email" />
          <label for="password">Contraseña</label>
          <input id="passwordForm" type="password" name="password" />
          <div class="containerCheckbox">
            <input class="theCheckbox" type="checkbox" name="Terms" />
            <label for="Terms">Acepto los términos y condiciones</label>
          </div>
          <router-link
            class="goPrincipalButton mr-10 mt-2"
            :to="{ name: 'registerDetails', params: { step: 'stepRol' } }"
          >
            <px-button
              @custom-click="nextPage"
              class="text-2xl"
              :color="buttonColor"
              type="button"
              >Siguiente --></px-button
            >
          </router-link>
          <p v-if="noData" class="text-right mr-12 text-red-600 m-0">
            Por favor ingrese todos los datos
          </p>
        </form>
        <div class="container--alarms">
          <p>Regístrate con un social media</p>
          <div class="mt-8 flex justify-around">
            <px-button class="text-xl px-6 py-2" :color="buttonColor"
              ><img
                class="facebookLogoBlanco"
                src="@/assets/FbBlanco.jpg"
                alt="LogoFb"
              />Facebook</px-button
            >
            <px-button class="text-xl px-8 py-2" :color="buttonColor"
              ><img
                class="googleLogoBlanco"
                src="@/assets/googleBlanco.png"
                alt="LogoFb"
              />Google</px-button
            >
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  data() {
    return {
      buttonColor: "black",
      noData: false,
    };
  },
  components: {
    PxButton,
  },
  methods: {
    nextPage() {
      this.numberPage += 1;
    },
  },
};
</script>
<style scoped>
.facebookLogoBlanco,
.googleLogoBlanco {
  width: 2rem;
  height: 2rem;
  display: inline;
  margin-right: 0.4rem;
}
.container--alarms {
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.goPrincipalButton {
  justify-self: flex-end;
}
.containerCheckbox {
  width: 100%;
  display: flex;
  justify-self: flex-start;
  align-items: center;
}
p {
  font-family: var(--principal-font);
  font-size: 1.4rem;
  font-weight: 400;
}
section {
  width: 100%;
  box-sizing: border-box;
  height: 83.5vh;
  grid-template-columns: 1fr 1fr;
}
img {
  width: 100%;
  height: 83.5vh;
}
form {
  height: 24rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
}
h1 {
  font-size: 4rem;
  font-family: var(--principal-font);
}
label {
  font-size: 1.6rem;
  font-family: var(--principal-font);
}
input {
  font-size: 1.6rem;
  border-bottom: 1px solid gray;
  width: 90%;
  outline: none;
  margin: 0rem 0 2rem 0;
}
.theCheckbox {
  width: auto;
  margin: 0;
  margin-right: 1rem;
}
@media only screen and (max-width: 1024px) {
  .login--container {
    padding: 7rem 5rem !important;
  }
}
@media only screen and (max-width: 768px) {
  section {
    width: 100%;
    box-sizing: border-box;
    height: 83.5vh;
    grid-template-columns: 1fr;
  }
  img {
    display: none;
  }
}
</style>
