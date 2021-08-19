import React, { useEffect, useState } from "react";
import "./shop.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



import axios from '../Components/axios.js';


function Shop() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
      async function fetchData() {
          const req = await axios.get('/foam');
  
          setProducts(req.data);
      }
  
      fetchData();
  }, [])

  return (
    <div className="shop">
        <div className="desc-container">
            <h3>The "theoretical" store</h3>
            <p>This is the store, just a concept right now but I'm working hard to get a full fletched store and add more products. The idea of this site is to get an understanding of the market and if there even is a need it can fill, to test the water basically. If you're interested, click a product and "buy" it. The site will ask for your email and if the demand is big enough we'll send you an email prompting you to buy the item for real this time.</p>
        </div>


      <div className="item-container">
        {products.map(produkt =>
          <Card className="card1">
          <Card.Img className="card1IMG" variant="top" src={produkt.imgUrl} />
          <Card.Body>
            <Card.Title>{produkt.name}</Card.Title>
            <Card.Text>
              {produkt.description}
            </Card.Text>
            <Button variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
        )}
        
      </div>



    </div>
  );
}

export default Shop;
