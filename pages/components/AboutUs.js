import React from "react";
import Nav3 from "./code-ref/nav3";
// import Navbar from "./code-ref/spl_nav";
// import Navbar from "./navbar";
// import Header from "../components/header";
import Counters from "./code-ref/counters";

export default function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}
      <Nav3 />
      {/* <Header/> */}

      <div className="bg-repeat-x bg-center  bg-white pt-20">
        {/* ***************** SECTION ==> 1 **************** */}
        <div
          className="text-black text-4xl font-bold text-center pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center justify-center h-auto  bg-fixed bg-center bg-cover"
          style={{ background: "#f1e3c7" }}
        >
          <div className=" mt-16 h-80 lg:mt-28 mx-auto">
            <img
              className="py-10 w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6o1A25XqFyywCwQKSsgGYw/13b6b935c32b48eacda0b036389510bd/Bench-Bookkeeping_About-L_copy.png?h=383&q=90&w=270"
              alt="App screenshot"
            />
          </div>

          <div className="lg:mx-auto text-center text-black lg:flex-auto lg:py-32 pt-20 ">
            <h2 className="text-xl font-bold tracking-tight  sm:text-4xl">
              We help entrepreneurs master
              <br />
              their financial lives.
            </h2>
          </div>

          <div className="mt-16 h-80 lg:mt-28 mx-auto">
            <img
              className=" w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/2xxROPFW36wUaSi8Ys6ym6/af4d19ad1363fe7a97231e83bad92118/Bench-Bookkeeping_About-R.png?h=376&q=90&w=270"
              alt="App screenshot"
              width={1920}
              height={1080}
            />
          </div>
        </div>

        {/* ***************** SECTION ==> 2 **************** */}
        <div className=" items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
          <div class="flex COLOR py-20" style={{ background: "#f6f6f6" }}>
            <div className=" mx-auto lg:flex-auto lg:py-20 text-center ">
              <h2 className="text-xl lg:text-3xl p-10  font-bold text_color1">
                Understanding your finances should be three things: simple,
                effortless, and affordable.
              </h2>
              <p className="mt-8  text-lg lg:text-2xl px-14 leading-8 text_color2">
                Bench simplifies small business finances. But our larger purpose
                expands beyond that. We’re here to help entrepreneurs understand
                what they want to do and where they want to go.
              </p>
            </div>
          </div>
        </div>

        {/* ***************** SECTION ==> 3 **************** */}
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center px-5">
              <h1 className="text-xl lg:text-4xl lg:text-left font-bold leading-9 pb-4 text_color1 ">
                {" "}
                What we do
              </h1>

              <p className=" text-base lg:mr-20  lg:text-left text_color3  ">
                {" "}
                We take care of bookkeeping and tax for small business owners.
                And we do it in a way that’s never been done before—by pairing
                intuitive software with real, human bookkeepers. To us, it’s
                more than number crunching. It's giving entrepreneurs more time
                to focus on what they care about.
              </p>
            </div>

            <div className=" lg:w-5/12">
              <img
                className="h-full p-5"
                src="https://images.ctfassets.net/88a6qmzs2wdz/3Uyb7jbHK8oS8EYImEOOuc/5b18cab4fb3bbfb75e002f72ae70c72a/Robson_Office_8447_1600px.jpg?h=380&q=90&w=570"
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

        {/* ***************** SECTION ==> 4 **************** */}

        <div
          className="text-gray-600 body-font"
          style={{ background: "#f6f6f6" }}
        >
          <div class="2xl:container justify-center px-5  mx-auto">
            <div class="flex flex-wrap lg:w-4/5 mx-auto -m-4 text-center">
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class=" px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    1999
                  </h2>
                  <p class="leading-relaxed">Year we launched</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class=" px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    50 +
                  </h2>
                  <p class="leading-relaxed">Employees</p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div class=" px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-gray-900">
                    20 +
                  </h2>
                  <p class="leading-relaxed">Types of Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ***************** SECTION ==> 5 **************** */}
        <div className="flex  lg:flex-row flex-col justify-center gap-8  p-10  ">
          <div className=" lg:w-5/12 ">
            <img
              className="h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6i5t90xcqiIUMW5oX5fqcP/b8452255e4ce062957732537a283fe8b/2023_Homepage_VP_ExpertSupport.png?h=354&q=90&w=570"
              alt="A group of People"
            />
          </div>
          <div className="w-full lg:w-5/12 flex flex-col ">
            <h1 className="text-xl lg:text-4xl font-bold  text-gray-800 ">
              {" "}
              How we got here
            </h1>

            <p className="font-medium text-base lg:mr-20 lg:text-left para_text  ">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="font-medium text-base lg:mr-20  lg:text-left para_text  ">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="font-medium text-base lg:mr-20  lg:text-left para_text  ">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="font-medium text-base lg:mr-20 lg:text-left para_text  ">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="font-medium text-base lg:mr-20 lg:text-left para_text  ">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
          </div>
        </div>

        <div>
          <p className="text-center">
            <div className="pb-20">
              <div className="text-center">
                <p>
                  We acknowledge that Bench headquarters is located on the
                  traditional, ancestral, and unceded territory of the Coast{" "}
                  <br /> Salish Peoples, including the territories of the
                  xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and
                  <br /> Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) Nations.
                </p>
              </div>
            </div>
          </p>
        </div>



     

      {/* ***************** SECTION ==> 6 **************** */}

      <div className="max-w-none pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover "
        style={{ background: "#f6f6f6" }}
      >
        <div>
          <h2 className=" lg:text-3xl text-center font-bold text-lg  lg:p-8 p-8 py-5">
            Want to learn more about Bench?{" "}
          </h2>

          <p className="text-center mx-auto w-1/3">
            From new roles at our HQ to our name in the news, there's always
            something happening around here. See what's new.
          </p>
        </div>

        <div class=" font-medium lg:w-4/5 lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div class=" md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <div class="h-full  overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/37tbb4S14cSKQSgMOAwGye/39cd38419e7438f358c5aa0b32eb1136/Bench-Bookkeeping_Careers.jpg?h=206&q=90&w=330"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="text_color tracking-widest text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    Careers
                  </h2>

                  {/* <div class="flex items-center flex-wrap ">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div class=" md:flex-row md:max-w-xl ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <div class="h-full overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/4CNjETsyhGUI8yyi6wwco4/0c75c524c7a8feca46f0164ed5e9451a/Bench-Bookkeeping_Press.jpg?h=206&q=90&w=330"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="text_color tracking-widest text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    Press
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div class=" md:flex-row md:max-w-xl dark:bg-gray-800 ">
            <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <div class="h-full  overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/ziZhJZ4FfEMyAkymAQCuw/9ba6c015cdc91881c97425e536959ed2/Bench-Bookkeeping_How-it-Works.jpg?h=206&q=90&w=330"
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="text_color tracking-widest text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    How it Works
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      </div>
    </>
  );
}
