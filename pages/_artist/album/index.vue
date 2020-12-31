<template>
    <div class="container">
        <div class="info-box">
            <div class="box"></div>
            <div class="box"></div>
            <div class="info">
                <p>Genre: Rap</p>
                <p>Duration: 1:10:12</p>
                <p>Release Date: 5/4/2020</p>
                <p>Artist: Amir Tataloo</p>
                <p>Tracks number: 20</p>
                <p>Title: sheytan</p>
                <p>contributors: amir tataloo</p>
            </div>
            <div class="img"></div>
        </div>
    </div>
</template>

<script>
export default {
    layout: "track"
};
</script>

<style lang="scss" scoped>
p {
    display: block;
}
.container {
    margin-top: 60px;
    .info-box {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        .img {
            width: 250px;
            height: 250px;
            border: 1px solid black;
        }
        .box{
            position: absolute;
        }
    }
}

// clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);
</style>
