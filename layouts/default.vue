<template>
    <div>
        <!-- Header -->
        <AppHeader />

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/ui/AppHeader.vue';
import AppFooter from '~/components/ui/AppFooter.vue';
</script>