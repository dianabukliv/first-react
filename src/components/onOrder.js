import React from 'react';
import '../style/onOrder.css';
import { IoIosClose } from "react-icons/io";
import Order from './Order';
import Form from './MyForm';


const OnOrder = ({ isOpen, onClose, orders, handleDelete }) => {
  const totalSum = orders.reduce((acc, order) => acc + parseFloat(order.price), 0);

  return (
    <>  
      {isOpen && (
        <div className='modal'>
          <div className='modal-wrapper'>
            <div className='modal-content'>
              <IoIosClose className='close' onClick={onClose} /> 
              <div>
                {orders.map(order => (
                  <Order key={order.id} item={order} onDelete={handleDelete} />
                ))}
              </div>
              <p className="summa">Сума: {totalSum} грн</p>
              <Form />
            </div>
          </div>
        </div>
      )} 
    </>
  );
}

export default OnOrder;


