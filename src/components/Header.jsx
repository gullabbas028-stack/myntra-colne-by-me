import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useBag } from '../context/BagContext';

export default function Header({ variant = 'full' }) {
  const { bagCount, wishlistCount } = useBag();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);

  function handleSearch(event) {
    const nextValue = event.target.value;
    setSearchTerm(nextValue);

    const nextParams = new URLSearchParams(searchParams);
    if (nextValue.trim()) {
      nextParams.set('q', nextValue.trim());
    } else {
      nextParams.delete('q');
    }

    setSearchParams(nextParams, { replace: true });
  }

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img className="myntra_home" src="/images/myntra_logo.webp" alt="Myntra Home" />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/categories/men">Men</Link>
        <Link to="/categories/women">Women</Link>
        <Link to="/categories/kids">Kids</Link>
        <Link to="/categories/home-living">Home & Living</Link>
        <Link to="/categories/beauty">Beauty</Link>
        <Link to="/categories/studio">
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="action_bar">
        <a
          className="action_container"
          href="https://www.linkedin.com/in/gull-abbas-122255381"
          target="_blank"
          rel="noreferrer"
        >
          <span className="material-symbols-outlined action_icon">person</span>
          <span className="action_name">Profile</span>
        </a>
        <Link className="action_container" to="/">
          <span className="material-symbols-outlined action_icon">favorite</span>
          <span className="action_name">Wishlist</span>
          {wishlistCount > 0 && <span className="bag-item-count bag-items">{wishlistCount}</span>}
        </Link>
        <Link className="action_container" to="/bag">
          <span className="material-symbols-outlined action_icon">shopping_bag</span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count bag-items">{bagCount}</span>
        </Link>
      </div>
    </header>
  );
}
