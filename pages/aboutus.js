import React from "react";
import Stats from "./components/stats"

export default function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header/> */}

      <div className="bg-repeat-x bg-center  bg-white pt-20">
        {/* ***************** SECTION ==> 1 **************** */}
        <div
          className="text-black text-2xl font-medium text-center pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 items-center justify-center h-auto  bg-fixed bg-center bg-cover"
          style={{ background: "#efe0c3" }}
        >
          <div className=" mt-16 h-80 lg:mt-28 md:hidden  lg:inline-block mx-auto">
            <img
              className="py-10 w-[10rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/6o1A25XqFyywCwQKSsgGYw/13b6b935c32b48eacda0b036389510bd/Bench-Bookkeeping_About-L_copy.png?h=383&q=90&w=270"
              alt="App screenshot"
            />
          </div>

          <div className=" lg:mx-auto  text-center text-black lg:flex-auto lg:py-32   pt-20 ">
            <h1 className="PatuaOne tracking-wider w-full text-2xl font-medium  md:text-2xl lg:text-3xl ">
              We help entrepreneurs master
              <br className="hidden lg:block md:hidden" />
              their financial lives.
            </h1>
          </div>
          <div className="w-full lg:hidden lg:w-7/12 ">
            <img
              className="w-full h-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/5ABL535tpCkwako2cuOSyO/70646f1e217199c9f88c20e71be459da/Yellow-Hero-Mobile.jpg?h=453&q=90&w=740"
              alt="A group of People"
            />
          </div>

          <div className="mt-16 h-80 lg:mt-28 md:hidden  lg:inline-block  mx-auto">
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
          <div class="flex py-20" style={{ background: "#f6f6f6" }}>
            <div className="w-full lg:w-1/2 text-center mx-auto">
            {/* mx-auto lg:flex-auto w-1/2 lg:py-20 text-center */}
              <h1 className="PatuaOne tracking-wider text-xl lg:text-3xl p-8  font-medium text_color1">
                Understanding your finances should be three things : simple,
                effortless, and affordable.
              </h1>
              <p className="catamaran mt-8 font-normal text-lg lg:text-xl px-14 leading-8 text_color2">
                Bench simplifies small business finances. But our larger purpose
                expands beyond that. We’re here to help entrepreneurs understand
                what they want to do and where they want to go.
              </p>
            </div>
          </div>
        </div>

      {/* ***************** What We Do ==> 3 **************** */}
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="heading w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium py-5 leading-9 text-gray-800 ">
            {" "}
            What we do
          </h1>  
            <p className="catamaran font-normal text-base lg:mr-20 text-center lg:text-left md:text-left  ">
              {" "}
              We take care of bookkeeping and tax for small business owners.
                And we do it in a way that’s never been done before—by pairing
                intuitive software with real, human bookkeepers. To us, it’s
                more than number crunching. It's giving entrepreneurs more time
                to focus on what they care about.
            </p>
           
          </div>

          <div className="lg:w-5/12">
            <img
              className="h-full md:mx-auto md:inline md:w-full"
              src="https://images.ctfassets.net/88a6qmzs2wdz/3Uyb7jbHK8oS8EYImEOOuc/5b18cab4fb3bbfb75e002f72ae70c72a/Robson_Office_8447_1600px.jpg?h=380&q=90&w=570"  />
          </div>
        </div>
      </div>

       
        {/* ***************** statistics **************** */}
  <Stats/>
  {/* ***************** How We Got Here ==> 5 **************** */}
  <div className="flex  lg:flex-row flex-col justify-center md:py-12 md:px-6 gap-14 py-10  ">
        <div className=" lg:w-5/12  ">
          <img
            className="h-full md:mx-auto"
            src="https://images.ctfassets.net/88a6qmzs2wdz/1N6ndt2xLasq20cS8CWkSI/9ca649b656f8c2a0cf7c7372a6aeab4c/four-inside-one.jpg?h=888&q=70&w=1480"
            alt="A group of People"
          />
        </div>
        <div className="w-full lg:w-5/12 flex flex-col md:leading-5 justify-center">
          {/* <h1 className=" PatuaOne tracking-wider text-xl lg:text-4xl lg:text-left md:text-left text-center font-medium  text-gray-800 ">
            {" "}
            How we got here
          </h1> */}
          <h1 className=" PatuaOne tracking-wider text-xl lg:text-2xl lg:text-left text-center font-medium py-5 leading-9 text-gray-800 ">
            {" "}
            How we got here
          </h1>     

          <p className="catamaran font-normal text-base  lg:mr-20 lg:text-left">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="catamaran font-normal text-base lg:mr-20  lg:text-left">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="catamaran font-normal text-base lg:mr-20  lg:text-left">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="catamaran font-normal text-base lg:mr-20 lg:text-left">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
            <p className="catamaran font-normal text-base lg:mr-20 lg:text-left">
              {" "}
              2012: Accepted by TechStars NYC’s accelerator program as 10sheet
              Inc.
            </p>
        </div>
      </div>

        <div>
          <div className="text-center">
            <div className="pb-20">
              <div className="text-center">
                <p className="catamaran font-normal">
                  We acknowledge that Bench headquarters is located on the
                  traditional, ancestral, and unceded territory of the Coast{" "}
                  <br /> Salish Peoples, including the territories of the
                  xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and
                  <br /> Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) Nations.
                </p>
              </div>
            </div>
          </div>
        </div>



     

      {/* ***************** SECTION ==> 6 **************** */}

      <div className="max-w-none pt-10 items-center justify-center h-auto bg-white bg-fixed bg-center bg-cover "
        style={{ background: "#f6f6f6" }}
      >
        <div>
          <h1 className="PatuaOne tracking-wider  lg:text-3xl md:text-xl text-center font-medium text-lg  lg:p-8 p-8 py-5">
            Want to learn more about Bench?{" "}
          </h1>

          <p className="catamaran text-center font-normal mx-auto w-1/3 md:w-full md:px-16">
            From new roles at our HQ to our name in the news, there's always
            something happening around here. See what's new.
          </p>
        </div>

        <div class=" font-medium lg:w-4/5 md:w-2/5 md:mx-auto lg:mx-auto lg:p-10 p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          <div class="dark:border-gray-700 dark:bg-gray-800 ">
            <div className="w-x h-x  lg:w-x2 lg:h-y2"></div>
            {/* <img class="w-full" src="" alt="Mountain"/> */}

            <div class=" py-4">
              <div class="h-full md:h-auto  overflow-hidden">
                <img
                  class="lg:h-48 h-auto w-full object-cover object-center"
                  src="https://images.ctfassets.net/88a6qmzs2wdz/37tbb4S14cSKQSgMOAwGye/39cd38419e7438f358c5aa0b32eb1136/Bench-Bookkeeping_Careers.jpg?h=206&q=90&w=330"
                  alt="blog"
                />
                <div class="p-6">
                  <h1 class="PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    Careers
                  </h1>

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
                  <h1 class=" PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    Press
                  </h1>
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
                  <h1 class=" PatuaOne tracking-wider text_color text-center mx-auto text-md title-font font-medium text-gray-400 mb-1">
                    How it Works
                  </h1>
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
