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
          <input v-model="email" type="text" name="email" />
          <label for="password">Contraseña</label>
          <input v-model="password" type="password" name="password" />
          <div class="containerCheckbox">
            <input
              v-model="check"
              class="theCheckbox"
              type="checkbox"
              name="Terms"
            />
            <label @click="toggleModal" class="TheEspecial" for="Terms"
              >Acepto los términos y condiciones</label
            >
          </div>
          <div
            class="goPrincipalButton mr-10 mt-2"
            :to="{ name: 'registerDetails' }"
          >
            <px-button
              @custom-click="insertData"
              class="text-2xl"
              :color="buttonColor"
              type="button"
              >Siguiente --></px-button
            >
          </div>
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
        <div
          v-if="modalView"
          class="emailModal flex justify-center items-center w-screen shadow"
        >
          <div class="content--container p-6 flex flex-col justify-center">
            <div class="button-container flex flex-col items-center gap-20">
              <p class="textTerminos">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed facilisis tortor. Proin pellentesque mauris arcu,
                quis mollis massa maximus et. Maecenas eleifend sem neque, at
                feugiat ante luctus vitae. Phasellus venenatis facilisis
                feugiat. Donec efficitur posuere turpis, vel iaculis felis
                venenatis ac. Duis vitae ex ut nulla malesuada rutrum eget sit
                amet velit. Aliquam nibh mi, pretium sit amet leo et, porta
                porta risus. Vivamus faucibus eget eros a lacinia. Nulla augue
                risus, laoreet a ornare sit amet, venenatis nec dui. In hac
                habitasse platea dictumst. Nullam sed mattis mauris, eget
                dapibus odio. In nec pellentesque justo. Integer blandit
                vulputate eleifend. Ut condimentum, mi ut molestie lacinia,
                lectus enim ornare odio, sit amet tincidunt nunc lorem a risus.
                Nullam lorem dui, efficitur pretium viverra porta, efficitur nec
                urna.
              </p>
              <p class="m-0 volverAncle" @click="toggleModal">Volver</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
import PxButton from "@/components/PxButton";
import UserService from "@/services/user-service.js";

export default {
  name: "SignUp",
  data() {
    return {
      buttonColor: "black",
      noData: false,
      email: "",
      password: "",
      modalView: false,
      userData: {
        email: "",
        password: "",
      },
      check: false,
      user: {},
    };
  },
  components: {
    PxButton,
  },
  methods: {
    registerUser(userVariable) {
      UserService.create(userVariable)
        .then((response) => {
          console.log(response);
          this.$route.params.user = response.data.id;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    toggleModal() {
      this.modalView = !this.modalView;
    },
    insertData() {
      if (this.check) {
        this.userData.email = this.email;
        this.userData.password = this.password;
        this.registerUser(this.userData);
        this.$router.push({
          path: "/registerDetails",
        });
      } else {
        alert("Acepte los términos y condiciones");
      }
    },
  },
};
</script>
<style scoped>
.content--container {
  background-color: white;
  width: 40rem;
  height: 15rem;
  border-radius: 1rem;
  position: absolute;
}
.textTerminos {
  font-family: var(--text-font);
}
.emailModal {
  background-color: white;
  position: absolute;
  top: 8vh;
  left: 0;
  height: 83.5vh;
}
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
.TheEspecial:hover {
  text-decoration: underline;
  cursor: pointer;
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
