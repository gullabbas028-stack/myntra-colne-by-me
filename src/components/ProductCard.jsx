import { useBag } from '../context/BagContext';

export default function ProductCard({ item, showRating = true }) {
  const { addToBag, addedItemId, toggleWishlist, isWishlisted } = useBag();
  const isAdded = addedItemId === item.id;
  const isFavorite = isWishlisted(item.id);

  const name = item.item_name || item.title;
  const company = item.company;
  const currentPrice = item.current_price ?? item.price;
  const originalPrice = item.original_price ?? item.original;
  const discount = item.discount_percentage ?? item.discount;

  return (
    <div className="item-container">
      <div className="item-image-wrap">
        <img className="item-image" src={item.image} alt={name} />
        <button
          type="button"
          className={`wishlist-btn${isFavorite ? ' active' : ''}`}
          onClick={() => toggleWishlist(item.id)}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      {showRating && item.rating && (
        <div className="rating">
          {item.rating.stars} ★ | {item.rating.count}
        </div>
      )}
      <div className="company-name">{company}</div>
      <div className="item-name">{name}</div>
      <div className="price">
        <span className="current-price">Rs {currentPrice}</span>
        <span className="original-price">Rs {originalPrice}</span>
        <span className="discount">({discount}% OFF)</span>
      </div>
      <button
        type="button"
        className={`btn-add-bag${isAdded ? ' btn-added' : ''}`}
        onClick={() => addToBag(item.id)}
      >
        {isAdded ? 'Added' : 'Add to bag'}
      </button>
    </div>
  );
}
