<template>
    <div>
        <appHeader />
        <Nuxt keep-alive/>
        <footer>
            <div class="social-media-icons">
                <i class="fa fa-instagram fa-2x" title="instagram"></i>
                <i class="fa fa-twitter fa-2x" title="twitter"></i>
                <i class="fa fa-youtube fa-2x" title="youtube"></i>
                <i class="fa fa-telegram fa-2x" title="telegram"></i>
                <i class="fa fa-facebook fa-2x" title="facebook"></i>
                <i class="fa fa-whatsapp fa-2x" title="whatsapp"></i>
                <i class="fa fa-github fa-2x" title="github"></i>
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
}

.fa {
    margin: 0px 10px;
    cursor: pointer;
}
.fa-instagram:hover {
    color: #8246b5;
}
.fa-twitter:hover {
    color: #1d9ceb;
}
.fa-youtube:hover {
    color: #990000;
}
.fa-telegram:hover {
    color: #2ea1d7;
}
.fa-facebook:hover {
    color: #3d548e;
}
.fa-whatsapp:hover {
    color: #33d24f;
}
.fa-github:hover {
    border-radius: 50%;
    border: none;
    background: #fff;
    color: #000;
}
</style>
