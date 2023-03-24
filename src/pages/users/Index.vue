<template>
    <div class="container mt-2">
      <h1>User Page!</h1>
      <div class="row mt-3 g-1">
        <div class="col-md-3" v-for="user in users" :key="user.id">
          <UserCardView/>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import UserCardView from '../../components/users/CardView.vue';

export default {
  components:{UserCardView},
  setup(){
    const users=ref([]);

    function getUsers() {
      // Make a request for a user with a given ID
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          // console.log(response.data);
          users.value=response.data;
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

    return { users };
  }
}
</script>

<style>

</style>