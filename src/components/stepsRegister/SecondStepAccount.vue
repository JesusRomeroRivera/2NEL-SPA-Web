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
          <img :src="urlImage" alt="Tu Perfil" />
          <input
            v-model="urlImage"
            type="url"
            placeholder="Ingrese Url de la imagen"
          />
        </div>
        <div class="nameDetails flex flex-col justify-start items-start">
          <h2>Nombre Completo</h2>
          <label for="name">Nombres</label>
          <input v-model="name" id="inputName" type="text" name="name" />
          <label for="surname">Apellidos</label>
          <input
            v-model="surname"
            id="inputSurname"
            type="text"
            name="surname"
          />
        </div>
      </div>
      <div class="habilidades">
        <h2 class="finalTitle">
          Habilidades (Máximo 30):
          <small>Separado por guion (Ej: Vue - Angular)</small>
        </h2>
        <div class="skillsList flex gap-2">
          <p class="indiText" :key="l" v-for="l in skills">
            {{ l }}
            <button
              @click="deleteSkill(l)"
              style="font-weight: 700"
              type="form"
            >
              X
            </button>
          </p>
        </div>
        <input v-model="skillText" type="text" />
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
  props: ["data"],
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      noData: false,
      name: "",
      surname: "",
      urlImage: "",
      description: "",
      skillText: "",
      skills: [],
    };
  },
  components: {
    PxButton,
  },
  computed: {
    isAnySelected() {
      return this.name == "" || this.surname == "" || this.description == "";
    },
    whatSelected() {
      return {
        name: this.name,
        surname: this.surname,
        description: this.description,
        urImage: this.urlImage,
        skills: this.skills,
      };
    },
    lastLetter() {
      return this.skillText.substring(
        this.skillText.length - 1,
        this.skillText.length
      );
    },
  },
  watch: {
    skillText: function () {
      if (this.lastLetter == "-") {
        let word =
          this.skillText.substring(
            this.skillText.length - 2,
            this.skillText.length - 1
          ) == " "
            ? this.skillText.substring(0, this.skillText.length - 2)
            : this.skillText.substring(0, this.skillText.length - 1);
        if (this.skills.indexOf(word) == -1) {
          this.skills.push(word);
        }
        this.skillText = "";
      }
    },
  },
  methods: {
    deleteSkill(name) {
      this.skills.splice(this.skills.indexOf(name), 1);
    },
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
.skillsList {
  width: 50vw;
  overflow-x: scroll;
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
