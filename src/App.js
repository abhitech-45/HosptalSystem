import logo from './logo.svg';
import './App.css';
import AppointmentForm from './Components/AppointmentForm';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <AppointmentForm></AppointmentForm>

      </BrowserRouter>
  );
}

export default App;
