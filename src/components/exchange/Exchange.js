import React, { useContext } from "react";
import "./exchange.scss";
import { RateContext } from "../../context/RateContext";

export const Exchange = () => {
  const { state } = useContext(RateContext);

  const currency = { ...state.currency };

  delete currency[state.base];

  return (
    <div className="exchange">
      <div className="exchangeContainer">
        <div className="exchangeContent">
          <div>
            {" "}
            <p>
              Базовая валюта: {state.base}&nbsp; &nbsp;Дата: {state.date}
            </p>
          </div>

          <ul>
            {Object.keys(currency).map((item, i) => {
              return (
                <li key={item}>
                  <span>
                    <img src={currency[item].flag} alt={item} /> {item}
                  </span>
                  <span>{`1${state.base} = ${currency[item].course} ${item}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
