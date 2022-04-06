function LoginAdmin() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <label>
          Password :
          <input type="text" name="name" />
        </label>
        <label>
          Pseudo :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
export default LoginAdmin;
