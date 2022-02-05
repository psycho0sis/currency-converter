import React from "react";

import Currency from "../Currency";

import "./style.scss";

const ListOfCurrency = ({ currency, data, current }) => {
  const currencies = data.map((item, index) => (
    <Currency
      text={data[index].Cur_Abbreviation}
      key={data[index].Cur_ID}
      data={data[index]}
      current={current}
      img={currency[data[index].Cur_Abbreviation.toLowerCase()].img}
      value={+currency[data[index].Cur_Abbreviation.toLowerCase()].value}
      currency={currency}
    />
  ));
  return <ul className='listOfCurrency'>{currencies}</ul>;
};

export default ListOfCurrency;
