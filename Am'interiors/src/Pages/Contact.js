import React from 'react'
import kitchen from '../Images/kitchen.jpg'

function Contact() {
  return (
    <div className="p-5 pl-5 pr-5 mt-5 mb-5">
      
      <div>
        <img src={kitchen} className=" py-3 px-3 grid float-right" />
      </div>

      

      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-300 border border-lime-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-300 border border-lime-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
            ></input>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-300 border border-lime-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            ></input>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Motif demande
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-300 border border-lime-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
            ></input>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
              for="grid-password"
            >
              Message
            </label>
            <textarea
              input
              class="appearance-none block w-full bg-gray-200 text-gray-300 border border-lime-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-lime-800"
              id="grid-last-name"
              type="text"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="shadow bg-lime-800 hover:bg-lime-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
        
      </form>
    </div>
  )
}
export default Contact
