import Cousion from "../Cousion/Cousion";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="flex">
        <Cousion name={"Rafsan"} asset={asset} />
        <Cousion name={"Shila"} />
      </section>
    </div>
  );
};

export default Uncle;
