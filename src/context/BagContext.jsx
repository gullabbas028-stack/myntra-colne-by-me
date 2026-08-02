import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getItemById } from '../data/items';

const BagContext = createContext(null);

const CONVENIENCE_FEES = 99;

function loadStoredItems(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

export function BagProvider({ children }) {
  const [bagItems, setBagItems] = useState(() => loadStoredItems('bagItems'));
  const [wishlistItems, setWishlistItems] = useState(() => loadStoredItems('wishlistItems'));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedItemId, setAddedItemId] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
  }, [bagItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const bagItemObjects = useMemo(
    () => bagItems.map((itemId) => getItemById(itemId)).filter(Boolean),
    [bagItems]
  );

  const bagSummary = useMemo(() => {
    const totalItem = bagItemObjects.length;
    const totalMRP = bagItemObjects.reduce((sum, item) => sum + item.original_price, 0);
    const totalDiscount = bagItemObjects.reduce(
      (sum, item) => sum + (item.original_price - item.current_price),
      0
    );
    const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    return { totalItem, totalMRP, totalDiscount, finalPayment, convenienceFees: CONVENIENCE_FEES };
  }, [bagItemObjects]);

  function persistBagItems(nextItems) {
    setBagItems(nextItems);
  }

  function addToBag(itemId) {
    const nextItems = [...bagItems, itemId];
    persistBagItems(nextItems);
    setAddedItemId(itemId);
    setIsCartOpen(true);
    setTimeout(() => setAddedItemId(null), 800);
  }

  function removeFromBag(itemId) {
    persistBagItems(bagItems.filter((bagItemId) => bagItemId !== itemId));
  }

  function toggleWishlist(itemId) {
    setWishlistItems((currentItems) => {
      if (currentItems.includes(itemId)) {
        return currentItems.filter((wishlistItemId) => wishlistItemId !== itemId);
      }
      return [...currentItems, itemId];
    });
  }

  function isWishlisted(itemId) {
    return wishlistItems.includes(itemId);
  }

  function placeOrder() {
    if (bagItems.length === 0) {
      return;
    }

    setOrderPlaced(true);
    setBagItems([]);
    setIsCartOpen(false);
  }

  function openCartDrawer() {
    setIsCartOpen(true);
  }

  function closeCartDrawer() {
    setIsCartOpen(false);
  }

  const value = {
    bagItems,
    bagItemObjects,
    bagCount: bagItems.length,
    bagSummary,
    wishlistItems,
    wishlistCount: wishlistItems.length,
    isCartOpen,
    addedItemId,
    orderPlaced,
    addToBag,
    removeFromBag,
    toggleWishlist,
    isWishlisted,
    placeOrder,
    openCartDrawer,
    closeCartDrawer,
  };

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within BagProvider');
  }
  return context;
}
