// Import Components
import SignIn from '../components/Auth/LogIn'

function LoginAdmin() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4">LOGIN</div>
      <br></br>
      <hr></hr>
      <div>
        <SignIn />
      </div>
      <hr></hr>
    </div>
  )
}
export default LoginAdmin
