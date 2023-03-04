import React from "react";
import Stats from "./components/stats"


const logos = [
  {
    name: "Transistor",
    url: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];

export default function Home() {
  return (
    <div className="pt-20 items-center justify-center h-auto bg-white  bg-fixed bg-center bg-cover ">
      {/* ***************** SECTION ==> 1 **************** */}
      <div className="xl:container 2xl:mx-auto  py-24 lg:py-24 lg:px-20 md:py-20 md:px-6  px-4 text-white"
        style={{ background: "#062d60" }}
      >
        <div className="flex flex-col lg:flex-row justify-center px-8 ">
          <div className="w-full leading-10 lg:w-5/12 lg:ml-16 pb-16 lg:text-left   ">
            <h1 className="PatuaOne tracking-wider pb-5 text-2xl lg:text-5xl md:text-2xl md:pb-5  md:max-w-xs lg:max-w-lg text-center  md:text-center lg:text-left md:mx-auto text-white font-medium lg:pb-8  ">
              {" "}
              Run your business,
              <br className="hidden lg:block md:hidden" /> While we do
              <br className="hidden lg:block md:hidden" /> The accounting.
            </h1>
            <p className="catamaran text-base leading-6 text-center lg:text-left  text-white">
              Experience Efficient Accounting and Returns Preparation along with
              Customized MIS Reports for Decision Making with Bookxpert,your
              virtual real-time Accounting partner thereby giving you enough
              Time to Focus on your Core Tasks.
            </p>
            <button className="lg:w-1/3 block  lg:inline-block sm:w-1/4 sm:text-center m-auto lg:ml-0 my-5 hover:bg-white text-white font-semibold hover:text-blue-800 py-2 px-4 border border-white hover:border-transparent rounded">
              Book A Demo
            </button>
          </div>

          <div className="w-full lg:w-7/12 ">
            <img
              className="w-full h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/7zBHsyElF4x3Bo0PzWs8NS/aaeae132c5cb261b07c7972d3a1fbdc6/20220113_HomePageVisualUpdates_Home_Desktop_Final.png?h=395&q=90&w=670"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      {/* ***************** SECTION ==> 2 **************** */}
      <div className="grid grid-cols-1 sm:grid-cols-1  py-24 lg:grid-cols-3 xl:grid-cols-3  text-white   items-center justify-center"
        style={{ background: "#f7f8fa" }}
      >
        <div className="hidden lg:block   mx-auto">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/1dLJZFfakIm6ze6ySJAzRS/19329d5a2f956af08c6ec75c15fdf218/TaxHub-Left.png?h=236&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>

        <div className=" text-center text-black ">
          <h1 className="PatuaOne tracking-wider text-3xl lg:text-3xl font-bold sm:text-4xl md:text-xl">
            Are you ready for tax season?
          </h1>
          <p className=" catamaran my-3 text-sm lg:w-full text-black leading-5 px-10 font-medium">
            Get exclusive access to deadline reminders, free checklists and more
            in our Tax Resource Hub.
          </p>

          <button className=" my-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>

          <p className="catamaran my-3 text-sm lg:w-full  text-black leading-5 px-10 font-medium">
            If you're several years behind on business taxes, get caught up and
            filed with Bench Retro.
          </p>
        </div>

        <div className="mx-auto ">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6tia5roEXDz2daFkUPIFMt/524a4ce1da60bbe68330d41cea3f0f3f/TaxHub-Right.png?h=235&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* ***************** Review  **************** */}
      <div className="max-w-none py-24 items-center justify-center h-auto  bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h1 className="PatuaOne tracking-wider lg:text-3xl text-center font-bold text-lg  lg:p-8 p-8 py-3">
            We are on a journey to simplify accounting & bookkeeping for MSMEs &
            Auditors.
          </h1>
        </div>

        <div className=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div className=" md:flex-col md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <p className="catamaran text-base ">
                "Now that Bench has a tax solution service, they're a 'one stop
                shop' for small businesses to manage their books and taxes."
              </p>
              <p className=" catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/498EXiBd0rSp5S6OhQIrNO/bea6f40792bf6cd7fe9200c587419155/download.jpeg?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />
                <b className="text-blue-400  ml-10 mr-0  mt-10">
                  ALBERT LAMONT
                </b>
                <span className="mt-10"> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>

          <div className=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <p className=" catamaran text-base">
                "This is the first year where it’s tax season and I don’t feel
                anxious one bit."
              </p>
              <p className="catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/1DloogLwZhhbmtqxuhTcWw/df3fa64ee18890ab0aff70e1415bc09b/Testimonial_Dr-Bukky.png?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />
                <b className="text-blue-400 ml-10 mr-0  mt-10">ALBERT LAMONT</b>
                <span className="mt-10"> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>

          <div className=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <p className="catamaran  text-base">
                "Ripping your hair out at tax time? All I have to say is I'm so
                glad I used Bench last year!"{" "}
              </p>
              <p className="catamaran text-xs flex">
                <img
                  className=" w-[5rem] max-w-none mt-5 rounded-full bg-white/5 ring-1 ring-white/10"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2vmIkgyTJv3CwYkblL3Ilk/3928a03e7f6399d1048a025c70d97f26/Gina-Downey.jpeg?h=86&q=90&w=86"
                  alt="App screenshot"
                  width={1920}
                  height={1080}
                />

                <b className="text-blue-400 ml-10 mr-0  mt-10">ALBERT LAMONT</b>
                <span className="mt-10 "> CEO, SWEATCAST</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ***************** SECTION ==> 4 **************** */}

      <div className="w-80 lg:w-3/4 md:w-4/5 mx-auto border border-gray-200 mb-10"></div>

      {/* ***************** statistics **************** */}
      <Stats />

      {/* ***************** SECTION ==> 5 **************** */}
      <div className="flex  lg:flex-row flex-col-reverse justify-center md:py-12 md:px-6 gap-14 py-10  ">
        <div className=" lg:w-5/12  ">
          <img
            className="h-full md:mx-auto"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col justify-center">
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-bold py-5 leading-9 text-gray-800 ">
            {" "}
            No Delays , On - Time Reports
          </h1>

          <p className=" catamaran px-10 lg:px-0 font-normal text-base lg:mr-20 text-center lg:text-left para_text  ">
            {" "}
            Gain access to accurate financial reports and documents, through our
            owner ‘s app. Our financial reports will provide you with the
            information you need, including updated financial statements &
            one-on-one account managers for all of your needs.
          </p>
          <button className="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>

          {/* <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div> */}
        </div>
      </div>

      {/* ***************** SECTION ==> 6 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="heading w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-bold py-5 leading-9 text-gray-800 ">
              {" "}
              Relief from Departmental Levies
            </h1>

            <p className="catamaran font-catamaran text-base lg:mr-20 text-center lg:text-left para_text  ">
              {" "}
              Delivery of monthly financial reports in advance helps with smooth
              and perfect filing thereby helping businesses getting relief from
              unnecessary departmental Levies like Fines, Penalties,Late Fees
              etc.
            </p>
            <button className="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Book A Demo
            </button>
          </div>

          <div className=" lg:w-5/12">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
              alt="A group of People"
            />
          </div>
          {/* 
<div className=" lg:w-5/12">
          <img className="h-full"
            src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div> */}
        </div>
      </div>

      {/* ***************** SECTION ==> 7 **************** */}
      <div className="flex  lg:flex-row flex-col-reverse justify-center md:py-12 md:px-6 gap-14 py-10  ">
        <div className=" lg:w-5/12 ">
          <img
            className="h-full md:mx-auto"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col justify-center">
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-bold py-5 leading-9 text-gray-800 ">
            {" "}
            Assisting Auditors
          </h1>

          <p className=" catamaran font-medium text-base lg:mr-20 text-center lg:text-left para_text  ">
            {" "}
            We will provide Data in Reusable Formats along with supporting
            documents within Deadlines for Attestation & Filing Returns.
          </p>
          <button className="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>
        </div>
      </div>
      {/* ***************** SECTION ==> 8 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left text-center font-bold py-5 leading-9 text-gray-800 ">
              {" "}
              Expert’s Analysis
            </h1>
            <p className="catamaran text-base lg:mr-20 text-center lg:text-left para_text ">
              {" "}
              Our expert's analysis reports will help you in Planning of your
              Stocks, Materials Required, Credit Flows etc.
            </p>
            <button className="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Book A Demo
            </button>
          </div>

          <div className=" lg:w-5/12">
            <img
              className="h-full md:mx-auto"
              src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
              alt="A group of People"
            />
          </div>
          {/* 
<div className=" lg:w-5/12">
          <img className="h-full"
            src="https://images.ctfassets.net/88a6qmzs2wdz/60YZfXjE7UU0IqBarEgYK4/22461e400c9b393e8833046dd8fbeda6/2023_Homepage_VP_FinancialReporting.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div> */}
        </div>
      </div>
      {/* ***************** SECTION ==> 9 **************** */}

      <div className="max-w-none mb-10 pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h1 className="PatuaOne tracking-wider lg:text-3xl text-center font-bold text-lg  lg:p-8 p-8 py-5">
            Explore over 600 resources for managing small business finances
          </h1>
        </div>

        <div className=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className=" py-4">
              <div className="h-full   overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2v3J5YNdud9NcKqGroidGE/922b6535d87717d0e9579f959b39beb2/BenchBlog_TaxTips_17BigTaxDeductions.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className=" PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <div className="h-full   overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2jaEUtWACoVyDdRGmWCLaN/6c5da6d1d352948f8378f2f9b145c177/BenchBlog_Top12Qs.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img className="w-full" src="" alt="Mountain"/> */}

            <div className=" py-4">
              <div className="h-full  overflow-hidden">
                <img
                  className="lg:h-48 md:hidden lg:block w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/7Eu1demGJF7dvPI3H67Fv3/05d650cb773d41c921c1313657aca20a/BenchBlog_TaxTips_10Steps.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="PatuaOne tracking-wider title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="catamaran leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center  ">
          <button className="  mx-auto bg-transparent lg:ml-0 hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>
        </div>
      </div>

      {/* ***************** SECTION ==> 10 **************** */}
      {/* <Accordion/> */}

      {/* ***************** SECTION ==> 11 **************** */}
      <div
        className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container "
        style={{ background: "#062d60" }}
      >
        <div className="md:py-12 py-8 ">
          <div className="flex flex-col items-center justify-center  mx-auto">
            <h1 className="PatuaOne tracking-wider lg:text-3xl md:text-2xl text-xl 
            px-10 text-white font-medium  text-center lg:w-1/2 lg:mx-auto lg:text-center">
              {" "}
              With a wide base of happy customers you can join us and receive
              our expert Accounting services
            </h1>
            <p className="catamaran text-base leading-normal text-center text-white mt-4 xl:w-1/2 w-10/12">
              {" "}
              See what running a business is like with Bench on your side. Try
              us for free—we’ll do one
              <br />
              prior month of your bookkeeping and prepare a set of financial
              statements for you to keep.
            </p>
            <div className="items-center  lg:justify-start sm:justify-start ">
              <button className=" mt-8 text-blue-800 font-semibold bg-white border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-lg">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
