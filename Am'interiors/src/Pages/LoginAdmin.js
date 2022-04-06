function LoginAdmin() {
  return (
    <div>
      <h1 className="text-3xl p-10 text-red-500">Hello world!</h1>
      <form>
        <label>
          Pseudo :
          <input type="text" name="name" />
        </label>
        <label>
          Password :
          <input type="text" name="name" />
        </label>
        <label>
          Email :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
export default LoginAdmin;
