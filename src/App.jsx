import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Summary from './components/Summary';

function App() {
  const [bill, setBill] = useState({});

  return (
    <>
      <Header />

      <div className='grid md:grid-cols-2 md:max-w-4xl drop-shadow-sm'>
        <Form handleBill={setBill} />
        <Summary bill={bill} />
      </div>
    </>
  );
}

export default App;
