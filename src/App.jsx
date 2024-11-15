import Form from './components/Form';
import Header from './components/Header';
import Summary from './components/Summary';

function App() {
  return (
    <div className=''>
      <Header />

      <div className='grid md:grid-cols-2'>
        <Form />
        <Summary />
      </div>
    </div>
  );
}

export default App;
