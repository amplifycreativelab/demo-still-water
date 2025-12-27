export interface Service {
    id: string;
    name: string;
    duration: string;
    price?: string;
    description: string;
    benefit: string;
    cta: string;
    image: string;
}

export const services: Service[] = [
    {
        id: 'deep-tissue',
        name: 'Precision Recovery',
        duration: '60 / 90 min',
        price: '$145 / $210',
        description: 'Targeted manipulation of deep muscle layers to release chronic tension and restore structural balance.',
        benefit: 'Restores mobility',
        cta: 'Book Recovery',
        image: 'service-massage',
    },
    {
        id: 'contrast-therapy',
        name: 'Thermal Cycle',
        duration: '45 min',
        price: '$85',
        description: 'Guided contrast therapy using infrared sauna and cold plunge immersion to accelerate circulation and flush toxins.',
        benefit: 'Optimizes circulation',
        cta: 'Book Cycle',
        image: 'service-sauna',
    },
    {
        id: 'float-tank',
        name: 'Sensory Deprivation',
        duration: '60 min',
        price: '$95',
        description: 'Zero-gravity flotation in magnesium-rich water for complete nervous system reset and mental clarity.',
        benefit: 'Resets nervous system',
        cta: 'Book Float',
        image: 'service-float',
    }
];
