import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// import { CartProvider } from './context/CartContext';
// import Header from './Component/Header';
import ProductPage from './Product/WatchProduct';
import Main from './Component/Main';
import AudioProduct from './Product/AudioProduct';
import WatchAllProduct from './AllProduct/WatchAllProduct';
import AudioAllProduct from './AllProduct/AudioAllProduct';
import Luxe from './Categories/Luxe';
import Bluetoothcalling from './Categories/Bluetooth';
import Amoled from './Categories/Amoled';
import Outdoor from './Categories/Outdoor';
import Ninja from './Categories/Ninja';
import Audio from './Categories/Audio';
import LuxeProduct from './Categories/CategoriesProduct/LuxeProduct';
import BluetoothProduct from './Categories/CategoriesProduct/BluetoothProduct';
import AmoledDisplay from './Categories/CategoriesProduct/AmoledProduct';
import NinjaProduct from './Categories/CategoriesProduct/NinjaProduct';
import OutdoorProduct from './Categories/CategoriesProduct/OutdoorProduct';
import ProductNavbar from './HeaderProduct/ProductNavbar';
import HeaderLuxe from './HeaderProduct/ProductImgMenu/HeaderLuxe';
import HeaderOutdoor from './HeaderProduct/ProductImgMenu/HeaderOutdoor';
import HeaderAmoled from './HeaderProduct/ProductImgMenu/HeaderAmoled';
import HeaderCalling from './HeaderProduct/ProductImgMenu/HeaderCalling';
import HeaderNinja from './HeaderProduct/ProductImgMenu/HeaderNinja';
import HeaderEssential from './HeaderProduct/ProductImgMenu/HeaderEssential';
import HeaderAudio from './HeaderProduct/ProductImgMenu/HeaderAudio';
import HeaderWomen from './HeaderProduct/ProductImgMenu/HeaderWomen';
import EssentialProduct from './Categories/CategoriesProduct/EssentialProduct';
import Essential from './Categories/Essential';
import WomenProduct from './Categories/CategoriesProduct/WomenProduct';
import Women from './Categories/Women';
import AddtoCart from './AddToCart/AddtoCart';
import Categories from './Component/Categories';
import WatchCart from './Component/WatchCart';
import AudioCart from './Component/AudioCart';
import Grenade from './Component/CartMenu/Grenade';
import Sphere from './Component/CartMenu/Sphere';
import Supernova from './Component/CartMenu/Supernova';
import Avalanche from './Component/CartMenu/Avalanche';
import Quantum from './Component/CartMenu/Quantum';
import Blizzard from './Component/CartMenu/Blizzard';
import Cyclone from './Component/CartMenu/Cyclone';
import VisionaryUltra from './Component/CartMenu/VisionaryUltra';
import { CartProvider } from './AddToCart/CartContext';
import Login from './LoginPage/Login';
import FireHeader from './Component/FireHeader';
import SearchResults from './Search/Search';
import FirstBlog from './Component/Blog/FirstBlog';
import SecondBlog from './Component/Blog/SecondBlog';
import ThirdBlog from './Component/Blog/ThirdBlog';
import FourthBlog from './Component/Blog/FourthBlog';
import Filter from './FilterProduct/FilterProduct';
import NewAllProduct from './AllProduct/NewAllProduct'
import NewProductPage from './Product/NewProduct';
import SelectPaymentMethod from './buynow/Selectpayment';
import GPayPaymentPage from './buynow/Gpay';
import Phonepay from './buynow/Phonepay';
import CartPaymentPage from './buynow/CartPaymentPage';
import Paytmpage from './buynow/Paytmpage';
import Payment2 from './buynow/payment2';
import Success from './buynow/Success';

function App() {
    return (
        <CartProvider>
            <div className="App">

                <FireHeader />
                {/* <Header /> */}

                <Routes>
                    <Route path='/Categories' element={<Categories />} />
                    <Route path='/BestWatch' element={<WatchCart />} />
                    <Route path='/BestAudio' element={<AudioCart />} />
                    <Route path='/Login_button' element={<Login />} />
                </Routes>

                <Routes>
                    <Route path='/Grenade' element={<Grenade />} />
                    <Route path='/Sphere' element={<Sphere />} />
                    <Route path='/Supernova' element={<Supernova />} />
                    <Route path='/Avalanche' element={<Avalanche />} />
                    <Route path='/Quantum' element={<Quantum />} />
                    <Route path='/Blizzard' element={<Blizzard />} />
                    <Route path='/Cyclone' element={<Cyclone />} />
                    <Route path='/VisionaryUltra' element={<VisionaryUltra />} />
                </Routes>

                <Routes>
                    <Route path='/Product' element={<ProductNavbar />}>
                        <Route path='' element={<Navigate to="HeadLuxe" replace={true} />} />
                        <Route path='HeadLuxe' element={<HeaderLuxe />} />
                        <Route path='HeadOutdoor' element={<HeaderOutdoor />} />
                        <Route path='HeadAmoled' element={<HeaderAmoled />} />
                        <Route path='HeadCalling' element={<HeaderCalling />} />
                        <Route path='HeadNinja' element={<HeaderNinja />} />
                        <Route path='HeadEssential' element={<HeaderEssential />} />
                        <Route path='HeadAudio' element={<HeaderAudio />} />
                        <Route path='HeadWomen' element={<HeaderWomen />} />
                    </Route>
                </Routes>

                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/WatchProduct/:id' element={<ProductPage />} />
                    <Route path='/WatchProduct' element={<WatchAllProduct />} />
                    <Route path='/AudioProduct' element={<AudioAllProduct />} />
                    <Route path='/NewAllProduct' element={<NewAllProduct />} />
                </Routes>

                <Routes>
                    <Route path='/Luxe' element={<Luxe />} />
                    <Route path='/bluetooth' element={<Bluetoothcalling />} />
                    <Route path='/Amoled' element={<Amoled />} />
                    <Route path='/Outdoor' element={<Outdoor />} />
                    <Route path='/Ninja' element={<Ninja />} />
                    <Route path='/Audio' element={<Audio />} />
                    <Route path='/Essential' element={<Essential />} />
                    <Route path='/Women' element={<Women />} />
                    <Route path='/AudioProduct/:id' element={<AudioProduct />} />
                    <Route path='/LuxeProduct/:id' element={<LuxeProduct />} />
                    <Route path='/BluetoothProduct/:id' element={<BluetoothProduct />} />
                    <Route path='/AmoledDisplay/:id' element={<AmoledDisplay />} />
                    <Route path='/OutdoorProduct/:id' element={<OutdoorProduct />} />
                    <Route path='/NinjaProduct/:id' element={<NinjaProduct />} />
                    <Route path='/EssentialProduct/:id' element={<EssentialProduct />} />
                    <Route path='/WomenProduct/:id' element={<WomenProduct />} />
                    <Route path='/NwLaunch/:id' element={<NewProductPage />} />
                </Routes>

                <Routes>
                    <Route path='/AddToCart' element={<AddtoCart />} />
                    <Route path='/Search' element={<SearchResults />} />
                </Routes>

                <Routes>
                    <Route path='FirstBlog' element={<FirstBlog />} />
                    <Route path='SecondBlog' element={<SecondBlog />} />
                    <Route path='ThirdBlog' element={<ThirdBlog />} />
                    <Route path='FourthBlog' element={<FourthBlog />} />
                </Routes>


                {/* filter */}

                <Routes>
                    <Route path='Filter_Icon' element={<Filter />} />
                </Routes>

                {/* payment */}

                <Routes>
                    <Route path='/BuyNow' element={<Payment2 />} />
                    <Route path='SelectPayment' element={<SelectPaymentMethod />} />
                    <Route path='Gpay' element={<GPayPaymentPage />} />
                    <Route path='Phonepay' element={<Phonepay />} />
                    <Route path='Cartpay' element={<CartPaymentPage />} />
                    <Route path='Paytm' element={<Paytmpage />} />
                    <Route path='payment-success' element={<Success />} />
                </Routes>
            </div>
        </CartProvider>
    );
}

export default App;
