<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-white-400 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="header--title font-semibold text-xl tracking-tight"
          >2NEL</router-link>
        </div>
        <div class="">
          <div class="flex gap-6">
            <router-link :to="{ name: 'about' }">Nosotros</router-link>
            <router-link :to="{ name: 'membership' }">Membresías</router-link>
            <router-link :to="{ name: 'login' }">Iniciar Sesión</router-link>
            <router-link :to="{ name: 'signup' }">Regístrate</router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: "PxHeader",
  components: {
    PxIcon,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header--title {
  font-family: 'Krona One', sans-serif;
}

</style>
