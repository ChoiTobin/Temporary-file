import React from 'react'
import './App.css';
import { useState } from 'react';
import { Header } from './components/header/Header';
import {Form} from './components/form/Form'
import {List} from'./components/list/List'
import {Layout} from './components/layout/Layout'

let count =1;

function App() {



const [value,setValue] = useState({
  title:'',
  content:'',
  id:count,

})
const onChange = (e) => {
  setValue({...value,title:e.target.value})
}
const onChange2 = (e) => {
  setValue({...value,content:e.target.value})
}

// input값에 들어오는 함수
const [result,setResult] = useState([{contentResult:'리액트 공부하기',titleResult:'리액트 기초를 공부합시다',isdone:false}]) 



const handleSubmit = (event) =>{
  setResult([...result,{contentResult:value.title,titleResult:value.content,id:count,isdone:false}])
  count++
  event.preventDefault();
}
// console.log(count)
// submit시에 실행되는 함수



return (
    <div className="App">
      <Layout>
          <Header/>
          <Form onChange2={onChange2} onChange={onChange} handleSubmit={handleSubmit}/>
          <List  result={result} value={value} count={count}></List>
      </Layout>
    </div>
  );
}
export default App;