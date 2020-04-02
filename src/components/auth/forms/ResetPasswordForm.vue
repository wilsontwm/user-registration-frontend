<template>
    <div id="reset-password-form">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form class="form-reset-password" @submit.prevent="handleSubmit">
                <h1 class="mb-3 font-weight-normal">Reset your password</h1>   
                <ValidationProvider name="Password" rules="required|min:8" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="inputPassword" class="control-label">Password</label>
                        <input type="password" v-model="password" name="password" id="inputPassword" :class="`${errors.length ? 'is-invalid' : ''} form-control`">
                        <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                </ValidationProvider>                
                <ValidationProvider name="Confirm Password" rules="required|min:8|password:@Password" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="inputConfirmPassword" class="control-label">Confirm Password</label>
                        <input type="password" v-model="confirmPassword" name="confirmPassword" id="inputConfirmPassword" :class="`${errors.length ? 'is-invalid' : ''} form-control`">
                        <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                </ValidationProvider>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="invalid || status.resettingPassword">Submit</button>
                </div>                
            </form>
        </ValidationObserver>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

export default {
    name: "ResetPasswordForm",
    data () {
        return {
            password: '',
            confirmPassword: '',
            resetPasswordCode: ''
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
    created() {
        this.resetPasswordCode = this.$route.params.code;
    },
    methods: {
        ...mapActions('auth', ['resetPassword']),
        resetForm() {
            this.password = '';
            this.confirmPassword = '';
            this.$refs.observer.reset();
        },
        async handleSubmit(e) {
            const { password, resetPasswordCode } = this;
            const isValid = await this.$refs.observer.validate();
            if(isValid) {
                var response = await this.resetPassword({resetPasswordCode, password});
                if(response.success) {
                    this.resetForm();
                }
            }
        }
    }
}

extend('min', {
    ...min,
    message: (field, params) => `${field}` + ' must be at least ' + `${params.length}` + ' character(s).'
});

extend('required', {
    ...required,
    message: field => `${field}` + ' is required.'
});

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
});

</script>
<style lang="scss" scoped>

</style>