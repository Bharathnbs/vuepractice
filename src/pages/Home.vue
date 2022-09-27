<template>
    <h1>Home Page....!</h1>
    <router-link :to="{name: 'AboutPage'}">About</router-link>
    <router-link to="/contact">Contact</router-link>

    <br>
    <router-link to="/about/Adi">About Member 1</router-link>


</template>

<script>
export default {
    name: 'Home',
}
</script>