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

</style>
