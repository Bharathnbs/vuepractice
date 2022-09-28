<template>
    <input v-model="userId" name="userId" placeholder="userId"><br>
    <input v-model="id" name="id" placeholder="Id"><br>
    <input v-model="title" name="title" placeholder="title"><br>
    <input v-model="body" name="body" placeholder="body"><br>
    <button @click="save()">save</button>
</template>

<script>
 export default{
    name:'Create',

    data(){
        return{
            userId: null,
            id: null,
            title: null,
            body: null,
        }
    },

    methods: {

        save (){
            console.log(this.title,this.body);
            fetch('https://jsonplaceholder.typicode.com/posts', { method : 'POST', body: JSON.stringify({
                userId: this.userId,
                title: this.title,
                body: this.body,
            })})
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    });
        }
    }
 
 }
</script>