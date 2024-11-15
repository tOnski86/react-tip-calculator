import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Summary from './components/Summary';

function App() {
  const [computeBill, setComputeBill] = useState({});
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (!bill || !people || !tip) return;

    function calculateBill() {
      const tipPerPerson = ((bill * tip) / people).toFixed(2);
      const totalPerPerson = ((bill * tip + bill) / people).toFixed(2);

      setComputeBill({ tipPerPerson, totalPerPerson });
    }
    calculateBill();
  }, [setComputeBill, bill, people, tip]);

  function handleReset() {
    setBill('');
    setTip('');
    setPeople('');
    setComputeBill({});
    setReset(false);
    console.log('reset');
  }

  return (
    <>
      <Header />

      <div className='grid md:grid-cols-2 md:max-w-4xl drop-shadow-sm'>
        <Form
          bill={bill}
          tip={tip}
          people={people}
          handleSetBill={setBill}
          handleSetTip={setTip}
          handleSetPeople={setPeople}
        />
        <Summary
          computeBill={computeBill}
          reset={reset}
          handleReset={handleReset}
        />
      </div>
    </>
  );
}

export default App;
