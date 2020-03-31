<template>
    <div id="login" class="text-center">
        <SignupForm />
        <small>Already have an account? Click <router-link class="" to="/login">here</router-link> to login now.</small>
    </div>
</template>
<script>
import SignupForm from '@/components/auth/forms/SignupForm.vue'

export default {
    name: "Login",
    components: {
        SignupForm
    }
}
</script>
<style lang="scss" scoped>
#login {
   width: 580px;
   margin: 150px auto 20px auto; 
}
</style>