<template>
    <div id="forgotten-password-form">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form class="form-forgotten-password" @submit.prevent="handleSubmit">
                <h1 class="font-weight-normal">Forgotten your password?</h1>   
                <small class="mb-3">Enter your email and a reset password link will be sent to you</small>         
                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                    <div class="form-group">
                        <input type="text" v-model="email" name="email" id="inputEmail" :class="`${errors.length ? 'is-invalid' : ''} form-control`" placeholder="Email" autofocus="">
                        <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                </ValidationProvider>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="invalid || status.forgettingPassword">Submit</button>
                </div>                
            </form>
        </ValidationObserver>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

export default {
    name: "ForgottenPasswordForm",
    data () {
        return {
            email: ''
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
    methods: {
        ...mapActions('auth', ['forgetPassword']),
        resetForm() {
            this.email = '';
            this.$refs.observer.reset();
        },
        async handleSubmit(e) {
            const { email } = this;
            const isValid = await this.$refs.observer.validate();
            if(isValid) {
                var response = await this.forgetPassword({email});
                if(response.success) {
                    this.resetForm();
                }
            }
        }
    }
}

extend('email', {
    ...email,
    message: 'Email is not valid.'
});

extend('required', {
    ...required,
    message: field => `${field}` + ' is required.'
});

</script>
<style lang="scss" scoped>

</style>