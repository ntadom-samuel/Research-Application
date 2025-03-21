import styles from "./Nagvigation.module.css";

function Navigation({ isLoggedIn, isStudent, setIsStudent }) {
  function handleSelectUser(e) {
    if (e.target.textContent === "student") {
      setIsStudent(true);
    }
    if (e.target.textContent === "professor") {
      setIsStudent(false);
    }
  }
  return (
    <nav
      className={`${styles.navigation} ${
        isLoggedIn ? styles.navigation_logged_in : styles.navigation_logged_out
      }`}
    >
      {!isLoggedIn && (
        <ul>
          <li
            onClick={handleSelectUser}
            className={`${isStudent ? `${styles.active_nav_link}` : ""} ${
              styles.nav_links
            }`}
          >
            student
          </li>
          <li
            onClick={handleSelectUser}
            className={`${!isStudent ? `${styles.active_nav_link}` : ""} ${
              styles.nav_links
            }`}
          >
            professor
          </li>
        </ul>
      )}
      {isLoggedIn && (
        <ul>
          <li className={styles.profile_button}>Me</li>
          <li className={styles.nav_links}>Main List</li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
