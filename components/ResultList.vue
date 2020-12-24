<template>
    <div class="result" id="result">
        <img :src="img" width="100%" height="100%" />
        <div class="icon">
            <font-awesome-icon icon="play" size="2x" id="icon" />
        </div>
        <div class="detail">
            <h3>{{ trackName }}</h3>
            <h6>{{ artist }}</h6>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        trackName: {
            required: true,
            type: String
        },
        artist: {
            required: true,
            type: String
        },
        img: {
            required: false,
            type: String,
            default: '/images/img3.jpg"'
        }
    }
}
</script>

<style lang="scss" scoped>
.result {
    width: 250px;
    height: 250px;
    margin: 15px 5px;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px #000;
    transition: background 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;
    border-radius: 50%;
    overflow: hidden;
    img {
        position: absolute;
        bottom: 0;
        object-fit: cover;
        object-position: center;
    }
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
        z-index: 10;
        background: linear-gradient(45deg, #130f4aa8, #ffffff62);
        display: none;
        transition: all 1s;
        #icon {
            color: #130f4a;
            margin: auto;
        }
    }
    &:hover .icon {
        display: flex;
    }
    &:hover .detail {
        height: 45px;
    }
    .detail {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0px;
        background-image: radial-gradient(
            circle farthest-corner at 22.4% 21.7%,
            rgba(4, 189, 228, 1) 0%,
            rgba(2, 83, 185, 1) 100.2%
        );
        transition: 1s;
        color: #2b2e30;
        text-align: center;
        box-shadow: 0px -5px 5px 0px #1b1b1b, 0px -10px 50px 0px #1b1b1b;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        z-index: 15;
        h6,
        h3 {
            font-family: "Andika New Basic", sans-serif;
            transition: display 1s;
        }
        h3 {
            display: none;
        }
        &:hover {
            height: 70%;
            line-height: 2rem;
        }
        &:hover h3 {
            display: inline;
            font-size: 1.4rem;
        }
        &:hover h6 {
            font-size: 1rem;
        }
    }
}
</style>
