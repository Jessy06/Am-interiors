import React, {useState} from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
  
    // function to update state of name with 
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value 
    // enter by user in form
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      // function to update state of password with 
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password 
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    // below function will be called when user 
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user 
        // 'name' and 'email' deatils .
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
  
    }
  return (
    <>
      <button
        className="bg-white hover:bg-lime-800 text-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Work with me 
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold">
                    Formulaire
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="text-black">
                <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit() 
        function will be called .*/}
    <h2> Geeks For Geeks </h2>
    <h3> Sign-up Form </h3>
    {/* <img src="/gfg.png" /> */}
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)  => {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          Age:
        </label><br/>
        <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} />
            { /*when user write in age input box , handleAgeChange()
               function will be called. */}
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)  => {handleEmailChange(e)}} /><br/>
          {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} />
              {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" value={confPassword} required onChange={(e)  => {handleConfPasswordChange(e)}} /><br/>
                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}
        <input className="bg-white hover:bg-lime-800 text-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit" value="Submit"/>
      </form>
      </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}