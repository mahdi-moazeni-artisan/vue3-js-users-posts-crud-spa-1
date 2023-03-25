<template>
  <div class="container mt-2">
    <h1>Post Show Page!</h1>
    <div class="row mt-3 g-1">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3">
        <div class="card">
            <div class="card-header">
                {{ post.userId }}-{{ post.id }}-{{ post.title }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Body:{{ post.body }}</li>
            </ul>
            <div class="card-footer">
              <button class="btn btn-sm btn-danger me-1">Delete</button>
              <button class="btn btn-sm btn-dark me-1">Edit</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

export default {
  setup(){
    const post=ref({});
    const loading=ref(true);
    const route=useRoute();

    function getPost() {
      // Make a request for a post with a given ID
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function (response) {
          // handle success
          // console.log(response.data);
          post.value=response.data;
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
    
    getPost()

    return { post,loading };
  }
}
</script>

<style>

</style>