import React from "react";
// import Team from "./code-ref/Team-Sections";

export default function Section() {
  return (
    // style={{background:"#062d60"}}
    <div className="pt-10 items-center justify-center h-auto  bg-fixed bg-center bg-cover bg-white ">

        {/* ***************** SECTION ==> 1 **************** */}
        <div
        class="flex text-center text-white  pt-10"
        style={{ background: "#062d60" }}
      >
        <div className="ml-auto max-w-md text-center  lg:mx-40 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-5xl font-bold tracking-tight  text-white sm:text-4xl">
            You run your <br />
            business.
            <br />
            We’ll handle your
            <br /> finances.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From bookkeeping to tax filing, Bench is the all-in-one financial
            toolkit your business can count on.{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book A Free Demo
            </a>
            <a href="" className="text-base font-semibold leading-7 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 h-80 lg:mt-28">
          <img
            className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/7zBHsyElF4x3Bo0PzWs8NS/aaeae132c5cb261b07c7972d3a1fbdc6/20220113_HomePageVisualUpdates_Home_Desktop_Final.png?h=395&q=90&w=670"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>

{/* <Team/> */}

     {/* ***************** SECTION ==> 2 **************** */}

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-white pt-5  items-center justify-center h-auto  bg-fixed bg-center bg-cover" style={{ background: "#f7f8fa" }}>
       
          <div className="mt-16 h-80 lg:mt-28 mx-auto">
                     <img
              className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/1dLJZFfakIm6ze6ySJAzRS/19329d5a2f956af08c6ec75c15fdf218/TaxHub-Left.png?h=236&q=90&w=170"
              alt="App screenshot"
              width={1920}
              height={1080}
            />
          </div>

          <div className="lg:mx-auto text-center text-black lg:flex-auto lg:py-32 ">
            <h2 className="text-xl font-bold tracking-tight  sm:text-4xl">
              Are you ready for tax season?
            </h2>
            <p className="my-3 text-sm text-black leading-5">
              Get exclusive access to deadline reminders, free checklists and
              more in our Tax Resource Hub.
            </p>
            
              <button class=" my-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Book A Demo
              </button>
              <p className="my-3 text-sm text-black leading-5">
                If you're several years behind on business taxes, get caught up
                and filed with Bench Retro.
              </p>
            
          </div>

          <div className=" mt-16 h-80 lg:mt-28 lg:mx-auto">

          <img
              className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6tia5roEXDz2daFkUPIFMt/524a4ce1da60bbe68330d41cea3f0f3f/TaxHub-Right.png?h=235&q=90&w=170"
              alt="App screenshot"
              width={1920}
              height={1080}
            />


          </div>
        </div>
      

    {/* ***************** SECTION ==> 3 **************** */}

      <div className="pt-10 items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
        <div>

        <h2 className="text-xl  text-center font-bold tracking-tight  sm:text-4xl">
        Helping small businesses navigate tax season since 2012
            </h2>

        </div>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div class="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}
            <hr></hr>
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">1</div>
              <p class="text-gray-700 text-base">
                "Now that Bench has a tax solution service, they're a 'one stop
                shop' for small businesses to manage their books and taxes."
              </p>
              <p className="text-xs">
                <b className="text-green-400">ALBERT LAMONT</b> CEO, SWEATCAST
              </p>
            </div>
            <hr></hr>
            <div class="px-6 pt-4 pb-2 text-center">
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}
              <span class="inline-block bg-blue-500 rounded-full px-5 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {" "}
                More{" "}
              </span>
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
          </div>

          <div class="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">2</div>
              <p class="text-gray-700 text-base">
                "This is the first year where it’s tax season and I don’t feel
                anxious one bit."
              </p>
              <p className="text-xs">
                <b className="text-green-400"> DR. BUKKY KOLAWOLE</b> FOUNDER,
                RELATIONSHIP HQ
              </p>
            </div>
            <hr></hr>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block bg-blue-500 rounded-full px-5 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {" "}
                More{" "}
              </span>
            </div>
          </div>

          <div class="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="px-6 py-4 text-center">
              <div class="font-bold text-xl mb-2">3</div>
              <p class="text-gray-700 text-base">
                "Ripping your hair out at tax time? All I have to say is I'm so
                glad I used Bench last year!"
              </p>
              <p className="text-xs">
                <b className="text-green-400"> GINA DOWNEY</b>OWNER, ONLINE
                ACADEMY NETWORK
              </p>
            </div>
            <hr></hr>
            <div class="px-6 pt-4 pb-2 text-center">
              <span class="inline-block bg-blue-500 rounded-full px-5 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {" "}
                More{" "}
              </span>
            </div>
          </div>

          <div></div>

          <button class="flex mx-auto mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
            Button
          </button>
        </div>
      </div>

   {/* ***************** SECTION ==> 4 **************** */}

      <div class="flex text-center text-white  pt-10">
      <div className=" ml-auto mt-16 h-80 lg:mt-28">
          <img
            className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>

        <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
          <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
          One-on-one expert support
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            The Bench platform gives you monthly financial statements and
            expense overviews to keep you in control of your money. At-a-glance
            visual reports help you see the big picture and give you actionable
            insights to help you grow your business. You’ll never be in the dark
            again.
          </p>
          <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div>
        </div>
      </div>
 
   {/* ***************** SECTION ==> 5 **************** */}

<div class="flex text-center text-white  pt-10">
        <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
          <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
            Powerful financial reporting
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            The Bench platform gives you monthly financial statements and
            expense overviews to keep you in control of your money. At-a-glance
            visual reports help you see the big picture and give you actionable
            insights to help you grow your business. You’ll never be in the dark
            again.
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
            src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>

   {/* ***************** SECTION ==> 6 **************** */}

      <div className="pt-10 items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
        <div class="flex text-white pt-5" style={{ background: "#062d60" }}>
          <div className=" mx-auto lg:flex-auto lg:py-20 text-center ">
            <h2 className="text-3xl  font-bold tracking-tight">
              Join thousands of small business owners
              <br />
              who trust Bench with their books
            </h2>
            <p className="mt-6 text-1xl leading-8">
            See what running a business is like with Bench on your side. Try us for free—we’ll do one<br/>prior month of your bookkeeping and prepare a set of financial statements for you to keep.
            </p>
            <div className="mt-10  items-center justify-center gap-x-6 lg:justify-start">
              <button class=" m-5 bg-transparent hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-transparent rounded">
                Book A Demo
              </button>
             
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
