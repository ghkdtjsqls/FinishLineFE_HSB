import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro';
import Login from './pages/login';
import Policy from './pages/policy';
import Register from './pages/register';
import CompleteLecture from './pages/completeLecture';
import MyCompleteLecture from './pages/myCompleteLecture';
import UserGuide from './pages/userGuide';
import GraduateCheck from './pages/graduateCheck';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeLecture" element={<CompleteLecture />} />
          <Route path="/myCompleteLecture" element={<MyCompleteLecture />} />
          <Route path="/userGuide" element={<UserGuide />} />
          <Route path="/graduateCheck" element={<GraduateCheck />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
