import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import Specials from '../components/Specials/Specials';
import Reviews from '../components/Reviews/Reviews';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Specials />
        <Reviews />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
