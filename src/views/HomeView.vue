<template>
    <section class="flex flex-col justify-evenly min-w-[1024px] min-h-screen px-8">
        <div class="flex justify-between items-center h-full">
            <transition name="fade-left" appear>
                <div class="flex flex-col" v-if="show">
                    <h1 class="font-bold text-white my-8 max-w-xs">Youcef KHELIL</h1>
                    <h3 class="font-bold text-white mb-8 text-4xl">Développeur fullstack</h3>
                    <span class="text-white text-xl mb-8 max-w-xs">
                        Diplômé en master d'informatique, passionné et autodidacte
                    </span>
                    <a href="/CV_2025-07-23_Youcef_KHELIL.pdf" download class="inline-block bg-blue-600 border border-blue-600 text-white px-6 py-2 rounded-lg
                        hover:bg-blue-700 transition duration-200 hover:text-white hover:border-white mb-8">
                        Télécharger mon CV
                    </a>
                    <NetworkLinks />
                </div>
            </transition>

            <transition name="fade-right" appear>
                <div v-if="show">
                    <img src="../assets/portrait.png" alt="Photo de profil"
                        class="w-[300px] h-[300px] rounded-full object-cover" />
                </div>
            </transition>
        </div>
        <div class="flex justify-center items-center relative">
            <div v-if="show_scroll" class="chevron"></div>
            <div v-if="show_scroll" class="chevron"></div>
            <div v-if="show_scroll" class="chevron"></div>
        </div>
    </section>


    <hr class="border-t-2 border-gray-400 mb-64" />

    <Timeline />

    <hr class="border-t-2 border-gray-400 my-64" />

    <SkillSection />

    <div class="mt-32"></div>
</template>

<script setup>
import Timeline from '@/components/Timeline.vue'
import SkillSection from '@/components/SkillSection.vue'
import NetworkLinks from "@/components/NetworkLinks.vue"
import { ref, onMounted } from 'vue'

const show = ref(false)
const show_scroll = ref(false)

onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 300)
    setTimeout(() => {
        show_scroll.value = true
    }, 3000)
})
</script>

<style>
.fade-left-enter-active,
.fade-right-enter-active {
    transition: all 1s ease;
}

.fade-left-enter-from {
    opacity: 0;
    transform: translateX(-50px);
}

.fade-right-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.fade-left-enter-to,
.fade-right-enter-to {
    opacity: 1;
    transform: translateX(0);
}

/* --------------------- */
:root {
    --base: 0.9rem;
}

.chevron {
    @apply absolute;
    width: calc(var(--base) * 3.5);
    height: calc(var(--base) * 0.8);
    opacity: 0;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
}

.chevron::before,
.chevron::after {
    content: "";
    @apply absolute top-0;
    height: 100%;
    width: 50%;
    background: #ffffff;
}

.chevron::before {
    left: 0;
    transform: skewY(30deg);
}

.chevron::after {
    right: 0;
    transform: skewY(-30deg);
}

@keyframes move-chevron {
    25% {
        opacity: 1;
    }

    33.3% {
        opacity: 1;
        transform: translateY(calc(var(--base) * 3.8));
    }

    66.6% {
        opacity: 1;
        transform: translateY(calc(var(--base) * 5.2));
    }

    100% {
        opacity: 0;
        transform: translateY(calc(var(--base) * 8)) scale(0.5);
    }
}
</style>