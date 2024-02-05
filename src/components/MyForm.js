import React from 'react';
import { useForm } from 'react-hook-form';
import '../style/myForm.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Дякуємо за замовлення! Менеджер зв'яжеться з Вами найближчим часом!) ");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className='dani'>Введіть Ваші дані :</p>
      <div className='form_input'>
        <label>ПІБ:</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div className='form_input'>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <button type='submit' className="button_order">Оформити замовлення</button>
      </div>
    </form>
  );
};

export default Form;



