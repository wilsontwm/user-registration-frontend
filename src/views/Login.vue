<template>
    <div id="login">
        <LoginForm />
        <small>Don't have an account yet? Click <router-link class="" to="/signup">here</router-link> to sign up now.</small>
    </div>
</template>
<script>
import LoginForm from '@/components/auth/forms/LoginForm.vue'

export default {
    name: "Login",
    components: {
        LoginForm
    }
}
</script>
<style lang="scss" scoped>
#login {
   width: 580px;
   margin: 120px auto 20px auto; 
}
</style>