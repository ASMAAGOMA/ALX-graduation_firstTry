import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/Public'
import Login from './features/auth/Login'
import NotFound from './components/NotFound'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
