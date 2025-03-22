import styles from "./Login.module.css";
function Login({ children, onSubmit }) {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Login;
