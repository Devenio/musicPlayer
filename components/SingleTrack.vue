<template>
    <div class="container">
        <div class="slide">
            <div class="pre">
                <font-awesome-icon
                    icon="chevron-left"
                    size="4x"
                    @click="previousTrack"
                />
            </div>
            <div class="cover">
                <img :src="trackData.imgSrc" width="100%" height="100%" />
                <span class="duration">{{ trackData.duration }}</span>
            </div>
            <div class="next">
                <font-awesome-icon
                    icon="chevron-right"
                    size="4x"
                    @click="nextTrack"
                />
            </div>
        </div>

        <div class="track-detail">
            <div class="trackName">{{ trackData.trackName }}</div>
            <div class="artist">{{ trackData.artist }}</div>
            <div class="current-time">{{ trackData.currentTime }}</div>
        </div>

        <div class="progressBar"></div>

        <div class="player-btns">
            <div class="icon volume">
                <input
                    type="range"
                    min="0"
                    max="100"
                    @blur="toggleVolumeRange(false)"
                    value="100"
                    @input="changeVolumeIcons"
                />
                <font-awesome-icon
                    icon="volume-off"
                    size="lg"
                    @click="toggleVolumeRange(true)"
                    v-if="volume == 'off'"
                />
                <font-awesome-icon
                    icon="volume-down"
                    size="lg"
                    @click="toggleVolumeRange(true)"
                    v-if="volume == 'down'"
                />
                <font-awesome-icon
                    icon="volume-up"
                    size="lg"
                    @click="toggleVolumeRange(true)"
                    v-if="volume == 'up'"
                />
            </div>
            <div class="icon previous-music">
                <font-awesome-icon
                    icon="backward"
                    size="lg"
                    @click="previousTrack"
                />
            </div>
            <div class="icon play" @click="togglePlayIcon">
                <font-awesome-icon icon="play" size="2x" v-if="!isPlaying" />
                <font-awesome-icon icon="pause" size="2x" v-if="isPlaying" />
            </div>
            <div class="icon next-music">
                <font-awesome-icon
                    icon="forward"
                    size="lg"
                    @click="nextTrack"
                />
            </div>
            <div class="icon share">
                <font-awesome-icon icon="share" size="lg" />
            </div>
        </div>
        <audio
            :src="trackData.track"
            id="track"
            @timeupdate="timeUpdated"
        ></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            trackData: {
                imgSrc: "",
                duration: "",
                trackName: "",
                artist: "",
                track: "",
                currentTime: ""
            },
            volume: "up",
            isPlaying: false
        };
    },
    created() {
        // set track data
        let data = this.$store.getters.musicData.data[this.$route.params.id];

        this.trackData.imgSrc = data.album.cover_big;
        this.trackData.trackName = data.album.title;
        this.trackData.artist = data.artist.name;
        this.trackData.track = data.preview;
        // calc music time
        this.trackData.duration = this.secondsToMinutes(data.duration);
    },
    mounted() {
        console.log("mounted");
        setTimeout(() => {
            let progressBar = document.querySelector(".progressBar");

            for (let i = 1; i <= 100; i++) {
                // variables
                let number = this.randomNumber();
                let span = document.createElement("span");
                // append children
                span.setAttribute("class", "progress-level");
                progressBar.appendChild(span);

                this.setProgressLevelStyles(number, i);
            }
        }, 2000);

        // set current time
        let progressLevel = document.querySelectorAll(".progress-level");

        progressLevel.forEach(item => {
            item.addEventListener("click", e => {
                console.log(e);
            });
        });
    },
    methods: {
        randomNumber() {
            return Math.floor(Math.random() * 46) + 5;
        },
        setProgressLevelStyles(number, index) {
            // set Styles for progress Levels
            let progressLevel = document.querySelectorAll(".progress-level");

            progressLevel[index - 1].style.height = `${number}px`;
            progressLevel[index - 1].style.width = "3px";
            progressLevel[index - 1].style.borderRadius = "5px";
            progressLevel[index - 1].style.margin = "0px 1px";
            progressLevel[index - 1].style.background = "#cccccc5b";
        },
        toggleVolumeRange(status) {
            let input = document.querySelector("input[type='range']");
            status
                ? (input.style.display = "block")
                : (input.style.display = "none");
            console.log(input.value);
        },
        changeVolumeIcons() {
            let range = document.querySelector("input[type='range']");
            range.value == 0
                ? (this.volume = "off")
                : range.value <= 50
                ? (this.volume = "down")
                : (this.volume = "up");

            let volume = range.value / 100;
            let audio = document.querySelector("audio");
            audio.volume = volume;
        },
        togglePlayIcon() {
            this.isPlaying = !this.isPlaying;
            let audio = document.querySelector("audio");
            this.isPlaying ? audio.play() : audio.pause();
        },
        nextTrack() {
            let id = Number(this.$route.params.id);
            $nuxt.context.redirect(`/result/${id + 1}`);
        },
        previousTrack() {
            let id = Number(this.$route.params.id);
            $nuxt.context.redirect(`/result/${id - 1}`);
        },
        timeUpdated() {
            let audio = document.querySelector("audio");
            this.trackData.currentTime = this.secondsToMinutes(
                Math.floor(audio.currentTime)
            );
            audio.currentTime === audio.duration
                ? (this.isPlaying = false)
                : (this.isPlaying = true);
        },
        secondsToMinutes(timeInSeconds) {
            let minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            return seconds < 10
                ? "0" + minutes + ":" + "0" + seconds
                : "0" + minutes + ":" + seconds;
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    // music player cover style
    .slide {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        // track picture styles
        .cover {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px 0px 5px 1px #000, 0 0 5px 2px #ddd;
            position: relative;
            .duration {
                position: absolute;
                bottom: 15px;
                left: 200px;
                transform: translate(-50%);
                color: #fff;
                font-family: "Special Elite", cursive;
                font-size: 2rem;
                font-weight: bold;
            }
        }
        .pre,
        .next {
            color: #aaa;
            cursor: pointer;
            transition: 200ms;
            &:hover {
                color: #eee;
            }
        }
    }
    // progress bar styles
    .progressBar {
        width: 500px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    // track name and artist styles
    .track-detail {
        height: 110px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        font-family: "Special Elite", cursive;
        .trackName {
            font-size: 2rem;
            color: #ddd;
        }
        .artist {
            font-size: 1.5rem;
            color: #e93d3a;
            font-weight: bold;
        }
        .current-time {
            font: 1rem;
            color: #ddd;
            font-weight: bold;
        }
    }
    // music player buttons styles
    .player-btns {
        min-width: 500px;
        height: 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .icon {
            border: 1px solid #cccccc5d;
            padding: 10px;
            border-radius: 50%;
            text-align: center;
            color: #ccc;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 500ms;
            &:hover {
                border: 1px solid #ff504d;
                box-shadow: 0px 0px 5px 1px #ff504d,
                    inset 0px 0px 5px 1px #ff504d;
            }
        }
        .play {
            padding: 15px;
            width: 70px;
            height: 70px;
        }
        .volume {
            position: relative;
            input[type="range"] {
                position: absolute;
                left: -180px;
                appearance: none;
                background: transparent;
                display: none;
                transition: 500ms;
            }
            input[type="range"]::-moz-range-thumb {
                width: 10px;
                height: 15px;
                background: #ccc;
                border-radius: 2px;
                border: none;
                cursor: pointer;
            }
            input[type="range"]::-webkit-slider-thumb {
                width: 15px;
                height: 15px;
                background: #161515;
                border-radius: 50%;
                border: none;
                box-shadow: 0px 0px 5px 0px #666;
            }
            input[type="range"]::-moz-range-track {
                width: 100%;
                height: 15px;
                background: rgba(0, 0, 0, 0.39);
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
