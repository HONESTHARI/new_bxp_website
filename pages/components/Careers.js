import React from 'react'
import Navbar from './navbar'
import Tables from './code-ref/table'
import Footer from './code-ref/footer'

export default function Careers() {
  return (
    
    <>
    <Navbar/>
   

   {/* ***************** SECTION ==> 1 **************** */}

    <div className=" pt-10 items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
        <div class="flex text-white pt-5" style={{ background: "#062d60" }}>
          <div className=" max-w-xl mx-auto lg:flex-auto lg:py-20 text-center ">
            <h2 className="text-3xl  font-bold tracking-tight">
            Do your life’s work
              
            </h2>
            <p className="mt-6 text-1xl leading-8">
            We’re more than a bookkeeping company. We’re here to fundamentally change how business owners work, grow, and live their lives. The contributions from the people who work here is the only way we’ll get there. So, ready to get to it?            </p>
            <div className="mt-10  items-center justify-center gap-x-6 lg:justify-start">
              <button  class=" m-5 bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded">
               <a href='http://bookxpert.co/'> Book A Demo</a>
              </button>
             
            </div>
          </div>
        </div>
      </div>

 
 {/* ***************** SECTION ==> 2 **************** */}

 <div class="flex text-center text-white  pt-10">
        <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
          <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
          Take charge of your career
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
          We never tell people what to do or what to think. Autonomy and radical responsibility are non-optional conditions for working at Bench. Uncover how your job can help us change lives, show us how it’s done, and take charge of your career.
          </p>
          <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div>
        </div>

        <div className="mt-16 h-80 lg:mt-28">
          <img
            className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/47CpLq0rCSHCfNWjNMOPxX/6410f63691c0a2643e3d1106a8181b08/IMG_3097.jpg?h=380&q=90&w=570"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>

{/* ***************** SECTION ==> 3 **************** */}

<div class="flex text-center text-white  pt-10">
      <div className=" ml-auto mt-16 h-80 lg:mt-28">
          <img
            className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/3sfxoWWb0zvUxMplt9c1DV/99e579ae0b645f3ee8e19e207f06b559/PeopleTeam_6736_1600px_Copy.jpg?h=380&q=90&w=570"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>

        <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
          <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
          Do what’s never been done
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
          We’re here to change the outcome of small businesses everywhere—for the better. That means you won’t just collect a pay cheque while working here. You’ll do something that’s never been done before (and improve lives in the process).
          </p>
          <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div>
        </div>
      </div>

{/* ***************** SECTION ==> 4 **************** */}

<div className=" pt-10 items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
        <div class="flex text-white pt-5" style={{ background: "#062d60" }}>
          <div className=" max-w-xl mx-auto lg:flex-auto lg:py-20 text-center ">
            <h2 className="text-3xl  font-bold tracking-tight">
            You belong here
              
            </h2>
            <p className="mt-6 text-1xl leading-8">
            We care about each human’s ability to contribute. If you think you're unqualified to work here for any reason, stop right there—
we want to talk with you.         </p>
<p>We strongly encourage applications from BIPOC, LGBTQI+/2S people, immigrants, people living with disabilities, and other marginalized communities. We believe that without you, we are all less.
</p>
            <div className="mt-10  items-center justify-center gap-x-6 lg:justify-start">
              <button  class=" m-5 bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded">
               <a href='http://bookxpert.co/'> Book A Demo</a>
              </button>
             
            </div>
          </div>
        </div>
      </div>



  {/* ***************** SECTION ==>5 **************** */}
      <Tables/>

  {/* ***************** SECTION ==>6 **************** */}
  <Footer/>

    </>
  )
}
