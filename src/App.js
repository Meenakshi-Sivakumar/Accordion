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
    <div className='container'>
    {data.map(data=> <SingleQuestion key={data.id} {...data} toggle={toggle} isOpen={isOpen}/> )}
    </div>
    </section>
    </main>
  );
}

export default App;
