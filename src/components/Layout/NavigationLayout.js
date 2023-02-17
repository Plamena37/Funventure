import Footer from "./Footer/Footer";
import NavigationBar from "./Navigation/NavigationBar";

const NavigationLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default NavigationLayout;
