<template>
    
    <div v-if="post != null">
        <p>{{ post.id }}</p>
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
    </div>
    <button @click="increment()">+</button>
    <h1>{{ count }}</h1>
    <button @click="decrement()">-</button>
</template>

<script>
    import countMixin from '../mixin.js'
    export default{
        name:'Show',
        mixins : [countMixin],

        data() {
            return {
                post: null,
            }
        },

        methods: {
            showPost() {
                fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
                    .then(response => response.json())
                    .then(data => {
                        this.post = data;
                    }); 
            },

        },

        mounted() {
            this.id = this.$route.params.id;
            this.showPost();
        },
    }
</script>   