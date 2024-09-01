import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLAyout'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'
import ProductsList from './features/products/ProductsList'
import NotFound from './components/NotFound'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path='login' element={<Login />} />
                <Route path='dash' element={<DashLayout />}>
                    <Route index element={<Welcome />} />
                    <Route path="products">
                        <Route index element={<ProductsList />} />
                    </Route>
                    <Route path="users">
                        <Route index element={<UsersList />} />
                    </Route>
                </Route>
                {/* Catch-all route */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
