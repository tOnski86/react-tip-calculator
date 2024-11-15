function Summary() {
  return (
    <div className='px-6 pb-8 md:py-6 bg-white md:rounded-tr-3xl md:rounded-br-3xl'>
      <div className='px-6 pb-6 pt-10 bg-cyan-600 rounded-xl'>
        <div className='grid grid-cols-2 items-center gap-y-6'>
          {/* tip amount */}
          <div className='flex flex-col items-start'>
            <h3 className='text-white font-semibold'>Tip Amount</h3>
            <span className='text-cyan-200 font-light text-sm'>/ person</span>
          </div>
          <p className='justify-self-end text-3xl font-semibold text-cyan-500'>
            $4.27
          </p>

          {/* total */}
          <div className='flex flex-col items-start'>
            <h3 className='text-white font-semibold'>Total</h3>
            <span className='text-cyan-200 font-light text-sm'>/ person</span>
          </div>
          <p className='justify-self-end text-3xl font-semibold text-cyan-500'>
            $32.79
          </p>

          {/* button */}
          <button className='col-span-2 uppercase bg-cyan-500 px-4 py-2 text-xl font-semibold text-cyan-600 rounded-md hover:bg-powder hover:text-cyan-600 disabled:opacity-20'>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
