import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path=":id" element={<Search />}>Search</Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
