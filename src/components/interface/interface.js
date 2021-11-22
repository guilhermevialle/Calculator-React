import "./interface.scss";
import RegularButton from "../buttons/regular/regular";
import { useState, useEffect } from "react";

export default () => {
  const [current, setCurrent] = useState("");
  const [sliceCurrent, setSliceCurrent] = useState("");
  const [op, setOp] = useState("");
  const [before, setBefore] = useState(null);

  const switchSignal = () => {
    return setCurrent(current * -1);
  };
  const builder = (e) => {
    let value = e.currentTarget.textContent;
    return setCurrent((prev) => (prev += value));
  };
  const changeOperator = (e) => {
    let operator = e.currentTarget.innerText;

    setSliceCurrent(current);
    setCurrent("");
    setOp(operator);
  };
  const percent = () => {
    return setCurrent(current / 100);
  };
  const solveCalc = () => {
    let res = current + op + sliceCurrent;
    setBefore(sliceCurrent + op + current);
    res = res.replaceAll("x", "*");
    res = eval(res).toFixed(1);

    return setCurrent(res);
  };

  const clean = () => {
    return setCurrent("");
  };

  return (
    <div className="interface">
      <div className="display">
        <span className="before">{before ? before : ""}</span>
        <span className="result">
          {current == "" || !current ? "0" : current}{" "}
        </span>
      </div>

      <div className="keys">
        <RegularButton func={clean} text="c" />
        <RegularButton func={switchSignal} text="+/-" />
        <RegularButton func={percent} text="%" />
        <RegularButton
          func={changeOperator}
          type="operator"
          style={{ color: "#63D16B" }}
          text="/"
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="7"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="8"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="9"
          func={builder}
        />
        <RegularButton
          func={changeOperator}
          type="operator"
          style={{ color: "#63D16B" }}
          text="x"
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="4"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="5"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="6"
          func={builder}
        />
        <RegularButton
          func={changeOperator}
          type="operator"
          style={{ color: "#63D16B" }}
          text="-"
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="1"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="2"
          func={builder}
        />
        <RegularButton
          type="number"
          style={{ backgroundColor: "transparent" }}
          text="3"
          func={builder}
        />
        <RegularButton
          func={changeOperator}
          type="operator"
          style={{ color: "#63D16B" }}
          text="+"
        />
      </div>
      <div className="afterKeys">
        <RegularButton
          func={builder}
          style={{ backgroundColor: "transparent" }}
          text="0"
        />
        <RegularButton
          func={builder}
          style={{ backgroundColor: "transparent" }}
          text="."
        />
        <RegularButton
          func={solveCalc}
          style={{ backgroundColor: "#63D16B", borderRadius: "50%" }}
          text="="
        />
      </div>
    </div>
  );
};
