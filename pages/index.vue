<template>
    <div class="home-container">
        <h1 class="title">
            You can search and find every music you are looking for
        </h1>
        <div class="search-wrapper">
            <input
                @keypress.enter="getData"
                type="text"
                class="search-box"
                placeholder="Please enter your favorite music or singer to search...:)"
                v-model="searchedString"
            />
            <button class="search-button" @click="getData">
                <img src="/icons/light-search.png" class="search-icon" />
            </button>
        </div>
        <div class="loading" v-if="isLoading"></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            searchedString: "",
            isLoading: false,
            errorMsg: "",
            hasError: false
        };
    },
    mounted() {
        setTimeout(() => {
            let searchBoxWrapper = document.querySelector(".search-wrapper");
            let searchBox = document.querySelector(".search-box");
            let homeBackground = document.querySelector(".home-background");
            let loading = this.isLoading
                ? document.querySelector(".loading")
                : "";

            searchBox.addEventListener("focus", () => {
                searchBoxWrapper.style = `
                box-shadow: 0px 0px 40px 15px #130f4a; 
                transform: scale(1.2,1.2)`;
            });
            searchBox.addEventListener("blur", () => {
                searchBoxWrapper.style = "box-shadow: none";
            });
        }, 500);
    },
    methods: {
        getData() {
            // this.editStylesInSearch();
            let input = document.querySelector(".search-box");
            if (this.searchedString.length == 0) {
                // check the input value
                input.style.border = "2px solid #f00";
                input.style.backgroundColor = "rgba(255, 168, 168, 0.98)";
                return; // stop this method if the input value was empty
            }
            input.style.backgroundColor = "#fff";
            input.style.border = "2px solid #130f4a";
            this.isLoading = true;
            // start getting data from api
            let axios = require("axios").default;
            let options = {
                method: "GET",
                url: "https://deezerdevs-deezer.p.rapidapi.com/search",
                params: { q: this.searchedString },
                headers: {
                    "x-rapidapi-key":
                        "469c3f558bmsh958b0217735e134p1e18ecjsn3de8cc22d333",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            };
            axios
                .request(options)
                .then(response => {
                    if (response.data.data.length == 0) {
                        this.isLoading = false;
                        return;
                    }
                    this.isLoading = false;
                    this.$router.push("/result");
                    this.$store.dispatch("setApiData", response.data);
                    console.log("response", response.data);
                })
                .catch(error => {
                    console.error("error", error);
                });
        },
        editStylesInSearch() {
            let searchBox = document.querySelector(".search-box");
            searchBox.blur();
        }
    }
};
</script>
<style lang="scss" scoped>
//error message style
.home-container {
    width: 100%;
    height: 1000px;
    background: url("/images/main.jpg") no-repeat center;
    background-size: cover;
    padding: 150px 0px;
    position: relative;

    .title {
        width: 50%;
        font-size: 3rem;
        text-align: center;
        color: #fff;
        font-weight: bold;
        margin: 0 auto;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
    }
    .loading {
        margin: 0px auto;
        width: 40px;
        height: 40px;
        border-top: 5px solid black;
        border-right: 5px solid black;
        border-radius: 100%;
        animation: linear loading 1.5s infinite;
        border-color: purple;
    }
    .search-wrapper {
        width: 60%;
        height: 50px;
        border-radius: 10px;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 500ms;
        margin: 100px auto;
        position: relative;
        z-index: 100;
        .search-box {
            width: 90%;
            height: inherit;
            border: 2px solid #130f4a;
            border-right: none;
            padding: 10px;
            box-sizing: border-box;
            font-size: 1rem;
            border-radius: 10px 0px 0px 10px;
        }
        .search-button {
            cursor: pointer;
            width: 10%;
            height: inherit;
            background: transparent;
            border: 2px solid #1f0f4a;
            border-radius: 0px 10px 10px 0px;
            background-color: #fff;
            transition: 0.3s;
            object-fit: contain;
            object-position: center;
            &:hover {
                opacity: 0.7;
            }
        }
    }
}

@keyframes loading {
    from {
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    to {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
}
</style>

// #3e31e4 // #332ab4 // #251e85 // #130f4a // #0c0b20
