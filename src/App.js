import React, { useRef, useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description 1' },
    { id: 2, title: 'JavaScript 2', body: 'Description 2' },
    { id: 3, title: 'JavaScript 3', body: 'Description 3' },
  ]);
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        {/* Неуправляемый\неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
