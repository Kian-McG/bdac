import AboutUs from "../components/aboutus";
import Activities from "../components/activities";
import Footer from "../components/footer";
import Hero from "../components/hero";
import News from "../components/news";


const Home = () => {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Activities />
      <News />
      <Footer />
    </main>
  );
};

export default Home;
