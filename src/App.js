import './App.css';
import './index.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.js';
import Main from './pages/Main/main.js';
import About from './pages/About/about.js';

const App = () => {
  return (
    <div className='App'>
		<Header/>
		<Switch>
			<Route exact path='/'>
				<Main/>
			</Route>
			<Route exact path='/about' component={About}/>
		</Switch>
    </div>
  );
}

export default App;