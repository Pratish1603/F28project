import { Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/login';
import Jobs from './Component/Jobs';
import NotFound from './Component/Not-Found';

const App = ()=> (

  <Routes>



        <Route path= "/" element = {<Home/>} ></Route>

        <Route path= "/Login" element = {<Login/>} ></Route>

        <Route path= "/Jobs" element = {<Jobs/>} ></Route>

        <Route path= "/*" element = {<NotFound/>} ></Route>



  </Routes>

)

   




export default App;