import Navigation from "../components/Layout/Navigation";
import ProfileLayout from "../components/Profile/ProfileLayout";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileDesc from "../components/Profile/ProfileDesc";
import Footer from "../components/Layout/Footer";

export default function Profile() {
  return (
    <>
      <Navigation />
      <ProfileLayout>
        <ProfileHeader />
        <ProfileDesc />
      </ProfileLayout>
      <Footer />
    </>
  );
}
