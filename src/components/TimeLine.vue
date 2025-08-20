<template>
    <section id="parcours" class="relative text-white">
        <h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-32">Mon Parcours</h2>

        <div
            class="relative max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
            <div v-for="(exp, index) in experiences" :key="index"
                class="mb-12 flex flex-col md:flex-row items-center group"
                :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                <div :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'" class="w-full md:w-1/2 px-6"
                    :class="index % 2 === 0 ? 'text-right md:pr-12' : 'text-left md:pl-12'">
                    <h3 class="text-xl font-semibold">{{ exp.title }}</h3>
                    <p class="text-sm mb-1">{{ exp.date }}</p>
                    <p class="">{{ exp.description }}</p>
                </div>
                <div class="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const experiences = [
    {
        title: 'Développeur C# GDScript - Entreprenariat',
        date: '2024 - 2025',
        description: 'Création jeux-vidéos avec le moteur Godot',
    },
    {
        title: 'Développeur full-stack - AFTERWORK',
        date: '2021 - 2023',
        description: 'Conception et mise en production d\'une MarketPlace. PHP VUE AWS',
    },
    {
        title: 'Master informatique - Génie logiciel',
        date: '2019 - 2022',
        description: 'Université Grenoble Alpes',
    },
    {
        title: 'Licence informatique',
        date: '2016 - 2019',
        description: 'Université de Reims Champagne-Ardenne',
    },
    {
        title: 'Développeur Java (entreprenariat) - GroupeZK',
        date: '2013 - 2016',
        description: 'Developpement Java sur Minecraft de serveur de jeux',
    },
]
</script>