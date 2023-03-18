import React, { useState } from 'react';

function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    const removedItem = newItems.splice(index, 1)[0];
    setItems(newItems);
    setTotalPrice(totalPrice - removedItem.price);
  };

  return (
    <div className="cart-container">
      <button onClick={handleToggleCart} className="cart-toggle">
        {isOpen ? 'Close Cart' : 'Open Cart'}
      </button>
      {isOpen && (
        <div className="cart-items-container">
          {items.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <p>Items in cart: {items.length}</p>
              <ul className="cart-items-list">
                {items.map((item, index) => (
                  <li key={index} className="cart-item">
                    {item.name} - ${item.price}
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <p className="cart-total-price">Total price: ${totalPrice.toFixed(2)}</p>
            </>
          )}
        </div>
      )}
      <button onClick={() => handleAddItem({ name: 'Product', price: 10 })} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export default ShoppingCart;
