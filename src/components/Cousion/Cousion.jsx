import Fridend from "../Friend/Fridend";
import Special from "../Special/Special";

const Cousion = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin </h2>
      <p>{name}</p>
      <section>
        {asset && <Special asset={asset} />}
        {name === "Shaila" && <Fridend />}
      </section>
    </div>
  );
};

export default Cousion;
