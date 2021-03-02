import {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
import Auth from "../containers/Auth"
import Registr from "../containers/Registr"
import Home from "../containers/Home"
import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import {auth} from "../actions/user";



function App() {

  const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

  return (
   
    <div>
       <Router>
          <Header/>
          
           <Switch> 
              {isAuth &&<Route  path='/' component={Home}></Route>}
              {!isAuth &&<Route exact path='/' component={Home}></Route>}
              {!isAuth &&<Route exact path='/login' component={Auth}></Route>}
              {!isAuth && <Route exact path='/registration' component={Registr}></Route>} 
           </Switch>
       </Router>
    </div>
   
  );
}

export default App;
