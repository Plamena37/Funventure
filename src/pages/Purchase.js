import Navigation from "../components/Layout/Navigation";
import PurchaseForm from "../components/Purchase/PurchaseForm";
import Footer from "../components/Layout/Footer";
import FinalPreview from "./FinalPreview";
import { useState, useEffect } from "react";

export default function Purchase() {
  const [purchaseData, setpurchaseData] = useState({
    tickets: 0,
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    cardMonth: "",
    cardCvv: "",
    price: "20",
  });

  // FIXME
  const [globalErrorState, setGlobalErrorState] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  function purchaseHandleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setpurchaseData({ ...purchaseData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit((prevSubmit) => !prevSubmit);

    alert(`(${isSubmit}) this is the submit state`);
  }

  return (
    <>
      <div className="form__body">
        <Navigation />
        {/* {formTrue ? (
          <FinalPreview purchaseData={purchaseData} />
        ) : ( */}
        <PurchaseForm
          purchaseData={purchaseData}
          purchaseHandleChange={purchaseHandleChange}
          handleSubmit={handleSubmit}
        />

        <Footer />
      </div>
    </>
  );
}
