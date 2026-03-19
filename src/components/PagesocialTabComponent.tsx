import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["For You", "Following", "Trending", "Outfit", "Item", "Dump"];

const stories = [
  { id: 1, type: "new", name: "New Drop" },
  { id: 2, name: "laurenq", image: "/image-001.png" },
  { id: 3, name: "kai.l", image: "/image-002.png" },
  { id: 4, name: "jess.n", image: "/image-003.png" },
  { id: 5, name: "ccmaya", image: "/image-004.png" },
  { id: 6, name: "d.cho", image: "/image-005.png" },
];

const outfitProducts = [
  { id: 1, name: "Pleated Skirt", price: "$20", image: "/image-006.png" },
  { id: 2, name: "Leather Jacket", price: "$50", image: "/image-007.png" },
  { id: 3, name: "Wool Cardigan", price: "$30", image: "/image-008.png" },
];

const itemGallery = [
  "/image-011.png",
  "/image-012.png",
  "/image-013.png",
  "/image-014.png",
];

const dumpGallery = [
  {
    image: "/image-018.png",
    title: "Striped Shirt",
    brand: "Gap",
    meta: "Size M",
    condition: "Like New",
    price: "$10",
  },
  {
    image: "/image-019.png",
    title: "Sold Item",
    brand: "Gap",
    meta: "Size M",
    condition: "Like New",
    price: "$10",
    sold: true,
  },
  {
    image: "/image-020.png",
    title: "Brown Corduroy Boots",
    brand: "Vintage",
    meta: "US 7",
    condition: "Good",
    price: "$30",
  },
  {
    image: "/image-021.png",
    title: "Red Mini Dress",
    brand: "Boutique",
    meta: "Size S",
    condition: "Like New",
    price: "$20",
  },
  {
    image: "/image-022.png",
    title: "Linen Tank",
    brand: "Uniqlo",
    meta: "Size M",
    condition: "Good",
    price: "$7",
  },
  {
    image: "/image-023.png",
    title: "Leather Jacket",
    brand: "Zara",
    meta: "Size M",
    condition: "Like New",
    price: "$70",
  },
  {
    image: "/image-024.png",
    title: "Knit Scarf",
    brand: "Handmade",
    meta: "One Size",
    condition: "Good",
    price: "$10",
  },
];

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ji-svg-icon" fill="none" aria-hidden="true">
      <path
        d="M12 20.5L10.55 19.18C5.4 14.52 2 11.44 2 7.65C2 4.57 4.42 2.2 7.5 2.2C9.24 2.2 10.91 3.01 12 4.29C13.09 3.01 14.76 2.2 16.5 2.2C19.58 2.2 22 4.57 22 7.65C22 11.44 18.6 14.52 13.45 19.19L12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ji-svg-icon" fill="none" aria-hidden="true">
      <path
        d="M3 4H5L7.2 14.2C7.39 15.08 8.16 15.7 9.06 15.7H17.5C18.35 15.7 19.1 15.14 19.34 14.33L21 8.5H6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 30 30" className="ji-bottom-svg" fill="none" aria-hidden="true">
      <path
        d="M4.2 11.2L13 4.5C14.2 3.58 15.8 3.58 17 4.5L25.8 11.2V24.5C25.8 25.38 25.08 26.1 24.2 26.1H5.8C4.92 26.1 4.2 25.38 4.2 24.5V11.2Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M4.2 11.2L13 4.5C14.2 3.58 15.8 3.58 17 4.5L25.8 11.2V24.5C25.8 25.38 25.08 26.1 24.2 26.1H5.8C4.92 26.1 4.2 25.38 4.2 24.5V11.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M11.5 26V18.2H18.5V26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 30 30" className="ji-bottom-svg" fill="none" aria-hidden="true">
      <circle cx="13" cy="13" r="8.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19.4 19.4L26.2 26.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 30 24" className="ji-bottom-svg" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 5L15 13L26.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 28 29" className="ji-bottom-svg" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="25" height="26" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="10.2" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 22.5C8.1 19.7 10.7 18 14 18C17.3 18 19.9 19.7 21 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PlusFabIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z" fill="black" fillOpacity="0.18" />
      <path d="M20 10V30M10 20H30" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TopLogo() {
  return (
    <svg
      width="64"
      height="53"
      viewBox="0 0 64.635 53.3852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ji-logo-svg"
      aria-label="Just In logo"
    >
      <path
        d="M49.9852 7.88789C51.8162 6.66005 54.2898 7.15772 55.5105 8.99952C62.7352 19.9013 64.635 29.8642 63.8271 37.4808C63.4266 41.2561 62.3525 44.5049 60.8761 46.9727C59.5302 49.2223 57.3469 51.6133 54.3805 52.0611C49.575 52.7863 45.8872 50.6122 43.2748 47.5473C40.8076 44.6526 39.0539 40.7241 37.657 36.9774C36.2943 33.3222 34.9639 28.9186 33.8353 25.6709C32.5837 22.0693 31.4737 19.5388 30.3575 18.1353C29.6997 17.3083 28.4194 16.786 26.6556 17.0299C25.7083 17.1609 24.9646 17.4645 24.43 17.79C26.7463 21.2825 28.7386 25.2808 29.998 29.3095C31.3614 33.671 31.9888 38.4611 30.8268 42.7665C29.5915 47.3428 26.4197 50.989 21.153 52.7109L20.7787 52.8338L20.3872 52.88C16.118 53.3852 12.2223 52.3373 9.866 48.9314C7.78491 45.923 7.62594 42.01 8.03023 38.5384C8.74143 32.4317 11.5434 24.9802 14.7601 18.2613C13.3252 16.6484 11.9125 15.4101 10.6621 14.636C8.78803 13.4758 8.20382 11.0077 9.35706 9.12242C10.5103 7.23722 12.9639 6.64951 14.8379 7.8096C16.3999 8.77658 17.9364 10.0536 19.4005 11.5328C21.248 10.1791 23.4853 9.37631 25.57 9.08798C29.1729 8.58972 33.6481 9.44149 36.58 13.1282C38.6512 15.7327 40.1313 19.4975 41.3574 23.0256C42.7065 26.908 43.7419 30.4701 45.1184 34.1623C46.4608 37.7629 47.8199 40.5644 49.3246 42.3297C50.611 43.839 51.7043 44.2915 52.979 44.1607C53.0827 44.0815 53.4894 43.7733 54.0482 42.8393C54.8378 41.5195 55.6067 39.4275 55.9034 36.6298C56.49 31.0997 55.2022 22.9857 48.8802 13.446C47.6596 11.6042 48.1544 9.1158 49.9852 7.88789ZM20.0129 25.9981C17.9195 30.9295 16.3836 35.7071 15.9453 39.4707C15.6076 42.3702 16.0287 43.806 16.4068 44.3525C16.5043 44.4935 16.9052 45.1361 19.0604 44.9569C21.5037 44.0547 22.6288 42.547 23.1366 40.6654C23.7425 38.42 23.5233 35.3188 22.3966 31.7144C21.8006 29.8079 20.9825 27.87 20.0129 25.9981Z M4.38281 0C6.80338 0 8.76563 1.97395 8.76563 4.40895C8.76563 6.84395 6.80338 8.8179 4.38281 8.8179C1.96225 8.8179 0 6.84395 0 4.40895C0 1.97395 1.96225 0 4.38281 0Z"
        fill="#CFFF04"
        fillRule="evenodd"
      />
    </svg>
  );
}

function TopIconButton({ label, children }) {
  return (
    <button className="ji-icon-btn" aria-label={label} type="button">
      {children}
    </button>
  );
}

function BottomNavItem({ to, label, children }) {
  return (
    <NavLink
      to={to}
      aria-label={label}
      className={({ isActive }) => `ji-bottom-icon ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  );
}

function Story({ story }) {
  if (story.type === "new") {
    return (
      <motion.button whileTap={{ scale: 0.96 }} className="ji-story" aria-label="Create new drop">
        <div className="ji-story-ring">
          <div className="ji-story-add">+</div>
        </div>
        <span className="ji-story-name active">{story.name}</span>
      </motion.button>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.96 }} className="ji-story" aria-label={`Open story by ${story.name}`}>
      <div className="ji-story-ring">
        <div className="ji-story-image-wrap">
          <img src={story.image} alt={story.name} className="ji-story-image" />
        </div>
      </div>
      <span className="ji-story-name">{story.name}</span>
    </motion.button>
  );
}

function ProductChip({ product, active }) {
  return (
    <motion.div layout className={`ji-product-chip ${active ? "active" : ""}`}>
      <div className="ji-product-thumb-wrap">
        <img src={product.image} alt={product.name} className="ji-product-thumb" />
      </div>
      <div className="ji-product-info">
        <div className="ji-product-name">{product.name}</div>
        <div className="ji-product-price">{product.price}</div>
      </div>
    </motion.div>
  );
}

function FeedStats() {
  return (
    <div className="ji-stats-row" aria-label="Post stats">
      <div className="ji-stat">
        <span aria-hidden="true">♡</span>
        <span>120</span>
      </div>
      <div className="ji-stat">
        <span aria-hidden="true">▣</span>
        <span>24</span>
      </div>
      <div className="ji-stat">
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}

function ActionButton({ children }) {
  return (
    <motion.button whileTap={{ scale: 0.97 }} className="ji-action-btn" type="button">
      {children}
    </motion.button>
  );
}

function TagButton({ children, type = "lime" }) {
  return <span className={`ji-tag-button ${type}`}>{children}</span>;
}

function TrendingCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="ji-trending-card">
      <div className="ji-trending-icon">◔</div>
      <div>
        <div className="ji-trending-label">Trending at NYU this week</div>
        <div className="ji-trending-tags">
          <span>#Layering</span>
          <span>#LibraryCore</span>
          <span>#Y2K</span>
          <span>#VintageLevis</span>
        </div>
      </div>
    </motion.div>
  );
}

function PostHeader({ name, image, time, badge, badgeType = "pink" }) {
  return (
    <div className="ji-post-header">
      <div className="ji-post-user">
        <div className="ji-avatar avatar-sm">
          <img src={image} alt={name} />
        </div>
        <div>
          <div className="ji-post-name">{name}</div>
          <div className="ji-post-meta">NYU • {time}</div>
        </div>
      </div>
      <TagButton type={badgeType}>{badge}</TagButton>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="ji-skeleton-card" aria-hidden="true">
      <div className="ji-skeleton-line short" />
      <div className="ji-skeleton-media" />
      <div className="ji-skeleton-line" />
      <div className="ji-skeleton-line medium" />
    </div>
  );
}

function OutfitPost() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const productDots = [
    { id: 1, top: "40%", left: "66%" },
    { id: 2, top: "30%", left: "48%" },
    { id: 3, top: "64%", left: "53%" },
  ];

  return (
    <section className="ji-card">
      <PostHeader
        name="laurenq"
        image="/image-001.png"
        time="2h ago"
        badge="OUTFIT"
        badgeType="pink"
      />

      <div className="ji-media-wrap outfit">
        <img src="/image-009.png" alt="Outfit post" className="ji-main-media" />
        <div className="ji-flame-mark">◔</div>

        {productDots.map((dot, index) => (
          <motion.button
            whileTap={{ scale: 0.94 }}
            key={dot.id}
            className={`ji-shop-dot ${selectedProduct === index ? "active" : ""}`}
            style={{ top: dot.top, left: dot.left }}
            onClick={() => setSelectedProduct(index)}
            aria-label={`Select product ${index + 1}`}
            aria-pressed={selectedProduct === index}
            type="button"
          >
            <span>⌂</span>
          </motion.button>
        ))}

        <div className="ji-shop-hint">tap the dots to shop this look</div>
      </div>

      <div className="ji-product-strip">
        <button className="ji-look-btn" type="button">
          GET THE WHOLE LOOK
        </button>
        <div className="ji-product-scroll" role="list" aria-label="Outfit products">
          {outfitProducts.map((product, index) => (
            <button
              key={product.id}
              className="ji-product-scroll-item"
              onClick={() => setSelectedProduct(index)}
              aria-pressed={selectedProduct === index}
              aria-label={`Select ${product.name}`}
              type="button"
            >
              <ProductChip product={product} active={selectedProduct === index} />
            </button>
          ))}
        </div>
      </div>

      <div className="ji-card-content">
        <div className="ji-row-between">
          <FeedStats />
          <ActionButton>SEND OFFER</ActionButton>
        </div>

        <div className="ji-caption">
          <strong>laurenq</strong> cozy fall look 🫶 dm for details!
        </div>

        <div className="ji-hashtags">
          <span>#Layering</span>
          <span>#Fall</span>
          <span>#Leather</span>
        </div>
      </div>
    </section>
  );
}

function ItemPost() {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const currentImage = useMemo(() => itemGallery[galleryIndex], [galleryIndex]);

  return (
    <section className="ji-card">
      <PostHeader
        name="kai.l"
        image="/image-002.png"
        time="3h ago"
        badge="ITEM"
        badgeType="blue"
      />

      <div className="ji-item-card">
        <div className="ji-gallery-main">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={`Gallery item ${galleryIndex + 1}`}
              className="ji-main-media"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.35 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          <div className="ji-gallery-dots" role="tablist" aria-label="Item gallery">
            {itemGallery.map((_, index) => (
              <button
                key={index}
                className={`ji-gallery-dot ${galleryIndex === index ? "active" : ""}`}
                onClick={() => setGalleryIndex(index)}
                aria-label={`Show gallery image ${index + 1}`}
                aria-selected={galleryIndex === index}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="ji-card-content darker">
          <div className="ji-row-between">
            <FeedStats />
            <ActionButton>SEND OFFER</ActionButton>
          </div>

          <div className="ji-item-info">
            <div>
              <div className="ji-item-title">Dior Distressed Jeans</div>
              <div className="ji-item-meta">Dior • Size 32 • Worn twice</div>
              <div className="ji-hashtags">
                <span>#Designer</span>
                <span>#Vintage</span>
                <span>#Denim</span>
              </div>
            </div>

            <div className="ji-price-row">
              <div className="ji-price">$ 120</div>
              <button className="ji-buy-btn" type="button">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DumpPost() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = dumpGallery[selectedIndex];

  return (
    <section className="ji-card">
      <PostHeader
        name="jess.n"
        image="/image-003.png"
        time="3m ago"
        badge="DUMP"
        badgeType="green"
      />

      <div className="ji-item-card">
        <div className="ji-gallery-main square">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected.image}
              src={selected.image}
              alt={selected.title}
              className="ji-main-media"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.35 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {selected.sold && <div className="ji-sold-overlay">SOLD</div>}
        </div>

        <div className="ji-thumb-rail" aria-label="Dump gallery thumbnails">
          {dumpGallery.map((item, index) => (
            <button
              key={index}
              className={`ji-thumb-button ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
              aria-label={`Show ${item.title}`}
              type="button"
            >
              <img src={item.image} alt={item.title} className="ji-thumb-square" />
            </button>
          ))}
        </div>

        <div className="ji-card-content darker">
          <div className="ji-row-between">
            <FeedStats />
            <ActionButton>SEND OFFER</ActionButton>
          </div>

          <div className="ji-item-info">
            <div>
              <div className="ji-caption">
                <strong>laurenq</strong> full closet clean out!! ✨ dm for bundle deal
              </div>
              <div className="ji-hashtags">
                <span>#Stripes</span>
                <span>#Linen</span>
                <span>#Fall</span>
                <span>#Boots</span>
              </div>
            </div>

            <div className="ji-selected-product">
              <div className="ji-item-title">{selected.title}</div>
              <div className="ji-item-meta">
                {selected.brand} • {selected.meta} • {selected.condition}
              </div>
            </div>

            <div className="ji-price-row">
              <div className="ji-price">{selected.price}</div>
              <button className="ji-buy-btn" type="button">
                BUY BUNDLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PagesocialTabComponent() {
  const [activeTab, setActiveTab] = useState("For You");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ji-accent: #CFFF04;
          --ji-bg: #111111;
          --ji-panel: #262626;
          --ji-border: #2f2f2f;
          --ji-text: #ffffff;
          --ji-muted: #8f8f8f;
          --ji-subtle: #737373;
          --ji-pink: #ff56b3;
          --ji-blue: #56a5ff;
          --ji-green: #67ff56;
        }

        .app-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 18px;
          background:
            radial-gradient(circle at top left, rgba(207, 255, 4, 0.08), transparent 30%),
            radial-gradient(circle at top right, rgba(255, 86, 179, 0.08), transparent 24%),
            linear-gradient(180deg, #030303 0%, #0a0a0a 100%);
          color: white;
        }

        .app-header {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(10,10,10,0.82);
          backdrop-filter: blur(14px);
          border-radius: 24px;
          padding: 18px 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        .app-kicker {
          margin: 0 0 6px;
          color: var(--ji-accent);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .app-title {
          margin: 0;
          font-size: clamp(28px, 3vw, 38px);
          line-height: 1.05;
        }

        .app-subtitle {
          margin: 8px 0 0;
          color: #8a8a8a;
          font-size: 14px;
        }

        .app-main {
          flex: 1;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-card {
          width: min(100%, 520px);
          padding: 28px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(16,16,16,0.84);
        }

        .placeholder-link {
          color: var(--ji-accent);
          text-decoration: none;
        }

        .ji-phone {
          width: 100%;
          max-width: 402px;
          height: min(874px, calc(100vh - 150px));
          min-height: 720px;
          background: var(--ji-bg);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 42px;
          overflow: hidden;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04),
            0 24px 100px rgba(0,0,0,0.55),
            0 0 50px rgba(207,255,4,0.06);
        }

        .ji-scroll {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          background: var(--ji-bg);
          padding-bottom: 110px;
          scrollbar-width: none;
        }

        .ji-scroll::-webkit-scrollbar {
          display: none;
        }

        .ji-top {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(17,17,17,0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 18px 16px 14px;
        }

        .ji-notch-space {
          height: 20px;
        }

        .ji-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ji-logo {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .ji-logo-svg {
          width: 64px;
          height: 53px;
          display: block;
        }

        .ji-campus-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--ji-accent);
          border-radius: 999px;
          background: rgba(207,255,4,0.16);
          color: var(--ji-accent);
          padding: 8px 14px;
          font-size: 15px;
          white-space: nowrap;
        }

        .ji-campus-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--ji-accent);
        }

        .ji-top-icons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ji-icon-btn {
          width: 36px;
          height: 36px;
          border: 0;
          background: transparent;
          color: var(--ji-accent);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 999px;
          transition: transform 0.18s ease, background-color 0.18s ease;
        }

        .ji-icon-btn:hover {
          background: rgba(207,255,4,0.08);
          transform: translateY(-1px);
        }

        .ji-icon-btn:focus-visible,
        .ji-tab:focus-visible,
        .ji-story:focus-visible,
        .ji-shop-dot:focus-visible,
        .ji-gallery-dot:focus-visible,
        .ji-thumb-button:focus-visible,
        .ji-look-btn:focus-visible,
        .ji-action-btn:focus-visible,
        .ji-buy-btn:focus-visible,
        .ji-product-scroll-item:focus-visible,
        .ji-bottom-icon:focus-visible,
        .ji-center-fab:focus-visible {
          outline: 2px solid var(--ji-accent);
          outline-offset: 2px;
        }

        .ji-svg-icon {
          width: 22px;
          height: 22px;
          display: block;
        }

        .ji-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ji-tabs::-webkit-scrollbar {
          display: none;
        }

        .ji-tab {
          border: 1px solid #525252;
          background: transparent;
          color: var(--ji-muted);
          border-radius: 999px;
          padding: 8px 14px;
          white-space: nowrap;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.18s ease;
        }

        .ji-tab:hover {
          border-color: #777;
          color: #d0d0d0;
        }

        .ji-tab.active {
          background: var(--ji-accent);
          border-color: var(--ji-accent);
          color: #000;
        }

        .ji-tab-content {
          padding: 14px 0 24px;
        }

        .ji-stories {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding: 0 16px 8px;
          scrollbar-width: none;
        }

        .ji-stories::-webkit-scrollbar {
          display: none;
        }

        .ji-story {
          border: 0;
          background: transparent;
          color: white;
          flex: 0 0 auto;
          width: 68px;
          padding: 0;
          cursor: pointer;
          transition: transform 0.18s ease;
        }

        .ji-story:hover {
          transform: translateY(-1px);
        }

        .ji-story-ring {
          width: 68px;
          height: 68px;
          border-radius: 999px;
          padding: 2px;
          background: linear-gradient(135deg, #ee7fff 0%, #4846d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ji-story-image-wrap,
        .ji-story-add {
          width: 64px;
          height: 64px;
          border-radius: 999px;
          background: var(--ji-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .ji-story-add {
          color: var(--ji-accent);
          font-size: 38px;
          line-height: 1;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 45%), linear-gradient(135deg, #c084fc, #7c3aed);
        }

        .ji-story-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ji-story-name {
          display: block;
          margin-top: 8px;
          font-size: 13px;
          color: #a3a3a3;
          text-align: center;
        }

        .ji-story-name.active {
          color: var(--ji-accent);
        }

        .ji-trending-card {
          margin: 8px 16px 16px;
          background: rgba(207,255,4,0.25);
          border: 1px solid #737373;
          border-radius: 15px;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .ji-trending-icon {
          color: var(--ji-accent);
          font-size: 20px;
          line-height: 1;
          margin-top: 2px;
        }

        .ji-trending-label {
          color: #bebebe;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .ji-trending-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          color: var(--ji-accent);
          font-size: 14px;
          font-weight: 700;
        }

        .ji-feed {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ji-card {
          background: var(--ji-bg);
          border-top: 1px solid #2b2b2b;
          border-bottom: 1px solid #2b2b2b;
        }

        .ji-post-header {
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }

        .ji-post-user {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .ji-avatar {
          border-radius: 999px;
          overflow: hidden;
          background: linear-gradient(135deg, #ee7fff 0%, #4846d4 100%);
          padding: 2px;
          flex: 0 0 auto;
        }

        .ji-avatar img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          object-fit: cover;
          background: var(--ji-bg);
        }

        .avatar-sm {
          width: 40px;
          height: 40px;
        }

        .ji-post-name {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .ji-post-meta {
          font-size: 13px;
          color: var(--ji-subtle);
          margin-top: 4px;
        }

        .ji-tag-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid;
          font-size: 13px;
          letter-spacing: 0.04em;
          background: transparent;
          white-space: nowrap;
        }

        .ji-tag-button.pink {
          color: var(--ji-pink);
          border-color: var(--ji-pink);
          background: rgba(255,86,179,0.16);
        }

        .ji-tag-button.blue {
          color: var(--ji-blue);
          border-color: var(--ji-blue);
          background: rgba(86,165,255,0.16);
        }

        .ji-tag-button.green {
          color: var(--ji-green);
          border-color: var(--ji-green);
          background: rgba(103,255,86,0.16);
        }

        .ji-media-wrap {
          position: relative;
          width: 100%;
          background: var(--ji-bg);
          overflow: hidden;
        }

        .ji-media-wrap.outfit {
          aspect-ratio: 402 / 428;
        }

        .ji-main-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ji-flame-mark {
          position: absolute;
          top: 10px;
          left: 16px;
          color: var(--ji-accent);
          font-size: 20px;
        }

        .ji-shop-dot {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 0;
          background: var(--ji-accent);
          color: #000;
          box-shadow: 0 0 20px rgba(207,255,4,0.45);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ji-shop-dot.active {
          transform: translate(-50%, -50%) scale(1.08);
        }

        .ji-shop-hint {
          position: absolute;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
          background: rgba(115,115,115,0.5);
          color: white;
          font-size: 13px;
          border-radius: 15px;
          padding: 10px 14px;
          white-space: nowrap;
        }

        .ji-product-strip {
          background: var(--ji-panel);
          padding: 12px 16px;
          display: flex;
          gap: 10px;
          align-items: stretch;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ji-product-strip::-webkit-scrollbar {
          display: none;
        }

        .ji-look-btn {
          flex: 0 0 auto;
          border: 1px solid var(--ji-accent);
          background: var(--ji-accent);
          color: #000;
          border-radius: 25px;
          padding: 12px 16px;
          font-size: 13px;
          font-weight: 700;
          min-height: 48px;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .ji-look-btn:hover,
        .ji-action-btn:hover,
        .ji-buy-btn:hover {
          transform: translateY(-1px);
        }

        .ji-product-scroll {
          display: flex;
          gap: 10px;
        }

        .ji-product-scroll-item {
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          flex: 0 0 auto;
        }

        .ji-product-chip {
          width: 167px;
          min-height: 64px;
          background: rgba(115,115,115,0.5);
          border-radius: 10px;
          padding: 8px;
          display: flex;
          gap: 11px;
          align-items: center;
          border: 1px solid transparent;
        }

        .ji-product-chip.active {
          border-color: rgba(207,255,4,0.8);
        }

        .ji-product-thumb-wrap {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          overflow: hidden;
          background: #737373;
          flex: 0 0 auto;
        }

        .ji-product-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ji-product-info {
          min-width: 0;
        }

        .ji-product-name {
          font-size: 14px;
          color: white;
          line-height: 1.2;
        }

        .ji-product-price {
          margin-top: 8px;
          color: var(--ji-accent);
          font-weight: 700;
          font-size: 14px;
        }

        .ji-card-content {
          padding: 16px;
        }

        .ji-card-content.darker {
          background: var(--ji-panel);
        }

        .ji-row-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ji-stats-row {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--ji-subtle);
        }

        .ji-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
        }

        .ji-action-btn {
          border: 1px solid var(--ji-accent);
          background: rgba(207,255,4,0.25);
          color: white;
          border-radius: 25px;
          padding: 8px 16px;
          cursor: pointer;
          font-size: 13px;
        }

        .ji-caption {
          margin-top: 16px;
          font-size: 14px;
          color: white;
          line-height: 1.45;
        }

        .ji-caption strong {
          font-weight: 700;
        }

        .ji-hashtags {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 10px;
          color: var(--ji-accent);
          font-weight: 700;
          font-size: 14px;
        }

        .ji-item-card {
          margin: 0 16px 0;
          border: 1px solid #525252;
          border-radius: 15px;
          overflow: hidden;
          background: var(--ji-bg);
        }

        .ji-gallery-main {
          position: relative;
          aspect-ratio: 362 / 482;
          background: #0f0f0f;
        }

        .ji-gallery-main.square {
          aspect-ratio: 1 / 1;
        }

        .ji-gallery-dots {
          position: absolute;
          left: 50%;
          bottom: 16px;
          transform: translateX(-50%);
          background: rgba(115,115,115,0.5);
          border-radius: 999px;
          padding: 10px;
          display: flex;
          gap: 10px;
        }

        .ji-gallery-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          border: 0;
          background: white;
          opacity: 0.65;
          cursor: pointer;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .ji-gallery-dot.active {
          background: var(--ji-accent);
          opacity: 1;
          transform: scale(1.15);
        }

        .ji-item-info {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 16px;
        }

        .ji-item-title {
          font-size: 15px;
          font-weight: 700;
          color: white;
        }

        .ji-item-meta {
          margin-top: 8px;
          color: #9a9a9a;
          font-size: 14px;
        }

        .ji-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ji-price {
          font-size: 24px;
          font-weight: 700;
          color: white;
        }

        .ji-buy-btn {
          border: 1px solid var(--ji-accent);
          background: var(--ji-accent);
          color: #000;
          font-weight: 700;
          border-radius: 25px;
          padding: 8px 16px;
          cursor: pointer;
        }

        .ji-thumb-rail {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          background: var(--ji-panel);
          padding: 8px 12px;
          scrollbar-width: none;
        }

        .ji-thumb-rail::-webkit-scrollbar {
          display: none;
        }

        .ji-thumb-button {
          flex: 0 0 auto;
          width: 48px;
          height: 48px;
          padding: 0;
          border-radius: 10px;
          border: 1px solid transparent;
          overflow: hidden;
          background: #737373;
          cursor: pointer;
          transition: transform 0.18s ease, border-color 0.18s ease;
        }

        .ji-thumb-button.active {
          border-color: var(--ji-accent);
        }

        .ji-thumb-button:hover {
          transform: translateY(-1px);
        }

        .ji-thumb-square {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ji-selected-product {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ji-sold-overlay {
          position: absolute;
          inset: 0;
          background: rgba(115,115,115,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          font-size: 24px;
          font-weight: 500;
        }

        .ji-bottom-nav {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 30;
          background: var(--ji-panel);
          border-top: 1px solid var(--ji-border);
          padding: 10px 18px 8px;
        }

        .ji-bottom-nav-shell {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 68px 1fr 1fr;
          align-items: center;
          gap: 8px;
          min-height: 62px;
        }

        .ji-bottom-icon {
          border: 0;
          background: transparent;
          color: white;
          width: 44px;
          height: 44px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.95;
          padding: 0;
          border-radius: 999px;
          transition: transform 0.18s ease, background-color 0.18s ease;
        }

        .ji-bottom-icon:hover {
          background: rgba(255,255,255,0.05);
          transform: translateY(-1px);
        }

        .ji-bottom-icon.active {
          color: var(--ji-accent);
        }

        .ji-bottom-svg {
          width: 28px;
          height: 28px;
          display: block;
        }

        .ji-center-fab-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ji-center-fab {
          width: 68px;
          height: 68px;
          border-radius: 999px;
          border: 1px solid #000;
          background: var(--ji-accent);
          color: #000;
          box-shadow: 0 0 30px 20px rgba(207, 255, 4, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-18px);
          cursor: pointer;
          padding: 0;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .ji-center-fab:hover {
          transform: translateY(-20px);
          box-shadow: 0 0 34px 20px rgba(207, 255, 4, 0.42);
        }

        .ji-center-fab svg {
          width: 40px;
          height: 40px;
          display: block;
        }

        .ji-home-indicator {
          width: 29px;
          height: 4px;
          border-radius: 999px;
          background: var(--ji-accent);
          margin: 2px auto 0;
        }

        .ji-skeleton-card {
          padding: 16px;
          border-top: 1px solid #2b2b2b;
          border-bottom: 1px solid #2b2b2b;
        }

        .ji-skeleton-line,
        .ji-skeleton-media {
          background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.12), rgba(255,255,255,0.05));
          background-size: 200% 100%;
          animation: jiShimmer 1.2s linear infinite;
          border-radius: 12px;
        }

        .ji-skeleton-line {
          height: 14px;
          margin-bottom: 12px;
        }

        .ji-skeleton-line.short {
          width: 30%;
        }

        .ji-skeleton-line.medium {
          width: 60%;
        }

        .ji-skeleton-media {
          height: 280px;
          margin-bottom: 12px;
        }

        @keyframes jiShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (max-width: 768px) {
          .app-shell {
            padding: 12px;
          }

          .app-header {
            border-radius: 18px;
            padding: 16px;
          }
        }

        @media (max-width: 420px) {
          .ji-phone {
            max-width: 100%;
            height: calc(100vh - 120px);
            min-height: 680px;
            border-radius: 28px;
          }

          .ji-look-btn {
            min-width: 120px;
          }

          .ji-shop-hint {
            font-size: 12px;
            padding: 8px 12px;
            max-width: calc(100% - 24px);
            text-align: center;
            white-space: normal;
          }

          .ji-campus-pill {
            padding: 8px 12px;
            font-size: 14px;
          }

          .ji-logo {
            width: 64px;
            height: 64px;
          }

          .ji-logo-svg {
            width: 52px;
            height: auto;
          }
        }
      `}</style>

      <div className="app-shell">
        <main className="app-main">
          <div className="ji-phone">
            <div className="ji-scroll">
              <header className="ji-top">
                <div className="ji-notch-space" />

                <div className="ji-top-row">
                  <div className="ji-logo">
                    <TopLogo />
                  </div>

                  <div className="ji-campus-pill" aria-label="Current campus NYU">
                    <span className="ji-campus-dot" />
                    <span>NYU</span>
                  </div>

                  <div className="ji-top-icons">
                    <TopIconButton label="Favorites">
                      <HeartIcon />
                    </TopIconButton>
                    <TopIconButton label="Shopping cart">
                      <CartIcon />
                    </TopIconButton>
                  </div>
                </div>

                <div className="ji-tabs" role="tablist" aria-label="Feed filters">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`ji-tab ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                      aria-selected={activeTab === tab}
                      role="tab"
                      type="button"
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </header>

              <div className="ji-tab-content">
                <div className="ji-stories">
                  {stories.map((story) => (
                    <Story key={story.id} story={story} />
                  ))}
                </div>

                <TrendingCard />

                {loading ? (
                  <div className="ji-feed">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                  </div>
                ) : (
                  <motion.div
                    className="ji-feed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.24 }}
                  >
                    <OutfitPost />
                    <ItemPost />
                    <DumpPost />
                  </motion.div>
                )}
              </div>
            </div>

            <nav className="ji-bottom-nav" aria-label="Bottom navigation">
              <div className="ji-bottom-nav-shell">
                <BottomNavItem to="/" label="Home">
                  <HomeIcon />
                </BottomNavItem>

                <BottomNavItem to="/search" label="Search">
                  <SearchIcon />
                </BottomNavItem>

                <div className="ji-center-fab-wrap">
                  <NavLink to="/create" aria-label="Create listing" className="ji-center-fab">
                    <PlusFabIcon />
                  </NavLink>
                </div>

                <BottomNavItem to="/inbox" label="Inbox">
                  <MailIcon />
                </BottomNavItem>

                <BottomNavItem to="/profile" label="Profile">
                  <ProfileIcon />
                </BottomNavItem>
              </div>

              <div className="ji-home-indicator" />
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}