<template>
    <div>
        <trackHeader />
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
        <div class="scrollToTop" @click="scrollToTop">TOP</div>
    </div>
</template>

<script>
import trackHeader from "@/components/trackHeader.vue";

export default {
    components: {
        trackHeader
    },
    mounted() {
        let scrollItem = document.querySelector(".scrollToTop");

        document.addEventListener("scroll", e => {
            document.documentElement.scrollTop > 100
                ? (scrollItem.style.transform = "translateX(0px)")
                : (scrollItem.style.transform = "translateX(75px)");
        });
    },
    methods: {
        scrollToTop() {
            if (document.documentElement.scrollTop > 900) {
                let offsetTop = document.documentElement.scrollTop;
                let counter = setInterval(() => {
                    let distance = (offsetTop -= 20);
                    if (distance <= 0) clearInterval(counter);
                    document.documentElement.scrollTop = distance;
                }, 1);
            }else{
                document.documentElement.scrollTop = 0
            }
        }
    }
};
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
    z-index: 1030;
    background: #212532 url("/images/footerbg.jpg") no-repeat center fixed;
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
.scrollToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(45deg, #343a40, #adb5bd);
    border: 1px solid #999;
    cursor: pointer;
    transform: translateX(75px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    transition: 300ms;
    &:hover {
        box-shadow: 0px 0px 10px 0px #343a40;
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
