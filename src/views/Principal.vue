<template>
  <div class="w-screen flex flex-col">
    <div class="containerSearch">
      <div class="special">
        <px-prominent :data="freelancers[1]"></px-prominent>
      </div>
      <div class="list">
        <px-list-vertical :users="freelancers"></px-list-vertical>
      </div>
    </div>
    <div class="list-container gap-y-4 pb-20">
      <h1 class="homeTextTitle">StartUps Destacadas</h1>
      <px-list :users="freelancers"></px-list>
      <h1 class="homeTextTitle">Freelancers Destacados</h1>
      <px-list :users="freelancers"></px-list>
      <h1 class="homeTextTitle">Inversores Destacados</h1>
      <px-list :users="freelancers"></px-list>
    </div>
  </div>
</template>
<script>
import PxList from "@/components/welcomeComponents/PxList";
import PxListVertical from "@/components/principalHome/PxListVertical";
import PxProminent from "@/components/principalHome/PxProminent";

export default {
  components: {
    PxList,
    PxListVertical,
    PxProminent,
  },
  data() {
    return {
      freelancers: [
        {
          name: "Javier Alanoca Farfán",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Dana Vallejos Nestares",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Jesús Romero Rivera",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Jesús Daniel Rivera",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
      ],
    };
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
