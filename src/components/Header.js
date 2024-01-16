import React, { useState } from 'react'
import '../index.css'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

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
            <span className='logo'> House Staff </span>
      <div>
      <ul className="nav">
        <li>
         Про нас
        </li>
        <li>
          Контакти
        </li>
      </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-curt-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                  {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'>
        
        </div>
   </header>
  )
}

 

