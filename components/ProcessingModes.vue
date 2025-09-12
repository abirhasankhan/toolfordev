<script setup lang="ts">
// No props or reactive data needed for this component
</script>

<template>
    <section class="tw-relative tw-z-10 tw-px-6 tw-py-20">
        <div class="tw-max-w-6xl tw-mx-auto">
            <div class="tw-text-center tw-mb-16">
                <h2 class="tw-text-4xl tw-font-bold tw-mb-4">
                    Two Powerful
                    <span
                        class="tw-bg-gradient-to-r tw-from-purple-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent">
                        Processing Modes</span>
                </h2>
                <p class="tw-text-xl tw-text-gray-300">Choose the perfect approach for your needs</p>
            </div>

            <div class="tw-grid md:tw-grid-cols-2 tw-gap-8">
                <!-- Client-side -->
                <div
                    class="tw-group tw-p-8 tw-bg-gradient-to-br tw-from-green-900/20 tw-to-emerald-900/20 tw-rounded-2xl tw-border tw-border-green-500/20 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-shadow-2xl hover:tw-shadow-green-500/10">
                    <div class="tw-flex tw-items-center tw-mb-6">
                        <div
                            class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-green-500 tw-to-emerald-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-4">
                            <Icon name="lucide:shield" class="tw-w-6 tw-h-6" />
                        </div>
                        <h3 class="tw-text-2xl tw-font-bold">Client-side Processing</h3>
                    </div>
                    <p class="tw-text-gray-300 tw-mb-6">Your files never leave your device. Perfect for sensitive
                        content
                        and offline use.</p>
                    <ul class="tw-space-y-3">
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-green-400 tw-mr-3" />
                            100% Private & Secure
                        </li>
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-green-400 tw-mr-3" />
                            Works Offline
                        </li>
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-green-400 tw-mr-3" />
                            Instant Processing
                        </li>
                    </ul>
                </div>

                <!-- Server-side -->
                <div
                    class="tw-group tw-p-8 tw-bg-gradient-to-br tw-from-blue-900/20 tw-to-purple-900/20 tw-rounded-2xl tw-border tw-border-blue-500/20 tw-transition-all tw-duration-500 hover:tw-scale-105 hover:tw-shadow-2xl hover:tw-shadow-blue-500/10">
                    <div class="tw-flex tw-items-center tw-mb-6">
                        <div
                            class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-4">
                            <Icon name="lucide:zap" class="tw-w-6 tw-h-6" />
                        </div>
                        <h3 class="tw-text-2xl tw-font-bold">Server-side Processing</h3>
                    </div>
                    <p class="tw-text-gray-300 tw-mb-6">Powered by Sharp for maximum performance and format support.
                    </p>
                    <ul class="tw-space-y-3">
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-blue-400 tw-mr-3" />
                            More Formats (AVIF, HEIF, TIFF)
                        </li>
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-blue-400 tw-mr-3" />
                            Superior Compression
                        </li>
                        <li class="tw-flex tw-items-center tw-text-gray-300">
                            <Icon name="lucide:check-circle" class="tw-w-5 tw-h-5 tw-text-blue-400 tw-mr-3" />
                            Handles Large Files
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>