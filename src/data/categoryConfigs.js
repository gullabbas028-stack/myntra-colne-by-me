export const categoryConfigs = {
  men: {
    title: "Men's Essentials",
    subtitle: 'Fresh arrivals curated for everyday style.',
    heroImage: '/images/men-1.jpg',
    showCategoryGrid: true,
    categoryCards: [
      { image: '/images/men-2.jpg', label: 'Casual Wear', alt: 'Men wear' },
      { image: '/images/men-1.jpg', label: 'Active Wear', alt: 'Active wear' },
    ],
    items: [
      { id: '009', title: 'Men Slim Fit Solid Casual Shirt', company: 'HIGHLANDER', price: 799, original: 1499, discount: 47, image: '/images/men-2.jpg' },
      { id: '011', title: 'Men Running Shoes', company: 'PUMA', price: 2399, original: 3999, discount: 40, image: '/images/men-1.jpg' },
      { id: '005', title: 'Pure Cotton T-shirt', company: 'Roadster', price: 489, original: 1399, discount: 65, image: '/images/5.jpg' },
      { id: '006', title: 'Men ReactX Running Shoes', company: 'Nike', price: 14995, original: 14995, discount: 0, image: '/images/6.jpg' },
    ],
  },
  women: {
    title: "Women's New In",
    subtitle: 'Trendy essentials for every season.',
    heroImage: '/images/women-1.jpg',
    items: [
      { id: '002', title: 'Women Padded Halter Neck Swimming Dress', company: 'CUKOO', price: 1507, original: 2599, discount: 42, image: '/images/women-1.jpg' },
      { id: '003', title: 'Women Red & White Printed A-Line Knee-Length Skirts', company: 'NUEVOSDAMAS', price: 495, original: 1599, discount: 69, image: '/images/women-2.jpg' },
      { id: '010', title: 'Women Floral A-Line Midi Dress', company: 'MANGO', price: 1299, original: 2299, discount: 43, image: '/images/women-2.jpg' },
      { id: '012', title: 'Women Oversized Denim Jacket', company: 'BERRIES', price: 999, original: 1899, discount: 47, image: '/images/women-1.jpg' },
    ],
  },
  kids: {
    title: "Kids' Trendsetter",
    subtitle: 'Playful outfits for every little adventure.',
    heroImage: '/images/kids-1.jpg',
    items: [
      { id: '001', title: 'Rhodium-Plated CZ Floral Studs', company: 'Carlton London', price: 606, original: 1045, discount: 42, image: '/images/kids-1.jpg' },
      { id: '004', title: 'Indian Cricket ODI Jersey', company: 'ADIDAS', price: 999, original: 999, discount: 0, image: '/images/kids-2.jpg' },
    ],
  },
  'home-living': {
    title: 'Home Essentials',
    subtitle: 'Style your space with comfort and charm.',
    heroImage: '/images/home-1.jpg',
    items: [
      { id: '013', title: 'Minimal Stainless Steel Watch', company: 'FOSSIL', price: 4199, original: 6999, discount: 40, image: '/images/home-1.jpg' },
      { id: '014', title: 'Performance Track Jacket', company: 'HRX', price: 1199, original: 1999, discount: 40, image: '/images/home-2.jpg' },
    ],
  },
  beauty: {
    title: 'Beauty Picks',
    subtitle: 'Skincare and makeup essentials for everyday confidence.',
    heroImage: '/images/beauty-1.jpg',
    items: [
      { id: '008', title: 'Men Fresh Deodrant 150ml', company: 'Nivea', price: 142, original: 285, discount: 50, image: '/images/beauty-2.jpg' },
      { id: '015', title: 'Women Knit Top with Wide Sleeves', company: 'FOREVER 21', price: 749, original: 1299, discount: 42, image: '/images/beauty-1.jpg' },
    ],
  },
  studio: {
    title: 'Studio Exclusives',
    subtitle: 'Editor-curated drops and limited collections.',
    heroImage: '/images/studio-1.jpg',
    items: [
      { id: '016', title: 'Women Sports Joggers', company: 'ADIDAS', price: 1299, original: 2199, discount: 41, image: '/images/studio-2.jpg' },
      { id: '013', title: 'Minimal Stainless Steel Watch', company: 'FOSSIL', price: 4199, original: 6999, discount: 40, image: '/images/studio-1.jpg' },
    ],
  },
};
