<template>
    <div class="container">
        <img
            :src="imgSrc"
            class="background-image"
            width="100%"
            height="100%"
        />
        <SingleTrack />
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        imgSrc() {
            return this.$store.getters.musicData.data[this.id].album.cover_xl
        }
    },
    mounted() {
        console.log(this.$store.getters.musicData, this.id)
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    min-height: 90vh;
    position: relative;
    background: #0c0b2080;
    .background-image {
        position: absolute;
        top: 0;
        object-fit: cover;
        object-position: center;
        filter: blur(7px);
        background-image: linear-gradient(
            178.2deg,
            #0c0b20 5.2%,
            #ffffff00 52.3%,
            #0c0b20 95.7%
        );
        background-attachment: fixed;
    }
}
</style>
