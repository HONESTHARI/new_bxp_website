import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
// import Header from "../pages/components/header";
// import Screen1 from '../pages/components/code-ref/mobile_screens/screen1'
import Section from "./home";
// import Ph_home from './components/code-ref/ph_home'
// import Ph_home1 from './components/code-ref/ph_home1'
//  import Landing from './components/code-ref/landing-page'
// import Footer from './components/code-ref/footer'

// import Ph_sidenav from "./components/code-ref/mobile_screens/ph_sidenav";
// import Footer1 from "./components/code-ref/footer1";
//  import AboutUs from './components/AboutUs'
//  import Careers from './components/Careers'
// import Home_demo from './components/code-ref/home-demo'
// import Tables from './components/code-ref/table'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bxp_Website</title>
        <meta name="description" content="Your Accounting Partner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>

      </Head>

      {/* <Header /> */}
      {/* <div className="container-xl mx-auto sm:px-6 lg:px-8"> */}
     
     {/* <Screen1/> */}
      <Section />
      {/* <Ph_sidenav/> */}
      {/* </div> */}
      {/* <Ph_home/>
      <Ph_home1/> */}

      {/* <Landing/> */}
      {/* <Footer/> */}

      {/* <Footer1 />    call back to app.js  */}
      
      {/* <AboutUs/>
      <Careers/> */}

      {/* <Home_demo/> */}
      {/* <Tables/> */}

      {/* <main className={styles.main}>
        <div className={styles.description}>
        </div>
      </main> */}
    </>
  );
}
