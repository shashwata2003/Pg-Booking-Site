import {
  BrowserRouter,
  Routes,
  Route,Router
} from "react-router-dom";
import './App.css';
import Login from'./Pages/Login'
import Dashboard from './Pages/Dashboard'
import Landing from './Components/Landing'
import GoalForm from './Components/GoalForm'
import DocForm from './Components/DocForm'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path="/" element={<Landing></Landing>}></Route>
      <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/Dashboard/List" element={<GoalForm></GoalForm>}></Route>
      <Route path="/Dashboard/submit" element={<DocForm></DocForm>}></Route>
      



      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
