<template>
  <section>
    <div class="flex flex-col items-start justify-start">
      <h1 class="titleTop">Confirmar Datos</h1>
    </div>
    <div class="formDiv bg-black">
      <div class="topDetails">
        <div class="datosDetails flex flex-col justify-center">
          <h2>Nombres Completos</h2>
          <h5>{{ data.firstName }} {{ data.lastName }}</h5>
          <h2>Tipo:</h2>
          <h5>{{ type.toUpperCase() }}</h5>
        </div>
        <div class="imgDetails flex flex-col items-center">
          <h2 class="text-center">Foto de perfil</h2>
          <img
            v-if="data.imageUrl != ''"
            :src="data.imageUrl"
            alt="Tu Perfil"
          />
          <img
            v-if="data.imageUrl == ''"
            src="./../../assets/avatarBlanco.png"
            alt="Tu Perfil"
          />
        </div>
      </div>
      <div class="descriptionDetail mt-4">
        <h2 class="topMargin">Descripción</h2>
        <p class="small">
          {{ data.description }}
        </p>
        <h2 v-if="this.type == 'freelancer'" class="topMargin">Especialidad</h2>
        <div v-if="this.type == 'freelancer'" class="skillsList flex gap-2">
          <p v-if="this.type == 'freelancer'" class="indiText">
            {{ data.specialty }}
          </p>
        </div>
      </div>
    </div>
    <div class="buttonContainer flex justify-around items-center">
      <px-button
        class="text-2xl"
        @custom-click="changePageTwo"
        :color="withBorder"
        >Volver</px-button
      >
      <px-button
        class="text-2xl"
        @custom-click="changePageFourth"
        :color="bottonBlack"
        >Siguiente</px-button
      >
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";
import FreelancerService from "@/services/freelancer-service.js";
import InvestorService from "@/services/investor-service.js";
import EntrepreneurService from "@/services/entrepreneur-service.js";

export default {
  props: ["data", "type"],
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
      withBorder: "withBorder",
      dataUser: {},
    };
  },
  components: {
    PxButton,
  },
  methods: {
    registerFreelancer(userId, dataUser) {
      FreelancerService.create(userId, dataUser)
        .then((response) => {
          console.log(response);
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    registerInvestor(userId, dataUser) {
      InvestorService.create(userId, dataUser)
        .then((response) => {
          console.log(response);
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    registerEntrepreneur(userId, dataUser) {
      EntrepreneurService.create(userId, dataUser)
        .then((response) => {
          console.log(response);
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changePageTwo() {
      this.$emit("changePageTwo");
    },
    changePageFourth() {
      if (this.type == "freelancer")
        this.registerFreelancer(this.$route.params.user, this.data);
      if (this.type == "investor")
        this.registerInvestor(this.$route.params.user, this.data);
      if (this.type == "entrepreneur") {
        this.registerEntrepreneur(this.$route.params.user, this.data);
        this.$emit("changePageEnterprise", this.$route.params.user);
      } else {
        this.$emit("changePageFourth");
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
}
h5 {
  font-family: var(--principal-font);
  font-size: 1.6rem;
  margin: 1.4rem 0;
}
.small {
  font-family: var(--text-font);
  font-size: 1.3rem;
  max-width: 75vw;
  margin: 0 !important;
}
h2 {
  margin-top: 1rem;
  font-size: 1.8rem;
  font-family: var(--principal-font);
}
.topDetails {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
img {
  text-align: center;
  width: 200px;
  height: 200px;
  background-color: #343434;
}
.titleTop {
  font-size: 3.6rem;
  font-family: var(--principal-font);
}
.formDiv {
  padding: 3rem 5rem;
  color: white;
  display: grid;
  grid-auto-rows: 1fr 1fr;
}
section {
  padding: 0 10vw 5vh 10vw;
  height: 80vh;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  box-sizing: border-box;
}
@media only screen and (max-width: 1024px) {
  section {
    height: 90vh;
  }
}
@media only screen and (max-width: 768px) {
  section {
    padding: 0 7.5vw;
    height: 100vh;
  }
  h2 {
    margin-top: 0.4rem;
    font-size: 1.6rem;
  }
  .small {
    font-size: 1.2rem;
    max-width: 75vw;
    margin: 0 !important;
  }
  .titleTop {
    font-size: 2.2rem;
  }
  .textoTop {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 580px) {
  section {
    height: 120vh;
  }
  .topDetails {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  h2 {
    text-align: left;
    margin-top: 0rem;
    text-align: left !important;
  }
  .topMargin {
    margin-top: 0.6rem;
  }
  h5 {
    margin: 1rem 0;
  }
  img {
    height: 150px;
  }
}
</style>
