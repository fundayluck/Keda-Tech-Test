import { useRef } from "react"
import MainBar from "./components/bar/MainBar";
import NavBar from "./components/bar/NavBar";


function App() {
  const home = useRef(null)
  const about = useRef(null)
  const pricing = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <NavBar
        scrollToHome={() => scrollToSection(home)}
        scrollToAbout={() => scrollToSection(about)}
        scrollToPricing={() => scrollToSection(pricing)}
        scrollToContact={() => scrollToSection(contact)}
      />
      <MainBar
        homeRef={home}
        aboutRef={about}
        pricingRef={pricing}
        contactRef={contact}
      />
    </>
  );
}

export default App;
