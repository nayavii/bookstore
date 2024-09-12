import banner from "./images/banner.jpg";
import { PageBanner } from "../../components/page-banner";
import { ProfileInfo } from "../../components/profile-info";

export const ProfileInfoPage = () => {
  return (
    <>
      <PageBanner img={banner} />
      <ProfileInfo />
    </>
  );
};
