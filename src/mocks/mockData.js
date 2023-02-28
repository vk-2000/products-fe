const mockData = {
  categories: [
    {
      id: 1,
      name: 'Electronics',
      description: 'Products related to electronics',
    },
    {
      id: 2,
      name: 'Clothing',
      description: 'Products related to clothing',
    },
    {
      id: 3,
      name: 'Home and Garden',
      description: 'Products related to home and garden',
    },
    {
      id: 4,
      name: 'Toys and Games',
      description: 'Products related to toys and games',
    },
    {
      id: 5,
      name: 'Sports and Outdoors',
      description: 'Products related to sports and outdoors',
    },
    {
      id: 6,
      name: 'Beauty and Personal Care',
      description: 'Products related to beauty and personal care',
    },
  ],
  products: [
    {
      id: 1,
      name: 'Apple iPhone X',
      description: 'A high-end smartphone from Apple',
      price: 999.99,
      categoryId: 1,
      imageUrl: 'https://via.placeholder.com/400x400?text=Apple+iPhone+X',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S10',
      description: 'A flagship smartphone from Samsung',
      price: 899.99,
      categoryId: 1,
      imageUrl: 'https://via.placeholder.com/400x400?text=Samsung+Galaxy+S10',
    },
    {
      id: 3,
      name: 'LG OLED TV',
      description: 'A premium OLED TV from LG',
      price: 1499.99,
      categoryId: 1,
      imageUrl: 'https://via.placeholder.com/400x400?text=LG+OLED+TV',
    },
    {
      id: 4,
      name: 'Nike Air Max 270',
      description: 'A popular running shoe from Nike',
      price: 129.99,
      categoryId: 2,
      imageUrl: 'https://via.placeholder.com/400x400?text=Nike+Air+Max+270',
    },
    {
      id: 5,
      name: "Levi's 501 Original Fit Jeans",
      description: "A classic pair of jeans from Levi's",
      price: 79.99,
      categoryId: 2,
      imageUrl: 'https://via.placeholder.com/400x400?text=Levi%27s+501+Original+Fit+Jeans',
    },
    {
      id: 6,
      name: 'KitchenAid Stand Mixer',
      description: 'A versatile kitchen appliance from KitchenAid',
      price: 349.99,
      categoryId: 3,
      imageUrl: 'https://via.placeholder.com/400x400?text=KitchenAid+Stand+Mixer',
    },
    {
      id: 7,
      name: 'Nerf N-Strike Elite Disruptor Blaster',
      description: 'A popular foam dart blaster from Nerf',
      price: 19.99,
      categoryId: 4,
      imageUrl: 'https://via.placeholder.com/400x400?text=Nerf+N-Strike+Elite+Disruptor+Blaster',
    },
    {
      id: 8,
      name: 'Nintendo Switch',
      description: 'A popular gaming console from Nintendo',
      price: 299.99,
      categoryId: 4,
      imageUrl: 'https://via.placeholder.com/400x400?text=Nintendo+Switch',
    },
  ],
};

export default mockData;
