import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css";
import Head from "../Helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  // username: dog
  // password: dog
  // token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2NzgxOTc1MjYsIm5iZiI6MTY3ODE5NzUyNiwiZXhwIjoxNjc4MjgzOTI2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxNSJ9fX0.nK3-BRN67XuuPqjsQcnb43TiH9MbQk_mTszkuokFpAc

  return (
    <section className="animateLeft">
      <Head title="Login" description="Página de Login do site Dogs." />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu sua senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se agora!</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
