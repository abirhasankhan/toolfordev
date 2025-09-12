// types/index.ts

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Format {
    name: string;
    color: string;
    size: string;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface NavigationLink {
    href: string;
    label: string;
}

export interface Stats {
    users: number;
    conversions: number;
    savings: number;
}

export interface AnimationConfig {
    duration: number;
    steps: number;
    delay?: number;
}

export interface ProcessingMode {
    type: 'client' | 'server';
    title: string;
    description: string;
    features: string[];
    icon: string;
    colorScheme: {
        background: string;
        border: string;
        shadow: string;
        icon: string;
    };
}