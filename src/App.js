import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './components/EmpListing';
import EmpCreate from './components/EmpCreate';
import EmpDetail from './components/EmpDetail';
import EmpEdit from './components/EmpEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;



// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Demo from "./components/demo";
// import Demo1 from "./components/demo1";
// import Edit from "./components/edit";

// import Appy from "./components/just";
// import Second from "./components/second";
// import View from "./components/view";


// function App() {
//   return (
//     <div className="App">
    
//        <BrowserRouter>
//       <Demo/>
//       <Routes>
//         <Route path="/demo" element={<Demo1/>}/>
//         <Route path="/edit/:id" element={<Edit/>}/>
//       </Routes>
//       <Appy/>
//       </BrowserRouter> 
      
//     </div>
//   );
// }

// export default App;
