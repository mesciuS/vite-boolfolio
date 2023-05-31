<script>
export default {
    name: 'AppHome',
    data() {
        return {

        }
    }
}
</script>
<template>
    <div>
        <h1>homepage</h1>
        <router-link :to="{name: 'about'}">Go to about</router-link>
        <br>
        <router-link :to="{name: 'projects-index'}">Go to the Projects' index</router-link>
    </div>
</template>
<style lang="scss" scoped>
</style>