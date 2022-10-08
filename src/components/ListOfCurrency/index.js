import React from "react";

import Currency from "../Currency";

import "./style.scss";

const ListOfCurrency = ({ currency, data, current }) => {
  const currencies = data.map((item, i) => (
    <Currency
      text={item.Cur_Abbreviation}
      key={item.Cur_ID}
      data={item}
      current={current}
      img={currency[data[i].Cur_Abbreviation.toLowerCase()].img}
      value={+currency[data[i].Cur_Abbreviation.toLowerCase()].value}
      currency={currency}
    />
  ));
  return <ul className='listOfCurrency'>{currencies}</ul>;
};

export default ListOfCurrency;
