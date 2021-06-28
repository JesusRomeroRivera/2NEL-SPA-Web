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
        py-20
      "
    >
      <px-list :users="freelancers"></px-list>
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
/*
import ApiService from "@/services/api-service.js";

ApiService.getAll()
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });

fetch("http://tunelapi-001-site1.ftempurl.com/api/freelancers")
  .then((response) => response.json())
  .then((data) => console.log(data));

async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

getData("http://tunelapi-001-site1.ftempurl.com/api/freelancers").then(
  (data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  }
);*/

export default {
  name: "Home",
  data() {
    return {
      propsMessage: {
        isButton: true,
        isText: false,
        imageUrl: "image1",
      },
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
  components: {
    PxPrincipal,
    PxMessage,
    PxList,
  },
};
</script>

<style scoped>
.list-container {
  height: auto;
}
</style>
