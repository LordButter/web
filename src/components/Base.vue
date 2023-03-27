<template>
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-6">
        <h1 class="text-center text-3xl font-bold uppercase tracking-tight text-white md:text-left">{{ this.$route.name }}</h1>
        <div class="mt-12">
            <slot></slot>
        </div>
    </main> 
</template>