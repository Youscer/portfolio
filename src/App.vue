<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 12rem;
}
</style>
