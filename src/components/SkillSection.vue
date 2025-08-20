<template>
    <section id="competences" class="relative text-white">
        <h2 data-aos="fade-up" class="text-3xl font-bold text-center mb-32">Mes compétences</h2>
        <h3 data-aos="fade-right" class="text-xl font-bold text-left my-16">Langages</h3>
        <div class="flex flex-wrap">
            <SkillCard v-for="(skill, index) in skillLang" :key="index" :name="skill.name" :logo="skill.logo" :delay="index*100" />
        </div>
        <h3 data-aos="fade-right" class="text-xl font-bold text-left my-16">Framework</h3>
        <div class="flex flex-wrap">
            <SkillCard v-for="(skill, index) in skillFrame" :key="index" :name="skill.name" :logo="skill.logo" :delay="index*100" />
        </div>
        <h3 data-aos="fade-right" class="text-xl font-bold text-left my-16">Autres</h3>
        <div class="flex flex-wrap">
            <SkillCard v-for="(skill, index) in skillOther" :key="index" :name="skill.name" :logo="skill.logo" :delay="index*100" />
        </div>
    </section>
</template>

<script setup>
import SkillCard from '@/components/SkillCard.vue'

const skillLang = [
    { name: 'Java', logo: 'java/java-original.svg' },
    { name: 'PHP', logo: 'php/php-original.svg' },
    { name: 'Javascript', logo: 'javascript/javascript-original.svg' },
    { name: 'C', logo: 'c/c-original.svg' },
    { name: 'C++', logo: 'cplusplus/cplusplus-original.svg' },
    { name: 'C#', logo: 'csharp/csharp-original.svg' },
    { name: 'Python', logo: 'python/python-original.svg' },
    { name: 'Bash', logo: 'bash/bash-original.svg' },
    { name: 'HTML', logo: 'html5/html5-original.svg' },
    { name: 'CSS', logo: 'css3/css3-original.svg' },
]

const skillFrame = [
    { name: 'Vue', logo: 'vuejs/vuejs-original.svg' },
    { name: 'React', logo: 'react/react-original.svg' },
    { name: 'Springboot', logo: 'spring/spring-original.svg' },
    { name: 'Angular', logo: 'angular/angular-original.svg' },
]

const skillOther = [
    { name: 'MYSQL', logo: 'mysql/mysql-original.svg' },
    { name: 'PostgreSQL', logo: 'postgresql/postgresql-original.svg' },
    { name: 'Redis', logo: 'redis/redis-original.svg' },
    { name: 'Git', logo: 'git/git-original.svg' },
    { name: 'Docker', logo: 'docker/docker-original.svg' },
    { name: 'AWS', logo: 'amazonwebservices/amazonwebservices-original-wordmark.svg' }
]
</script>