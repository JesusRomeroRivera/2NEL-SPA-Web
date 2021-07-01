<template>
  <section>
    <div class="formDiv bg-black">
      <div class="topDetails">
        <div class="datosDetails flex flex-col justify-center">
          <h2>Nombres Completos</h2>
          <h5>{{ dataDetails.firstName }} {{ dataDetails.lastName }}</h5>
          <h2>Tipo:</h2>
          <h5>{{ dataDetails.type.toUpperCase() }}</h5>
        </div>
        <div class="imgDetails flex flex-col items-center">
          <h2 class="text-center">Foto de perfil</h2>
          <img
            v-if="dataDetails.imageUrl != ''"
            :src="dataDetails.imageUrl"
            alt="Tu Perfil"
          />
          <img
            v-if="dataDetails.imageUrl == ''"
            src="./../assets/avatarBlanco.png"
            alt="Tu Perfil"
          />
        </div>
      </div>
      <div class="descriptionDetail mt-4">
        <h2 class="topMargin">Descripción</h2>
        <p class="small">
          {{ dataDetails.description }}
        </p>
        <h2 v-if="dataDetails.type == 'freelancer'" class="topMargin">
          Especialidad
        </h2>
        <div
          v-if="dataDetails.type == 'freelancer'"
          class="skillsList flex gap-2"
        >
          <p v-if="dataDetails.type == 'freelancer'" class="indiText">
            {{ dataDetails.specialty }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import FreelancerService from "@/services/freelancer-service.js";
import InvestorService from "@/services/investor-service.js";
import EntrepreneurService from "@/services/entrepreneur-service.js";

export default {
  props: ["dataDetails"],
  data() {
    return {
      white: "white",
      userInformation: this.$route.params.user,
    };
  },
  components: {},
  methods: {
    setUser() {
      EntrepreneurService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      FreelancerService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      InvestorService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    if (this.$route.params.user != null) this.setUser();
  },
};
</script>
<style scoped>
.dataInitialPost {
  display: flex;
  justify-content: space-between;
}
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
  height: 100vh;
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
