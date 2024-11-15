import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Summary from './components/Summary';

function App() {
  const [computeBill, setComputeBill] = useState({});
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState('');
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

  function handleReset(reset) {
    if (reset) {
      setBill('');
      setTip('');
      setPeople('');
      setCustomTip('');
      setComputeBill({});
      setReset(false);
      console.log('reset');
    }
  }

  return (
    <>
      <Header />

      <div className='grid md:grid-cols-2 md:max-w-4xl drop-shadow-sm'>
        <Form
          bill={bill}
          tip={tip}
          customTip={customTip}
          people={people}
          handleSetBill={setBill}
          handleSetTip={setTip}
          handleCustomTip={setCustomTip}
          handleSetPeople={setPeople}
        />
        <Summary computeBill={computeBill} handleReset={handleReset} />
      </div>
    </>
  );
}

export default App;
