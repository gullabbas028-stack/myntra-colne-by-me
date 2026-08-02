import { Link } from 'react-router-dom';
import { useBag } from '../context/BagContext';

export default function CartDrawer() {
  const { bagItems, bagItemObjects, isCartOpen, closeCartDrawer } = useBag();

  if (!isCartOpen) {
    return <div className="cart-drawer-root" />;
  }

  return (
    <div className="cart-drawer-root" style={{ pointerEvents: 'auto' }}>
      <div
        className="cart-overlay active"
        onClick={closeCartDrawer}
        onKeyDown={(event) => event.key === 'Escape' && closeCartDrawer()}
        role="button"
        tabIndex={0}
        aria-label="Close cart"
      />
      <div className="cart-drawer active">
        <div className="cart-header">
          <div>
            <h3>Bag</h3>
            <p>{bagItems.length} items</p>
          </div>
          <button type="button" className="cart-close" onClick={closeCartDrawer}>
            ×
          </button>
        </div>
        <div className="cart-items">
          {bagItemObjects.length === 0 ? (
            <p className="cart-empty">Your bag is empty.</p>
          ) : (
            bagItemObjects.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.image} alt={item.item_name} />
                <div>
                  <h4>{item.item_name}</h4>
                  <p>Rs {item.current_price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <Link className="cart-footer" to="/bag" onClick={closeCartDrawer}>
          View bag
        </Link>
      </div>
    </div>
  );
}
