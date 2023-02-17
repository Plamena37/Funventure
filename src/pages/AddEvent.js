import AddEventForm from "../components/AddEvent/AddEventForm";
import NavigationLayout from "../components/Layout/NavigationLayout";

export default function Events() {
  return (
    <div className="form__body">
      <NavigationLayout>
        <AddEventForm />
      </NavigationLayout>
    </div>
  );
}
