<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">idea-processors.ir</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">Home</router-link>
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link to="/users" class="nav-link">users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/posts" class="nav-link">posts</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>
.router-link-active{
    color: rgba(0,0,0,0.9);
    border-bottom: 2px solid rgba(0,0,0,0.9);
}
</style>