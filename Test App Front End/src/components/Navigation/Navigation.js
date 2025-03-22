import styles from "./Nagvigation.module.css";
import { Button } from "@chakra-ui/react";
import { Avatar, For, HStack } from "@chakra-ui/react";

function Navigation({ isLoggedIn, isStudent, setIsStudent }) {
  //Event Handler
  function handleSelectUser(e) {
    if (e.target.className.includes("student")) {
      setIsStudent(true);
    }
    if (e.target.className.includes("professor")) {
      setIsStudent(false);
    }
  }

  return (
    <nav
      className={`${styles.navigation} ${
        !isLoggedIn ? styles.navigation_logged_out : ""
      }`}
    >
      {!isLoggedIn && (
        <ul>
          <li
            onClick={handleSelectUser}
            className={`${isStudent ? `${styles.active_nav_link}` : ""} ${
              styles.nav_links
            } student`}
          >
            Student
          </li>
          <li
            onClick={handleSelectUser}
            className={`${!isStudent ? `${styles.active_nav_link}` : ""} ${
              styles.nav_links
            } professor`}
          >
            Researcher
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
