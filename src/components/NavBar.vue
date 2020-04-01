<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav id="nav" class="my-2 my-md-0 mr-md-3">
            <router-link class="p-2 text-dark" to="/">Home</router-link>
            <router-link v-if="auth.loggedIn" class="p-2 text-dark" to="/dashboard">Dashboard</router-link>
            <router-link class="p-2 text-dark" to="/about">About</router-link>
        </nav>    
        <router-link class="btn btn-outline-primary" to="/login" v-if="!auth.loggedIn && isShowLoginBtn">Login</router-link>
        <router-link class="btn btn-outline-primary" to="/signup" v-if="!auth.loggedIn && !isShowLoginBtn">Signup</router-link>
        <button v-if="auth.loggedIn" v-on:click="handleLogout" class="btn btn-outline-primary">Logout</button>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: "NavBar",
    computed: {
        ...mapState({
            auth: state => state.auth.status
        }),
        isShowLoginBtn() {
            return this.$route.name !== 'Login'
        }
    },
    methods: {
        ...mapActions('auth', ['logout']),
        closeAlert(e) {
            this.read();
        },
        handleLogout(e) {
            this.logout();
        }
    },
}
</script>
<style lang="scss" scoped>
</style>