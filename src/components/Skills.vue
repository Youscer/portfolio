<template>
    <section class="relative text-white">
        <h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-32">Mes compétences</h2>
        <div class="flex flex-wrap">
            <div v-for="(skill, index) in skills" :key="index" data-aos="flip-left"
                class="flex flex-col items-center justify-center border rounded m-8 p-6 w-32 h-20 hover:bg-indigo-950">
                <img class="h-8" :src="'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/' + skill.logo"></img>
                <h3 class="mt-2 text-m font-semibold">{{ skill.name }}</h3>
            </div>
        </div>

    </section>
</template>

<script setup>
const skills = [
    {
        name: 'Vue',
        logo: 'vuejs/vuejs-original.svg',
    },
    {
        name: 'Java',
        logo: 'java/java-original.svg',
    },
    {
        name: 'PHP',
        logo: 'php/php-original.svg',
    },
    {
        name: 'Javascript',
        logo: 'javascript/javascript-original.svg',
    },
    {
        name: 'C',
        logo: 'c/c-original.svg',
    },
    {
        name: 'C++',
        logo: 'cplusplus/cplusplus-original.svg',
    },
    {
        name: 'C#',
        logo: 'csharp/csharp-original.svg',
    },
    {
        name: 'Python',
        logo: 'python/python-original.svg',
    },
    {
        name: 'React',
        logo: 'react/react-original.svg',
    },
    {
        name: 'Springboot',
        logo: 'spring/spring-original.svg',
    },
    {
        name: 'Angular',
        logo: 'angular/angular-original.svg',
    },
    {
        name: 'Bash',
        logo: 'bash/bash-original.svg',
    },
    {
        name: 'HTML',
        logo: 'html5/html5-original.svg',
    },
    {
        name: 'CSS',
        logo: 'css3/css3-original.svg',
    },
    {
        name: 'MYSQL',
        logo: 'mysql/mysql-original.svg',
    },
    {
        name: 'PostgreSQL',
        logo: 'postgresql/postgresql-original.svg',
    },
    {
        name: 'Redis',
        logo: 'redis/redis-original.svg',
    },
    {
        name: 'Git',
        logo: 'git/git-original.svg',
    },
    {
        name: 'Docker',
        logo: 'docker/docker-original.svg',
    },
    {
        name: 'AWS',
        logo: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
]
</script>