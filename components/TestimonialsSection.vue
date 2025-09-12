<script setup lang="ts">
const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Web Designer',
        content: 'This tool has revolutionized my workflow. The hybrid approach is genius!',
        avatar: 'SC'
    },
    {
        name: 'Mike Rodriguez',
        role: 'Developer',
        content: 'Perfect balance of privacy and performance. Exactly what I needed.',
        avatar: 'MR'
    },
    {
        name: 'Emma Wilson',
        role: 'Content Creator',
        content: 'Batch processing saves me hours every week. The quality is outstanding!',
        avatar: 'EW'
    }
];
</script>

<template>
    <section id="testimonials" class="tw-relative tw-z-10 tw-px-6 tw-py-20">
        <div class="tw-max-w-6xl tw-mx-auto">
            <div class="tw-text-center tw-mb-16">
                <h2 class="tw-text-4xl tw-font-bold tw-mb-4">
                    Loved by
                    <span
                        class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent">Creators
                        Worldwide</span>
                </h2>
                <div class="tw-flex tw-items-center tw-justify-center tw-space-x-1 tw-mb-4">
                    <Icon v-for="i in 5" :key="i" name="lucide:star"
                        class="tw-w-6 tw-h-6 tw-text-yellow-400 tw-fill-current" />
                    <span class="tw-text-gray-300 tw-ml-2">4.9/5 from 1,200+ reviews</span>
                </div>
            </div>

            <div class="tw-grid md:tw-grid-cols-3 tw-gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="index"
                    class="tw-p-6 tw-bg-white/5 tw-backdrop-blur-sm tw-rounded-2xl tw-border tw-border-white/10 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-bg-white/10">
                    <div class="tw-flex tw-items-center tw-mb-4">
                        <div
                            class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-mr-4">
                            {{ testimonial.avatar }}
                        </div>
                        <div>
                            <h4 class="tw-font-semibold">{{ testimonial.name }}</h4>
                            <p class="tw-text-gray-400 tw-text-sm">{{ testimonial.role }}</p>
                        </div>
                    </div>
                    <p class="tw-text-gray-300 tw-italic">"{{ testimonial.content }}"</p>
                </div>
            </div>
        </div>
    </section>
</template>