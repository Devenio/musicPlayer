<template>
    <div class="container">
        <div class="info-box">
            <div class="info">
                <p>
                    <strong>Genre:</strong>
                    <span
                        v-for="(genre, index) in album.genres"
                        :key="genre.id"
                    >
                        {{ album.genres[index].name }},
                    </span>
                </p>
                <p><strong>Duration:</strong> {{ album.duration }}</p>
                <p><strong>Release Date:</strong> {{ album.releaseDate }}</p>
                <p><strong>Artist:</strong> {{ album.artist }}</p>
                <p><strong>Tracks number:</strong> {{ album.nb_tracks }}</p>
                <p><strong>Title:</strong> {{ album.title }}</p>
                <p>
                    <strong>contributors:</strong>
                    <span
                        v-for="(item, index) in album.contributors"
                        :key="item.id"
                    >
                        {{ album.contributors[index].name }},
                    </span>
                </p>
            </div>
            <div class="img"></div>
        </div>
        <div class="trackList">
            <AlbumTracks
                v-for="(track, index) in album.tracks"
                :key="track.id"
                :duration="album.tracks[index].duration"
                :title="album.tracks[index].title"
                :rank="album.tracks[index].rank"
                :imageSrc="album.imgSrc"
                :id="album.tracks[index].id"
            />
        </div>
    </div>
</template>

<script>
export default {
    layout: "track",
    computed: {
        album() {
            let data = this.$store.getters.album;
            return {
                duration: this.setDuration(data.duration),
                releaseDate: data.release_date,
                artist: data.artist.name,
                nb_tracks: data.nb_tracks,
                title: data.title,
                genres: data.genres.data,
                contributors: data.contributors,
                imgSrc: data.cover_xl,
                tracks: data.tracks.data
            };
        }
    },
    mounted() {
        let imgEl = document.querySelector(".img");
        imgEl.style = `background-image: url('${this.album.imgSrc}')`;
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
        }
    }
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
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        position: relative;
        position: relative;
        overflow: hidden;
        background-attachment: fixed;
        background-color: #0c0b208a;
        &::before {
            content: "";
            top: 0;
            position: absolute;
            left: 0;
            width: 105%;
            height: 105%;
            transform: translate(-2.5%, -2.5%);
            background-image: url("/images/bg.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            filter: blur(7px) grayscale(50%);
            z-index: -1030;
        }
        .box {
            position: absolute;
            width: 250px;
            z-index: 1030;
            height: 250px;
            border-radius: 80px;
            background: #fff;
            &.right {
                top: -100px;
                right: -100px;
            }
            &.left {
                bottom: -100px;
                left: -100px;
            }
        }
        .img {
            width: 400px;
            height: 400px;
            clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .info {
            width: 400px;
            height: 300px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            color: #ccc;
            line-height: 2rem;
        }
    }
    .trackList{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding-top: 15px;
        padding-bottom: 15px;
        background-image: url("/images/img8.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }
}

// clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0% 100%);
</style>
