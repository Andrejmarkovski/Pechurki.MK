import Background from "@/components/Background/Background";
import Crausel from "@/components/Crausel/Crausel";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Pointer from "@/components/Pointer/Pointer";
import TellingAboutMush from "@/components/TellingAbouMuah/TellingAboutMush";
import WelcomePage from "@/components/WelcomePage/WelcomePage";

export default function Home() {
  return (
    <>
      <Pointer />
      <div className="position-absolute w-100 zIndex3 backgroundNavBar">
        <Navbar />
      </div>
      <Main />
      <WelcomePage />
      <Background />
      <TellingAboutMush />
      <Crausel />
      <Footer />
    </>
  );
}
