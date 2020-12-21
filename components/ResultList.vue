<template>
    <div class="result">
        <font-awesome-icon
            icon="play"
            size="2x"
            style="color: #fff;"
            class="icon"
        />
        <div class="detail">
            <h2>{{ trackName }}</h2>
            <h4>{{ artist }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: ["trackName", "artist"]
}
</script>

<style lang="scss" scoped>
.result {
    width: 250px;
    height: 250px;
    margin: 10px 0px;
    position: relative;
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px #000;
    transition: background 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/images/img3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 1s;
    .icon {
        margin-bottom: 60px;
        display: none;
        transition: all 1s;
    }
    &:hover {
        background: linear-gradient(45deg, #130f4aa8, #ffffff62),
            url("/images/img3.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    &:hover .icon {
        display: block;
    }
    &:hover .detail {
        height: 60px;
    }
    .detail {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0px;
        background: linear-gradient(to right, #033cb8, #a1c7f1);
        transition: 1s;
        text-align: center;
        line-height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
        h2,
        h4 {
            display: inline-block;
            font-family: "Shadows Into Light", cursive;
            color: #130f4a;
        }
    }
}
</style>
