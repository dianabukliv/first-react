import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import '../style/order.css'

export default class Order extends Component {
  render() {
    const {
      item: {img, title, price, id},
      onDelete
    } = this.props
    return (
      <div className='item'>
        <img src={"/img/" + img} />
        <h2>{title}</h2>
        <b>{price}</b>
        <FaTrash className='delete-icon' onClick={() => onDelete(id)} />
      </div>
    ) 
  }
}
