<template>
  <section>
    <div class="flex flex-col items-start justify-start">
      <h1 class="titleTop">Completa tu perfil</h1>
      <p class="textoTop">
        Rellena tu perfil para mejorar el servicio cuando visiten tu perfil. Es
        importante que registre información verídica
      </p>
    </div>
    <form class="bg-black">
      <h2>Foto de Perfil</h2>
      <small
        >Esta foto se usará para identificarte. Muestra tu cara completa y en un
        lugar con buena iluminación</small
      >
      <div class="firstDetails grid">
        <div class="imgDetails flex flex-col justify-around items-start">
          <img src="" alt="Tu Perfil" />
          <input type="url" placeholder="Ingrese Url de la imagen" />
        </div>
        <div class="nameDetails flex flex-col justify-start items-start">
          <h2>Nombre Completo</h2>
          <label for="name">Nombres</label>
          <input id="inputName" type="text" name="name" />
          <label for="surname">Apellidos</label>
          <input id="inputSurname" type="text" name="surname" />
        </div>
      </div>
      <div class="habilidades">
        <h2 class="finalTitle">
          Habilidades (Máximo 30):
          <small>Separado por guion (Ej: Vue - Angular)</small>
        </h2>
        <input type="text" />
        <h2 class="finalTitle">Descripción</h2>
        <textarea
          value=""
          if="inputDescrip"
          name="Descripcion"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </form>
    <div class="buttonContainer flex justify-around items-center">
      <px-button
        class="text-2xl"
        @custom-click="changePageOne"
        :color="withBorder"
        >Volver</px-button
      >
      <px-button
        class="text-2xl"
        @custom-click="changePageThree"
        :color="bottonBlack"
        >Siguiente</px-button
      >
      <p v-if="noData" class="text-right mr-12 text-red-600 m-0">
        Por favor ingrese todos los datos
      </p>
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  props: ["data"],
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      noData: false,
    };
  },
  components: {
    PxButton,
  },
  computed: {
    /*whatSelected() {
      return {
        name: document.getElementById("inputName").value, 
        surname: document.getElementById("inputSurname").value, 
        description: document.getElementById("inputDescrip").value, 
      }
    },
    allWithValue(){
      return document.getElementById("inputName").value == null ||
      document.getElementById("inputSurname").value == null ||
      document.getElementById("inputDescrip").value == null
    }*/
  },
  methods: {
    changePageOne() {
      this.$emit("changePageOne");
    },
    changePageThree() {
      this.$emit("changePageThree");
    },
  },
};
</script>
<style scoped>
textarea {
  width: 100%;
  font-family: var(--principal-font);
  font-size: 1.4rem;
  padding: 1rem;
  color: black;
}
.finalTitle {
  margin: 1rem 0;
}
.nameDetails {
}
img {
  width: 80%;
  height: 80%;
  background-color: #343434;
}
h2 {
  font-size: 2.2rem;
  font-family: var(--principal-font);
}
small {
  font-family: var(--text-font);
  font-size: 1.4rem;
}
label {
  font-family: var(--text-font);
  font-size: 1.6rem;
  margin-top: 1.8rem;
  margin-bottom: 0.4rem;
}
.firstDetails {
  grid-template-columns: 1fr 1fr;
}
form {
  padding: 3rem 5rem;
  color: white;
  display: grid;
  grid-auto-rows: 0.5fr 0.5fr 4fr 5fr;
}
input {
  outline: none;
  width: 80%;
  background-color: transparent;
  border-bottom: 1px solid white;
  font-size: 1.6rem;
}
.titleTop {
  font-size: 3.6rem;
  font-family: var(--principal-font);
}
.textoTop {
  font-family: var(--text-font);
  font-size: 1.6rem;
}
section {
  padding: 0 12.5vw 5vh 12.5vw;
  height: 130vh;
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  box-sizing: border-box;
}
</style>
