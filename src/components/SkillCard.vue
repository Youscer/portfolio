<template>
  <div class="aura-wrapper relative inline-block cursor-pointer" data-aos="flip-left" :data-aos-delay="props.delay">
    <div class="aura"></div>
    <div class="card flex flex-col items-center justify-center border rounded mt-8 mx-8 p-6 w-32 h-20">
      <img class="h-8" :src="logoUrl" alt="" />
      <h3 class="mt-2 text-m font-semibold">{{ name }}</h3>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  logo: String,
  delay: {
    type: Number,
    default: 0,
  },
});

const logoUrl = computed(() => {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${props.logo}`;
});
</script>

<style>
.aura-wrapper {
  position: relative;
  overflow: visible;
  display: inline-block;
}

.aura {
  position: absolute;
  /* top: 25%;
  left: 10%;
  width: 80%;
  height: 80%; */
  top: 33%;
  left: 18%;
  width: 65%;
  height: 65%;
  background: #FFD700;
  filter: blur(8px);
  border-radius: 40% 60% 55% 45% / 60% 40% 55% 45%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  pointer-events: none;
  animation: none;
}

.aura-wrapper:hover .aura {
  opacity: 1;
  animation: pulseAura 1.5s ease-in-out infinite;
  animation-play-state: running;
}

.card {
  background-color: #140236;
  border-radius: 0.5rem;
  position: relative;
  z-index: 10;
}

.card:hover {
  background-color: #1e0452;
}

@keyframes pulseAura {

  0%,
  100% {
    border-radius: 40% 60% 55% 45% / 60% 40% 55% 45%;
    transform: scale(0.95);
  }

  50% {
    border-radius: 60% 40% 70% 30% / 50% 70% 30% 50%;
    transform: scale(1.1);
  }
}
</style>