<template>
  <div class="flex-col items-center">
    <px-principal> </px-principal>
    <div
      class="
        list-container
        flex flex-col
        gap-y-4
        items-center
        justify-between
        pb-20
      "
    >
      <h1 class="homeTextTitle">Empresas Destacadas</h1>
      <px-list :users="enterprises"></px-list>
      <h1 class="homeTextTitle">Freelancers Destacados</h1>
      <px-list :users="freelancers"></px-list>
      <h1 class="homeTextTitle">Inversores Destacados</h1>
      <px-list :users="investors"></px-list>
    </div>
    <px-message :isAny="propsMessage">
      Descubre la oportunidad de tu vida con 2NEL</px-message
    >
  </div>
</template>

<script>
import PxPrincipal from "@/components/welcomeComponents/PxPrincipal";
import PxList from "@/components/welcomeComponents/PxList";
import PxMessage from "@/components/PxMessage";

//API
import FreelancerService from "@/services/freelancer-service.js";
import InvestorService from "@/services/investor-service.js";
import EnterpriseService from "@/services/enterprise-service.js";

export default {
  name: "Home",
  data() {
    return {
      propsMessage: {
        isButton: true,
        isText: false,
        imageUrl: "image1",
      },
      freelancers: [],
      enterprises: [],
      investors: [],
    };
  },
  components: {
    PxPrincipal,
    PxMessage,
    PxList,
  },
  methods: {
    getDataFreelancer() {
      FreelancerService.getAll()
        .then((response) => {
          this.freelancers = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDataInvestor() {
      InvestorService.getAll()
        .then((response) => {
          this.investors = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getDataEnterprise() {
      EnterpriseService.getAll()
        .then((response) => {
          this.enterprises = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEnterprise();
  },
};
</script>

<style scoped>
.list-container {
  height: auto;
  display: flex;
  flex-direction: column;
}
.homeTextTitle {
  padding: 0 8vw;
  align-self: flex-start !important;
  margin: 20px 0;
  font-size: 4rem;
  text-align: left;
  font-family: var(--principal-font);
}
.homeTextTitle::after {
  content: ":";
}
@media only screen and (max-width: 1024px) {
  .homeTextTitle {
    font-size: 3.2rem;
  }
}
@media only screen and (max-width: 768px) {
  .homeTextTitle {
    font-size: 2.6rem;
  }
}
@media only screen and (max-width: 580px) {
  .homeTextTitle {
    align-self: center !important;
    margin: 0 0 5px 0;
  }
  .homeTextTitle::after {
    content: "";
  }
  .list-container {
    padding: 3rem 0 !important;
  }
}
</style>
