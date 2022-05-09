// Import Components
import SignIn from "../components/Auth/LogIn";
// import LogIn from "../components/Auth/LogIn";
// import SignUp from "../components/Auth/SignUp";

function LoginAdmin() {
    return (
        <div className="p-20 pl-5 pr-5 mb-5">
      <div class="text-8xl text-white ">LOGIN</div>
      <br></br>
      <hr></hr>
      <br></br>
    <hr></hr>
    <br></br>
        <div>
        {/* <SignUp/> */}
        <SignIn/>
        </div>
        </div>
    )
}
export default LoginAdmin;
