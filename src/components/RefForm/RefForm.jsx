import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} className="input" type="text" name="name" id="" />
        <br />
        <br />
        <input
          ref={emailRef}
          defaultValue={"mdmaptaul@gmail.com"}
          className="input"
          type="email"
          name="email"
          id=""
        />
        <br />
        <br />
        <input
          ref={passwordRef}
          className="input"
          type="password"
          name="phone"
          id=""
        />
        <br />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
