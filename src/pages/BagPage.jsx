import { useBag } from '../context/BagContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BagPage() {
  const { bagItemObjects, bagSummary, removeFromBag, orderPlaced, placeOrder } = useBag();

  return (
    <>
      <Header variant="full" />
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItemObjects.length === 0 ? (
              <p className="empty-bag">Your bag is empty.</p>
            ) : (
              bagItemObjects.map((item, index) => (
                <div key={`${item.id}-${index}`} className="bag-item-container">
                  <div className="item-left-part">
                    <img className="bag-item-img" src={item.image} alt={item.item_name} />
                  </div>
                  <div className="item-right-part">
                    <div className="company">{item.company}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price-container">
                      <span className="current-price">Rs {item.current_price}</span>
                      <span className="original-price">Rs {item.original_price}</span>
                      <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
                    </div>
                    {item.return_period && (
                      <div className="return-period">
                        <span className="return-period-days">{item.return_period} days</span> return
                        available
                      </div>
                    )}
                    {item.delivery_date && (
                      <div className="delivery-details">
                        Delivery by
                        <span className="delivery-details-days"> {item.delivery_date}</span>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="remove-from-cart"
                    onClick={() => removeFromBag(item.id)}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="bag-summary">
            {orderPlaced && (
              <div className="order-success">
                Your order is placed successfully.
              </div>
            )}
            <div className="bag-details-container">
              <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items)</div>
              <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹{bagSummary.totalMRP}</span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">
                  -₹{bagSummary.totalDiscount}
                </span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">₹{bagSummary.convenienceFees}</span>
              </div>
              <hr />
              <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹{bagSummary.finalPayment}</span>
              </div>
            </div>
            <button type="button" className="btn-place-order" onClick={placeOrder}>
              <div className="css-xjhrni">PLACE ORDER</div>
            </button>
          </div>
        </div>
      </main>
      <Footer variant="bag" />
    </>
  );
}
