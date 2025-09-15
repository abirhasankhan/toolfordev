<script setup lang="ts">
// No props or reactive data needed for this component
</script>

<template>
    <div class="tw-absolute tw-inset-0 tw-opacity-20">
        <div
            class="tw-absolute tw-top-20 tw-left-20 tw-w-72 tw-h-72 tw-bg-purple-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-animate-pulse">
        </div>
        <div
            class="tw-absolute tw-top-40 tw-right-20 tw-w-72 tw-h-72 tw-bg-blue-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-animate-pulse tw-animation-delay-2000">
        </div>
        <div
            class="tw-absolute tw-bottom-20 tw-left-40 tw-w-72 tw-h-72 tw-bg-pink-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-animate-pulse tw-animation-delay-4000">
        </div>
    </div>
</template>