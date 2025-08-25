import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/Home'
import { AuthProvider } from './Context/AuthContext'
import './styles/App.css'
import ProtectedRoutes from './components/ProtectedRoutes.JSX'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
