import React from 'react';
import { useForm } from 'react-hook-form';
import Header from './Header';
import '../style/contact.css';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Дякуємо за повідомлення! Менеджер зв'яжеться з Вами найближчим часом!) ");
    window.location.reload();
  };

  return (
    <>
      <Header />
        <div className='title_contact'>
          <h1>Контакти</h1>
        </div>
        <div className="container">
        <div className="left-content">
          <h2>Зателефонуйте нам</h2>
          <ul>
          <li><FiPhone className='icon'/>+380 50 123 45 67</li>
          <li><FiPhone className='icon'/>+380 00 000 00 00</li>
          <li><FiPhone className='icon'/>+380 12 000 00 00</li>
          </ul>
        <h2>Електронна пошта</h2>
        <p className='mail'><MdOutlineEmail className='icon'/>support@support.com.ua</p>
        <h2>Адреса офіса</h2>
        <p className='adress'><IoLocationOutline className='icon'/>м. Київ, вул. Київська</p>
      </div>
      <div className="right-content">
        <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
          <h2>Зворотній зв'язок</h2>
          <div className='form_input'>
            <label>ПІБ:</label>
            <input type="text" {...register('name', { required: true })} />
          </div>
          <div className='form_input'>
            <label>Телефон:</label>
            <input type="tel" {...register('tel', { required: true })} />
          </div>
          <div className='form_input'>
            <label>Повідомлення:</label>
            <input type="text" {...register('message', { required: true })} />
          </div>
          <div>
            <button type='submit' className="button_order">Надіслати</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Contact;
