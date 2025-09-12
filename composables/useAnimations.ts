// composables/useAnimations.ts
import { ref, onMounted } from 'vue';

export const useVisibilityAnimation = () => {
    const isVisible = ref(false);

    onMounted(() => {
        isVisible.value = true;
    });

    return {
        isVisible
    };
};

export const useStatsAnimation = () => {
    const stats = ref({ users: 0, conversions: 0, savings: 0 });

    const animateStats = () => {
        const targets = { users: 50000, conversions: 2500000, savings: 85 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let step = 0;

        const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            stats.value = {
                users: Math.floor(targets.users * progress),
                conversions: Math.floor(targets.conversions * progress),
                savings: Math.floor(targets.savings * progress)
            };
            if (step >= steps) clearInterval(interval);
        }, stepDuration);
    };

    return {
        stats,
        animateStats
    };
};

export const useFeatureHover = () => {
    const currentFeature = ref(0);

    const setCurrentFeature = (index: number) => {
        currentFeature.value = index;
    };

    return {
        currentFeature,
        setCurrentFeature
    };
};