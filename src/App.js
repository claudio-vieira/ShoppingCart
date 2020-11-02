import './App.css';
import {Switch,BrowserRouter,Route} from 'react-router-dom'

//Component
import Navigationbar from './components/Navigationbar';
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
				<Navigationbar />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/cart" component={Cart}/>
				</Switch>
				</header>
			</div>
		</BrowserRouter>
  	);
}

export default App;
