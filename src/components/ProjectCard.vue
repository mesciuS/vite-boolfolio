<script>
export default {
    name: 'ProjectCard',
    data() {
        return {

        }
    },
    props: {
        project: Object
    }
}
</script>
<template>
    <div class="project">
      <strong> - {{ project.title }}</strong>
      <p>{{ project.text }}</p>
    </div>
</template>
<style lang="scss" scoped>
.project {
    border: 1px solid brown;
    border-radius: 5px;
    padding: 10px;
}
</style>