import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info, open,toggle}) => {
  return (
    <div className='accordion'>
      <div className='accordion-header' onClick={() => toggle(id, open)}>
        <h4 className={open? 'dark': 'light'}>{title}</h4>
        <span>{open ? <button className='btn open'><AiOutlineMinus /> </button>: <button className='btn close'><AiOutlinePlus /></button>}</span>
      </div>
      {open? <p>{info}</p> : ''}
      {id !== 5? <div className='underline'></div> : ''}
    </div>
  );
};

export default Question;
