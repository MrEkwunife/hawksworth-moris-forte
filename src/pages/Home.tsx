import About from "../components/About";
import Hero from "../components/Hero";
import ServicesLayout from "../components/ServicesLayout";
import Footer from "../components/FooterLayout";
import ProfileLayout from "../components/ProfileLayout";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <Hero />
      <About />
      <ServicesLayout />
      <ProfileLayout />
      <Footer />
    </div>
  );
}
