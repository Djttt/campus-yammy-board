
export type Category = '所有' | '盖浇饭' | '面食' | '小吃' | '饮料';

// 口味标签
export type FlavorTag = 'Spicy' | 'Sweet' | 'Salty' | 'Vegetarian' | 'Halal' | 'Popular' | 'HomeStyle' | 'Seafood' | 'Vegan'
                            | 'Fresh';

// 
export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    tags: (FlavorTag | string)[];
    isAvailable: boolean;
    calories?: number;
    rating?: number;
    category: Category | string;    
}

export interface StallStatus {
    isOpen: boolean;
    queueLevel: 'Low' | 'Medium' | 'High';
    announcement?: string;
}

// 食堂
export interface Canteen {
    id: string;
    name: string;
    floors: Floor[];
    description: string;
    location?: string;
    area?: number;
}

// 楼层floor数据结构
export interface Floor {
    id: string;
    name: string;
    windows: Window[];
}   

// 食堂窗口
export interface Window {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    dishes: Dish[];
}

export const canteen1: Canteen = {
  id: "canteen-1",
  name: "第一食堂",
  description: "味道超级好",
  floors: [
    {
      id: "1F",
      name: "一层快餐区",
      windows: [
        {
          id: "w1-1",
          name: "盖浇饭窗口",
          description: "提供多种快餐套餐",
          imageUrl: "/img/window_gaijiao.jpg",
          dishes: [
            { id: "g1", name: "宫保鸡丁盖饭", description: "经典宫保鸡丁", price: 14, imageUrl: "/img/dish_gongbao.jpg", tags: ['Popular', 'HomeStyle'], isAvailable: true, category: '盖浇饭' },
            { id: "g2", name: "酱爆肉盖饭", description: "酱香十足", price: 15, imageUrl: "/img/dish_jiangbao.jpg", tags: ['Popular'], isAvailable: true, category: '盖浇饭' }
          ]
        },
        {
          id: "w1-2",
          name: "煎饼果子",
          description: "现做煎饼果子",
          imageUrl: "/img/jianbing.jpg",
          dishes: [
            { id: "j1", name: "经典煎饼果子", description: "传统煎饼果子", price: 6, imageUrl: "/img/jianbing1.jpg", tags: ['Popular'], isAvailable: true, category: '小吃' }
          ]
        }
      ]
    },
    {
      id: "2F",
      name: "二层特色餐",
      windows: [
        {
          id: "w2-1",
          name: "铁板饭",
          description: "铁板滋滋香",
          imageUrl: "/img/tieban.jpg",
          dishes: [
            { id: "t1", name: "黑椒牛柳铁板", description: "黑椒牛柳铁板", price: 18, imageUrl: "/img/tieban_beef.jpg", tags: ['Popular'], isAvailable: true, category: '盖浇饭' }
          ]
        }
      ]
    }
  ]
};


export const canteen2: Canteen = {
  id: "canteen-2",
  name: "第二食堂",
  description: "味道超级好",
  floors: [
    {
      id: "1F",
      name: "一层面食区",
      windows: [
        {
          id: "m-1",
          name: "手擀面",
          description: "传统手擀工艺",
          imageUrl: "/img/hand_noodle.jpg",
          dishes: [
            { id: "m1", name: "鸡蛋西红柿面", description: "清汤面食", price: 11, imageUrl: "/img/noodle_tomato.jpg", tags: ['Vegetarian', 'Fresh'], isAvailable: true, category: '面食' },
            { id: "m2", name: "牛肉面", description: "浓汤牛肉面", price: 13, imageUrl: "/img/noodle_beef2.jpg", tags: ['Popular'], isAvailable: true, category: '面食' }
          ]
        }
      ]
    },
    {
      id: "2F",
      name: "二层小吃区",
      windows: [
        {
          id: "m-2",
          name: "重庆小面",
          description: "地道渝味",
          imageUrl: "/img/cqx_mian.jpg",
          dishes: [
            { id: "m3", name: "麻辣小面", description: "地道麻辣小面", price: 12, imageUrl: "/img/cq_mala.jpg", tags: ['Spicy', 'Popular'], isAvailable: true, category: '面食' }
          ]
        }
      ]
    }
  ]
};

export const canteen3: Canteen = {
  id: "canteen-3",
  name: "第三食堂（国际区）",
  description: "味道超级好",
  floors: [
    {
      id: "1F",
      name: "亚洲餐",
      windows: [
        {
          id: "asia-1",
          name: "日式拉面",
          description: "叉烧拉面，味增汤底",
          imageUrl: "/img/japan_ramen.jpg",
          dishes: [
            { id: "ramen1", name: "叉烧拉面", description: "日式叉烧拉面", price: 22, imageUrl: "/img/ramen_chashu.jpg", tags: ['Popular', 'Seafood'], isAvailable: true, category: '面食' }
          ]
        }
      ]
    },
    {
      id: "2F",
      name: "欧美餐",
      windows: [
        {
          id: "west-1",
          name: "美式汉堡",
          description: "现烤牛肉汉堡",
          imageUrl: "/img/burger.jpg",
          dishes: [
            { id: "b1", name: "经典牛肉汉堡", description: "现烤牛肉汉堡", price: 25, imageUrl: "/img/burger_beef.jpg", tags: ['Popular'], isAvailable: true, category: '小吃' }
          ]
        }
      ]
    }
  ]
};

export const canteens: Canteen[] = [canteen1, canteen2, canteen3];
