import "./index.scss";
import { useSelector } from "react-redux";
import { getBlackTheme, getUser } from "../../store/selectors";
import { FC } from "react";

export const ProfileInfo:FC = () => {
  const user = useSelector(getUser);
  const isBlackTheme = useSelector(getBlackTheme);

  return (
    <section
      className={`profile-info ${isBlackTheme ? "profile-info_black" : ""}`}
    >
      <div className="container">
        <div className="profile-info__wrapper">
          <h2 className="profile-info__title title">My profile</h2>
          <label className="profile-info__label">
            Id
            <input
              type="text"
              name="username"
              value={user?.id}
              className="profile-info__input input"
            />
          </label>
          <label className="profile-info__label">
            UserName
            <input
              type="text"
              name="username"
              value={user?.username}
              className="profile-info__input input"
            />
          </label>
          <label className="profile-info__label">
            Email
            <input
              type="text"
              name="username"
              value={user?.email}
              className="profile-info__input input"
            />
          </label>
        </div>
      </div>
    </section>
  );
};
