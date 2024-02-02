import React from 'react';
import '../style/onOrder.css';
import Order from './Order';

const OnOrder = ({ isOpen, onClose, order, handleDelete }) => { // Receive handleDelete as a prop

    return (
        <>  
            {isOpen && (
                <div className='modal'>
                    <div className='modal-wrapper'>
                        <div className='modal-content'>
                            <button className='modal-close-button' onClick={onClose}>Button</button> 
                            <div item={Order} onDelete={handleDelete} />
                        </div>
                    </div>
                </div>
            )} 
        </>
    );
}

export default OnOrder;


