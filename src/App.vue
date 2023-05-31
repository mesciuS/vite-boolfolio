<script>
  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';


  export default {
    name: 'App',
    data() {
      return {
        
      }
    },
    components: {
      AppMain,
      AppHeader,
      AppFooter
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style scoped>

</style>
