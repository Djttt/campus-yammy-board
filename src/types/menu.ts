
export type Category = '所有' | '盖浇饭' | '面食' | '小吃' | '饮料';

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
    category: Category;    
}

export interface StallStatus {
    isOpen: boolean;
    queueLevel: 'Low' | 'Medium' | 'High';
    announcement?: string;
}