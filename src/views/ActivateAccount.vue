<template>
    <div id="activate-account" class="text-center">
        <div v-show="!isActivationComplete" id="activate-loading" class="m-t-b">
            <div>
                <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Loading...</span>
                </div>
            </div>
            <h4 class="m-t-b">Please wait while we activate your account...</h4>
        </div>
        <div v-show="isActivationComplete && isActivated" class="m-t-b">
            <h4 class="m-t-b">We have successfully activated your account.</h4>
            <router-link class="btn btn-outline-primary" to="/login">Click here to login</router-link>
        </div>
        <div v-show="isActivationComplete && !isActivated" class="m-t-b">
            <h4 class="m-t-b text-danger">Oops!</h4>
            <div class="error-details">
                Sorry, some errors have occurred!
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "ActivateAccount",
    data () {
        return {
            activationCode: '',
            isActivated: false,
            isActivationComplete: false
        }
    },
    computed: {
        //...mapState('auth', ['status'])
    },
    created() {
        this.activationCode = this.$route.params.code;
        this.handleSubmit();
    },
    methods: {
        ...mapActions('auth', ['activateAccount']),
        async handleSubmit(e) {
            const { activationCode } = this;
            var response = await this.activateAccount({activationCode});
            if(response.success) {
                this.isActivated = true;
            }

            this.isActivationComplete = true;
        }
    }
}
</script>
<style lang="scss" scoped>
#activate-account {
   width: 580px;
   margin: 150px auto 20px auto; 
}
.m-t-b {
    margin-top: 36px;
    margin-bottom: 36px;
}
</style>