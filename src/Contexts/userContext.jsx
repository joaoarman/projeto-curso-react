import React from 'react'
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../../API';
import { useNavigate } from 'react-router-dom'


export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {

  const [data, setData] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    
    async function initialize() {
      await autoLogin();
    }
    
    initialize();
  }, [])

  async function autoLogin() {
    const token = window.localStorage.getItem("token");
    if(token) {
      try {
        setError(null)
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if(!response.ok) {
          throw new Error("Token Inválido!");
        }
        await getUserData(token)
      } catch(err) {
        userLogout();
      } finally {
        setLoading(false);
      }
    } else {
      setIsLogged(false)
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setIsLogged(false);
    window.localStorage.removeItem("token");
    navigate('/login')
  }

  async function getUserData(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);  
    setIsLogged(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true)
      const { url, options } = TOKEN_POST({username, password});
      const response = await fetch(url, options);
      if(!response.ok) {
        throw new Error("Dados Inválidos")
      }
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUserData(token);
      navigate('/conta');
    } catch(err) {
      setError(err.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }

  }

  return (
    <UserContext.Provider value={{data, userLogin, isLogged, userLogout, error, loading, isLogged}}>
        { children }
    </UserContext.Provider>
  )
}