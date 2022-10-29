import { Switch, Route, Routes } from 'react-router-dom';
import './css/Main.scss';

import Navbar from './components/Navbar';
import LandingPage from './modules/LandingPage';
import AddContact from './modules/AddContact';
import ViewMessages from './modules/ViewMessages';
import Details from './modules/Details';

function App() {
 
  return (<div className='min-vh-100 w-100'>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/messages" element={<ViewMessages />} />
        <Route path={`/:id`} element={<Details/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
