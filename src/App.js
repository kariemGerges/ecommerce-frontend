import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

// import components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import CartDrawer from './components/CartDrawer/CartDrawer';
import AuthModal from './components/AuthModal/AuthModal';

// import pages
import HomePage from './pages/HomePage/homePage';
import ContactUs from './pages/ContactUs/ContactUs';
import Test from './pages/TestingPage/Testingpage';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import ErrLandingPage from './pages/ErrLandingPage/ErrLandingPage';
import Cart from './pages/Cart/Cart';

function App() {
    return (
        <div>
            <Router>
                <Link
                    to="/cart"
                    className="fixed bottom-8 right-8 z-50 bg-[#2D7A46] dark:bg-[#1B4332] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                    <ShoppingCart size={24} />
                </Link>
                <Header />
                <CartDrawer />
                <AuthModal />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* catch all other route */}
                    <Route path="/404" element={<ErrLandingPage />} />
                    <Route path="*" element={<ErrLandingPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
