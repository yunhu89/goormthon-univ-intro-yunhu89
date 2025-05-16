import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import TodoApp from './pages/TodoApp'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/mypage" element={<MyPage />} /> 
      <Route path="/todoapp" element={<TodoApp />} />  
    </Routes>
  );
}

export default App;