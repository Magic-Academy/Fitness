import "./App.css";
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/join";
import Plan from "./components/Plans/plan";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/reasons";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
