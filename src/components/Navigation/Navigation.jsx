import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/tasks" className={styles.link}>
          Tasks
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
