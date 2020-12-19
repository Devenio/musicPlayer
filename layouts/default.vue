<template>
    <div>
        <appHeader />
        <Nuxt />
        <footer>
            <div class="social-media-icons">
            </div>
            <div class="copy-right">
                &copy; 2020 - 2021, Saturday, December 19, Nima Shahbazi
            </div>
        </footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
    components: {
        appHeader: Header
    }
}
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    min-height: 150px;
    background-color: #0c0b20;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .social-media-icons,
    .copy-right {
        width: fit-content;
        height: 50px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .social-media-icons{
    }
}
</style>
