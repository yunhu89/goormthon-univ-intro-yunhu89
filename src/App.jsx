import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MyPage from './pages/mypage/MyPage';
import TodoApp from './pages/todo/TodoApp'; 
import TodoLayout from './layouts/TodoLayout'; // 새로 만든 레이아웃
import TodoList from './pages/todo/TodoList';
import TodoHistory from './pages/todo/TodoHistory';
import TodoSettings from './pages/todo/TodoSettings';
import UserPage from './pages/user/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/user/:username" element={<UserPage />} />
      
      <Route path="/todoapp/:username" element={<TodoLayout />}>
        <Route path="list" element={<TodoList />} />
        <Route path="history" element={<TodoHistory />} />
        <Route path="settings" element={<TodoSettings />} />
      </Route>
    </Routes>
  );
}

export default App;