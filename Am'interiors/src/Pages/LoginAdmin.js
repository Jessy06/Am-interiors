// Import Components
import SignIn from '../components/Auth/LogIn'

function LoginAdmin() {
  return (
    <div className="p-4">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4"><span className="text-9xl p-2 text-white">-</span>Login</div>
      <br></br>
      <div>
        <SignIn />
      </div>
      <hr></hr>
    </div>
  )
}
export default LoginAdmin
