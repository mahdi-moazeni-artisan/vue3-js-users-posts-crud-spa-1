<template>
  <div class="container mt-2">
    <h1>Home Page!</h1>
    <div class="row mt-3">
      <div class="col-md-6 border p-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel a
          asperiores! Suscipit maxime in dolorem excepturi sequi voluptates,
          pariatur quas commodi neque quis repudiandae a natus cum, quo non?
        </p>
        <router-link class="btn btn-dark" :to="{name:'usersIndex'}">Users</router-link>
        <router-link class="btn btn-dark ms-1" :to="{name:'postsIndex'}">Posts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>