
import './App.css';
import Bikeuserev from './Bikeuserev';
import Enquires from './Enquires';
import Enquirew from './Enquirew';
import Eshop from './Eshop';
import Findadel from './Findadel';
import Header from './Header';
import Homepage from './Homepage';
import Mreview from './Mreview';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import Partwu from './Partwu';
import Login from './Login';
import Contactus from './Contactus';
import Prodspec from './Prodspec';
import Bookdrv from './Bookdrv';
import Conbookdrv from './Conbookdrv';
import Bookeddrv from './Bookeddrv';
import Footer from './Footer';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
function App() {
  return (
    <Router>
    <div className="App">
    <Header/>

      <Switch>
      <Route exact path="/">

     <Homepage/>
     <Footer1/>
     </Route>
     <Route path="/login">
       <Homepage/>
       <Login/>
       <Footer1/>
     </Route>
     <Route path="/conwu">
       <Contactus/>
       <Footer/>
     </Route>
     <Route path="/eshop">
       <Eshop/>
       <Footer2/>
     </Route>
     <Route path="/findadel">
       <Findadel/>
       <Footer3/>
     </Route>
     
     <Route exact path="/enquirew">
       <Enquirew/>
       <Footer4/>
      </Route>
     <Route exact path="/enquires">
       <Enquires/>
       <Footer4/>
     </Route>
    
     <Route path="/partwu">
       <Partwu/>
       <Footer3/>
     </Route>
     <Route path="/review">
       <Mreview/>
       <Footer2/>
     </Route>
     <Route path="/ureview">
       <Bikeuserev/>
       <Footer3/>
     </Route>
     <Route path="/spec">
       <Prodspec/>
       <Footer2/>
     </Route>
     <Route path="/btd">
       <Bookdrv/>
       <Footer3/>
     </Route>
     <Route path="/cbtd">
       <Bookdrv/>
       <Conbookdrv/>
       <Footer4/>
     </Route>
     <Route path="/booked">
       <Bookdrv/>
       <Bookeddrv/>
       <Footer4/>
     </Route>
     </Switch>
    
    </div>
    </Router>
  );
}

export default App;
