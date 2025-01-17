import React from 'react'
import useFetch from '../../../Hooks/useFetch'
import { GET_STATS } from '../../../../API'
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';


const UserStats = () => {

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {

      async function getData() {
          const { url, options } = GET_STATS();

          await request(url, options)
      }

      getData();
      
  
  }, [])

  console.log(data)
  
  if(loading) return <Loading />
  if(error) return <Error />
  if(data) {
    return (
      <div>
          <UserStatsGraphs data={data} />
      </div>
    )
  } else {
    return null
  }
    
}

export default UserStats
