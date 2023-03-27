<script setup>
    import UserLogin from '../components/UserLogin.vue'
</script>

<template>
    <section class="absolute w-full h-full">
        <div
            class="absolute w-full h-full bg-gray-900"
            style="background-image: url('/boxed-bg-dark.png');"
        ></div>
        <UserLogin />
    </section>
</template>