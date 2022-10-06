import React from 'react'
import { useState } from 'react';
import './style.css';

export const Form = (props) => {
  return (
    <>
      <form className='form'onSubmit={props.handleSubmit}>
            <div className='input-group'>
              <label type='text'>제목</label>
              <input  type='text' name='title'onChange={props.onChange2} />
              <label type='text'>내용</label>
              <input type='text' name='body' onChange={props.onChange} />
            </div>
            <button type='submit' className='form-button'>추가하기</button>
          </form>

    </>
  )
}
