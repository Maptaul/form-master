import { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

const Fridend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Friend : </h2>
      <p>has : {gift}</p>
    </div>
  );
};

export default Fridend;
