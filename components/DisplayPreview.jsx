"use client";
import { useState } from "react";

const stock = [
  {
    label: "Laptop",
    model: "Business notebook",
    spec: "14-inch display",
    memory: "16 GB",
    storage: "512 GB SSD",
    price: "299",
  },
  {
    label: "Desktop",
    model: "Compact desktop",
    spec: "Small form factor",
    memory: "32 GB",
    storage: "1 TB SSD",
    price: "429",
  },
];

export default function DisplayPreview() {
  const [item, setItem] = useState(stock[0]);
  const [price, setPrice] = useState(stock[0].price);
  const value = Number(price);
  const formatted =
    price.trim() && Number.isFinite(value) && value >= 0 && value <= 99999
      ? new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
          minimumFractionDigits: value % 1 ? 2 : 0,
        }).format(value)
      : "Ask in store";
  return (
    <div id="display" className="ipos-preview">
      <div className="preview-controls">
        <h2>Try a sales display</h2>
        <p>Choose a sample machine and enter its shop-floor price.</p>
        <div
          className="machine-options"
          role="group"
          aria-label="Sample machine"
        >
          {stock.map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={option === item}
              onClick={() => {
                setItem(option);
                setPrice(option.price);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
        <label htmlFor="retail-price">Example selling price (£)</label>
        <input
          id="retail-price"
          type="number"
          min="0"
          max="99999"
          step="0.01"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <figure className="displaydemo">
        <div className="consolehead">
          <span>iPos</span>
          <span>EXAMPLE SHOP DISPLAY</span>
        </div>
        <div className="displayinner">
          <small>REFURBISHED · {item.spec.toUpperCase()}</small>
          <h2>{item.model}</h2>
          <div className="spec">
            <span>Memory</span>
            <b>{item.memory}</b>
          </div>
          <div className="spec">
            <span>Storage</span>
            <b>{item.storage}</b>
          </div>
          <div className="retail-output" aria-live="polite">
            {formatted}
          </div>
        </div>
      </figure>
    </div>
  );
}
