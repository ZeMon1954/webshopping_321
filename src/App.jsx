import React, { useState } from "react";
import "./App.css";
import { data } from "autoprefixer";

const ShoppingCart = () => {
  const initialProducts = [
    {
      id: 1,
      name: "MSI GTX 1650 D6 VENTUS XS OCV3 4GB GDDR6 *การ์ดจอ",
      price: 4650,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/762e6e68-5826-48b9-bf61-193c9e037205.png",
    },
    {
      id: 2,
      name: "ASUS DUAL RTX 3050 OC 6GB GDDR6  ",
      price: 6790,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/3960f906-481a-4f13-b747-b645757a8d6b.webp",
      
    },
    {
      id: 3,
      name: "ASUS DUAL GEFORCE RTX 4060 OC EDITION 8GB GDDR6 WHITE",
      price: 11200,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/39ae94ef-44f8-43ee-83f0-d832fcfc4678.webp",
    },
    {
      id: 4,
      name: "ASUS ROG STRIX GEFORCE RTX 4080 SUPER OC WHITE 16GB GDDR6X",
      price: 48500,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/66414a2b-3af4-47df-b278-23b195bc2905.png",
    },
    {
      id: 5,
      name: "ASUS ROG STRIX GEFORCE RTX 4090 OC EVA-02 24GB GDDR6X",
      price: 94900,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/55f83934-13ff-4537-8457-90515fb644ca.png",
    },
    {
      id: 6,
      name: "GALAX GEFORCE RTX 4060 EX 1-CLICK OC WHITE 8GB GDDR6",
      price: 11200,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/097b5a62-f813-4716-a5f6-761640efc095.png",
    },
    {
      id: 7,
      name: "GALAX GEFORCE RTX 4080 SUPER SG 1-CLICK OC 16GB GDDR6X",
      price: 41900,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/3ad425f5-bcaf-465a-b951-5659febe1464.webp",
    },
    {
      id: 8,
      name: "GIGABYTE AORUS GEFORCE RTX 4080 SUPER MASTER 16GB GDDR6X",
      price: 120000,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/292fc357-2366-4e40-9c2b-31f5410fc878.png",
    },
    {
      id: 9,
      name: "GALAX GEFORCE RTX 4090 SG WHITE 24GB GDDR6X (1-CLICK OC FEATURE)",
      price: 250000,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/dbde4567-8658-4840-a3af-09b14486ce63.png",
    },
    {
      id: 10,
      name: "INNO3D GEFORCE RTX 4080 SUPER ICHILL FROSTBITE 16GB GDDR6X",
      price: 47900,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/82086b79-d68d-46a8-9fb5-4ca1f4b8a74d.png",
    },
    {
      id: 11,
      name: "ZOTAC GEFORCE RTX 4080 SUPER TRINITY WHITE OC 16GB GDDR6X",
      price: 39300,
      image: "https://storage.googleapis.com/file-computeandmore/large_images/2971ed3e-8434-4736-86fc-aa26041f9898.jpg",
    }
  ];

  const [cartItems, setCartItems] = useState([]);
  const [products] = useState(initialProducts);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity + delta > 0
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping = 5.0;
    const tax = subtotal * 0.084;
    const total = subtotal + shipping + tax;

    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const handleCheckout = () => {
    alert("การซื้อสำเร็จแล้ว!");
    setCartItems([]); // รีเซ็ตตะกร้าเป็นอาเรย์ว่าง
  };

  const totals = calculateTotal();

  return (
    <div className="shopping-cart">
      <header className="store-header">
        <h1>My Awesome Store</h1>
      </header>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="item-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="item-details">
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <div className="item-actions">
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                เลือกสิ้นค้า
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-items-container">
        <h1>รายการสิ้นค้า</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <button className="remove-item" onClick={() => removeItem(item.id)}>
                ลบ
              </button>
            </div>
            <div className="item-quantity">
              <button className="minus-btn" onClick={() => updateQuantity(item.id, -1)}>
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="plus-btn" onClick={() => updateQuantity(item.id, 1)}>
                +
              </button>
            </div>
          </div>
        ))}

        <div className="order-summary">
          <p>ยอดรวมสิ้นค้า: ${totals.subtotal}</p>
          <p>ค่าขนส่ง: ${totals.shipping}</p>
          <p>ภาษี: ${totals.tax}</p>
          <h2>ยอดรวมทั้งหมด: ${totals.total}</h2>
          <button id="checkout-btn" onClick={handleCheckout}>ซื้อสิ้นค้า</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
