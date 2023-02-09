<template>
  <div>
    <HeaderComponent />
    <HomeComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import HomeComponent from './components/HomeComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    FooterComponent,
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
