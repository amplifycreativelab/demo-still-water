export interface Therapist {
    id: string;
    name: string;
    role: string;
    bio: string;
    image?: string; // Placeholder for now
}

export const therapists: Therapist[] = [
    {
        id: 'elara',
        name: 'Elara Vance',
        role: 'Senior Structural Therapist',
        bio: 'Specializing in biomechanics and deep tissue release for high-performance recovery.',
        image: 'elara-vance',
    },
    {
        id: 'kai',
        name: 'Kai Sorensen',
        role: 'Breathwork & Contrast Guide',
        bio: 'Guiding clients through thermal regulation and nervous system downregulation.',
        image: 'kai-sorensen',
    },
];
