import banner from "./images/banner.jpg";
import { FC } from "react";
import { PageBanner } from "../../components/page-banner";
import { ProfileInfo } from "../../components/profile-info";

export const ProfileInfoPage:FC = () => {
  return (
    <>
      <PageBanner img={banner} />
      <ProfileInfo />
    </>
  );
};
