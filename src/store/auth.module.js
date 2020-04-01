import { userService } from '../_services';
import router from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

const actions = {
    login({dispatch, commit}, {email, password}) {
        commit('loginRequest', {email});
        userService.login(email, password)
        .then(
            user => {
                commit('loginSuccess', user);
                router.push('/dashboard');
            }, 
            error => {
                commit('loginFailure', error);
                dispatch('alert/error', error, {root:true});
            }
        )
    },
    logout({commit}) {
        userService.logout();
        commit('logout');
        router.push('/');
    }
}

const mutations = {
    loginRequest(state, user) {
        state.status = {loggingIn: true};
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    }
}

export const auth = {
    namespaced: true,
    state,
    actions,
    mutations
};