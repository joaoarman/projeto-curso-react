import React from 'react'
import Input from '../Form/Input/Input'
import Button from '../Form/Button/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../../API'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'



const LoginPasswordReset = () => {

  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const key2 = urlParams.get('key')
    const login2 = urlParams.get('login')
  
    if(key2) setKey(key2)
    if(login2) setLogin(login2)
  }, [])


  async function handleSubmit(e) {
      e.preventDefault();

      if(password.validate) {
        const {url, options} = PASSWORD_RESET({
            login,
            key,
            password: password.value
        })

        const {response} = await request(url, options)
        
        if(response.ok) {
            navigate('/login')
        }
      }
  }
  
  
  return (
    <section className="animeLeft">
        <h1 className="title">Resetar Senha</h1>
        <form onSubmit={handleSubmit}>
            <Input 
                label="Nova Senha" 
                type="password" 
                name="password"
                {...password}
              />
              {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
        </form>
        <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
