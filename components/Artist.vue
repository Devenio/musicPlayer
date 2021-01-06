<template>
    <div class="container">
        <div class="right-info">
            <img
                :src="img"
                alt="picture"
                width="100px"
                height="100px"
                class="img"
            />
            <div class="text">
                <div>
                    <p>
                        <strong>{{ artist }}</strong>
                    </p>
                    <small @click="redirectToAlbum">click to see {{ artist }} album</small>
                </div>
                <p>
                    Global rank: <strong>{{ rank }}</strong>
                </p>
            </div>
        </div>

        <div class="left-info">
            <div class="icons">
                <font-awesome-icon
                    class="icon"
                    size="lg"
                    icon="plus"
                ></font-awesome-icon>
                <font-awesome-icon
                    class="icon"
                    size="lg"
                    icon="share"
                ></font-awesome-icon>
                <font-awesome-icon
                    class="icon"
                    size="lg"
                    icon="save"
                ></font-awesome-icon>
            </div>
            <button class="report">REPORT</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        artist: {
            type: String
        },
        rank: {
            type: Number
        },
        img: {
            type: String
        }
    },
    methods: {
        redirectToAlbum(){
            this.$nuxt.context.redirect(`/${this.artist}/album`)
        }
    },
};
</script>

<style lang="scss" scoped>
* {
    font-family: "Roboto", sans-serif;
}
.container {
    width: 800px;
    height: 100px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    .right-info,
    .left-info {
        height: inherit;
    }
    .right-info {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        color: #fff;
        .img {
            object-fit: cover;
            object-position: center;
            box-shadow: 0 0 0 3px #99999950;
        }
        .text {
            height: inherit;
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
            flex-direction: column;
            margin-left: 15px;
            width:max-content;
            small {
                color: #e93d3a;
                cursor: pointer;
            }
        }
        strong {
            color: #ccc;
        }
    }
    .left-info {
        color: #fff;
        width: 150px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        .icons {
            width: 100%;
            padding: 15px 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
            .icon {
                cursor: pointer;
                &:hover {
                    color: #ccc;
                }
            }
        }
        .report {
            width: 100%;
            background-color: #e02e43;
            height: 40px;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            color: #ccc;
            box-shadow: 0 0 2px 3px #00000050;
        }
    }
}
</style>
