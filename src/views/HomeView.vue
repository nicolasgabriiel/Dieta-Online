<template>
  <div class="home">
    <HeaderComponent/>
    <HomeComponent/>
    <FooterComponent/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import  HomeComponent from '@/components/HomeComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HomeComponent,
    FooterComponent
  }
}
</script>
