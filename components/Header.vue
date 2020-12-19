<template>
    <div class="container">
        <!-- <div class="square"></div> -->
        <nav>
            <ul class="navbar">
                <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
                <nuxt-link to="/playList" class="navbar-item"
                    >playList</nuxt-link
                >
            </ul>
        </nav>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0c0b20;
    box-shadow: 0px 9px 8px 0px #9f9f9f;
    .navbar {
        max-width: 100%;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0;
        .navbar-item {
            margin: 10px;
            width: 70px;
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 1.2rem;
        }
    }
}

.square {
    width: 400px;
    height: 400px;
    background: #332ab4;
    border-radius: 8rem;
    position: absolute;
    top: -10em;
    left: -10em;
    transform: rotate(20deg);
    z-index: -10;
}

.nuxt-link-exact-active {
    font-weight: bold;
    color: #f5526d !important;
}
</style>

// #3e31e4 // #332ab4 // #251e85 // #130f4a // #0c0b20
