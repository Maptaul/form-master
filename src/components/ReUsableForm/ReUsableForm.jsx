const ReUsableForm = ({
  formTitle,
  handleSubmit,
  submitButtonText = "Submit",
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div>
      {children}

      <form onSubmit={handleLocalSubmit}>
        <input className="input" type="text" name="name" id="" />
        <br />
        <br />
        <input className="input" type="email" name="email" id="" />
        <br />
        <br />
        <input className="input" type="password" name="password" id="" />
        <br />
        <br />
        <input className="btn" type="submit" value={submitButtonText} />
      </form>
    </div>
  );
};

export default ReUsableForm;
