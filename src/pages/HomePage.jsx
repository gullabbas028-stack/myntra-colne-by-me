import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ProductGrid from '../components/ProductGrid';
import { items } from '../data/items';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();

  const filteredItems = items.filter((item) => {
    const searchableText = `${item.item_name || item.title} ${item.company}`.toLowerCase();
    return searchableText.includes(query);
  });

  return (
    <>
      <Header variant="full" />
      <main>
        <Carousel />

        <section className="category-chips" aria-label="Shop by category">
          <Link to="/categories/men" className="chip">
            Men
          </Link>
          <Link to="/categories/women" className="chip">
            Women
          </Link>
          <Link to="/categories/kids" className="chip">
            Kids
          </Link>
          <Link to="/categories/home-living" className="chip">
            Home & Living
          </Link>
          <Link to="/categories/beauty" className="chip">
            Beauty
          </Link>
          <Link to="/categories/studio" className="chip">
            Studio
          </Link>
        </section>

        <section className="section-heading">
          <h2>{query ? `Search results for “${query}”` : 'Featured Products'}</h2>
          <Link to="/categories/men">View all</Link>
        </section>

        {filteredItems.length === 0 ? (
          <p className="empty-state">No products match your search yet.</p>
        ) : (
          <ProductGrid items={filteredItems} />
        )}
      </main>
      <Footer variant="home" />
    </>
  );
}
