import "../components/AddEvent/AddEventLayout.css";
import PurchaseLayout from "../components/Purchase/PurchaseLayout";
import Preview from "../components/Purchase/Preview";

export default function FinalPreview({ purchaseData }) {
  return (
    <PurchaseLayout children>
      <Preview purchaseData={purchaseData} />
    </PurchaseLayout>
  );
}
