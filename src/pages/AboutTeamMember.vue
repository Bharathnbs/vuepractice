<template>
    <h1>About Team Member</h1>
    <h2>{{ $route.params.name }}</h2>
</template>

<script>
export default {
    name: 'AboutTeamMember',
    created() {
        console.log(this.$route);
    }
}
</script>