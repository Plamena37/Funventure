import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";
import NavigationBar from "./Navigation/NavigationBar";

const NavigationLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
      <MobileFooter />
    </>
  );
};

export default NavigationLayout;
