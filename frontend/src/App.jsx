import { useEffect, useState } from 'react'
import {initKeycloak} from './service/KeycloakService.js'
import Loading from './components/Loading.jsx';

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initKeycloak(() => {
      setAuthenticated(true);
      setLoading(false);
    });
  },[]);

  if(loading) {
    return <Loading />
  }

  return (
    <>
      {authenticated ? 
        <div>
          Hello Welcome
        </div>
      : <div>
          Not Authenticated
        </div>}
    </>
  )
}

export default App
