<template>
  <div class="w-screen membershipData">
    <div
      class="theImg flex justify-center items-end"
      :class="
        numberImg == '1' ? 'first' : numberImg == '2' ? 'second' : 'third'
      "
    >
      <div class="theCard bg-black flex flex-col px-10 py-6 justify-center">
        <h1>{{ this.title }}</h1>
        <p>{{ this.text }}</p>
      </div>
    </div>
    <div class="cardsContainer flex gap-10 px-40 py-20">
      <px-card-membership :title="'Free'" class="membresia text-2xl bg-black">
        -30 tags para el perfil <br />
        -Visualizar más información de 5 StartUps que este elija <br />
        -30 perfiles de StartUps en favoritos <br />
        -Solicitudes con menor prioridad <br />
        -Sin foto de portada personalizada
      </px-card-membership>
      <px-card-membership :title="'Pro'" class="membresia text-2xl bg-black">
        -50 tags para el perfil <br />
        -Visualizar más información de 10 StartUps que este elija <br />
        -60 perfiles de StartUps en favoritos <br />
        -Solicitudes con mayor prioridad <br />
        -Foto de portada personalizada
      </px-card-membership>
      <px-card-membership
        :title="'Premium'"
        class="membresia text-2xl bg-black"
      >
        -80 tags para el perfil <br />
        -Visualizar información número ilimitado de StartUps
        <br />
        -Número ilimitado de StartUps favoritas <br />
        -Solicitudes con máxima prioridad <br />
        -Foto de portada personalizada
      </px-card-membership>
    </div>
  </div>
</template>
<script>
import PxCardMembership from "@/components/welcomeComponents/PxCardMembership";

export default {
  props: ["title", "numberImg", "text"],
  data() {
    return {
      buttonColor: "black",
    };
  },
  components: {
    PxCardMembership,
  },
};
</script>
<style scoped>
.cardsContainer {
  width: 100vw;
  height: 100%;
}
.membershipData {
  width: 100vw;
  height: 100rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.theCard {
  width: 70vw;
  height: 20rem;
}
.theImg {
  width: 100vw;
  height: auto;
  background-repeat: no-repeat;
}
.first {
  background-image: url("../../assets/membership-1.png");
  background-size: 100vw auto;
}
.second {
  background-image: url("../../assets/membership-2.png");
  background-size: 100vw auto;
}
.third {
  background-image: url("../../assets/membership-3.png");
  background-size: 100vw auto;
}
h1 {
  font-family: var(--principal-font);
  font-size: 4rem;
  color: white;
  text-align: center;
}
p {
  margin-top: 1rem;
  font-family: var(--text-font);
  font-size: 1.6rem;
  color: white;
  text-align: center;
}
</style>
