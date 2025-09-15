<script setup lang="ts">
// No props or reactive data needed for this component
</script>

<template>
    <section id="converter" class="tw-relative tw-z-10 tw-px-6 tw-py-20">
        <div
            class="tw-max-w-4xl tw-mx-auto tw-text-center tw-p-12 tw-bg-gradient-to-r tw-from-purple-900/30 tw-to-blue-900/30 tw-rounded-3xl tw-border tw-border-white/10 tw-backdrop-blur-sm">
            <h2 class="tw-text-4xl tw-font-bold tw-mb-6">
                Ready to Transform Your Images?
            </h2>
            <p class="tw-text-xl tw-text-gray-300 tw-mb-8">
                Join thousands of creators who trust ImageForge for their image conversion needs
            </p>
            <button
                class="tw-group tw-bg-gradient-to-r tw-from-purple-600 tw-to-blue-600 tw-px-12 tw-py-4 tw-rounded-full tw-text-xl tw-font-semibold tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-shadow-purple-500/25 hover:tw-scale-105 tw-flex tw-items-center tw-space-x-3 tw-mx-auto">
                <Icon name="lucide:upload" class="tw-w-6 tw-h-6 tw-transition-transform group-hover:tw-rotate-12" />
                <span>Start Converting Now</span>
                <Icon name="lucide:arrow-right"
                    class="tw-w-6 tw-h-6 tw-transition-transform group-hover:tw-translate-x-1" />
            </button>
        </div>
    </section>
</template>