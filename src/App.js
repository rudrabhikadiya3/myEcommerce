
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
import PublicRoute from './container/routes/PublicRoute';
import PrivateRoute from './container/routes/PrivateRoute';
import { Provider } from 'react-redux';

import store from './redux/store';


function App() {
  return (
    <>
    <Provider store={store}>
        <Header />
        <Switch>
          {/* home */}
          <PublicRoute path='/' exact component={Home} />
          {/* shop */}
          <PublicRoute path='/shop' exact component={Shop} />
          <PrivateRoute path='/checkout' exact component={Checkout} />
          <PrivateRoute path='/cart' exact component={Cart} />
          <PublicRoute path='/pricing' exact component={Pricing} />
          <PublicRoute path='/confirmation' exact component={Confirmation} />
          {/* -------- */}
          <PublicRoute path='/product_single' exact component={ProductSingle} />
          <PublicRoute path='/ShopSide' exact component={ShopSide} />

          {/* pages */}
          <PublicRoute path='/contact' exact component={Contact} />
          <PublicRoute path='/about' exact component={About} />
          <PublicRoute path='/404' exact component={FourzFour} />
          <PublicRoute path='/FAQ' exact component={FAQ} />
          {/* -------- */}
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <PrivateRoute path='/order' exact component={Order} />
          <PrivateRoute path='/address' exact component={Address} />
          <PrivateRoute path='/profile' exact component={Profile} />

          <PublicRoute path='/login' restricted={true} exact component={UserLogin} />




          <PublicRoute path='/blog' exact component={Blog} />


        </Switch>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
