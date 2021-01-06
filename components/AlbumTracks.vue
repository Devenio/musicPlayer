<template>
    <div class="wrapper">
        <div id="img"></div>
        <img class="imageC" :src="imageSrc" width="150px" height="150px" />
        <div class="details">
            <p><strong>Duration:</strong> {{ cDuration }}</p>
            <p><strong>Rank:</strong> {{ rank }}</p>
            <p><strong>Title:</strong> {{ title }}</p>
        </div>
        <div class="icons">
            <font-awesome-icon
                size="lg"
                icon="share"
                id="share"
            ></font-awesome-icon>
            <font-awesome-icon
                size="lg"
                icon="heart"
                id="like"
            ></font-awesome-icon>
            <font-awesome-icon
                size="lg"
                icon="play"
                id="play"
                @click="getMusic(id, true)"
            ></font-awesome-icon>
        </div>
        <!-- play wrapper design after click on play -->
        <div class="play-wrapper" :id="`p${id}`">
            <strong>00:00</strong>
            <input type="range" id="duration" min="0" max="100" value="0" />
            <font-awesome-icon
                size="lg"
                class="icon"
                id="spinner"
                icon="spinner"
                v-if="isLoading"
            ></font-awesome-icon>
            <font-awesome-icon
                size="lg"
                class="icon"
                icon="play"
                @click="playMusic(id)"
                v-else-if="!isPlaying"
            ></font-awesome-icon>
            <font-awesome-icon
                size="lg"
                class="icon"
                icon="pause"
                v-else
            ></font-awesome-icon>
            <font-awesome-icon
                size="lg"
                class="icon"
                icon="times"
                @click="getMusic(id, false)"
            ></font-awesome-icon>
        </div>
        <audio :src="trackSrc" :data-key="id"></audio>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            isPlaying: false,
            isLoading: false,
            trackSrc: null
        };
    },
    props: {
        duration: {
            type: Number
        },
        rank: {
            type: Number
        },
        title: {
            type: String
        },
        imageSrc: {
            type: String
        },
        id: {
            type: Number
        }
    },
    computed: {
        cDuration() {
            return this.setDuration(this.duration);
        }
    },
    methods: {
        setDuration(seconds) {
            let hour = Math.floor(seconds / 3600);
            let min = Math.floor((seconds % 3600) / 60);
            let second = (seconds % 3600) % 60;

            hour <= 9 ? (hour = `0${hour}`) : (hour = hour);
            min <= 9 ? (min = `0${min}`) : (min = min);
            second <= 9 ? (second = `0${second}`) : (second = second);

            return `${hour}:${min}:${second}`;
        },
        getMusic(id, status) {
            let playBox = document.querySelector(`#p${id}`);

            if (status) {
                this.isLoading = true;

                playBox.style =
                    "clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)";

                const options = {
                    method: "GET",
                    url: `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`,
                    headers: {
                        "x-rapidapi-key":
                            "4fca86ca44msh53fd25fe45207b7p1af68bjsn640145f8b0fc",
                        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                    }
                };

                axios
                    .request(options)
                    .then(response => {
                        console.log(response.data);
                        this.isLoading = false;
                        this.trackSrc = response.data.preview
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else {
                playBox.style =
                    "clip-path: polygon(100% 0, 100% 0%, 0% 100%, 0% 100%)";
            }
        },
        playMusic(id){
            let audio = document.querySelector(`[data-key=${id}]`)
            console.log(audio);
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    margin: 15px 0;
    width: 40%;
    height: 150px;
    overflow: hidden;
    position: relative;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1050;
    .imageC {
        object-fit: cover;
        object-position: center;
    }
    #img {
        width: 105%;
        height: 105%;
        background-image: url("/images/footerbg.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(8px) grayscale(0%);
        z-index: -1030;
        position: absolute;
        transform: translate(-2.5%, -2.5%);
        top: 0;
        left: 0;
    }
    .details {
        width: 250px;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        color: #ccc;
        margin-left: 20px;
        strong {
            color: #bbb;
        }
    }
    .icons {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width: 50px;
        color: #eee;
        cursor: pointer;
    }
    #like {
        transition: all 200ms;
        &:hover {
            color: #ff504d;
        }
    }
    #share {
        transition: all 200ms;
        &:hover {
            color: #009231;
        }
    }
    #play {
        transition: all 200ms;
        &:hover {
            color: #024fc4;
        }
    }
    .play-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 4040;
        background: #212532 url("/images/footerbg.jpg") no-repeat center fixed;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        clip-path: polygon(100% 0, 100% 0%, 0% 100%, 0% 100%);
        transition: all 550ms ease-in-out;
        #duration,
        #volume {
            appearance: none;
            background: transparent;
            cursor: pointer;
        }
        #duration::-moz-range-thumb {
            width: 15px;
            height: 15px;
            background: #000;
            border: none;
            border-radius: 5px;
            clip-path: polygon(
                25% 0%,
                75% 0%,
                100% 50%,
                75% 100%,
                25% 100%,
                0% 50%
            );
        }
        #duration::-moz-range-track {
            width: 150px;
            height: 7.5px;
            background: #00000050;
        }
        #volume {
            transform: rotate(90deg);
        }
        #volume::-moz-range-thumb {
            width: 10px;
            height: 30px;
            border-radius: 5px;
            border: none;
            background: #00000080;
        }
        #volume::-moz-range-track {
            width: 100px;
            height: 7.5px;
            background: #00000050;
        }
        .icon {
            cursor: pointer;
            color: #ccc;
            &:hover {
                color: #999;
            }
        }
        #spinner {
            animation: loop 2s linear infinite;
        }
    }
}
@keyframes loop {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
