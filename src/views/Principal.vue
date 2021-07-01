<template>
  <div class="w-screen flex flex-col">
    <div class="containerSearch">
      <div class="special">
        <px-prominent :details="freelancers[0]"></px-prominent>
      </div>
      <div class="list">
        <px-list-vertical :users="enterprisesNotCero"></px-list-vertical>
      </div>
    </div>
    <div class="list-container gap-y-4 pb-20">
      <h1 class="homeTextTitle">Inversores Destacados</h1>
      <px-list :users="investors"></px-list>
      <h1 class="homeTextTitle">StartUps Destacadas</h1>
      <px-list :users="enterprisesNotCero"></px-list>
      <h1 class="homeTextTitle">Freelancers Destacados</h1>
      <px-list :users="freelancers"></px-list>
    </div>
  </div>
</template>
<script>
import PxList from "@/components/welcomeComponents/PxList";
import PxListVertical from "@/components/principalHome/PxListVertical";
import PxProminent from "@/components/principalHome/PxProminent";

import FreelancerService from "@/services/freelancer-service.js";
import InvestorService from "@/services/investor-service.js";
import EnterpriseService from "@/services/enterprise-service.js";
import EntrepreneurService from "@/services/entrepreneur-service.js";

export default {
  components: {
    PxList,
    PxListVertical,
    PxProminent,
  },
  data() {
    return {
      freelancers: [],
      enterprises: [],
      enterprisesNotCero: [],
      investors: [],
      userInformation: {},
    };
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
          this.enterprisesNotCero = this.enterprises;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setUser() {
      EntrepreneurService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      FreelancerService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
      InvestorService.get(this.$route.params.user)
        .then((response) => {
          this.userInformation = response.data;
          this.$route.params.user = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  beforeMount() {
    this.getDataFreelancer();
    this.getDataInvestor();
    this.getDataEnterprise();
    if (this.$route.params.user != null) this.setUser();
  },
};
</script>
<style scoped>
.special {
}
.list {
  height: auto;
}
.containerSearch {
  height: 50rem;
  width: 100vw;
  padding: 0 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.list-container {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  .containerSearch {
    height: 40rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .list {
    display: none;
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
