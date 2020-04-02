<template>
    <div id="forgotten-password">
        <ForgottenPasswordForm />
    </div>
</template>
<script>
import ForgottenPasswordForm from '@/components/auth/forms/ForgottenPasswordForm.vue'

export default {
    name: "Forgotten Password",
    components: {
        ForgottenPasswordForm
    }
}
</script>
<style lang="scss" scoped>
#forgotten-password {
   width: 580px;
   margin: 150px auto 20px auto; 
}
</style>