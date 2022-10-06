import React from 'react'
import './style.css';


/* 
const handleClickTodoDone = (id) => {
  const newTodoList = props.result.map((item) => {
  if (item.id == id) {
  item.isDone = !item.isDone;
  }
  return item;
  });
  props.setResult(newTodoList);
  };
  

*/



export const List = (props) => {

function addHandler(id) {
        
    props.result.map((item) => 
        {
          if(item.id === id){
            return {...item,isdone:true},console.log(item.isdone)

          }

        }
        )
      // map다음에 filter써보기
}

  return (
    <>
      <div className='list'>
            <h2>WorKing.. 🔥</h2>
            
            {    
              props.result.map((item) => {
                  return(<div className='list-wrapper'>
                    {/* {console.log(item.id)} */}
                  <div className='todo-container'>
                    <div className='todo-set'>
                      <h2>{item.contentResult}</h2> 
                      <div>{item.titleResult}</div>
                    </div>
                    <div className='button-set'>
                      <button className='button-red' onClick={()=>{}}>삭제하기</button>      
                    <button className='button-green'onClick={()=>{addHandler(item.id)}}>
                      {item.isdone === true ? '취소':'완료'}
                    </button> 
                      </div>
                    </div>
                </div>)
                })
          }  
{/* 완료 */}
            <h2>Done..! 🎉</h2>
            {
            // props.result.isdone  == !props.result.isdone

              props.result.map((item) => {
                  return (<div className='list-wrapper'>
                  <div className='todo-container'>
                    <div className='todo-set'>
                      <h2 >{item.contentResult}</h2> 
                      <div >{item.titleResult}</div>
                    </div>
                    <div className='button-set'>
                      <button className='button-red' onClick={()=>{}}>삭제하기</button>
                      <button className='button-green'onClick={()=>{addHandler(item.id)}}>


                        {item.isdone === false ? '취소':'완료'}
                        </button> 
                      </div>
                    </div>
                </div>)})
            } 
        </div>{/* list */}
    </>
  )
}


















