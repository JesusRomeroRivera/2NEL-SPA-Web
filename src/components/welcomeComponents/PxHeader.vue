<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-white-400 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="text-3xl header--title font-semibold tracking-tight"
            >2NEL</router-link
          >
        </div>
        <div class="">
          <div class="flex gap-8 items-center mr-4">
            <router-link :to="{ name: 'about' }">Nosotros</router-link>
            <router-link :to="{ name: 'membership' }">Membresías</router-link>
            <router-link :to="{ name: 'login' }">Iniciar Sesión</router-link>
            <router-link :to="{ name: 'signup' }"
              ><px-button class="text-xl" :color="buttonColor">
                Regístrate
              </px-button></router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";
import PxButton from "@/components/PxButton";

export default {
  name: "PxHeader",
  data() {
    return {
      buttonColor: "black",
    };
  },
  components: {
    PxIcon,
    PxButton,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 8vh;
  font-size: 1.25rem;
}
.header--title {
  font-family: var(--title-font);
}
</style>
