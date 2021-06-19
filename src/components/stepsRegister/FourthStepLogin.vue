<template>
  <div>
    <section>
      <div
        class="
          formDiv
          bg-black
          flex flex-col
          justify-center
          items-center
          text-center
        "
      >
        <h1>
          ¡Felicidades ******, te has registrado exitosamente! <br />
          Ahora formas parte de la familia de 2NEL
        </h1>
        <p>
          Conoce ahora nuestras membresías para disfrutar de todas las
          posibilidades que te brinda 2NEL. No te preocupes, si no deseas ahora
          puedes acceder a estas más adelante y seguir hacia 2NEL
        </p>
        <px-button
          class="text-2xl"
          @custom-click="toggleModal"
          :color="bottonWhite"
          >Ver Membresías</px-button
        >
      </div>
      <div class="buttonContainer flex justify-end items-center">
        <router-link :to="{ name: 'principal' }">
          <px-button class="text-2xl" :color="bottonBlack">Siguiente</px-button>
        </router-link>
      </div>
    </section>
    <div
      v-if="modalView"
      class="emailModal flex justify-center items-center w-screen shadow"
    >
      <div class="content--container p-6">
        <div class="flex gap-10 items-end">
          <px-card-membership
            :title="'Free'"
            class="membresia text-xl bg-black"
          >
            -30 tags para el perfil <br />
            -Visualizar más información de 5 StartUps que este elija <br />
            -30 perfiles de StartUps en favoritos <br />
            -Solicitudes con menor prioridad <br />
            -Sin foto de portada personalizada
          </px-card-membership>
          <px-card-membership :title="'Pro'" class="membresia text-xl bg-black">
            -50 tags para el perfil <br />
            -Visualizar más información de 10 StartUps que este elija <br />
            -60 perfiles de StartUps en favoritos <br />
            -Solicitudes con mayor prioridad <br />
            -Foto de portada personalizada
          </px-card-membership>
          <px-card-membership
            :title="'Premium'"
            class="membresia text-xl bg-black"
          >
            -80 tags para el perfil <br />
            -Visualizar información número ilimitado de StartUps
            <br />
            -Número ilimitado de StartUps favoritas <br />
            -Solicitudes con máxima prioridad <br />
            -Foto de portada personalizada
          </px-card-membership>
        </div>
        <div class="button-container flex justify-center gap-10">
          <px-button
            @custom-click="toggleModal"
            class="text-2xl m-0"
            :color="withBorder"
          >
            Volver
          </px-button>
          <px-button
            @custom-click="sumbitEmail"
            class="text-2xl buttonListo"
            :color="bottonBlack"
            >Siguiente</px-button
          >
        </div>
        <!--<p v-if="noEmail" class="text-red-600 m-0">
            Por favor ingrese un email
          </p> -->
      </div>
    </div>
  </div>
</template>
<script>
import PxButton from "@/components/PxButton";
import PxCardMembership from "@/components/welcomeComponents/PxCardMembership";

export default {
  //props: ["dataUser"],
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      modalView: false,
    };
  },
  components: {
    PxButton,
    PxCardMembership,
  },
  methods: {
    toggleModal() {
      this.modalView = !this.modalView;
    },
    sumbitEmail() {
      this.modalView = !this.modalView;
    },
  },
};
</script>
<style scoped>
.membresia {
  width: 28rem;
  height: 40rem;
}
.content--container {
  height: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr;
  justify-content: center;
  align-items: center;
}
.emailModal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
}
h1 {
  font-size: 2.6rem;
  font-family: var(--principal-font);
}
p {
  margin: 1.2rem 0;
  font-size: 1.4rem;
  font-family: var(--text-font);
}
.formDiv {
  width: 60vw;
  padding: 3rem 5rem;
  color: white;
  display: grid;
  grid-auto-rows: 1fr 1fr;
}
section {
  padding: 0 10vw 5vh 10vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 7fr 1fr;
  box-sizing: border-box;
  justify-content: center;
}
</style>
