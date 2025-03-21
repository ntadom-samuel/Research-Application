function Login({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Login;
