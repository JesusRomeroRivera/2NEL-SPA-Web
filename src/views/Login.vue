<template>
  <div class="w-screen mx-0 px-0">
    <section :class="modalView ? 'blur' : ''" class="w-screen grid">
      <img src="../assets/loginImage.png" alt="" />
      <article
        class="login--container p-40 pb-20 flex flex-col justify-between"
      >
        <h1>Iniciar Sesión</h1>
        <form class="mt-10">
          <label for="email">E-mail</label>
          <input id="emailForm" type="text" name="email" />
          <label for="password">Contraseña</label>
          <input id="passwordForm" type="password" name="password" />
          <router-link
            class="goPrincipalButton mr-10 mt-10"
            :to="{ name: 'principal' }"
          >
            <px-button
              @custom-click="sumbitLogin"
              class="text-2xl"
              :color="buttonColor"
              >Iniciar Sesión</px-button
            >
          </router-link>
          <p v-if="noData" class="text-right mr-12 text-red-600 m-0">
            Por favor ingrese todos los datos
          </p>
        </form>
        <div class="container--alarms">
          <p>
            ¿No tienes cuenta?
            <router-link class="withHover" :to="{ name: 'signup' }">
              Regístrate
            </router-link>
          </p>
          <p>
            ¿Olvidaste tu contraseña?
            <a class="withHover" @click="toggleModal">
              Recupera tu contraseña
            </a>
          </p>
        </div>
      </article>
    </section>
    <div
      v-if="modalView"
      class="emailModal flex justify-center items-center w-screen shadow"
    >
      <div class="content--container p-6 flex flex-col justify-center">
        <input
          id="emailRecoveringPassword"
          class="inputDiv"
          type="email"
          placeholder="Ingrese su correo electrónico"
        />
        <div class="button-container">
          <p class="m-0 volverAncle" @click="toggleModal">Volver</p>
          <px-button
            @custom-click="sumbitEmail"
            class="text-2xl buttonListo"
            :color="buttonColor"
            >Listo</px-button
          >
        </div>
        <p v-if="noEmail" class="text-red-600 m-0">
          Por favor ingrese un email
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PxButton from "@/components/PxButton";

export default {
  data() {
    return {
      buttonColor: "black",
      modalView: false,
      noEmail: false,
      noData: false,
    };
  },
  components: {
    PxButton,
  },
  methods: {
    toggleModal() {
      this.modalView = !this.modalView;
    },
    sumbitEmail() {
      if (document.getElementById("emailRecoveringPassword").value == "") {
        this.noEmail = true;
      } else {
        this.modalView = !this.modalView;
        this.noEmail = false;
      }
    },
    sumbitLogin() {
      if (
        document.getElementById("emailForm").value == "" ||
        document.getElementById("passwordForm").value == ""
      ) {
        this.noData = true;
        console.log("Aiuda");
      } else {
        this.noData = false;
      }
    },
  },
};
</script>
<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content--container {
  background-color: white;
  width: 40rem;
  height: 15rem;
  border-radius: 1rem;
}
.blur {
  transition: 0.2s;
  filter: blur(4px);
}
.emailModal {
  position: absolute;
  height: 83.5vh;
}
.withHover:hover,
.volverAncle:hover {
  cursor: pointer;
  text-decoration: underline;
}
.container--alarms {
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
p {
  font-family: var(--principal-font);
  font-size: 1.4rem;
  font-weight: 400;
}
.goPrincipalButton {
  justify-self: flex-end;
}
img {
  width: 100%;
  height: 83.5vh;
}
article {
  width: 100%;
}
section {
  width: 100%;
  box-sizing: border-box;
  height: 83.5vh;
  grid-template-columns: 1fr 1fr;
}
form {
  height: 24rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
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
  margin: 0.5rem 0 2rem 0;
}
.inputDiv {
  width: 100%;
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
