<template>
    <nav class="tw-relative tw-z-50 tw-bg-gray-900 tw-text-white">
        <div class="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 tw-py-4">
            <div class="tw-flex tw-items-center tw-justify-between">
                <!-- Logo/Brand -->
                <div class="tw-flex tw-items-center tw-space-x-2">
                    <div
                        class="tw-w-10 tw-h-10 tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <Icon name="lucide:camera" class="tw-w-6 tw-h-6" />
                    </div>
                    <span class="tw-text-xl tw-font-bold">ImageForge</span>
                </div>

                <!-- Desktop Navigation -->
                <div class="tw-hidden md:tw-flex tw-items-center tw-space-x-8">
                    <a href="#features" class="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Features</a>
                    <a href="#converter" class="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Converter</a>
                    <a href="#testimonials"
                        class="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Reviews</a>
                    <button
                        class="tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-px-6 tw-py-2 tw-rounded-full tw-font-medium tw-transition-transform hover:tw-scale-105">
                        Get Started
                    </button>
                </div>

                <!-- Mobile menu button -->
                <div class="md:tw-hidden tw-flex tw-items-center">
                    <button @click="toggleMenu"
                        class="tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-white hover:tw-bg-gray-700 focus:tw-outline-none">
                        <span class="tw-sr-only">Open main menu</span>
                        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" class="tw-w-6 tw-h-6" />
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-show="isOpen" class="md:tw-hidden tw-pt-4 tw-pb-2 tw-border-t tw-border-gray-700">
                <div class="tw-flex tw-flex-col tw-space-y-3 tw-px-2">
                    <a href="#features"
                        class="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-300 hover:tw-text-white hover:tw-bg-gray-700">Features</a>
                    <a href="#converter"
                        class="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-300 hover:tw-text-white hover:tw-bg-gray-700">Converter</a>
                    <a href="#testimonials"
                        class="tw-block tw-px-3 tw-py-2 tw-rounded-md tw-text-base tw-font-medium tw-text-gray-300 hover:tw-text-white hover:tw-bg-gray-700">Reviews</a>
                    <button
                        class="tw-w-full tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-px-6 tw-py-2 tw-rounded-full tw-font-medium tw-transition-transform hover:tw-scale-105">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>