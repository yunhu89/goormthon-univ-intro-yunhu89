import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function TodoApp() {
  const { username } = useParams();
  //http://localhost:5173/todoapp/kimyunhu 이렇게 값을 주면 나옴
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  //useState 설정, 수정 상태는 null로 두기 
  const handleAdd = () => { 
    if (!input.trim()) return; 

    if (editId !== null) {
      setTodos(todos.map(todo =>
        todo.id === editId ? { ...todo, text: input } : todo 
      ));
      { /* map함수가 일일히 하나하하나 배열을 다 뒤져서 체킹하는과정. prev -> prev를 활용할 수 있음 */}
      setEditId(null);
    } else {
      setTodos([...todos, { //새로 추가 
        id: Date.now(),
        text: input,
        completed: false 
      }]);
    }

    setInput('');
  };

  const handleDelete = (id) => { 
    setTodos(todos.filter(todo => todo.id !== id));
  }; //filter()를 활용해서 내가 지우는 것과 다른것들만 냄겨두게 하기 

  const handleEdit = (id, text) => {
    setEditId(id); 
    setInput(text); //기존 내용을 불러오고 그 값을 수정해야하기 때문에 기존 텍스트 불러오기 
  }; 

  const handleToggle = (id) => { //삼항연산자로 완료 여부 바꿈 
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={{ padding: 20 }}>
     <h3>{username ? `${username}의 To-do List는 뭔가요?` : '어서오세요, 당신의 To-do List는 무엇인가요?'}</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일"
      />
      <button onClick={handleAdd}>{editId !== null ? '수정' : '추가'}</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px' }}>
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo.id, todo.text)}>수정</button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
//map 함수를 활용해서 List 
export default TodoApp;