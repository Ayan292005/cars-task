import './App.css'
import Routes from './routes/Routes'
const routes=createBrowserRouter(Routes)
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
<RouterProvider router={routes}/>
    </>
  )
}

export default App
