import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import ReviewProduct from './components/ReviewProduct/ReviewProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (

    <div>

      <Header />

      <Router>
        <Switch>

          <Route path='/shop'>
            <Shop />
          </Route>

          <Route path='/review'>
            <ReviewProduct />
          </Route>

          <Route path='/inventory'>
            <Inventory />
          </Route>

          <Route exact path='/'>
            <Shop />
          </Route>

          <Route path='/product/:key'>
            <ProductDetails />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
