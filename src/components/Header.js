import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Order from './Order';
import OnOrder from './onOrder'; 
import '../style/header.css';

const ConfirmDelete = (itemId, onDelete) => {
  const confirmDelete = window.confirm('Ви дійсно хочете видалити товар з корзини?');
  if (confirmDelete) {
    onDelete(itemId);
  }
};

const ShowOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => summa += Number.parseFloat(el.price));

  const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

  return (
    <div className="modal_basket">
      <IoIosClose className='close' onClick={props.onCloseCart} />
      {props.orders.map((el) => (
        <Order onDelete={() => ConfirmDelete(el.id, props.onDelete)} key={el.id} item={el} />
      ))}
      <p className='summa'>Сума: {summa} грн</p>
      <button className='button_order' onClick={() => setModalInfoOpen(true)}>Оформити замовлення</button>
      <OnOrder
        isOpen={modalInfoIsOpen}
        onClose={() => setModalInfoOpen(false)}
      />
    </div>
  );
};

const ShowNothing = () => {
  return (
    <div className='empty'>
      <h2>Товарів немає</h2>
    </div>
  )
}

const Header = (props) => { 
  let [cartOpen, setCartOpen] = useState(false)

  const handleCloseCart = () => {
    setCartOpen(false);
  }


  return (
    <header>
      <a href="/" className='li'>
        <span className='logo'> House Staff </span>
      </a>  
      <div>
        <Navbar collapseOnSelect expand="md">
          <Nav className="nav li">
            <Nav.Link href="/about" className='li'>Про нас</Nav.Link>
            <Nav.Link href="/contact" className='li'>Контакти</Nav.Link>
          </Nav>
        </Navbar>

        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-curt-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? 
              <ShowOrders
                orders={props.orders}
                onDelete={props.onDelete}
                onCloseCart={handleCloseCart}
              /> : <ShowNothing />}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header; 
 


 

 

