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
    </div>
</template>
<style lang="scss" scoped>
</style>