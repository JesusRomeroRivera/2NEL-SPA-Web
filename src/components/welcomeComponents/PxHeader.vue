<template>
  <header class="shadow">
    <nav v-if="getRoute != 'principal'">
      <nav
        class="
          inOff
          flex
          items-center
          justify-between
          flex-wrap
          bg-white-400
          p-6
        "
      >
        <div class="theImage flex items-center flex-shrink-0 text-black mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="text-3xl header--title font-semibold tracking-tight"
            >2NEL</router-link
          >
        </div>
        <div class="navBig">
          <div class="flex gap-8 items-center mr-4">
            <router-link :to="{ name: 'about' }">Nosotros</router-link>
            <router-link :to="{ name: 'membership' }">Membresías</router-link>
            <router-link :to="{ name: 'login' }">Iniciar Sesión</router-link>
            <router-link :to="{ name: 'signup' }"
              ><px-button class="theButton text-xl" :color="buttonColor">
                Regístrate
              </px-button></router-link
            >
          </div>
        </div>
        <div class="navSmall">
          <div @click="navToggle" class="menu-btn">
            <div class="menu-btn__burger"></div>
          </div>
          <div
            v-if="navAppears"
            class="w-screen theNav flex flex-col items-center"
          >
            <router-link class="itemNav" :to="{ name: 'about' }"
              >Nosotros</router-link
            >
            <router-link class="itemNav" :to="{ name: 'membership' }"
              >Membresías</router-link
            >
            <router-link class="itemNav" :to="{ name: 'login' }"
              >Iniciar Sesión</router-link
            >
            <router-link class="itemNav" :to="{ name: 'signup' }"
              >Regístrate</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
    <nav v-if="getRoute == 'principal'">
      <nav
        class="
          inOff
          flex
          items-center
          justify-between
          flex-wrap
          bg-white-400
          p-6
        "
      >
        <div class="theImage flex items-center flex-shrink-0 text-black mr-6">
          <px-icon class="mr-2" />
          <router-link
            :to="{ name: 'home' }"
            class="text-3xl header--title font-semibold tracking-tight"
            >2NEL</router-link
          >
        </div>
        <div class="navBig">
          <div class="flex gap-8 items-center mr-4">
            <router-link :to="{ name: 'principal' }">Inicio</router-link>
            <router-link :to="{ name: 'solicitudes' }">Solicitudes</router-link>
            <img src="../../assets/iconLupa.png" alt="Lupa" />
            <img src="../../assets/iconHeart.png" alt="Corazón" />
            <img src="../../assets/iconAlarm.png" alt="Campanita" />
            <div class="theFoto" src="" alt=""></div>
          </div>
        </div>
        <div class="navSmall">
          <div @click="navToggle" class="menu-btn">
            <div class="menu-btn__burger"></div>
          </div>
          <div
            v-if="navAppears"
            class="w-screen theNav flex flex-col items-center"
          >
            <router-link class="itemNav" :to="{ name: 'about' }"
              >Inicio</router-link
            >
            <router-link class="itemNav" :to="{ name: 'membership' }"
              >Solicitudes</router-link
            >
            <router-link class="itemNav" :to="{ name: 'login' }"
              >StarUps</router-link
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
      navAppears: false,
      menuOpen: false,
    };
  },
  components: {
    PxIcon,
    PxButton,
  },
  computed: {
    getRoute() {
      return this.$route.path.substring(1, 10);
    },
  },
  methods: {
    navToggle() {
      const menuBtn = document.querySelector(".menu-btn");
      this.navAppears = !this.navAppears;
      if (!this.menuOpen) {
        menuBtn.classList.add("open");
        this.menuOpen = true;
      } else {
        menuBtn.classList.remove("open");
        this.menuOpen = false;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 16px;
}
.theFoto {
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: gainsboro;
}
.inOff {
  padding: 1rem 1.5rem !important;
}
header {
  height: 8vh;
  font-size: 1.25rem;
}
.header--title {
  font-family: var(--title-font);
}
.navSmall {
  display: none;
}
@media only screen and (max-width: 768px) {
  .navBig {
    font-size: 1.2rem;
  }
  .theButton {
    padding: 0.8rem 2.4rem;
  }
}
@media only screen and (max-width: 580px) {
  .navBig {
    display: none;
  }
  .inOff {
    justify-content: center !important;
    align-items: center !important;
    margin: 0 !important;
  }
  .navSmall {
    display: block;
    position: absolute;
    top: 1.4rem;
    left: 0;
  }
  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-left: 2rem;
    /* border: 3px solid #fff; */
  }
  .theNav {
    width: 100vw;
    position: absolute;
    top: 6vh;
    left: 0;
    right: 0;
    background-color: white;
    gap: 1.2rem;
  }
  .itemNav {
    padding: 0.3rem 0;
  }
  .menu-btn__burger {
    width: 3rem;
    height: 0.3rem;
    background: black;
    border-radius: 0.3rem;
    box-shadow: 0 2px 0.3rem rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    width: 3rem;
    height: 0.3rem;
    background-color: black;
    border-radius: 0.3rem;
    box-shadow: 0 2px 0.3rem rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-10px);
  }
  .menu-btn__burger::after {
    transform: translateY(10px);
  }
  /* ANIMATION */
  .menu-btn .open .menu-btn__burger {
    transform: translateX(50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn .open .menu-btn__burger::before {
    transform: rotate(45deg) translate(-35px, 35px);
  }
  .menu-btn .open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(-35px, -35px);
  }
}
</style>
