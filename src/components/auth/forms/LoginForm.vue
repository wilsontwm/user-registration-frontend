<template>
    <div id="login-form">
        <form class="form-login">
            <img class="mb-4" src="@/assets/img/gopher.png" alt="" width="60" height="81">
            <h1 class="h3 mb-3 font-weight-normal">Login to the system here</h1>
            <div class="form-group">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "LoginForm"
}
</script>
<style lang="scss" scoped>

</style>