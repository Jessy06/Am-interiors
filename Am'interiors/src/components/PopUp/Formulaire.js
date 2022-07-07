/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [texterea, setTexterea] = useState('')
  const [surname, setSurname] = useState('')
  const [Request, setRequest] = useState('')

  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value)
  }
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleTextereaChange = (e) => {
    setTexterea(e.target.value)
  }
  const handleSubmit = (e) => {
    setName(e.target.value)

    const handleSurnameChange = (e) => {
      setSurname(e.target.value)
    }
    // eslint-disable-next-line no-unused-vars
    const handleRequest = (e) => {
      setRequest(e.target.value)
    }
  }

  return (
    <>
      <button
        className="bg-white hover:bg-orange-800 text-gray-800 font-bold text-xs  lg:uppercase lg:text-sm px-2 py-0.6
        lg:px-4 lg:py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Work with me
      </button>
      {showModal ? (
        <>
        
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-70 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t pr-10 pl-10">
                  <h3 className="text-3xl text-black font-semibold">
                    Formulaire de contact
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-5 h-4 w-4 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="text-black p-4">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e)
                    }}
                  >
                    <br></br>
                    {/*when user submit the form , handleSubmit() 
        function will be called .*/}
                    {/* <img src="/gfg.png" /> */}
                    <label>Name:</label>
                    <div className="pb-2 p-4"></div>
                    <input
                      className='border-2 rounded border-zinc-200 pb-2'
                      type="text"
                      value={name}
                      required
                      onChange={(e) => {
                        handleChange(e)
                      }}
                    />
                    <br></br>
                    {/*when user write in name input box , handleChange()
              function will be called. */}
                    <label>Surname:</label>
                    <div className="pb-2 p-4"></div>
                    <input
                      className='border-2 rounded border-zinc-200 pb-2'
                      type="text"
                      value={surname}
                      required
                      onChange={(e) => {
                        handleChange(e)
                      }}
                    />
                    <br></br>
                    {/*when user write in name input box , handleChange()
              function will be called. */}

                    <label>Email:</label>
                    <div className="pb-2 p-4"></div>
                    <input
                      className='border-2 rounded border-zinc-200 pb-2'
                      type="email"
                      value={email}
                      required
                      onChange={(e) => {
                        handleEmailChange(e)
                      }}
                    />
                    <br></br>
                    {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
               <label>Motif demande:</label>
                    <div className="pb-2 p-4"></div>
                    <input
                      className='border-2 rounded border-zinc-200 pb-2'
                      type="text"
                      value={Request}
                      required
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      />
                      <br></br>
                    <div className="grid-rows-3 p-3 pr-3 pb-3 pl-3 mt-3 ml-3"></div>
                    <label>
                      Texterea :
                    </label>
                    <textarea
                      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-zinc-200
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none
      "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                    <input
                      type="texterea"
                      value={texterea}
                      required
                      onChange={(e) => {
                        handleTextereaChange(e)
                      }}
                    />
                    <br></br>
                    {/* when user write in texterea input box , handlTextereaChange() 
              function will be called.*/}
                    <input
                      className="bg-white hover:bg-orange-800 text-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
                    />
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
  )
}
