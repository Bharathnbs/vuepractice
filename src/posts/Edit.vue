<template>
        <input v-model="title" name="title" placeholder="title"><br>
        <input v-model="body" name="body" placeholder="body"><br>
        <button @click="upDated()">save</button>
</template>
<script>

    export default{
        name:'Edit',

        data(){
            return{
                post :null,
                title: null,
                body: null,
            
            }
        },

        methods:{

            getData(){

                fetch('https://jsonplaceholder.typicode.com/posts/'+ this.id)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                this.title = data.title;
                                this.body = data.body;
                            });
            },  
            
            upDated(){
                fetch('https://jsonplaceholder.typicode.com/posts' ,{ method : 'POST', body: JSON.stringify({
                userId: this.userId,
                title: this.title,
                body: this.body,
            })})
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    });
            },
         
        },
        mounted(){
            this.id =this.$route.params.id;
            console.log(this.id);
            this.getData();
            this.upDated();
        }

    }
</script>