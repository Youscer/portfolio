<template>
    <div class="relative group inline-block">
        <slot />
        <div v-if="text" class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
             opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1
             pointer-events-none transition-opacity duration-300 whitespace-nowrap z-50">
            {{ text }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>