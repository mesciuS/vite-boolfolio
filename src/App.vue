<script>
  import AppMain from './components/AppMain.vue';

  export default {
    name: 'App',
    data() {
      return {
        
      }
    },
    components: {
      AppMain,
    }
  }
</script>

<template>
  <router-view></router-view>
  <AppMain></AppMain>
</template>

<style scoped>

</style>
