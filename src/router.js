import { createRouter,createWebHistory } from "vue-router";
import Home from './pages/Home.vue'
import UsersTemplate from './pages/users/Template.vue'
import UsersIndex from './pages/users/Index.vue'
import UserShow from './pages/users/Show.vue'
import Posts from './pages/Posts.vue'
const routes=[
    {path:'/',name:'home',component:Home},
    {path:'/users',name:'usersTemplate',component:UsersTemplate,children:[
        {path:'',name:'usersIndex',component:UsersIndex},
        {path:':id',name:'userShow',component:UserShow}
    ]},
    // {path:'/users/:id',name:'usersShow',component:UserShow},
    {path:'/posts',name:'posts',component:Posts}
];

const router=createRouter({
    history : createWebHistory(),
    routes
});

export default router;