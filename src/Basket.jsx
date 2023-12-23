import React, { useState } from 'react';
import styles from './Basket.module.css';

const Basket = () => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    const addItem = () => {
        const newItem = { id: count, countNumber: count };
        setItems([...items, newItem]);
        setCount(prevCount => prevCount + 1);
    };

    const removeItem = id => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <>
            <h2>Basket App</h2>
            <h2 className={styles.itemtext}>Items Basket</h2>
            <button className={styles.additem} onClick={addItem}>
                Add Item
            </button>
            <div>
                {items.map(item => (
                    <div key={item.id} className={styles.id}>
                        <li>Item {item.countNumber}</li>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Basket;
