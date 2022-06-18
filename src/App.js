
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './container/Home';

import Shop from './container/Shop';
import Checkout from './container/Checkout';
import Cart from './container/Cart';
import Pricing from './container/Pricing';
import Confirmation from './container/Confirmation';

import ProductSingle from './container/ProductSingle';
import ShopSide from './container/ShopSide';

import Contact from './container/Contact';
import About from './container/About';
import FourzFour from './container/FourzFour';
import FAQ from './container/FAQ';


import Dashboard from './container/Dashboard';
import Order from './container/Order';
import Address from './container/Address';
import Profile from './container/Profile';

import UserLogin from './container/UserLogin';


import Blog from './container/Blog';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* home */}
        <Route path='/' exact component={Home} />

        {/* shop */}
        <Route path='/shop' exact component={Shop} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/pricing' exact component={Pricing} />
        <Route path='/confirmation' exact component={Confirmation} />
        {/* -------- */}
        <Route path='/product_single' exact component={ProductSingle} />
        <Route path='/ShopSide' exact component={ShopSide} />

        {/* pages */}
        <Route path='/contact' exact component={Contact} />
        <Route path='/about' exact component={About} />
        <Route path='/404' exact component={FourzFour} />
        <Route path='/FAQ' exact component={FAQ} />
        {/* -------- */}
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/order' exact component={Order} />
        <Route path='/address' exact component={Address} />
        <Route path='/profile' exact component={Profile} />

        <Route path='/login' exact component={UserLogin} />




        <Route path='/blog' exact component={Blog} />


      </Switch>
      <Footer />
    </>
  );
}

export default App;
