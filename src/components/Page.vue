<script setup>
    import Header from './Header.vue';
    import Base from './Base.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <div class="absolute w-full h-full bg-gray-900"
        style="background-image: url('/boxed-bg-dark.png');">
        <Header/>
        <Base>
            <slot></slot>
        </Base>
        <Footer/>
    </div>
</template>