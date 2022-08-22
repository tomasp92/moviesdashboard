import './assets/css/app.css';
import { SideBar } from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div id="wrapper" style={{ backgroundColor: 'black' }}>
      <BrowserRouter>
        <SideBar />
        <ContentWrapper />
      </BrowserRouter>
    </div>
  );
}

