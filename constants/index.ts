// constants/index.ts

// Icon mappings for the application
export const icons = {
    upload: 'lucide:upload',
    zap: 'lucide:zap',
    shield: 'lucide:shield',
    globe: 'lucide:globe',
    arrowRight: 'lucide:arrow-right',
    download: 'lucide:download',
    star: 'lucide:star',
    users: 'lucide:users',
    checkCircle: 'lucide:check-circle',
    camera: 'lucide:camera'
};

// Feature data
export const features = [
    {
        icon: icons.shield,
        title: 'Privacy First',
        description: 'Process images locally in your browser. Your files never leave your device in client mode.'
    },
    {
        icon: icons.zap,
        title: 'Lightning Fast',
        description: 'Server-side processing with Sharp delivers blazing-fast conversions for large files.'
    },
    {
        icon: icons.globe,
        title: 'Universal Formats',
        description: 'Support for PNG, JPEG, WebP, AVIF, HEIF, TIFF and more with optimal compression.'
    }
];

// Format showcase data
export const formats = [
    { name: 'PNG', color: 'from-blue-400 to-blue-600', size: '1.2MB' },
    { name: 'JPEG', color: 'from-green-400 to-green-600', size: '340KB' },
    { name: 'WebP', color: 'from-purple-400 to-purple-600', size: '280KB' },
    { name: 'AVIF', color: 'from-orange-400 to-orange-600', size: '180KB' }
];

// Testimonials data
export const testimonials = [
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

// Navigation links
export const navigationLinks = [
    { href: '#features', label: 'Features' },
    { href: '#converter', label: 'Converter' },
    { href: '#testimonials', label: 'Reviews' }
];

// Footer links
export const footerLinks = [
    { href: '#', label: 'Privacy' },
    { href: '#', label: 'Terms' },
    { href: '#', label: 'Support' }
];