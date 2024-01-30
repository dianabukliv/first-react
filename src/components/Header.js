import React, { useState } from 'react';
import {Navbar, Nav } from "react-bootstrap";
import '../index.css';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import '../style/header.css';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сума: {summa} грн</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Товарів немає</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
   <header>
    <a href="/" className='li'>
      <span className='logo'> House Staff </span>
    </a>  
      <div>
        <Navbar collapseOnSelect expand="md" >
        <Nav className="nav li">
          <Nav.Link href="/about" className='li' >Про нас</Nav.Link>
          <Nav.Link href="/contact" className='li' >Контакти</Nav.Link>
        </Nav>
        </Navbar>

          <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-curt-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                  {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
              </div>
            )}
        </div>

   </header>
  )
}

 

