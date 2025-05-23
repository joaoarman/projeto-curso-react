import React from 'react'
import Input from '../Form/Input/Input'
import Button from '../Form/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import { USER_POST } from '../../../API'
import { UserContext } from '../../Contexts/userContext'

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request} =  useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })

    const { response } = await request(url, options);

    if(response.ok) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <div className='animeLeft'>
        <h1 className='title'>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username}/>
          <Input label="Email" type="email" name="email" {...email}/>
          <Input label="Senha" type="password" name="password" {...password}/>
          {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
          <Error error={error}/>
        </form>
    </div>
  )
}

export default LoginCreate
