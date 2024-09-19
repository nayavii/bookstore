import banner from "./images/banner.jpg";
import { FC } from "react";
import { PageBanner } from "../../components/page-banner";
import { UserProfile } from "../../components/profile";

export const UserProfilePage:FC = () => {
  return (
    <>
      <PageBanner img={banner} />
      <UserProfile />
    </>
  );
};
