<script setup lang="ts">
const formats = [
    { name: 'PNG', color: 'from-blue-400 to-blue-600', size: '1.2MB' },
    { name: 'JPEG', color: 'from-green-400 to-green-600', size: '340KB' },
    { name: 'WebP', color: 'from-purple-400 to-purple-600', size: '280KB' },
    { name: 'AVIF', color: 'from-orange-400 to-orange-600', size: '180KB' }
];
</script>

<template>
    <section class="tw-relative tw-z-10 tw-px-6 tw-py-20">
        <div class="tw-max-w-6xl tw-mx-auto tw-text-center tw-mb-16">
            <h2 class="tw-text-4xl tw-font-bold tw-mb-4">
                From Any Format to
                <span class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent">
                    Perfect
                    Compression</span>
            </h2>
            <p class="tw-text-xl tw-text-gray-300">Watch your file sizes shrink while maintaining stunning quality
            </p>
        </div>

        <div class="tw-max-w-4xl tw-mx-auto tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6">
            <div v-for="(format, index) in formats" :key="format.name" :class="[
                'tw-group tw-p-6 tw-bg-white/5 tw-backdrop-blur-sm tw-rounded-xl tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-bg-white/10',
                `tw-delay-${index * 100}`
            ]" :style="{ animationDelay: `${index * 100}ms` }">
                <div :class="[
                    'tw-w-16 tw-h-16 tw-mx-auto tw-mb-4 tw-rounded-lg tw-bg-gradient-to-br tw-flex tw-items-center tw-justify-center tw-transition-transform tw-duration-300 group-hover:tw-rotate-6',
                    format.color
                ]">
                    <Icon name="lucide:camera" class="tw-w-8 tw-h-8 tw-text-white" />
                </div>
                <h3 class="tw-text-lg tw-font-semibold tw-mb-2">{{ format.name }}</h3>
                <p class="tw-text-2xl tw-font-bold tw-text-purple-400">{{ format.size }}</p>
                <p class="tw-text-sm tw-text-gray-400 tw-mt-1">Average size</p>
            </div>
        </div>
    </section>
</template>