import React from 'react';
import '../style/onOrder.css';
import Order from './Order';

const OnOrder = ({ isOpen, onClose}) => { 

    return (
        <>  
            {isOpen && (
                <div className='modal'>
                    <div className='modal-wrapper'>
                        <div className='modal-content'>
                            <button className='modal-close-button' onClick={onClose}>Button</button> 

                        </div>
                    </div>
                </div>
            )} 
        </>
    );
}

export default OnOrder; 

