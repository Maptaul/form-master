import useInputState from "../Hooks/UseInputState";

const HookFrom = () => {
  const emailState = useInputState("mdmaptaul@gmail.com");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value), e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          value={name}
          onChange={handleSubmit}
          className="input"
          type="text"
          name="name"
          id=""
        />
        <br />
        <br />
        <input
          className="input"
          {...emailState}
          type="email"
          name="email"
          id=""
        />
        <br />
        <br />
        <input className="input" type="password" name="phone" id="" />
        <br />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookFrom;
