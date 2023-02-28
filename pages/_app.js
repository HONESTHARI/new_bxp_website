import '@/styles/globals.css'
import Nav3 from './components/code-ref/nav3'
import Footer1 from './components/code-ref/footer1'


export default function App({ Component, pageProps }) {
  return (
  <>


<Nav3/>


  <Component {...pageProps} />
  <Footer1/>
  </>
  )
}
