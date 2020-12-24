<template>
    <div class="result-list">
        <ResultList
            v-for="(result, index) in dataList"
            :key="index"
            :artist="dataList[index].artist.name"
            :trackName="dataList[index].title"
            :img="dataList[index].album.cover_big"
            :id="`track${index}`"
            :data-key="index"
        />
    </div>
</template>

<script>
export default {
    computed: {
        dataList() {
            return this.$store.getters.musicData.data
        }
    },
    mounted() {
        let tracks = document.querySelectorAll(".result")
        tracks.forEach(item => {
            item.addEventListener("click", function() {
                $nuxt.context.redirect(
                    `/result/${this.getAttribute("data-key")}`
                )
            })
        })
    }
}
</script>

<style lang="scss" scoped>
.result-list {
    width: 100%;
    min-height: 100px;
    background: #fff;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background: url("/images/img7.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
