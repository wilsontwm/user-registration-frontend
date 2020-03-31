<template>
    <div id="signup-form">
        <form class="form-signup">
            <img class="mb-4" src="@/assets/img/gopher.png" alt="" width="60" height="81">
            <h1 class="h3 mb-3 font-weight-normal">Signup now for free</h1>
            <div class="form-group">
                <label for="inputName" class="sr-only">Name</label>
                <input type="text" id="inputName" class="form-control" placeholder="Name" required="" autofocus="">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
                <label for="inputRetypePassword" class="sr-only">Retype password</label>
                <input type="password" id="inputRetypePassword" class="form-control" placeholder="Retype password" required="">
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "SignupForm"
}
</script>
<style lang="scss" scoped>

</style>