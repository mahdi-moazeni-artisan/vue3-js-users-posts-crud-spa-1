<template>
    <div class="container">
        <h2>Edit Post:</h2>
        <form @submit.prevent="validate" class="col-md-6">
            <div class="mb-3">
                <label for="titleId" class="form-label">Title</label>
                <input type="text" v-model.lazy.trim="form.title" class="form-control" id="titleId">
                <div class="form-text text-danger">{{ form.titleErrorText }}</div>
            </div>

            <div class="mb-3">
                <label for="inputTextarea" class="form-label">Body</label>
                <textarea v-model.lazy.trim="form.body" name="" id="inputTextarea" class="form-control" cols="30" rows="10"></textarea>
            </div>
            <div class="form-text text-danger">{{ form.bodyErrorText }}</div>
            <button type="submit" class="btn btn-primary mt-3" :disabled="loading">
                <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
                </div>
                Edit Post
            </button>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from 'axios';
import Swal from 'sweetalert2'
import {useRoute} from 'vue-router';

export default {
    setup(){
        const form=reactive({
            title:'',
            titleErrorText:'',
            body:'',
            bodyErrorText:''
        });

        const formOld=reactive({});

        const loading=ref(false);
        const route=useRoute();

        const post=ref({});

        function getPost() {
        // Make a request for a post with a given ID
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
            .then(function (response) {
            // handle success
            // console.log(response.data.title);
            form.title=response.data.title;
            form.body=response.data.body;
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
        
        function validate(){
            if (form.title==='') {
                form.titleErrorText='Title is required!';
            }else{
                form.titleErrorText='';
            }

            if (form.body==='') {
                form.bodyErrorText='Body is required!';
            }else{
                form.bodyErrorText='';
            }

            if (form.title!==''&&form.body!=='') {
                updatePost();
            }
        }

        function updatePost() {
            loading.value=true;
            axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`,{
                id:route.params.id,
                title:form.title,
                body:form.body,
                userId:1
            })
            .then(function (response) {
            // handle success
            console.log(response.data);
            loading.value=false;

            Swal.fire({
            title: 'Thanks!',
            text: 'Post updated successfully!',
            icon: 'success',
            confirmButtonText: 'Ok!'
            })
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
            })
            })
            .finally(function () {
            // always executed
            });
        }

        return{getPost,form,validate,updatePost,loading};
    }
}
</script>

<style>

</style>