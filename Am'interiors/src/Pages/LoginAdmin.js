// Import Components
import SignIn from '../components/Auth/LogIn'

function LoginAdmin() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">LOGIN</div>
      <br></br>
      <div>
        <SignIn />
      </div>
      <hr></hr>
    </div>
  )
}
export default LoginAdmin
