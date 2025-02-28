import BelowMainPageBanner from "@/components/BelowMainPageBanner";
import HeroSection from "@/components/HeroSection";
import MainPageBanner from "@/components/MainPageBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainPageBanner />
      <BelowMainPageBanner />
      <Footer></Footer>
    </>
  );
}
