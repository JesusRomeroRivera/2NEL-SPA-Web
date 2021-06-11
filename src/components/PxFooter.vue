<template>
  <footer class="shadow w-screen">
    <div class="flex justify-between items-center p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
            <px-icon class="mr-2" />
            <router-link
            :to="{ name: 'home' }"
            class="footer--title font-semibold text-xl tracking-tight"
          >2NEL</router-link>
        </div>
        <h3 class="">©2021. All rights reserved</h3>
        <div class="flex justify-between">
          <p class="mr-2">Encuéntranos:</p>
          <div class="flex justify-between mr-5 gap-3">
            <a href="">
              <img src="@/assets/facebook.png" alt="facebook-icon">
            </a>
            <a href="">
              <img src="@/assets/twitter.png" alt="twitter-icon">
            </a>
            <a href="">
              <img src="@/assets/instagram.png" alt="instagram-icon">
            </a>
          </div>
        </div>
    </div>
  </footer>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: "PxFooter",
  components: {
    PxIcon,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer--title {
  font-family: 'Krona One', sans-serif;
}

img{
    height: 24px;
    width: auto;
}
</style>