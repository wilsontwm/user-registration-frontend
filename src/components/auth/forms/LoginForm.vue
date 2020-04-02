<template>
    <div id="login-form">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form class="form-login" @submit.prevent="handleSubmit">
                <div class="text-center">                    
                    <img class="text-center mb-4" src="@/assets/img/gopher.png" alt="" width="60" height="81">
                </div>
                <h1 class="h3 mb-3 font-weight-normal">Login to the system here</h1>            
                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                    <div class="form-group">
                        <label for="inputEmail" class="control-label">Email</label>
                        <input type="text" v-model="email" name="email" id="inputEmail" :class="`${errors.length ? 'is-invalid' : ''} form-control`" autofocus="">
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
                <div class="form-group">
                    <small>Forgotten your password? Click <router-link to="/forgetpassword">here</router-link></small>
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="invalid || status.loggingIn">Login</button>
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
    name: "LoginForm",
    data () {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
    created () {
        //this.logout();
    },
    methods: {
        ...mapActions('auth', ['login', 'logout']),
        async handleSubmit(e) {
            const { email, password } = this;
            const isValid = await this.$refs.observer.validate();
            if(isValid) {
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

</script>
<style lang="scss" scoped>

</style>