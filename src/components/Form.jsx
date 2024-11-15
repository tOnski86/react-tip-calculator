import iconDollar from '/icon-dollar.svg';
import iconPerson from '/icon-person.svg';

function Form() {
  return (
    <div className='bg-white p-8 md:pt-10 md:pl-10 md:pb-10 md:pr-4 rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none'>
      <form action='#' className='grid grid-col-1 gap-y-7'>
        {/* bill */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-2'>
          <label htmlFor='#' className='text-cyan-400 font-bold'>
            Bill
          </label>
          <div className='relative overflow-hidden grid grid-cols-1'>
            <input
              type='text'
              className='bg-cyan-100 py-2 pl-10 pr-4 rounded-md text-right text-cyan-600 text-2xl font-bold focus:outline-none focus:border-2 focus:border-cyan-500 border-2 border-cyan-100 transition-colors selection:bg-cyan-400 selection:text-cyan-200 hover:cursor-pointer '
            />
            <img
              src={iconDollar}
              className='absolute top-1/2 -translate-y-1/2 left-4 text-cyan-300'
            />
          </div>
        </div>

        {/* select tip */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-4'>
          <label htmlFor='#' className='text-cyan-400 font-bold'>
            Select Tip %
          </label>

          <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3'>
            <button className='bg-cyan-600 px-4 py-2 text-2xl font-semibold text-white rounded-md active:text-cyan-600 active:bg-cyan-500 transition-colors hover:bg-powder hover:text-cyan-600'>
              5%
            </button>
            <button className='bg-cyan-600 px-4 py-2 text-2xl font-semibold text-white rounded-md active:text-cyan-600 active:bg-cyan-500 transition-colors hover:bg-powder hover:text-cyan-600'>
              10%
            </button>
            <button className='bg-cyan-600 px-4 py-2 text-2xl font-semibold text-white rounded-md active:text-cyan-600 active:bg-cyan-500 transition-colors hover:bg-powder hover:text-cyan-600'>
              15%
            </button>
            <button className='bg-cyan-600 px-4 py-2 text-2xl font-semibold text-white rounded-md active:text-cyan-600 active:bg-cyan-500 transition-colors hover:bg-powder hover:text-cyan-600'>
              25%
            </button>
            <button className='bg-cyan-600 px-4 py-2 text-2xl font-semibold text-white rounded-md active:text-cyan-600 active:bg-cyan-500 transition-colors hover:bg-powder hover:text-cyan-600'>
              50%
            </button>
            <input
              type='text'
              placeholder='Custom'
              className='bg-cyan-100 py-2 px-4 rounded-md text-right text-cyan-600 text-xl font-bold focus:outline-none focus:border-2 focus:border-cyan-500 border-2 border-cyan-100 transition-colors selection:bg-cyan-400 selection:text-cyan-200 hover:cursor-pointer placeholder:text-cyan-400'
            />
          </div>
        </div>

        {/* number of people */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-2'>
          <label htmlFor='#' className='text-cyan-400 font-bold'>
            Number of People
          </label>
          <div className='relative overflow-hidden grid grid-cols-1'>
            <input
              type='text'
              className='bg-cyan-100 py-2 pl-10 pr-4 rounded-md text-right text-cyan-600 text-2xl font-bold focus:outline-none focus:border-2 focus:border-red border-2 border-cyan-100 transition-colors selection:bg-cyan-400 selection:text-cyan-200 hover:cursor-pointer'
            />
            <img
              src={iconPerson}
              className='absolute top-1/2 -translate-y-1/2 left-4 text-cyan-300'
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
