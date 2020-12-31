<template>
    <div class="container">
        <!-- <div class="square"></div> -->
        <nav>
            <div class="search">
                <div class="icon">
                    <font-awesome-icon
                        icon="search"
                        class="searchIcon"
                        @click="toggleSearchInput"
                        v-if="!isLoading"
                    ></font-awesome-icon>
                    <font-awesome-icon
                        icon="spinner"
                        class="searchIcon spinner"
                        v-if="isLoading"
                    ></font-awesome-icon>
                </div>
                <input
                    type="text"
                    id="search-input"
                    placeholder="i am looking for..."
                    v-model="searchedString"
                    @keypress.enter="getOtherData"
                />
            </div>
            <ul class="navbar">
                <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
                <nuxt-link to="/playList" class="navbar-item">
                    playList
                </nuxt-link>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isOpen: false,
            searchedString: "",
            isLoading: false
        };
    },
    methods: {
        toggleSearchInput() {
            let input = document.querySelector("#search-input");

            this.isOpen = !this.isOpen;

            if (this.searchedString.length > 0) {
                this.getOtherData();
            } else if (this.isOpen) {
                input.style = "width:200px; padding: 10px;";
            } else {
                input.style = "width:0px; padding:0px;";
            }
        },
        // get data from api
        getOtherData() {
            let input = document.querySelector("#search-input");
            // this.editStylesInSearch();
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
                    this.$store.dispatch("setApiData", response.data);
                    console.log(this.searchedString);
                    this.searchedString = "";
                    input.style = "width:0px; padding:0px;";
                    // this.toggleSearchInput()
                    this.$nuxt.context.route.fullPath != "/result"
                        ? this.$nuxt.context.redirect("/result")
                        : this.$nuxt.refresh();
                    console.log("response", response.data);
                })
                .catch(error => {
                    console.error("error", error);
                });
        }
    },
    mounted() {
        let navbar = document.querySelector("nav");
        document.addEventListener("scroll", e => {
            document.documentElement.scrollTop > 100
                ? (navbar.style = "background: #0101027e")
                : (navbar.style = "background: #212532 url('/images/footerbg.jpg') no-repeat center fixed")
        });
    }
};
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212532 url('/images/footerbg.jpg') no-repeat center fixed;
    position: fixed;
    z-index: 1030;
    transition: background 400ms;
    top: 0;
    .search {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        height: 30px;
        left: 0px;
        padding-left: 30px;
        width: 240px;
        box-sizing: border-box;
        background-color: #00000000;
        border-radius: 0 10px 10px 0;
        overflow: hidden;
        #search-input {
            transform: translateY(-35deg);
            height: inherit;
            width: 0px;
            padding: 0px;
            margin-left: 5px;
            border-radius: 5px;
            background-color: #ffffffc5;
            margin-right: 5px;
            transition: all 1s;
        }
        .icon {
            width: 30px;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffffc5;
            transition: color 200ms;
            font-size: 1.3rem;
            &:hover {
                color: #ff504d;
            }
        }
        .spinner {
            animation: spin 2s infinite linear;
        }
    }
    .navbar {
        max-width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0;
        .navbar-item {
            margin: 10px;
            width: 70px;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 1.2rem;
        }
    }
}

.square {
    width: 400px;
    height: 400px;
    background: #332ab4;
    border-radius: 8rem;
    position: absolute;
    top: -10em;
    left: -10em;
    transform: rotate(20deg);
    z-index: -10;
}

.nuxt-link-exact-active {
    font-weight: bold;
    color: #f5526d !important;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>

// #3e31e4 // #332ab4 // #251e85 // #130f4a // #0c0b20
