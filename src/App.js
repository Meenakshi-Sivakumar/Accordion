import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (id, open) => {
    setIsOpen(!isOpen);
    data[id-1].open = isOpen;
  }

  return (
    <main>
    <section className='section'>
    <div className='circle one'></div>
    <div className='circle two'></div>
    <div className='head'>
      <h3>The Internet Questions</h3>
      <p>The following the some popular internet questions displayed in an accordion.</p>
    </div>
    <div className='container'>
    {data.map(data=> <SingleQuestion key={data.id} {...data} toggle={toggle} isOpen={isOpen}/> )}
    </div>
    <div className='circle three'></div>
    <div className='circle four'></div>
    </section>
    </main>
  );
}

export default App;
