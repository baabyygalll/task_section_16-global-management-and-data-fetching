import logo from './logo.svg';
// UseState
import React, {useState} from 'react';
import './App.css';
// Component
import Form from './Component/Form';
import TodoList from './Component/TodoList';



function App() {


  return (
    <section className="container_app">
      <div className="container_wrapper">
      <div className="form_container">
        <h1> todos </h1>
        <Form />
        <TodoList />
      </div>
      </div>
    </section>
  );
}

export default App;
