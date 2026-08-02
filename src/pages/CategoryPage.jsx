import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import { categoryConfigs } from '../data/categoryConfigs';

export default function CategoryPage({ categoryKey }) {
  const [searchParams] = useSearchParams();
  const config = categoryConfigs[categoryKey];
  const query = (searchParams.get('q') || '').trim().toLowerCase();

  const filteredItems = (config.items || []).filter((item) => {
    const searchableText = `${item.title} ${item.company}`.toLowerCase();
    return searchableText.includes(query);
  });

  return (
    <>
      <Header variant="compact" />
      <main>
        <section className="hero-banner">
          <img src={config.heroImage} alt={`${config.title} collection`} />
          <div className="hero-text">
            <h1>{config.title}</h1>
            <p>{config.subtitle}</p>
          </div>
        </section>

        {config.showCategoryGrid && config.categoryCards && (
          <div className="category-grid">
            {config.categoryCards.map((card) => (
              <div key={card.label} className="category-card">
                <img src={card.image} alt={card.alt} />
                <h3>{card.label}</h3>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 ? (
          <p className="empty-state">No products match your search in this collection.</p>
        ) : (
          <ProductGrid items={filteredItems} showRating={false} />
        )}
      </main>
    </>
  );
}
