import banner from "./images/banner.jpg";
import { PageBanner } from "../../components/page-banner";
import { UserProfile } from "../../components/profile";

export const UserProfilePage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <UserProfile />
    </>
  );
};
