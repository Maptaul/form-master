import { useContext } from "react";
import Cousion from "../Cousion/Cousion";
import { MoneyContext } from "../GrandPa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Aunty</h1>
      <section className="flex">
        <Cousion name={"Sabab"} />
        <Cousion name={"Shaila"} />
      </section>
      <p>Money :{money} </p>
      <button onClick={() => setMoney(money + 1000)}>add Money tk </button>
    </div>
  );
};

export default Aunty;
