
// 口味标签
export type FlavorTag = 'Spicy' | 'Sweet' | 'Salty' | 'Vegetarian' | 'Halal';

// 
export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    tags: FlavorTag[];
    isAvailable: boolean;
    calories?: number;
    rating?: number;
    category: 'Main' | 'Side' | 'Drink';    
}

export interface StallStatus {
    isOpen: boolean;
    queueLevel: 'Low' | 'Medium' | 'High';
    announcement?: string;
}