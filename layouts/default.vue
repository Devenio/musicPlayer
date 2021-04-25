<template>
    <div>
        <appHeader />
        <Nuxt keep-alive />
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

        <!-- Modal -->
        <div class="modal" id="modal">
            <i class="fas fa-exclamation-circle"></i>
            hey! this site is built just for desktop size not mobile size. so i
            know that. have a nice time.
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    data() {
        return {
            showedModal: false
        };
    },
    components: {
        appHeader: Header
    },
    mounted() {
        const modal = document.querySelector("#modal");
        setTimeout(() => {
            if (!this.showedModal) {
                modal.style = "top: 20px;";
            }
        }, 1000);

        setTimeout(() => {
            if (!this.showedModal) {
                modal.style = "top: -100%;";
                this.showedModal = true;
            }
        }, 7000);
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
    &:hover {
        opacity: 0.6;
    }
}

.modal {
    max-width: 300px;
    padding: 10px 15px;
    border: 2px solid #000;
    background-color: #fff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    font-weight: bold;
    position: fixed;
    top: -100%;
    left: 20px;
    border-radius: 10px;
    transition: all 1s;
}
</style>
