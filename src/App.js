// Import Section
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import './App.css';
import About from './components/About/About.js';
import Appointments from './components/Appointments/Appointments.js';
import AuthProvider from './components/Context/AuthProvider.js';
import Details from './components/Details/Details.js';
import Doctors from './components/Doctors/Doctors.js';
import initializeAuthentication from './components/Firebase/firebase.init.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

// Initialize Authentication
initializeAuthentication();
function App() {
  return (
    <div className="App">
      {/* auth provider */}
      <AuthProvider>
        {/* Router */}
        <Router>
          {/* Header */}
          <Header></Header>
          <Switch>
            {/* Route form home */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* Route for about */}
            <Route path="/about">
              <About></About>
            </Route>
            {/* Private Route for Doctors */}
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            {/* Private Route for Details */}
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            {/* Private Route for appointment */}
            <PrivateRoute path="/appointments">
              <Appointments></Appointments>
            </PrivateRoute>
            {/* Route for login */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* Route for Not found */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>{' '}
    </div>
  );
}

export default App;
