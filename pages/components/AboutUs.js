import React from "react";
import Navbar from "./navbar";
// import Header from "../components/header";
import Counters from "./code-ref/counters";
import Footer from "./code-ref/footer";


export default function AboutUs() {
  return (
    <>
      <Navbar />
      {/* <Header/> */}
    

      {/* ***************** SECTION==>1 **************** */}

      <div className="bg-repeat-x bg-center  bg-white pt-20">
        {/* custom_img */}
        <div
          className="text-black text-4xl font-bold text-center pt-10 "
          style={{ background: "#f0e1c4" }}
        >
          <h1 className="pt-20  tracking-tight aboutush1">
            We help entrepreneurs master
          </h1>
          <h1 className="pt-5 pb-20 tracking-tight aboutush1">
            their financial lives.
          </h1>
        </div>

        {/* ***************** SECTION ==>2 **************** */}
        <div className=" items-center justify-center h-auto  bg-fixed bg-center bg-cover ">
          <div class="flex COLOR pt-5" style={{ background: "#f6f6f6" }}>
            <div className=" mx-auto lg:flex-auto lg:py-20 text-center ">
              <h2 className="text-3xl  font-bold ">
                Understanding your finances should be three
                <br />
                things: simple, effortless, and affordable.
              </h2>
              <p className="mt-8 text-2xl leading-8 ">
                Bench simplifies small business finances. But our larger <br />{" "}
                purpose expands beyond that. We’re here to help <br />{" "}
                entrepreneurs understand what they want to do and where <br />{" "}
                they want to go.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* ***************** SECTION ==> 3 **************** */}

        <div class="flex text-center text-white  pt-10">
          <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
            <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
              What we do
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              We take care of bookkeeping and tax for small business owners. And
              we do it in a way that’s never been done before—by pairing
              intuitive software with real, human bookkeepers. To us, it’s more
              than number crunching. It's giving entrepreneurs more time to
              focus on what they care about.
            </p>
          </div>

          <div className="mt-16 h-80 lg:mt-28">
            <img
              className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/3Uyb7jbHK8oS8EYImEOOuc/5b18cab4fb3bbfb75e002f72ae70c72a/Robson_Office_8447_1600px.jpg?h=380&q=90&w=570"
              alt="App screenshot"
              width={1920}
              height={1080}
            />
          </div>
        </div>


<Counters/>
        {/* ***************** SECTION ==> 4 **************** */}

        <div class="flex text-center text-white  pt-10">
          <div className=" ml-auto mt-16 h-80 lg:mt-28">
            <img
              className=" w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://images.ctfassets.net/88a6qmzs2wdz/1N6ndt2xLasq20cS8CWkSI/9ca649b656f8c2a0cf7c7372a6aeab4c/four-inside-one.jpg?h=282&q=90&w=470"
              alt="App screenshot"
              width={1920}
              height={1080}
            />
          </div>

          <div className="mr-auto max-w-md text-left  lg:mx-40 lg:flex-auto lg:py-32 ">
            <h2 className="text-5xl font-bold tracking-tight  text-black sm:text-4xl">
              How we got here
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
            2012: Accepted by TechStars NYC’s accelerator program as 10sheet Inc.
            </p>
            
            <p className="mt-6 text-lg leading-8 text-black">
            2013: Raised $2M in seed capital and launched to the public


            </p>
            <p className="mt-6 text-lg leading-8 text-black">
            2015: Raised $7M in Series A funding
            </p>

          </div>
<br/>
          
        </div>
<div className="pb-20"><div className="text-center">

<p>We acknowledge that Bench headquarters is located on the traditional, ancestral, and unceded territory of the Coast <br/> Salish Peoples, including the territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and<br/> Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) Nations.
</p>
</div></div>



      
      </div>
      <Footer/>
    </>
  );
}
