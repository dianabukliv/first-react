import React, { Component } from 'react';
import Header from './Header'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Контакти</h1>
        <p>Наші контакти:</p>
        <ul>
          <li>Телефон: +380 50 123 45 67</li>
          <li>Електронна пошта: info@housestaff.com</li>
          <li>Адреса: м. Київ, вул. Хрещатик, 1</li>
        </ul>
      </div>
    );
  }
}
