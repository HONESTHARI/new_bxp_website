import React from "react";

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

export default function Section() {
  return (
    
    <div className="pt-20 items-center justify-center h-auto bg-white  bg-fixed bg-center bg-cover ">
      {/* ***************** SECTION ==> 1 **************** */}
      <div className="xl:container 2xl:mx-auto  lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-white"
        style={{ background: "#062d60" }}
      >
        <div className="flex flex-col lg:flex-row justify-center gap-8 px-8 ">
          <div className="w-full lg:w-5/12  lg:text-left ">
            <h1 className="text-4xl lg:text-5xl text-white font-bold    pb-4 gbl_center glb_h2 breakhidden">
              {" "}
              You run your
              <br /> business.
              <br /> We’ll handle your <br /> finances.
            </h1>
            <p className="font-normal text-base leading-6 text-center lg:text-left  text-white">
              From bookkeeping to tax filing, Bench is the all-in-one financial
              toolkit your business can count on.
            </p>
            <button class="lg:w-1/3 block  lg:inline-block sm:w-1/4 sm:text-center m-auto lg:ml-0 my-5 hover:bg-white text-white font-semibold hover:text-blue-800 py-2 px-4 border border-white hover:border-transparent rounded">
              Book A Demo
            </button>
          </div>

          <div className="w-full lg:w-6/12 ">
            <img
              className="w-full h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/7zBHsyElF4x3Bo0PzWs8NS/aaeae132c5cb261b07c7972d3a1fbdc6/20220113_HomePageVisualUpdates_Home_Desktop_Final.png?h=395&q=90&w=670"
              alt="A group of People"
            />
          </div>
        </div>
      </div>

      {/* ***************** SECTION ==> 2 **************** */}
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 text-white pt-5  items-center justify-center h-auto  bg-fixed bg-center bg-cover"
        style={{ background: "#f7f8fa" }}
      >
        <div className="hidden lg:block mt-16 h-80 lg:mt-28 mx-auto">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/1dLJZFfakIm6ze6ySJAzRS/19329d5a2f956af08c6ec75c15fdf218/TaxHub-Left.png?h=236&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>

        <div className="lg:mx-auto text-center text-black lg:flex-auto lg:py-32 pt-20 ">
          <h2 className="text-xl font-bold tracking-tight  sm:text-4xl">
            Are you ready for tax season?
          </h2>
          <p className="my-3 text-sm text-black leading-5 lg:-px-10 px-10 font-semibold">
            Get exclusive access to deadline reminders, free checklists and more
            in our Tax Resource Hub.
          </p>

          <button class=" my-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>

          <p className="my-3 text-sm text-black leading-5 px-10 font-semibold">
            If you're several years behind on business taxes, get caught up and
            filed with Bench Retro.
          </p>
        </div>

        <div className="mt-16 h-50 lg:h-80 lg:mt-28 mx-auto">
          <img
            className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://images.ctfassets.net/88a6qmzs2wdz/1dLJZFfakIm6ze6ySJAzRS/19329d5a2f956af08c6ec75c15fdf218/TaxHub-Left.png?h=236&q=90&w=170"
            alt="App screenshot"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      {/* ***************** SECTION ==> 3 **************** */}
      <div className="max-w-none pt-10 items-center justify-center h-auto  bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h2 className=" lg:text-3xl text-center font-bold text-lg  lg:p-8 p-8 py-5">
            Helping small businesses navigate tax season since 2012
          </h2>
        </div>

        <div class=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div class=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <p class=" text-base ">
                "Now that Bench has a tax solution service, they're a 'one stop
                shop' for small businesses to manage their books and taxes."
              </p>
              <p className="text-xs flex">
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

          <div class=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <p class=" text-base">
                "This is the first year where it’s tax season and I don’t feel
                anxious one bit."
              </p>
              <p className="text-xs flex">
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

          <div class=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <p class=" text-base">
                "Ripping your hair out at tax time? All I have to say is I'm so
                glad I used Bench last year!"{" "}
              </p>
              <p className="text-xs flex">
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

<div className="w-80 lg:w-3/4 mx-auto border border-gray-200"></div>

      {/* ***************** SECTION ==> 4 **************** */}
      <div className="flex  lg:flex-row flex-col-reverse justify-center gap-8  p-10  ">
        <div className=" lg:w-5/12 ">
          <img
            className="h-full"
            src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-xl lg:text-4xl lg:text-left text-center font-bold leading-9 text-gray-800 ">
            {" "}
            One-on-one expert support
          </h1>

          <p className="font-medium text-base lg:mr-20 text-center lg:text-left para_text  ">
            {" "}
            Bench gives you a dedicated bookkeeper supported by a team of
            knowledgeable small business experts. Get a direct line to your team
            on desktop or mobile—professional support is just a few swipes,
            taps, or clicks away.
          </p>
          <button class="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>

          {/* <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div> */}
        </div>
      </div>

      {/* ***************** SECTION ==> 5 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-xl lg:text-4xl lg:text-left text-center font-bold leading-9 text-gray-800  ">
              {" "}
              Powerful financial reporting
            </h1>

            <p className=" text-base lg:mr-20 text-center lg:text-left text-gray-600  ">
              {" "}
              The Bench platform gives you monthly financial statements and
              expense overviews to keep you in control of your money.
              At-a-glance visual reports help you see the big picture and give
              you actionable insights to help you grow your business. You’ll
              never be in the dark again.
            </p>
            <button class="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Book A Demo
            </button>
          </div>

          <div className=" lg:w-5/12">
            <img
              className="h-full"
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

      {/* ***************** SECTION ==> 6 **************** */}
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-8  p-10">
        <div className=" lg:w-5/12">
          <img
            className="h-full"
            src="https://images.ctfassets.net/88a6qmzs2wdz/4LiGk1SkdfuUg18O8tVlqJ/f623064c0837101d882cd6385f4e4f3e/2023_Homepage_VP_Tax.png?h=354&q=90&w=570"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-xl lg:text-4xl lg:text-left text-center font-bold leading-9 text-gray-800 ">
            {" "}
            Tax season, minus the stress
          </h1>

          <p className=" text-base lg:mr-20 text-center lg:text-left text-gray-600  ">
            {" "}
            A year end package with everything you need to file comes standard
            with Bench. Upgrade your plan, and cross even more off your to-do
            list. With Premium, you get expert tax prep, filing, and year-round
            tax advisory support.
          </p>
          <button class="my-5 w-1/2 lg:w-1/3 mx-auto bg-transparent lg:ml-0  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>

          {/* <div className="items-center  lg:justify-start">
            <button class=" mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 hover:text-white rounded text-lg">
              Book A Demo
            </button>
          </div> */}
        </div>
      </div>

      {/* ***************** SECTION ==> 7 **************** */}
     
      <div className="max-w-none mb-10 pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover ">
        <div>
          <h2 className=" lg:text-3xl text-center font-bold text-lg  lg:p-8 p-8 py-5">
          Explore over 600 resources for managing small business finances
          </h2>
        </div>

        <div class=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">


          <div class="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
          

            <div class=" py-4">
             <div class="h-full  overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2v3J5YNdud9NcKqGroidGE/922b6535d87717d0e9579f959b39beb2/BenchBlog_TaxTips_17BigTaxDeductions.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
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
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
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
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
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

          <div class="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
            <div class="h-full   overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/2jaEUtWACoVyDdRGmWCLaN/6c5da6d1d352948f8378f2f9b145c177/BenchBlog_Top12Qs.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
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
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
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
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
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

          <div class="w-3/4 mx-auto md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
            <div class="h-full  overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/7Eu1demGJF7dvPI3H67Fv3/05d650cb773d41c921c1313657aca20a/BenchBlog_TaxTips_10Steps.png?h=255&q=90&w=270"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
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
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
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
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
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


        </div>

       
        <div className="text-center  ">
        <button class="  mx-auto bg-transparent lg:ml-0 hover:bg-blue-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Book A Demo
          </button>
            </div>
       
      </div>

     {/* ***************** SECTION ==> 8 **************** */}
     {/* <Accordion/> */}

      {/* ***************** SECTION ==> 9 **************** */}
      <div
        className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container "
        style={{ background: "#062d60" }}
      >
        <div className="md:py-12 py-8 ">
          <div className="flex flex-col items-center justify-center  mx-auto">
            <h3 className="lg:text-3xl md:text-2xl text-xl px-10 text-white font-bold  text-center lg:max-w-xl">
              {" "}
              Join thousands of small business owners who trust Bench with their
              books
            </h3>
            <p className="text-base leading-normal text-center text-white mt-4 xl:w-1/2 w-10/12">
              {" "}
              See what running a business is like with Bench on your side. Try
              us for free—we’ll do one
              <br />
              prior month of your bookkeeping and prepare a set of financial
              statements for you to keep.
            </p>
            <div className="items-center  lg:justify-start sm:justify-start ">
              <button class=" mt-8 text-blue-800 font-semibold bg-white border-0 py-2 px-8 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-lg">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
