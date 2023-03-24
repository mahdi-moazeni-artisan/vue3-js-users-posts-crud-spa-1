<template>
    <!-- <div v-if="route.params.id==undefined" class="container mt-2"> -->
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
    <!-- <router-view v-else></router-view> -->
  </template>

<script>
import axios from 'axios';
import {ref} from 'vue';
// import UserCardView from '../../components/users/CardView.vue';
import UserCardView from '@/components/users/CardView.vue';
import {useRoute} from 'vue-router';

export default {
  components:{UserCardView},
  setup(){
    const users=ref([]);
    const loading=ref(true);
    const route=useRoute();

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

    return { users,loading,route };
  }
}
</script>

<style>

</style>