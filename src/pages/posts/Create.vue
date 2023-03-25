<template>
    <div class="container">
        <h2>Create Post:</h2>
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
                Create Post
            </button>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import axios from 'axios';
export default {
    setup(){
        const form=reactive({
            title:'',
            titleErrorText:'',
            body:'',
            bodyErrorText:''
        });

        const loading=ref(false);

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
                loading.value=true;
                createPost();
            }
        }

        function createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts',{
                title:form.title,
                body:form.body,
                userId:1
            })
            .then(function (response) {
            // handle success
            console.log(response.data);
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

        return{form,validate,createPost,loading};
    }
}
</script>

<style>

</style>