
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import UserContextProvider from './Context/UserContectProvider'

function App() {
  
  return (
   <UserContextProvider>
   <h1>React With Hammad Bawany</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>



  )
}

export default App
