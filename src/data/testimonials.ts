export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        quote: "It wasn't just a massage; it was a complete system reset. I haven't slept this well in years.",
        author: 'Sarah Jenkins',
        role: 'Architect'
    },
    {
        id: 't2',
        quote: "The quiet is palpable here. A true sanctuary in the middle of the city hustle.",
        author: 'David Chen',
        role: 'Software Engineer'
    }
];
