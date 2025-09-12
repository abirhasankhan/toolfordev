<script setup lang="ts">

import AnimatedBG from '~/components/AnimatedBG.vue';
import HeroSection from '~/components/HeroSection.vue';
import FormatShowcase from '~/components/FormatShowcase.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import ProcessingModes from '~/components/ProcessingModes.vue';
import TestimonialsSection from '~/components/TestimonialsSection.vue';
import CTASection from '~/components/CTASection.vue';


</script>

<template>
    <div
        class="tw-min-h-screen tw-bg-gradient-to-br tw-from-slate-900 tw-via-purple-900 tw-to-slate-900 tw-text-white tw-overflow-hidden">
        <!-- Animated Background -->
        <AnimatedBG />

        <div class="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 tw-relative tw-z-10">
            <!-- Hero Section -->
            <section class="tw-py-12 md:tw-py-24 lg:tw-py-32">
                <HeroSection />
            </section>

            <!-- Format Showcase -->
            <section class="tw-py-12 md:tw-py-16">
                <FormatShowcase />
            </section>

            <!-- Features Section -->
            <section class="tw-py-12 md:tw-py-16">
                <FeaturesSection />
            </section>

            <!-- Processing Modes -->
            <section class="tw-py-12 md:tw-py-16">
                <ProcessingModes />
            </section>

            <!-- Testimonials -->
            <section class="tw-py-12 md:tw-py-16">
                <TestimonialsSection />
            </section>

            <!-- CTA Section -->
            <section class="tw-py-12 md:tw-py-16">
                <CTASection />
            </section>
        </div>
    </div>
</template>

<style scoped>
/* Smooth scroll behavior for anchor links */
html {
    scroll-behavior: smooth;
}

/* Responsive section padding */
section {
    scroll-margin-top: 2rem;
}

@media (min-width: 768px) {
    section {
        scroll-margin-top: 4rem;
    }
}
</style>