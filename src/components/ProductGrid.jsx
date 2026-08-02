import ProductCard from './ProductCard';

export default function ProductGrid({ items, showRating = true }) {
  return (
    <div className="items-container">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} showRating={showRating} />
      ))}
    </div>
  );
}
