<template>
    <div class="container mt-2">
      <h1>User Page!</h1>
      <div class="row mt-3 g-1">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-3" v-for="user in users" :key="user.id">
          <UserCardView :user="user"/>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
import {ref} from 'vue';
// import UserCardView from '../../components/users/CardView.vue';
import UserCardView from '@/components/users/CardView.vue';

export default {
  components:{UserCardView},
  setup(){
    const users=ref([]);
    const loading=ref(true);

    function getUsers() {
      // Make a request for a user with a given ID
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          // console.log(response.data);
          users.value=response.data;
          loading.value=false;
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

    return { users,loading };
  }
}
</script>

<style>

</style>