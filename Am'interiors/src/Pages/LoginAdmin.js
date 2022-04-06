function LoginAdmin() {
  return (
    <div className='h-screen flex bg-gray-bg1'>
    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center text-black'>
            Log in to your account 🔐
        </h1>

        <form>
            <div>
            <label htmlFor='pseudo'>Pseudo</label>
                <input
                    type='pseudo'
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='pseudo'
                    placeholder='Your Pseudo'
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='email'
                    placeholder='Your Email'
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='password'
                    placeholder='Your Password'
                />
            </div>             
            <div class='flex justify-center items-center mt-6'>
            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button">
              Login
            </button>
          </div>

        </form>
    </div>
</div>
);
};
export default LoginAdmin;
