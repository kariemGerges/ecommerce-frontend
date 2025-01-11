import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// import components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import pages
import HomePage from './pages/HomePage/homePage';
import ContactUs from './pages/ContactUs/ContactUs';
import Test from './pages/TestingPage/Testingpage';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
