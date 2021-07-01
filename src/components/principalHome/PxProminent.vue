<template>
  <section>
    <article class="card">
      <img class="bg-gray-200" />
      <div class="p-6 border-box text-container">
        <h1>{{ data.name }}</h1>
        <p>{{ data.description }}</p>
        <small class="text-gray-700">De: {{ data.enterprise }}</small>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
article {
  display: grid;
  grid-template-rows: 3fr 2fr;
}
h1 {
  font-size: 2.5rem;
  font-family: var(--principal-font);
}
p {
  font-size: 1.6rem;
  font-family: var(--text-font);
}
small {
  font-size: 1.5rem;
  font-family: var(--text-font);
}
.card {
  height: 50rem;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.4rem;
    height: 6rem;
  }
  p {
    font-size: 1.5rem;
  }
  small {
    font-size: 1.4rem;
  }
}
@media only screen and (max-width: 768px) {
  article {
    display: grid;
    grid-template-rows: 2fr 1fr;
  }
  .card {
    height: 40rem;
  }
}
@media only screen and (max-width: 580px) {
  article {
    display: grid;
    grid-template-rows: 3fr 2fr;
  }
  .card {
  }
  h1 {
    height: 3rem;
  }
}
</style>
