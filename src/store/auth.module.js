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
    },
    async signup({dispatch, commit}, user) {
        commit('signupRequest', user);
        return userService.signup(user)
                .then(
                    data => {
                        commit('signupSuccess', data);
                        dispatch('alert/success', "You have successfully signed up.", {root:true});
                        return data;
                    }, 
                    error => {
                        commit('signupFailure', error);
                        dispatch('alert/error', error, {root:true});
                        return {success: false, error: error};
                    }
                )
    },
    async forgetPassword({dispatch, commit}, {email}) {
        commit('forgetPasswordRequest', {email});
        return userService.forgetPassword(email)
                .then(
                    data => {
                        commit('forgetPasswordSuccess', data);
                        dispatch('alert/success', "An email to reset password has been sent to you. Please follow the instruction to reset password.", {root:true});
                        return data;
                    }, 
                    error => {
                        commit('forgetPasswordFailure', error);
                        dispatch('alert/error', error, {root:true});
                        return {success: false, error: error};
                    }
                )
    },
    async resetPassword({dispatch, commit}, {resetPasswordCode, password}) {
        commit('resetPasswordRequest', {resetPasswordCode, password});
        return userService.resetPassword(resetPasswordCode, password)
                .then(
                    data => {
                        commit('resetPasswordSuccess', data);
                        dispatch('alert/success', "You have successfully reset the password.", {root:true});
                        return data;
                    }, 
                    error => {
                        commit('resetPasswordFailure', error);
                        dispatch('alert/error', error, {root:true});
                        return {success: false, error: error};
                    }
                )
    },
    async activateAccount({dispatch, commit}, {activationCode}) {
        return userService.activateAccount(activationCode)
                .then(
                    data => {
                        return data;
                    }, 
                    error => {
                        dispatch('alert/error', error, {root:true});
                        return {success: false, error: error};
                    }
                )
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
    },
    signupRequest(state, user) {
        state.status = {signingUp: true};
    },
    signupSuccess(state, user) {
        state.status = {};
    },
    signupFailure(state) {
        state.status = {};
    },
    forgetPasswordRequest(state) {
        state.status = {forgettingPassword: true};
    },
    forgetPasswordSuccess(state) {
        state.status = {};
    },
    forgetPasswordFailure(state) {
        state.status = {};
    },
    resetPasswordRequest(state) {
        state.status = {resettingPassword: true};
    },
    resetPasswordSuccess(state) {
        state.status = {};
    },
    resetPasswordFailure(state) {
        state.status = {};
    }
}

export const auth = {
    namespaced: true,
    state,
    actions,
    mutations
};