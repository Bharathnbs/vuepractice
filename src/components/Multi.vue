<template>
    <h1>hi {{ name}} {{ title }}</h1>
</template>

<script>

    export default{
        name:'Multi',
        props: ['title', 'name'],

        data(){
            return{
                count : 0,
            }
        },


    }
</script>