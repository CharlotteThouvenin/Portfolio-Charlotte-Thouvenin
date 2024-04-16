import './App.css';
import LanguageContextProvider from './contextLang';
import { About } from './Sections/About/about';
import Welcome from './Sections/Loader'
import { Portfolio } from './Sections/Portfolio';
import { Skills } from './Sections/Skills';
import ContactForm from './Sections/Contact';
import Header from './Sections/Header';
import { Footer } from './Sections/Footer';

import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <LanguageContextProvider>

      <ParallaxProvider>

        <div className="App">
          <Welcome />
          <Header />

          <div className='bg-dark'>

            <div className='container py-4'>
              <Portfolio />
              <Skills />
              <About />
              <ContactForm />
            </div>
          </div>
          <Footer />


        </div>
      </ParallaxProvider>
    </LanguageContextProvider>

  );
}

export default App;
