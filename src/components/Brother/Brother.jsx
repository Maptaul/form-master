import { useContext } from "react";
import { MoneyContext } from "../GrandPa/Grandpa";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brothers </h2>
      <p>money : {money}</p>
      <button onClick={() => setMoney(money + 1000)}>add Money tk </button>
    </div>
  );
};

export default Brother;
