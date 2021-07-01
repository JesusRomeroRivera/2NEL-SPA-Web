<template>
  <section>
    <div class="flex flex-col items-start justify-start">
      <h1 class="titleTop">Completa el perfil de tu empresa</h1>
      <p class="textoTop">
        Rellena tu perfil para que inversionistas y colaboradores entiendan
        mejor tu empresa y startup cuando visiten tu perfil. Es importante que
        se registre información verídica
      </p>
    </div>
    <form class="bg-white">
      <h2>Foto de Perfil de la Empresa</h2>
      <small>Esta foto se usará para identificar tu empresa</small>
      <div class="firstDetails grid">
        <div class="imgDetails flex flex-col justify-around items-start">
          <img :src="imageUrl" alt="Tu Perfil" />
          <input
            v-model="imageUrl"
            type="url"
            placeholder="Ingrese Url de la imagen"
          />
        </div>
        <div class="nameDetails flex flex-col justify-start items-start">
          <h2 class="label">Nombre de la empresa</h2>
          <input v-model="name" type="text" name="name" />
          <h2 class="label">Teléfono corporativo</h2>
          <input
            v-model="corpNumber"
            id="inputSurname"
            type="text"
            name="corpNumber"
          />
        </div>
      </div>
      <div class="habilidades">
        <h2 class="finalTitle">E-mail corporativo:</h2>
        <input v-model="businessEmail" type="text" />
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
        @custom-click="changePageThree"
        :color="withBorder"
        >Volver</px-button
      >
      <px-button
        class="text-2xl"
        @custom-click="changePageFourth"
        :color="bottonBlack"
        >Registrar Empresa</px-button
      >
      <p v-if="noData" class="text-right mr-12 text-red-600 m-0">
        Por favor ingrese todos los datos
      </p>
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";
import EnterpriseService from "@/services/enterprise-service.js";

export default {
  props: ["data", "id"],
  components: {
    PxButton,
  },
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      noData: false,
      name: "",
      businessEmail: "",
      description: "",
      corpNumber: "",
      imageUrl: "",
    };
  },
  computed: {
    whatSelected() {
      return {
        name: this.name,
        businessEmail: this.businessEmail,
        description: this.description,
        imageUrl: this.imageUrl,
        corpNumber: this.corpNumber,
      };
    },
  },
  methods: {
    changePageThree() {
      this.$emit("changePageThree");
    },
    registerEnterprise(userId, dataUser) {
      EnterpriseService.create(userId, dataUser)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changePageFourth() {
      this.registerEnterprise(this.id, this.whatSelected);
      this.$emit("changePageFourth");
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
  border: 1px solid black;
  border-radius: 15px;
}
.finalTitle {
  margin: 1rem 0;
}
img {
  width: 80%;
  height: 80%;
  background-color: white;
}
h2 {
  font-size: 2.2rem;
  font-family: var(--principal-font);
}
small {
  font-family: var(--text-font);
  font-size: 1.4rem;
}
.label {
  margin-top: 1.8rem;
  margin-bottom: 0.4rem;
}
.firstDetails {
  grid-template-columns: 1fr 1fr;
}
form {
  padding: 3rem 5rem;
  color: black;
  display: grid;
  grid-auto-rows: 0.5fr 0.5fr 4fr 5fr;
  border: 1px solid black;
  border-radius: 2rem;
}
input {
  outline: none;
  width: 80%;
  background-color: transparent;
  border-bottom: 1px solid black;
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
