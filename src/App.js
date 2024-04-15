import './App.css';
import { SideNav } from './Components/SideNav';
import { UpButton } from './Components/Return';
import LanguageContextProvider from './contextLang';
import { About } from './Sections/About/about';
import Welcome from './Sections/Loader'
import { Portfolio } from './Sections/Portfolio';
import { Skills } from './Sections/Skills';
import ContactForm from './Sections/Contact';
import Header from './Sections/Header';
import { Footer } from './Sections/Footer';


function App() {
  return (
    <LanguageContextProvider>


      <div className="App">
        <Welcome />
        <div className='bg-dark'>
          <Header />

          <div className='container py-4'>
            <Portfolio />
            <Skills />
            <About />
            <ContactForm />
          </div>
        </div>
        <Footer />


      </div>

    </LanguageContextProvider>

  );
}

export default App;
