import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from '../Components/Categories';
import LogIn from '../Components/LogIn';
import Profile from '../Components/Profile';
import Stats from '../Components/Stats';
import Questions from '../Components/Questions';
import Subscribe from '../Components/Subscribe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
