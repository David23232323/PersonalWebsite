import React from 'react';
import './book.css';
import SortableTable from './SortableTable.js'

export default function Book() {
    return (
      <div className="Book">
          <h2>Books I've Read</h2>
          <a href="https://www.goodreads.com/user/show/109811261-david" target="_blank">Good Reads Profile</a>
          <div className="Favorites">
            <h4>Favorites</h4>
          </div>
          <div>
            <h4>All Books</h4>
            <SortableTable
            products={[
                { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
                { id: 2, name: 'Milk', price: 1.9, stock: 32 },
                { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
                { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
                { id: 5, name: 'Butter', price: 0.9, stock: 99 },
                { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
                { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
            ]}
            />
            </div>
      </div>
    );
  }