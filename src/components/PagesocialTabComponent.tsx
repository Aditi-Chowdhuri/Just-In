import React, { useMemo, useState } from "react";

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

function TopIconButton({ children }) {
  return <button className="ji-icon-btn">{children}</button>;
}

function BottomIcon({ active, children }) {
  return (
    <button className={`ji-bottom-icon ${active ? "active" : ""}`}>
      {children}
    </button>
  );
}

function Story({ story }) {
  if (story.type === "new") {
    return (
      <button className="ji-story">
        <div className="ji-story-ring">
          <div className="ji-story-add">+</div>
        </div>
        <span className="ji-story-name active">{story.name}</span>
      </button>
    );
  }

  return (
    <button className="ji-story">
      <div className="ji-story-ring">
        <div className="ji-story-image-wrap">
          <img src={story.image} alt={story.name} className="ji-story-image" />
        </div>
      </div>
      <span className="ji-story-name">{story.name}</span>
    </button>
  );
}

function ProductChip({ product, active }) {
  return (
    <div className={`ji-product-chip ${active ? "active" : ""}`}>
      <div className="ji-product-thumb-wrap">
        <img src={product.image} alt={product.name} className="ji-product-thumb" />
      </div>
      <div className="ji-product-info">
        <div className="ji-product-name">{product.name}</div>
        <div className="ji-product-price">{product.price}</div>
      </div>
    </div>
  );
}

function FeedStats() {
  return (
    <div className="ji-stats-row">
      <div className="ji-stat">
        <span>♡</span>
        <span>120</span>
      </div>
      <div className="ji-stat">
        <span>▣</span>
        <span>24</span>
      </div>
      <div className="ji-stat">
        <span>↗</span>
      </div>
    </div>
  );
}

function ActionButton({ children }) {
  return <button className="ji-action-btn">{children}</button>;
}

function TagButton({ children, type = "lime" }) {
  return <span className={`ji-tag-button ${type}`}>{children}</span>;
}

function TrendingCard() {
  return (
    <div className="ji-trending-card">
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
    </div>
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
          <button
            key={dot.id}
            className={`ji-shop-dot ${selectedProduct === index ? "active" : ""}`}
            style={{ top: dot.top, left: dot.left }}
            onClick={() => setSelectedProduct(index)}
          >
            <span>⌂</span>
          </button>
        ))}

        <div className="ji-shop-hint">tap the dots to shop this look</div>
      </div>

      <div className="ji-product-strip">
        <button className="ji-look-btn">GET THE WHOLE LOOK</button>
        <div className="ji-product-scroll">
          {outfitProducts.map((product, index) => (
            <button
              key={product.id}
              className="ji-product-scroll-item"
              onClick={() => setSelectedProduct(index)}
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
          <img src={currentImage} alt="Gallery item" className="ji-main-media" />

          <div className="ji-gallery-dots">
            {itemGallery.map((_, index) => (
              <button
                key={index}
                className={`ji-gallery-dot ${galleryIndex === index ? "active" : ""}`}
                onClick={() => setGalleryIndex(index)}
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
              <button className="ji-buy-btn">BUY NOW</button>
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
          <img src={selected.image} alt={selected.title} className="ji-main-media" />

          {selected.sold && <div className="ji-sold-overlay">SOLD</div>}
        </div>

        <div className="ji-thumb-rail">
          {dumpGallery.map((item, index) => (
            <button
              key={index}
              className={`ji-thumb-button ${selectedIndex === index ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
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
              <button className="ji-buy-btn">BUY BUNDLE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PagesocialTabComponent() {
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <>
      <style>{`
        .ji-phone {
          width: 100%;
          max-width: 402px;
          height: min(874px, calc(100vh - 150px));
          min-height: 720px;
          background: #111111;
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
          background: #111111;
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
          border: 1px solid #CFFF04;
          border-radius: 999px;
          background: rgba(207,255,4,0.16);
          color: #CFFF04;
          padding: 8px 14px;
          font-size: 15px;
          white-space: nowrap;
        }

        .ji-campus-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #CFFF04;
        }

        .ji-top-icons {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ji-icon-btn {
          width: 34px;
          height: 34px;
          border: 0;
          background: transparent;
          color: #CFFF04;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 21px;
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
          color: #8f8f8f;
          border-radius: 999px;
          padding: 8px 14px;
          white-space: nowrap;
          cursor: pointer;
          font-size: 14px;
        }

        .ji-tab.active {
          background: #CFFF04;
          border-color: #CFFF04;
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
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .ji-story-add {
          color: #CFFF04;
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
          color: #CFFF04;
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
          color: #CFFF04;
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
          color: #CFFF04;
          font-size: 14px;
          font-weight: 700;
        }

        .ji-feed {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ji-card {
          background: #111111;
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
          background: #111;
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
          color: #737373;
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
          color: #ff56b3;
          border-color: #ff56b3;
          background: rgba(255,86,179,0.16);
        }

        .ji-tag-button.blue {
          color: #56a5ff;
          border-color: #56a5ff;
          background: rgba(86,165,255,0.16);
        }

        .ji-tag-button.green {
          color: #67ff56;
          border-color: #67ff56;
          background: rgba(103,255,86,0.16);
        }

        .ji-media-wrap {
          position: relative;
          width: 100%;
          background: #111;
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
          color: #CFFF04;
          font-size: 20px;
        }

        .ji-shop-dot {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 0;
          background: #CFFF04;
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
          background: #262626;
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
          border: 1px solid #CFFF04;
          background: #CFFF04;
          color: #000;
          border-radius: 25px;
          padding: 12px 16px;
          font-size: 13px;
          font-weight: 700;
          min-height: 48px;
          cursor: pointer;
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
          color: #CFFF04;
          font-weight: 700;
          font-size: 14px;
        }

        .ji-card-content {
          padding: 16px;
        }

        .ji-card-content.darker {
          background: #262626;
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
          color: #737373;
        }

        .ji-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
        }

        .ji-action-btn {
          border: 1px solid #CFFF04;
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
          color: #CFFF04;
          font-weight: 700;
          font-size: 14px;
        }

        .ji-item-card {
          margin: 0 16px 0;
          border: 1px solid #525252;
          border-radius: 15px;
          overflow: hidden;
          background: #111;
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
        }

        .ji-gallery-dot.active {
          background: #CFFF04;
          opacity: 1;
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
          border: 1px solid #CFFF04;
          background: #CFFF04;
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
          background: #262626;
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
        }

        .ji-thumb-button.active {
          border-color: #CFFF04;
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
          background: #262626;
          border-top: 1px solid #2f2f2f;
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
        }

        .ji-bottom-icon.active {
          color: #CFFF04;
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
          background: #CFFF04;
          color: #000;
          box-shadow: 0 0 30px 20px rgba(207, 255, 4, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-18px);
          cursor: pointer;
          padding: 0;
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
          background: #CFFF04;
          margin: 2px auto 0;
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

      <div className="ji-phone">
        <div className="ji-scroll">
          <header className="ji-top">
            <div className="ji-notch-space" />

            <div className="ji-top-row">
              <div className="ji-logo">
                <svg
                  width="64"
                  height="53"
                  viewBox="0 0 64.635 53.3852"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ji-logo-svg"
                >
                  <path
                    d="M49.9852 7.88789C51.8162 6.66005 54.2898 7.15772 55.5105 8.99952C62.7352 19.9013 64.635 29.8642 63.8271 37.4808C63.4266 41.2561 62.3525 44.5049 60.8761 46.9727C59.5302 49.2223 57.3469 51.6133 54.3805 52.0611C49.575 52.7863 45.8872 50.6122 43.2748 47.5473C40.8076 44.6526 39.0539 40.7241 37.657 36.9774C36.2943 33.3222 34.9639 28.9186 33.8353 25.6709C32.5837 22.0693 31.4737 19.5388 30.3575 18.1353C29.6997 17.3083 28.4194 16.786 26.6556 17.0299C25.7083 17.1609 24.9646 17.4645 24.43 17.79C26.7463 21.2825 28.7386 25.2808 29.998 29.3095C31.3614 33.671 31.9888 38.4611 30.8268 42.7665C29.5915 47.3428 26.4197 50.989 21.153 52.7109L20.7787 52.8338L20.3872 52.88C16.118 53.3852 12.2223 52.3373 9.866 48.9314C7.78491 45.923 7.62594 42.01 8.03023 38.5384C8.74143 32.4317 11.5434 24.9802 14.7601 18.2613C13.3252 16.6484 11.9125 15.4101 10.6621 14.636C8.78803 13.4758 8.20382 11.0077 9.35706 9.12242C10.5103 7.23722 12.9639 6.64951 14.8379 7.8096C16.3999 8.77658 17.9364 10.0536 19.4005 11.5328C21.248 10.1791 23.4853 9.37631 25.57 9.08798C29.1729 8.58972 33.6481 9.44149 36.58 13.1282C38.6512 15.7327 40.1313 19.4975 41.3574 23.0256C42.7065 26.908 43.7419 30.4701 45.1184 34.1623C46.4608 37.7629 47.8199 40.5644 49.3246 42.3297C50.611 43.839 51.7043 44.2915 52.979 44.1607C53.0827 44.0815 53.4894 43.7733 54.0482 42.8393C54.8378 41.5195 55.6067 39.4275 55.9034 36.6298C56.49 31.0997 55.2022 22.9857 48.8802 13.446C47.6596 11.6042 48.1544 9.1158 49.9852 7.88789ZM20.0129 25.9981C17.9195 30.9295 16.3836 35.7071 15.9453 39.4707C15.6076 42.3702 16.0287 43.806 16.4068 44.3525C16.5043 44.4935 16.9052 45.1361 19.0604 44.9569C21.5037 44.0547 22.6288 42.547 23.1366 40.6654C23.7425 38.42 23.5233 35.3188 22.3966 31.7144C21.8006 29.8079 20.9825 27.87 20.0129 25.9981Z M4.38281 0C6.80338 0 8.76563 1.97395 8.76563 4.40895C8.76563 6.84395 6.80338 8.8179 4.38281 8.8179C1.96225 8.8179 0 6.84395 0 4.40895C0 1.97395 1.96225 0 4.38281 0Z"
                    fill="#CFFF04"
                    fillRule="evenodd"
                  />
                </svg>
              </div>

              <div className="ji-campus-pill">
                <span className="ji-campus-dot" />
                <span>NYU</span>
              </div>

              <div className="ji-top-icons">
                <TopIconButton>♡</TopIconButton>
                <TopIconButton>🛒</TopIconButton>
              </div>
            </div>

            <div className="ji-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`ji-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
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

            <div className="ji-feed">
              <OutfitPost />
              <ItemPost />
              <DumpPost />
            </div>
          </div>
        </div>

        <nav className="ji-bottom-nav">
          <div className="ji-bottom-nav-shell">
            <BottomIcon active>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ji-bottom-svg"
              >
                <path
                  d="M0 10.6225C0 9.62232 0 9.12222 0.218268 8.69417C0.436536 8.26612 0.841312 7.97242 1.65086 7.38501L9.47956 1.70453C10.6129 0.882192 11.1795 0.471025 11.8287 0.471025C12.4779 0.471025 13.0445 0.882192 14.1778 1.70453L22.0065 7.38501C22.8161 7.97242 23.2209 8.26612 23.4391 8.69417C23.6574 9.12222 23.6574 9.62232 23.6574 10.6225L23.6574 25.4652C23.6574 26.408 23.6574 26.8794 23.3645 27.1723C23.0716 27.4652 22.6002 27.4652 21.6574 27.4652L2 27.4652C1.05719 27.4652 0.585786 27.4652 0.292893 27.1723C0 26.8794 0 26.408 0 25.4652L0 10.6225Z"
                  fill="currentColor"
                  fillOpacity="0.25"
                />
                <path
                  d="M2.94789 1.50325C3.13307 0.781009 3.22567 0.419889 3.49624 0.209945C3.76681 0 4.13961 0 4.88521 0L25.1148 0C25.8604 0 26.2332 0 26.5038 0.209945C26.7743 0.419889 26.8669 0.781009 27.0521 1.50325L29.84 12.3758C29.9136 12.6629 29.9504 12.8065 29.8753 12.9033C29.8003 13 29.652 13 29.3556 13L24.0719 13C23.716 13 23.538 13 23.4056 12.9022C23.2731 12.8044 23.2208 12.6343 23.1161 12.2941L21.4307 6.81641C21.2138 6.11152 21.1054 5.75907 21.0165 5.77711C20.9277 5.79515 20.9653 6.16198 21.0406 6.89563L21.5536 11.898C21.6064 12.4127 21.6328 12.6701 21.4839 12.835C21.335 13 21.0763 13 20.5589 13L16.736 13C16.3069 13 16.0924 13 15.9496 12.8712C15.8069 12.7423 15.785 12.5289 15.7412 12.102L15.199 6.81482C15.1265 6.10835 15.0903 5.75512 15 5.75512C14.9097 5.75512 14.8735 6.10835 14.801 6.81482L14.2588 12.102C14.215 12.5289 14.1931 12.7423 14.0504 12.8712C13.9076 13 13.6931 13 13.264 13L9.44114 13C8.92371 13 8.665 13 8.51609 12.835C8.36717 12.6701 8.39357 12.4127 8.44636 11.898L8.95942 6.89563C9.03467 6.16198 9.07229 5.79515 8.98347 5.77711C8.89464 5.75907 8.7862 6.11152 8.56931 6.81641L6.88387 12.2941C6.77919 12.6343 6.72685 12.8044 6.59443 12.9022C6.46201 13 6.28403 13 5.92809 13L0.644379 13C0.347954 13 0.199741 13 0.124676 12.9033C0.0496109 12.8065 0.0864233 12.6629 0.160048 12.3758L2.94789 1.50325Z"
                  fill="currentColor"
                />
                <path
                  d="M5 0L2 0C0.895431 0 0 0.895431 0 2L0 8.85C0 8.93284 0.0671574 9 0.15 9L6.85 9C6.93284 9 7 8.93284 7 8.85L7 2C7 0.895431 6.10457 0 5 0Z"
                  transform="translate(11.6 20)"
                  fill="currentColor"
                />
              </svg>
            </BottomIcon>

            <BottomIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ji-bottom-svg"
              >
                <path
                  d="M24 12C24 18.296 18.296 24 12 24C5.70395 24 0.6 18.296 0.6 12C0.6 5.70395 5.70395 0.6 12 0.6C18.296 0.6 23.4 5.70395 23.4 12H24H24.6C24.6 5.04121 18.9588 -0.6 12 -0.6C5.04121 -0.6 -0.6 5.04121 -0.6 12C-0.6 18.9588 5.04121 24.6 12 24.6C18.9588 24.6 24.6 18.9588 24.6 12H24Z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.4C12.3314 5.4 12.6 5.66863 12.6 6C12.6 6.33137 12.3314 6.6 12 6.6V5.4ZM6 12.6C5.66863 12.6 5.4 12.3314 5.4 12C5.4 11.6686 5.66863 11.4 6 11.4V12.6ZM30.4243 29.5757C30.6586 29.8101 30.6586 30.19 30.4243 30.4243C30.19 30.6586 29.8101 30.6586 29.5757 30.4243L30.4243 29.5757ZM23.5757 24.4243C23.3414 24.19 23.3414 23.8101 23.5757 23.5757C23.8101 23.3414 24.19 23.3414 24.4243 23.5757L23.5757 24.4243ZM12 6.6C11.2909 6.6 10.5887 6.73968 9.93351 7.01105L9.47429 5.9024C10.275 5.57072 11.1333 5.4 12 5.4V6.6ZM9.93351 7.01105C9.27835 7.28243 8.68306 7.68019 8.18162 8.18162L7.3331 7.3331C7.94596 6.72023 8.67354 6.23408 9.47429 5.9024L9.93351 7.01105ZM8.18162 8.18162C7.68019 8.68306 7.28243 9.27835 7.01105 9.93351L5.9024 9.47429C6.23408 8.67354 6.72023 7.94596 7.3331 7.3331L8.18162 8.18162ZM7.01105 9.93351C6.73968 10.5887 6.6 11.2909 6.6 12H5.4C5.4 11.1333 5.57071 10.275 5.9024 9.47429L7.01105 9.93351ZM24.4243 23.5757L30.4243 29.5757L29.5757 30.4243L23.5757 24.4243L24.4243 23.5757Z"
                  fill="currentColor"
                />
              </svg>
            </BottomIcon>

            <div className="ji-center-fab-wrap">
              <button className="ji-center-fab">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                    fill="black"
                    fillOpacity="0.18"
                  />
                  <path
                    d="M20 10V30M10 20H30"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <BottomIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ji-bottom-svg"
              >
                <path
                  d="M4 0.6H26C26.9598 0.6 27.6192 0.601274 28.1146 0.667873C28.5927 0.732151 28.8271 0.847219 28.99 1.01005C29.1528 1.17288 29.2678 1.40731 29.3321 1.8854C29.3987 2.38076 29.4 3.04023 29.4 4V19C29.4 19.9598 29.3987 20.6192 29.3321 21.1146C29.2678 21.5927 29.1528 21.8271 28.99 21.99C28.8271 22.1528 28.5927 22.2678 28.1146 22.3321C27.6192 22.3987 26.9598 22.4 26 22.4H4C3.04023 22.4 2.38076 22.3987 1.8854 22.3321C1.40731 22.2678 1.17288 22.1528 1.01005 21.99C0.847219 21.8271 0.732151 21.5927 0.667873 21.1146C0.601274 20.6192 0.6 19.9598 0.6 19V4C0.6 3.04023 0.601274 2.38076 0.667873 1.88541C0.732151 1.40731 0.847219 1.17288 1.01005 1.01005C1.17288 0.847219 1.40731 0.732151 1.8854 0.667873C2.38076 0.601274 3.04023 0.6 4 0.6Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M0.8 1L14.3412 8.96863C14.7529 9.18824 15.2471 9.18824 15.6588 8.96863L29.2 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </BottomIcon>

            <BottomIcon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ji-bottom-svg"
              >
                <path
                  d="M8 1.2H20C21.9195 1.2 23.2385 1.20255 24.2292 1.33575C25.1854 1.4643 25.6542 1.69444 25.9799 2.0201C26.3056 2.34576 26.5357 2.81462 26.6643 3.77081C26.7975 4.76152 26.8 6.08046 26.8 8V20C26.8 21.9195 26.7975 23.2385 26.6643 24.2292C26.5357 25.1854 26.3056 25.6542 25.9799 25.9799C25.6542 26.3056 25.1854 26.5357 24.2292 26.6643C23.2385 26.7975 21.9195 26.8 20 26.8H8C6.08046 26.8 4.76152 26.7975 3.77081 26.6643C2.81462 26.5357 2.34576 26.3056 2.0201 25.9799C1.69444 25.6542 1.4643 25.1854 1.33575 24.2292C1.20255 23.2385 1.2 21.9195 1.2 20V8C1.2 6.08046 1.20255 4.76152 1.33575 3.77081C1.4643 2.81462 1.69444 2.34576 2.0201 2.0201C2.34576 1.69444 2.81462 1.4643 3.77081 1.33575C4.76152 1.20255 6.08046 1.2 8 1.2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="14" cy="10" r="4.6" stroke="currentColor" strokeWidth="1.2" />
                <path
                  d="M6 23C6.9 19.9 9.9 17.8 14 17.8C18.1 17.8 21.1 19.9 22 23"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </BottomIcon>
          </div>

          <div className="ji-home-indicator" />
        </nav>
      </div>
    </>
  );
}