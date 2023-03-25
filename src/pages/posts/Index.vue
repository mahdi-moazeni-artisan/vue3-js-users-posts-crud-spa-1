<template>
  <div class="container mt-2">
      <router-link class="btn btn-dark" :to="{name:'postCreate'}">Create Post</router-link>
      <h1>Posts Page!</h1>
      <div class="row mt-3 g-1">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
          <div class="card">
            <div class="card-header">
                <router-link :to="{name:'postShow',params:{id:post.id}}">
                  {{ post.userId }}-{{ post.id }}-{{ post.title }}
                </router-link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Body:{{ post.body }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view v-else></router-view> -->
  </template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

export default {
  setup(){
    const posts=ref([]);
    const loading=ref(true);

    function getPosts() {
      // Make a request for a user with a given ID
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          // handle success
          // console.log(response.data);
          posts.value=response.data;
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
    
    getPosts()

    return { posts,loading };
  }
}
</script>

<style>

</style>