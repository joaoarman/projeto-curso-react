import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import Input from '../../Form/Input/Input';
import Error2 from '../../Helper/Error';
import Button from '../../Form/Button/Button';
import stylesBtn from '../../Form/Button/Button.module.css';
import useForm from '../../../Hooks/useForm';
import styles from './LoginForm.module.css';
import { UserContext } from '../../../Contexts/userContext'


const LoginForm = () => {

  const { userLogin, loading, error } = React.useContext(UserContext)

  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  
  return (
    <div className='animeLeft'>

      <h1 className='title'>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>

          <Input
              label="Nome de Usuário" 
              name="username"
              type="text"
              {...username}
          />

          <Input
              label="Senha" 
              name="password"
              type="password" 
              {...password}
          />  
          
          {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
          
          <Error2 error={error}/>

      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
      </div>

    </div>
  )
}

export default LoginForm
