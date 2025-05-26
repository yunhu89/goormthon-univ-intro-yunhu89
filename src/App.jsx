import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MyPage from './pages/mypage/MyPage';
import TodoApp from './pages/todo/TodoApp'; 
import TodoLayout from './layouts/TodoLayout';
import TodoList from './pages/todo/TodoList';
import TodoHistory from './pages/todo/TodoHistory';
import TodoSettings from './pages/todo/TodoSettings';
import UsersPage from './pages/user/UsersPage';
import UserTodosPage from './pages/user/UserTodosPage';

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/mypage" element={<MyPage />} />
  <Route path="/users" element={<UsersPage />} />
  <Route path="/user/:userId/todos" element={<UserTodosPage />} />

  <Route path="/todoapp" element={<TodoLayout />}>
    <Route index element={<TodoApp />} />                       
    <Route path=":username" element={<TodoApp />} />            
    <Route path=":todoapp/:userId/list" element={<TodoList />} />     
    <Route path=":todoapp/:userId/history" element={<TodoHistory />} />
    <Route path="todoapp:/:userId/settings" element={<TodoSettings />} />

    
  </Route>
</Routes>
  )
}
//useParams로 불러오면서 문제가 발생함.. 중첩 라우팅을 하면서 조금 겹치는거 같은데 
//url 구조를 명확하게 분리해야할거같음 
export default App;