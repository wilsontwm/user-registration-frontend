<template>
    <div id="reset-password">
        <ResetPasswordForm />
    </div>
</template>
<script>
import ResetPasswordForm from '@/components/auth/forms/ResetPasswordForm.vue'

export default {
    name: "ResetPassword",
    components: {
        ResetPasswordForm
    }
}
</script>
<style lang="scss" scoped>
#reset-password {
   width: 580px;
   margin: 150px auto 20px auto; 
}
</style>