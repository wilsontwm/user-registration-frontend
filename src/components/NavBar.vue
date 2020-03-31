<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav id="nav" class="my-2 my-md-0 mr-md-3">
            <router-link class="p-2 text-dark" to="/">Home</router-link>
            <router-link class="p-2 text-dark" to="/about">About</router-link>
        </nav>    
        <router-link class="btn btn-outline-primary" to="/login" v-if="isShowLoginBtn">Login</router-link>
        <router-link class="btn btn-outline-primary" to="/signup" v-if="!isShowLoginBtn">Signup</router-link>
    </div>
</template>
<script>
export default {
    name: "NavBar",
    computed: {
        isShowLoginBtn() {
            return this.$route.name !== 'Login'
        }
    }
}
</script>
<style lang="scss" scoped>
</style>