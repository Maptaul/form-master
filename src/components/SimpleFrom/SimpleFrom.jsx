const SimpleFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    // console.log("Form Submitted ");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" name="name" id="" />
        <br />
        <br />
        <input className="input" type="email" name="email" id="" />
        <br />
        <br />
        <input className="input" type="text" name="phone" id="" />
        <br />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleFrom;
