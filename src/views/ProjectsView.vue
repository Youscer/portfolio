<template>
  <section class="">
    <h1 class="text-4xl font-bold text-white text-center mb-16">Mes Projets</h1>

    <div class="flex flex-wrap justify-center">
      <div v-for="project in projects" :key="project.id" data-aos="fade-left" :data-aos-delay="(project.id - 1) * 100">
        <div
          class="bg-white rounded-xl border overflow-hidden w-[300px] h-[400px] mx-8 my-8 transform hover:scale-125 transition-transform duration-200">
          <img :src="project.image" :alt="project.title" class="h-1/2 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="techno in project.technos"
                class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{{
                  techno }}</span>
            </div>
            <div class="flex">
              <a :href="project.git" target="_blank" class="mr-5 text-blue-600 hover:underline">Code</a>
              <a v-if="project.demo != ''" :href="project.demo" target="_blank" class="text-green-600 hover:underline">Démo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'Ce site actuel',
    image: '/src/assets/scrn_portfolio.png',
    git: 'https://github.com/Youscer/portfolio',
    demo: '/',
    technos: ["Vue", "Tailwind"],
  },
  {
    id: 2,
    title: 'Canyon Me',
    description: 'Platform e-commerce',
    image: '/src/assets/scrn_canyonme.png',
    git: 'https://github.com/Youscer/CanyonMe',
    demo: '',
    technos: ["Angular", "SpringBoot"],
  },
  {
    id: 3,
    title: 'Top Smash',
    description: 'Jeu de combat multijoueur',
    image: '/src/assets/fgame_20fps_16p9.gif',
    git: 'https://gitlab.com/dystudio/versusgame',
    demo: '',
    technos: ["Godot", "C#"],
  },
];
</script>

<style scoped></style>