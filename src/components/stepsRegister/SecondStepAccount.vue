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
          <img
            v-if="imageUrl == ''"
            src="./../../assets/avatarBlanco.png"
            alt="Tu Perfil"
          />
          <img v-if="imageUrl != ''" :src="imageUrl" alt="Tu Perfil" />
          <input
            v-model="imageUrl"
            type="url"
            placeholder="Ingrese Url de la imagen"
          />
        </div>
        <div class="nameDetails flex flex-col justify-start items-start">
          <h2>Datos Completos</h2>
          <label for="firstName">Nombres</label>
          <input v-model="firstName" type="text" name="firstName" />
          <label for="lastName">Apellidos</label>
          <input
            v-model="lastName"
            id="inputSurname"
            type="text"
            name="lastName"
          />
          <label for="city">Ciudad: </label>
          <input v-model="city" type="text" name="city" />
        </div>
      </div>
      <div class="habilidades">
        <h2 v-if="this.type == 'freelancer'" class="finalTitle">
          Especialidad:
          <small v-if="this.type == 'freelancer'"
            >Habilidad que consideres resaltar</small
          >
        </h2>
        <input
          v-if="this.type == 'freelancer'"
          v-model="specialty"
          type="text"
        />
        <h2 class="finalTitle">Descripción</h2>
        <textarea
          v-model="description"
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
  props: ["data", "type"],
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      noData: false,
      firstName: "",
      lastName: "",
      imageUrl: "",
      description: "",
      specialty: "",
      city: "",
    };
  },
  components: {
    PxButton,
  },
  computed: {
    isAnySelected() {
      return (
        this.firstName == "" || this.lastName == "" || this.description == ""
      );
    },
    whatSelected() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        imageUrl: this.imageUrl,
        specialty: this.specialty,
        city: this.city,
      };
    },
  },
  methods: {
    changePageOne() {
      this.$emit("changePageOne");
    },
    changePageThree() {
      if (!this.isAnySelected) {
        this.$emit("getUser2", this.whatSelected);
        this.$emit("changePageThree");
      }
    },
  },
};
</script>
<style scoped>
.indiText {
  background-color: white;
  color: black;
  padding: 0.3rem 0.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  font-family: var(--text-font);
  margin-bottom: 1rem;
  display: block;
  text-align: center;
}
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
img {
  width: 25vw;
  height: 30vh;
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
  margin: 1rem 0;
}
section {
  padding: 0 12.5vw 5vh 12.5vw;
  height: 140vh;
  display: grid;
  grid-template-rows: 1fr 7fr 1fr;
  box-sizing: border-box;
}
@media only screen and (max-width: 1024px) {
  section {
    height: 145vh;
    padding: 0 10vw;
  }
}
@media only screen and (max-width: 768px) {
  section {
    height: 165vh;
    padding: 0 10vw;
  }
  img {
    width: 220px;
    height: 220px;
    background-color: #343434;
  }
  .firstDetails {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
  }
  .imgDetails {
    margin-bottom: 15px;
  }

  input {
    outline: none;
    width: 100%;
  }
  .titleTop {
    font-size: 2.2rem;
  }
  .textoTop {
    font-size: 1.5rem;
  }
}
</style>
