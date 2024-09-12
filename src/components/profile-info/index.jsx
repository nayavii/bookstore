import { useSelector } from "react-redux";
import "./index.scss";
import { getUser } from "../../store/selectors";

export const ProfileInfo = () => {
  const user = useSelector(getUser);
  return (
    <section className="profile-info">
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
