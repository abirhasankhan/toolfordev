<template>
    <footer class="tw-relative tw-z-10 tw-bg-gray-900 tw-text-white tw-border-t tw-border-white/10">
        <div class="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 tw-py-8 md:tw-py-12">
            <div class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-6">
                <!-- Logo/Brand -->
                <div class="tw-flex tw-items-center tw-space-x-2">
                    <div
                        class="tw-w-10 tw-h-10 tw-bg-gradient-to-r tw-from-purple-500 tw-to-blue-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center">
                        <Icon name="lucide:camera" class="tw-w-6 tw-h-6" />
                    </div>
                    <span class="tw-text-xl tw-font-bold">ImageForge</span>
                </div>

                <!-- Links -->
                <div class="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-4 sm:tw-gap-6 tw-text-gray-400">
                    <div class="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 sm:tw-gap-6">
                        <a href="#"
                            class="hover:tw-text-white tw-transition-colors tw-text-sm sm:tw-text-base">Privacy</a>
                        <a href="#"
                            class="hover:tw-text-white tw-transition-colors tw-text-sm sm:tw-text-base">Terms</a>
                        <a href="#"
                            class="hover:tw-text-white tw-transition-colors tw-text-sm sm:tw-text-base">Support</a>
                    </div>

                    <!-- Built with info -->
                    <div class="tw-flex tw-items-center tw-space-x-1 tw-text-sm sm:tw-text-base">
                        <Icon name="lucide:users" class="tw-w-4 tw-h-4" />
                        <span>Built with Nuxt 3 & Sharp</span>
                    </div>
                </div>
            </div>

            <!-- Mobile bottom text (optional) -->
            <div
                class="tw-mt-8 tw-pt-6 tw-border-t tw-border-white/10 tw-text-center md:tw-hidden tw-text-gray-400 tw-text-sm">
                © 2023 ImageForge. All rights reserved.
            </div>
        </div>
    </footer>
</template>


<script setup lang="ts">
// No props or reactive data needed for this component
</script>