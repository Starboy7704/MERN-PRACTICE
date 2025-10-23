import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import TrustedBrands from "./TrustedBrands";

function App(){
  const trustedBrands = [
    {
      id : 1,
      logo : "st."
    },
    {
      id : 2,
      logo : "Google"
    },
    {
      id : 3,
      logo : "Netflix"
    }
  ]
  return(
    <>
      {/* <h1>hello</h1> */}
      <Header/>
      <Hero/>
      <TrustedBrands trustedBrands = {trustedBrands}/>
      <Services/>
      <Footer/>
      
    </>
  )
}
export default App;