function Summary() {
  return (
    <div className='px-6 pb-8 md:py-6 bg-white md:rounded-tr-3xl md:rounded-br-3xl'>
      <div className='px-6 md:px-10 md:pb-10 pb-6 pt-10 md:pt-16 bg-cyan-600 rounded-xl h-full'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            {/* tip amount */}
            <div className='grid grid-cols-2 items-center mb-6'>
              <div className='col-span-1'>
                <h3 className='text-white font-semibold'>Tip Amount</h3>
                <span className='text-cyan-200 font-light text-sm'>
                  / person
                </span>
              </div>
              <div className='col-span-1 justify-items-end'>
                <p className='text-3xl md:text-4xl font-semibold text-cyan-500'>
                  $4.27
                </p>
              </div>
            </div>

            {/* total */}
            <div className='grid grid-cols-2 items-center mb-8'>
              <div className='col-span-1'>
                <h3 className='text-white font-semibold'>Total</h3>
                <span className='text-cyan-200 font-light text-sm'>
                  / person
                </span>
              </div>
              <div className='col-span-1 justify-items-end'>
                <p className='text-3xl md:text-4xl  font-semibold text-cyan-500'>
                  $32.79
                </p>
              </div>
            </div>
          </div>

          {/* button */}
          <button className='w-full uppercase bg-cyan-500 px-4 py-2 text-xl font-semibold text-cyan-600 rounded-md hover:bg-powder hover:text-cyan-600 disabled:opacity-20'>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Summary;
