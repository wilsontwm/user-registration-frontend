<template>
    <div id="alert-container" class="container">
        <div class="row">
            <div class="col-sm-6 offset-sm-3">
                <div v-show="!alert.isRead && alert.message" :class="`alert ${alert.type} alert-dismissible fade show`" role="alert">
                    {{alert.message}}
                    <button v-on:click="closeAlert" type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Alert',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions('alert', ['clear', 'read']),
        closeAlert(e) {
            this.read();
        }
    },
    watch: {
        $route (to, from) {
            this.clear();
        }
    }
}
</script>