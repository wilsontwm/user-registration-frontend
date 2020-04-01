<template>
  <div id="error404" class="text-center">
    <h1 class="text-danger">Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="error-details">
        Sorry, an error has occured, Requested page not found!
    </div>
    <router-link class="btn btn-outline-primary mt-5" to="/">Take me to home page</router-link>
        
  </div>
</template>
<style lang="scss" scoped>
#error404 {
  margin: 150px auto;
}
</style>
