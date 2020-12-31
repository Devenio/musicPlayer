<template>
    <div>asdsad</div>
</template>

<script>
import axios from "axios";
export default {
    mounted() {
        const options = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/album/47961592",
            headers: {
                "x-rapidapi-key":
                    "4fca86ca44msh53fd25fe45207b7p1af68bjsn640145f8b0fc",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        };

        axios
            .request(options)
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    }
};
</script>

<style lang="scss" scoped></style>
