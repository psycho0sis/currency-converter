import React, { useEffect, useState, useRef } from "react";

import ListOfCurrency from "../ListOfCurrency";

import usaF from "../../assets/United_States.svg.png";
import eurF from "../../assets/Europe.svg.png";
import uahF from "../../assets/Ukraine.svg.png";
import rubF from "../../assets/Russia.svg.png";
import plnF from "../../assets/Poland.svg.png";
import bynF from "../../assets/Belarus.svg.png";

import "./style.scss";

const Header = () => {
  const [currency, setCurrency] = useState({
    usd: { value: "", img: usaF },
    eur: { value: "", img: eurF },
    uah: { value: "", img: uahF },
    rub: { value: "", img: rubF },
    pln: { value: "", img: plnF },
  });

  const [data, setData] = useState([]);

  const byn = useRef(0);

  useEffect(() => {
    fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
      .then((res) => res.json())
      .then((data) => {
        const currencies = Object.keys(currency);
        let newData = [];
        for (let i = 0; i < currencies.length; i++) {
          newData.push(
            data.filter(
              (item) => item.Cur_Abbreviation === currencies[i].toUpperCase()
            )
          );
        }
        setData(newData.flat(1));
      });
  }, [currency]);

  function handleChange() {
    setCurrency((prevCurrency) => {
      const newObj = { ...prevCurrency };

      for (let key in newObj) {
        newObj[key].value = data.filter(
          (item) => item.Cur_Abbreviation === key.toUpperCase()
        )[0].Cur_OfficialRate;
      }
      return {
        ...newObj,
      };
    });
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Currency Converter</h1>
      <label htmlFor='byn'>
        <img className='header__img' src={bynF} alt='flag' />
        BYN
      </label>
      <input
        className='header__input'
        id='byn'
        type='text'
        ref={byn}
        name='byn'
        onChange={handleChange}
      />
      <ListOfCurrency currency={currency} data={data} current={byn.current} />
    </header>
  );
};

export default Header;
