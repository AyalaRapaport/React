import './App.css';
import Delivers from './Componets/delivers';
import { Route, Routes } from 'react-router-dom';
import { AddressesProvider } from "./Componets/addressProvider";
import HomePage from './Componets/HomePage';
import CourierDetails from './Componets/CourierDetails';
import Logo from './Componets/Logo';
import PersonalArea from './Componets/PersonalArea';
import ChooseLocation from './Componets/ChooseLocation';
import RecognizeLocation from './Componets/RecognizeLocation';

function App() {
  return (
    <div className="App">
      <AddressesProvider>
        <Routes>
          <Route path='courierDetails' element={<CourierDetails />} />
          <Route path='homePage' element={<HomePage />} />
          <Route path='personalArea' element={<PersonalArea />} />

          <Route path='delivers/:isAdd' element={<Delivers />} >
            <Route path='recognizeLocation/:location' element={<RecognizeLocation />} />
            <Route path='chooseLocation' element={<ChooseLocation />} />
          </Route>

          <Route path='logo' element={<Logo />} />
          <Route path='' element={<HomePage />} />
          <Route path='*' element={<h1> not found</h1>} />
        </Routes>
      </AddressesProvider>

    </div>
  );
}

export default App;
