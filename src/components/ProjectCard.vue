<script>
export default {
    name: 'ProjectCard',
    data() {
        return {

        }
    },
    props: {
        project: Object
    },
    computed: {
        image() {
            return 'http://127.0.0.1:8000/storage/' + this.project.image;
        }
    }
}
</script>
<template>
    <div class="project">
        <img :src="image" alt="pusheen">
        <br>
        <strong> - {{ project.title }}</strong>
        <p>{{ project.text }}</p>
    </div>
</template>
<style lang="scss" scoped>
.project {
    border: 1px solid brown;
    border-radius: 5px;
    padding: 10px;
    img {
        height: 400px;
        width: 400px;
    }
}
</style>