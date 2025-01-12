import AboutUs from "@/components/AboutUs";
import Activities from "@/components/Activities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";

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
