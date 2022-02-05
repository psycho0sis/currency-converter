import React from "react";

import "./style.scss";

const Currency = ({ text, current, value, data, img }) => {
  let amount = text;

  switch (amount) {
    case "USD":
      amount = current.value / value;
      break;
    case "EUR":
      amount = current.value / value;
      break;
    case "PLN":
      amount = (current.value / value) * 10;
      break;
    default:
      amount = (current.value / value) * 100;
  }

  return (
    <li className='currency__item'>
      <label className='currency__label' htmlFor={text}>
        <img className='currency__img' src={img} alt='flag' />
        {text}
      </label>
      <input
        className='currency__input'
        id={text}
        type='text'
        value={data && current.value > 0 ? amount.toFixed(2) : 0}
        readOnly
        name={text}
      />
    </li>
  );
};

export default Currency;
