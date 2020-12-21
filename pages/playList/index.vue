<template>
    <div class="playlist">
        <div class="postList1">
            <MusicPost
                v-for="index in 4"
                :key="index"
                class="post"
                :imgSrc="imgSrc[index - 1]"
                :artist="artist[index - 1]"
                :trackName="trackName[index - 1]"
            />
        </div>
        <div class="singleTrack">
            <div class="name">
                <h2>Amir Tataloo</h2>
            </div>
            <div class="track">
                <font-awesome-icon
                    icon="backward"
                    size="2x"
                    class="icon backward"
                />
                <font-awesome-icon icon="play" size="2x" class="icon play" />
                <div class="cover"></div>
                <font-awesome-icon icon="share" size="2x" class="icon share" />
                <font-awesome-icon
                    icon="forward"
                    size="2x"
                    class="icon forward"
                />
            </div>
        </div>
        <div class="postList2">
            <MusicPost
                v-for="index in 4"
                :key="index"
                class="post"
                :imgSrc="imgSrc[index - 1]"
                :artist="artist[index - 1]"
                :trackName="trackName[index - 1]"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: [
                "/images/img1.jpg",
                "/images/img2.jpg",
                "/images/img3.jpg",
                "/images/img4.jpg"
            ],
            artist: ["behnam bani", "chavoshi", "amir tataloo", "behzad leito"],
            trackName: [
                "qorse qamar",
                "shabi ke mah kamel shod",
                "mehmoni",
                "bez jibet"
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.playlist {
    width: 100%;
    border: black;
    min-height: 400px;
    box-sizing: border-box;
}
.postList1,
.postList2 {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: auto;
    border: red;
    padding: 40px 10px;
    position: relative;
    .post {
        z-index: 10;
    }
}
.postList1 {
    background-image: url("/images/main.jpg");
    background-size: cover;
    background-position: center;
}
.postList2 {
    background-image: url("/images/img7.jpg");
    background-size: cover;
    background-position: center;
}
//
.singleTrack {
    width: 100%;
    height: 600px;
    background-image: url("/images/img5.jpg");
    background-size: cover;
    background-position: center;
    box-shadow: 0px 0px 10px 10px #000;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .name {
        h2 {
            font-family: "Shadows Into Light", cursive;
            font-size: 2rem;
        }
    }
    .track {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .icon {
            color: #a01010;
            font-size: 3.5rem;
        }
        .backward,
        .forward {
            font-size: 2.8rem;
        }
        .cover {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            box-shadow: 5px 5px 5px 0px #0051ff, -5px -5px 5px 0px #a200ff,
                5px -5px 5px 0px #f00, -5px 5px 5px 0px #fcd;
            background-image: url("/images/img6.jpg");
            background-size: cover;
            background-position: center;
            animation: loop 20s linear infinite;
        }
    }
}

@keyframes loop {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
