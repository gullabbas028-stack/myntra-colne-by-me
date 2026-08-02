import { Link } from 'react-router-dom';

export default function Footer({ variant = 'home' }) {
  if (variant === 'bag') {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <Link to="/categories/men">Men</Link>
            <Link to="/categories/women">Women</Link>
            <Link to="/categories/kids">Kids</Link>
            <Link to="/categories/home-living">Home & Living</Link>
            <Link to="/categories/beauty">Beauty</Link>
          </div>
          <div className="footer_column">
            <h3>CONTACT</h3>
            <a href="https://www.linkedin.com/in/gull-abbas-122255381" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/gullabbas028-stack" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://portfolio-final-2026-nu.vercel.app" target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </div>
          <div className="footer_column">
            <h3>USEFUL LINKS</h3>
            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&amp;C</a>
            <a href="#">Track Orders</a>
          </div>
        </div>
        <hr />
        <div className="copyright">© 2026 www.myntra.com. All rights reserved by arbaz.</div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <Link to="/categories/men">Men</Link>
          <Link to="/categories/women">Women</Link>
          <Link to="/categories/kids">Kids</Link>
          <Link to="/categories/home-living">Home & Living</Link>
          <Link to="/categories/beauty">Beauty</Link>
        </div>
        <div className="footer_column">
          <h3>CONTACT</h3>
          <a href="https://www.linkedin.com/in/gull-abbas-122255381" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/gullabbas028-stack" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://portfolio-final-2026-nu.vercel.app" target="_blank" rel="noreferrer">
            Portfolio
          </a>
        </div>
        <div className="footer_column">
          <h3>EXPERIENCE MYNTRA APP</h3>
          <a href="#">Download on Android</a>
          <a href="#">Download on iOS</a>
          <a href="#">Myntra Insider</a>
          <a href="#">Gift Cards</a>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2026 www.myntra.com. All rights reserved by arbaz.</div>
    </footer>
  );
}
