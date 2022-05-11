import logo from './logo.svg';
import './App.css';
import IndexLayout from './layout/DefaultLayout/index';
const Home = ()=>{
  return(
    <div >
      <h1>
      Home
    </h1>
    <div >
      sdasd
    </div>
    
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <IndexLayout >
          <Home></Home>
      </IndexLayout>

    </div>
  );
}

export default App;
