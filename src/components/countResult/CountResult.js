import React, { useContext } from "react";
import "./countResult.scss";
import { RateContext } from "../../context/RateContext";

export const CountResult = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="calcResult">
      <ul>
        {state.result ? (
          <li>
            <p>
              <span>{state.inputValue}&nbsp;RUB</span>
              &nbsp; = &nbsp;
              <span>
                {state.result}&nbsp;{state.currencyValue}
              </span>
            </p>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
