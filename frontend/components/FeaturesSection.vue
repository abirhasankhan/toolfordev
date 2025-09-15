<script setup lang="ts">
import { useFeatureHover } from '~/composables/useAnimations';
import { features } from '~/constants';
import type { Feature } from '~/types';

const { currentFeature, setCurrentFeature } = useFeatureHover();
</script>

<template>
    <section id="features" class="tw-relative tw-z-10 tw-px-6 tw-py-20">
        <div class="tw-max-w-6xl tw-mx-auto">
            <div class="tw-text-center tw-mb-16">
                <h2 class="tw-text-4xl tw-font-bold tw-mb-4">
                    Why Choose
                    <span
                        class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent">
                        ImageForge?</span>
                </h2>
                <p class="tw-text-xl tw-text-gray-300">The perfect blend of power, privacy, and performance</p>
            </div>

            <div class="tw-grid md:tw-grid-cols-3 tw-gap-8">
                <div v-for="(feature, index) in features" :key="index"
                    class="tw-group tw-p-8 tw-bg-white/5 tw-backdrop-blur-sm tw-rounded-2xl tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-bg-white/10 hover:tw-shadow-2xl hover:tw-shadow-purple-500/10"
                    @mouseenter="setCurrentFeature(index)">
                    <div
                        class="tw-w-16 tw-h-16 tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6 tw-transition-transform tw-duration-300 group-hover:tw-rotate-6">
                        <Icon :name="feature.icon" class="tw-w-8 tw-h-8" />
                    </div>
                    <h3 class="tw-text-xl tw-font-semibold tw-mb-4">{{ feature.title }}</h3>
                    <p class="tw-text-gray-300 tw-leading-relaxed">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>