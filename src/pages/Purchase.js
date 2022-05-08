import Navigation from "../components/Layout/Navigation";
import PurchaseForm from "../components/Purchase/PurchaseForm";
import FinalPreview from "../components/Purchase/FinalPreview";
import Footer from "../components/Layout/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Purchase() {
  const navigate = useNavigate();

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

  const [fieldErrors, setFieldErrors] = useState({
    tickets: false,
    email: false,
    firstName: false,
    lastName: false,
    cardNumber: false,
    cardCvv: false,
  });

  const validationConditions = {
    tickets: /(^$)|(^\d{1,2}$)/,
    email: /(^$)|(^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$)/,
    firstName: /(^$)|(^[a-zA-Z]+$)/,
    lastName: /(^$)|(^[a-zA-Z]+$)/,
    cardNumber: /(^$)|(^\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b$)/,
    cardCvv: /(^$)|(^\d{3}$)/,
  };

  const handleValidation = (fieldName, fieldValue) => {
    if (fieldName !== "cardMonth") {
      setFieldErrors({
        ...fieldErrors,
        [fieldName]: !validationConditions[fieldName].test(fieldValue),
      });
    }
  };

  const purchaseHandleChange = (event) => {
    const { name, value } = event.target;
    setpurchaseData({ ...purchaseData, [name]: value });
    handleValidation(name, value);
  };

  // PUSHES THE ERROR BOOLEANS IN AN ARRAY
  const pushErrorsInArray = () => {
    let arrayWithValues = [];
    for (const errorValue in fieldErrors) {
      arrayWithValues.push(fieldErrors[errorValue]);
    }
    // IF THE ARRAY CONTAINS A FALSY VALUE, THE OPERATION STOPS AND RETURNS FALSE
    return arrayWithValues.some((element) => element === true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let checkForErrors = pushErrorsInArray();

    if (!checkForErrors) {
      navigate("/final-preview", { purchaseData });
    }
  };

  // const ara = 5;
  // const toFinalPreview = () => {
  //   navigate("/final-preview", {
  //     state: { ara: ara },
  //   });
  // };
  const finalPreviewPassData = false;

  return (
    <div className="form__body">
      <Navigation />
      <PurchaseForm
        purchaseData={purchaseData}
        purchaseHandleChange={purchaseHandleChange}
        handleSubmit={handleSubmit}
        error={fieldErrors}
        pushErrorsInArray={pushErrorsInArray}
      />
      {/* <button
        onClick={() => {
          toFinalPreview();
        }}
      >
        CLICK ME
      </button> */}
      {/* {finalPreviewPassData &&  */}
      {/* <FinalPreview purchaseData={purchaseData} /> */}
      <Footer />
    </div>
  );
}
