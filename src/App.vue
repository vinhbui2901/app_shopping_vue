<template>
  <header>
    <the-header/>
  </header>
  <main class="container">
    <product-list/>
  </main>
</template>

<script>
import TheHeader from './components/the_header/TheHeader.vue';
import ProductList from './components/product/ProductList.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    ProductList,
  }
}
</script>

<style>
</style>
