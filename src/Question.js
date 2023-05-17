import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info, open,toggle}) => {
  return (
    <div>
      <div className='accordion-header' onClick={() => toggle(id, open)}>
        <h4>{title}</h4>
        <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </div>
      {open? info : ''}
    </div>
  );
};

export default Question;
