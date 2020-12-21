<template>
    <div class="music-post">
        <div class="track-cover">
            <img :src="imgSrc" width="200px" height="200px" class="cover" />
            <div class="icon">
                <font-awesome-icon icon="play" size="2x" />
            </div>
        </div>
        <div class="track-detail">
            <!-- <div class="glass"></div> -->
            <div class="names">
                <h2>{{ trackName }}</h2>
                <h5>{{ artist }}</h5>
            </div>
            <div class="preview">
                <div class="progress">
                    <font-awesome-icon icon="play" class="icon play" />
                    <font-awesome-icon icon="download" class="icon" />
                    <input type="range" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["imgSrc", "trackName", "artist"]
}
</script>

<style lang="scss" scoped>
* {
    font-family: "Roboto", sans-serif;
}
.music-post {
    width: 250px;
    height: 400px;
    position: relative;
    .track-cover {
        width: 100%;
        height: 50%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:hover .cover {
            filter: blur(5px);
            cursor: pointer;
        }
        &:hover .icon {
            display: flex;
        }
        .cover {
            border-radius: 20px;
            box-shadow: 0px 0px 10px 0px #000;
        }
        .icon {
            color: #fff;
            position: absolute;
            top: 35%;
            left: 40%;
            border: 1px solid #0d0d0d;
            border-radius: 50%;
            background: #0d0d0d;
            display: none;
            justify-content: center;
            align-items: center;
            padding: 10px;
            transition: all 1000ms;
            &:first-child {
            }
        }
    }
    .track-detail {
        width: 100%;
        height: 70%;
        position: absolute;
        box-shadow: 0px 0px 10px 0px #130f4a;
        padding-top: 100px;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
        border-radius: 10px 10px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(135deg, #1b2541, #ccc);
        font-family: "Shadows Into Light", cursive;
        .names {
            text-align: center;
            line-height: 2rem;
            h2 {
                font-family: "Langar", cursive;
            }
        }
        .glass {
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            background: transparent;
            filter: blur(5px);
            // background-image: url("/images/main.jpg");
            // background-size: cover;
            // background-position: center;
            /* background-color: #fff; */
        }
        .preview {
            width: 100%;
            height: 60px;
            border: red;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            background: linear-gradient(135deg, #3e31e4, #251e85);
            box-shadow: 0px 1px 23px 6px #888;
            .progress {
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                input[type="range"] {
                    appearance: none;
                    background: transparent;
                    &::-moz-range-thumb {
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                        border: 1px solid #000;
                        background: #fff;
                        border-radius: 3px;
                        height: 10px;
                        width: 20px;
                        cursor: pointer;
                    }
                    &:focus {
                        outline: none;
                    }
                    &::-moz-range-track {
                        background: #ff2744;
                        height: 7px;
                        border-radius: 10px;
                        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
                    }
                }
            }
        }
    }
}
.icon {
    color: #bed8e7;
}
</style>
