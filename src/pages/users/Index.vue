<template>
    <div class="container mt-2">
      <h1>Users Index Page!</h1>
      <div class="row mt-3">
        <div class="col-md-6 border p-1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel a
            asperiores! Suscipit maxime in dolorem excepturi sequi voluptates,
            pariatur quas commodi neque quis repudiandae a natus cum, quo non?
          </p>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
  setup(){
    function getUsers() {
      // Make a request for a user with a given ID
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    
    getUsers()
  }
}
</script>

<style>

</style>