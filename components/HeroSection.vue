<template>
    <section class="tw-relative tw-z-10 tw-py-12 md:tw-py-20 lg:tw-py-28">
        <div class="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 tw-text-center">
            <div class="tw-transition-all tw-duration-1000 tw-delay-300 tw-opacity-100">
                <h1
                    class="tw-text-4xl sm:tw-text-5xl md:tw-text-6xl lg:tw-text-7xl tw-font-bold tw-mb-4 sm:tw-mb-6 tw-bg-gradient-to-r tw-from-white tw-via-purple-200 tw-to-blue-200 tw-bg-clip-text tw-text-transparent">
                    Transform Images
                    <br class="tw-hidden sm:tw-block" />
                    <span
                        class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent">
                        Like Never Before
                    </span>
                </h1>

                <p
                    class="tw-text-lg sm:tw-text-xl md:tw-text-2xl tw-text-gray-300 tw-mb-6 sm:tw-mb-8 tw-max-w-3xl tw-mx-auto tw-leading-relaxed">
                    The ultimate hybrid image converter. Choose between lightning-fast client-side processing or
                    powerful server-side conversion with advanced formats.
                </p>

                <div
                    class="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-3 sm:tw-gap-4 tw-mb-8 sm:tw-mb-12">
                    <NuxtLink to="/ImageConvert"
                        class="tw-group tw-bg-gradient-to-r tw-from-purple-600 tw-to-blue-600 tw-px-6 sm:tw-px-8 tw-py-3 sm:tw-py-4 tw-rounded-full tw-text-base sm:tw-text-lg tw-font-semibold tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-shadow-purple-500/25 hover:tw-scale-105 tw-flex tw-items-center tw-space-x-2">
                        <Icon name="lucide:upload"
                            class="tw-w-5 tw-h-5 tw-transition-transform group-hover:tw-rotate-12" />
                        <span>Start Converting</span>
                        <Icon name="lucide:arrow-right"
                            class="tw-w-5 tw-h-5 tw-transition-transform group-hover:tw-translate-x-1" />
                    </NuxtLink>


                    <button
                        class="tw-border tw-border-gray-600 tw-px-6 sm:tw-px-8 tw-py-3 sm:tw-py-4 tw-rounded-full tw-text-base sm:tw-text-lg tw-font-semibold tw-transition-all tw-duration-300 hover:tw-border-purple-400 hover:tw-bg-purple-400/10 hover:tw-shadow-lg">
                        Watch Demo
                    </button>
                </div>

                <!-- Stats -->
                <div class="tw-grid tw-grid-cols-3 tw-gap-4 sm:tw-gap-6 md:tw-gap-8 tw-max-w-2xl tw-mx-auto">
                    <div class="tw-text-center">
                        <div class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-purple-400 tw-mb-1 sm:tw-mb-2">
                            {{ stats.users.toLocaleString() }}+
                        </div>
                        <div class="tw-text-sm sm:tw-text-base tw-text-gray-400">Happy Users</div>
                    </div>
                    <div class="tw-text-center">
                        <div class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-blue-400 tw-mb-1 sm:tw-mb-2">
                            {{ stats.conversions.toLocaleString() }}+
                        </div>
                        <div class="tw-text-sm sm:tw-text-base tw-text-gray-400">Images Converted</div>
                    </div>
                    <div class="tw-text-center">
                        <div class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-green-400 tw-mb-1 sm:tw-mb-2">
                            {{ stats.savings }}%
                        </div>
                        <div class="tw-text-sm sm:tw-text-base tw-text-gray-400">Average Size Reduction</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { useStatsAnimation } from '~/composables/useAnimations';

const { stats, animateStats } = useStatsAnimation();

onMounted(() => {
    setTimeout(animateStats, 500);
});
</script>