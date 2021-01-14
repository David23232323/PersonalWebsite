import React from 'react';
import SortableTable from './SortableTable.js'
import ImageText from '../general_props/ImageText.js'

export default function Book() {

  const favBooks = [{title: "Future of Capitalism",
                      description: "A fun read about economics",
                      path: "/images/books/future_capitalism.jpg",
                      width: "10%"},
                      {title: "Thinking Fast and Slow",
                      description: "A fun read about thinking and cognitive biases",
                      path: "/images/books/thinking_fast_slow.jpg",
                      width: "10%"},
                      {title: "The Selfish Gene",
                      description: "A fun read about evolution and morality",
                      path: "/images/books/selfish_gene.jpg",
                      width: "10%"},
                      {title: "The Righteous Mind",
                      description: "A fun read about beliefs and morality",
                      path: "/images/books/righteous_mind.jpg",
                      width: "10%"},
                      {title: "The Ride of a Lifetime",
                      description: "A fun read about Robert Iger",
                      path: "/images/books/robert_iger.jpg",
                      width: "10%"}]



    return (
      <div className="Book">
          <h1>Books I've Read</h1>
          <a className="italic hover:text-blue-600" href="https://www.goodreads.com/user/show/109811261-david" target="_blank">Good Reads Profile</a>
          <div className="Favorites">
            <h3>Favorites</h3>
            <div className="flex flex-wrap justify-center">
              {favBooks.map((value, index) => {
                  return <ImageText
                  title={value.title}
                  description={value.description}
                  path={value.path}
                  width={"18%"}
                  >
                      {value.content}
                  </ImageText>
              })} 
            </div>
          </div>
          <div className="clear-both">
            <h3>All Books</h3>
            {/* <SortableTable
            products={[
                { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
                { id: 2, name: 'Milk', price: 1.9, stock: 32 },
                { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
                { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
                { id: 5, name: 'Butter', price: 0.9, stock: 99 },
                { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
                { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
            ]}
            /> */}
            <a className="italic hover:text-blue-600" href="https://www.goodreads.com/user/show/109811261-david" target="_blank">Please check my good reads profile for all books i've read</a>
          </div>
      </div>
    );
  }