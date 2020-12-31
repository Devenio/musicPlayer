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
            class="result"
            draggable="true"
        />
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            nextMusicData: ""
        };
    },
    computed: {
        dataList() {
            return this.$store.getters.musicData.data;
        },
        nextDataURL() {
            return this.$store.getters.musicData.next;
        }
    },
    mounted() {
        let tracks = document.querySelectorAll(".result");
        // add listener to tracks item for redirect to music player
        tracks.forEach(item => {
            item.addEventListener("click", function() {
                // redirect to music player
                $nuxt.context.redirect(
                    `/result/${this.getAttribute("data-key")}`
                );
            });
        });
    },
    methods: {
        getData() {
            console.log("clicked");
            let axios = require("axios").default;
            let options = {
                method: "GET",
                url: this.nextDataURL,
                params: { q: this.searchedString },
                headers: {
                    "x-rapidapi-key":
                        "469c3f558bmsh958b0217735e134p1e18ecjsn3de8cc22d333",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            };
            axios
                .request(options)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    layout: 'track'
};
</script>

<style lang="scss" scoped>
.result-list {
    width: 100%;
    min-height: 100px;
    background: #fff;
    padding: 0px 10px;
    padding-top: 75px;
    padding-bottom: 30px;
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
