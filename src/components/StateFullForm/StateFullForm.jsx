import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 characters or longer ");
    } else {
      setError("");
    }
  };

  const handleNameChange = (e) => {
    console.log(name);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          className="input"
          type="text"
          name="name"
          id=""
          placeholder="enter Name"
        />
        <br />
        <br />
        <input
          onChange={handleEmailChange}
          className="input"
          type="email"
          name="email"
          id=""
          placeholder="enter Email"
        />
        <br />
        <br />
        <input
          onChange={handlePasswordChange}
          className="input"
          type="password"
          name="phone"
          id=""
          placeholder="enter password"
          required
        />
        <br />
        <br />
        <input className="btn" type="submit" value="Submit" />
        {error && <p>{error} </p>}
      </form>
    </div>
  );
};

export default StateFullForm;
