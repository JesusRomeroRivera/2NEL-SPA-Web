<template>
  <section>
    <div class="dataInitialPost">
      <img
        v-if="this.userInformation.imageUrl != ''"
        :src="data.imageUrl"
        alt="Tu Perfil"
      />
      <img
        v-if="this.userInformation.imageUrl == ''"
        src="./../assets/avatarBlanco.png"
        alt="Tu Perfil"
      />

      <div class="data">
        <h1>{{ this.userInformation.firstName }}</h1>
        <p>{{ this.userInformation.specialty }}</p>
      </div>
      <px-button :color="this.white">Editar Perfil</px-button>
    </div>
    <div>
      {{ this.userInformation.description }}
    </div>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";
import FreelancerService from "@/services/freelancer-service.js";
import InvestorService from "@/services/investor-service.js";
import EntrepreneurService from "@/services/entrepreneur-service.js";

export default {
  props: ["dataDetails"],
  data() {
    return {
      white: "white",
      userInformation: "",
    };
  },
  components: {
    PxButton,
  },
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
  beforeMount() {
    if (this.$route.params.user != null) this.setUser();
  },
};
</script>
<style scoped>
section {
  padding: 0 10vw;
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.dataInitialPost {
  display: flex;
  justify-content: space-between;
}
</style>
