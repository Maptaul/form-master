import "./App.css";
import Grandpa from "./components/GrandPa/Grandpa";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("sign up data", data);
  // };

  // const handleUpdateProfile = (e) => {
  //   console.log("update profile", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa />
      {/* <SimpleFrom /> */}
      {/* <StateFullForm /> */}
      {/* <RefForm /> */}
      {/* <HookFrom /> */}
      {/* <ReUsableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up </h2>
          <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <hr />
      <ReUsableForm
        formTitle={"Updated Data"}
        handleSubmit={handleUpdateProfile}
        submitButtonText="Update"
      >
        <div>
          <h2>Update profile </h2>
          <p>always keep your profile update </p>
        </div>
      </ReUsableForm> */}
    </>
  );
}

export default App;
