<template>
        <Multi />
    <table>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>operation</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <td>{{ post.userId  }}</td>
                <td>{{ post.id  }}</td>
                <td>{{ post.title  }}</td>
                <td>{{ post.body  }}</td>
                <td><button @click="deletePost(post.id)">delete</button></td>
                <!-- <td><router-link :to="'/show/' + post.id">show</router-link></td> -->
                <td><router-link :to="{name: 'Show', params: {id: post.id}}">show</router-link></td>
                <!-- <td><a href="#/show/{{ post.id }}">show</a></td> -->
            </tr>
        </tbody>
    </table>
        <!-- <h1>{{ this.$store.state.count }}</h1> -->
        <h1>{{ count }}</h1>
        <button @click="increment()">+</button>
</template>

<script>
    import countMixin from '../mixin.js';
    import Multi from '../components/Multi.vue';

    export default{
        name: 'PostIndex',
        mixins : [countMixin],
        components : {Multi},
        props : [title],

        data() {
            return {
                id: null,
                title: null,
                body: null,
                posts: [],
            }
        },

        methods: {
            getPosts() {
                fetch('https://jsonplaceholder.typicode.com/posts',{ method : 'GET'})
                    .then(response => response.json())
                    .then(data => {
                        this.posts = data;
                    });
                
            },

            deletePost(id) {
                var check =confirm('are you sure');
                if(check == true){
                    this.posts = this.posts.filter(function(post){
                        if (post.id == id) return false;
                        else return true;
                    });
                }
            },

            // increment (){
            //     // console.log(this.$store.state.count);
            //     this.$store.state.count++
            // }
        },

        mounted() {
            this.getPosts();
        },

    }
</script>