<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },
    props: {
        project: Object
    },
    computed: {
        shortText() {
            if(this.project.text.length > 50) {
                return this.project.text.substring(0, 50) + '...';
            } else {
                return this.project.text;
            }
         },
        image() {
            if(this.project.image == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.baseUrl + 'storage/' + this.project.image;
            }
        }
    }
}
</script>
<template>
    <div class="card" style="width: 18rem;">
        <img :src="image" class="card-img-top" alt="img">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ shortText }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>