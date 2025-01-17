import React from 'react'
import useFetch from '../../../Hooks/useFetch'
import { GET_STATS } from '../../../../API'
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));


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
      <React.Suspense fallback={<div></div>}>
          <Head title="Estatísticas"/>
          <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  } else {
    return null
  }
    
}

export default UserStats
