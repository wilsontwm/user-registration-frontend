<template>
    <div id="signup-form">
        <ValidationObserver v-slot="{ invalid }">
            <form class="form-login" @submit.prevent="handleSubmit">
                <div class="text-center">                    
                    <img class="text-center mb-4" src="@/assets/img/gopher.png" alt="" width="60" height="81">
                </div>
                <h1 class="h3 mb-3 font-weight-normal">Sign up for free now!</h1>                           
                <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="inputName" class="control-label">Name</label>
                        <input type="text" v-model="name" name="name" id="inputName" :class="`${errors.length ? 'is-invalid' : ''} form-control`" autofocus="">
                        <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                </ValidationProvider>      
                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="inputEmail" class="control-label">Email</label>
                        <input type="text" v-model="email" name="email" id="inputEmail" :class="`${errors.length ? 'is-invalid' : ''} form-control`">
                        <small class="text-danger">{{ errors[0] }}</small>
                    </div>
                </ValidationProvider>
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
                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="invalid || status.signingUp">Signup</button>
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
    name: "SignupForm",
    data () {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
    methods: {
        ...mapActions('auth', ['login', 'logout']),
        handleSubmit(e) {
            this.submitted = true;
            const { email, password } = this;
            if(email && password) {
                this.login({email, password})
            }
        }
    }
}

extend('min', {
    ...min,
    message: (field, params) => `${field}` + ' must be at least ' + `${params.length}` + ' character(s).'
});

extend('email', {
    ...email,
    message: 'Email is not valid.'
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