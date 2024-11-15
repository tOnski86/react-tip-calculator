/* eslint-disable react/prop-types */
import { useState } from 'react';
import Error from './Error';
import iconDollar from '/icon-dollar.svg';
import iconPerson from '/icon-person.svg';

const MAX_BILL = 1000000;
const MAX_PEOPLE = 1000000;

function Form({
  bill,
  tip,
  people,
  handleSetBill,
  handleSetTip,
  handleSetPeople,
}) {
  function handleTips(e) {
    e.preventDefault();
    handleSetTip(Number(e.target.value));
  }

  return (
    <div className='bg-white p-8 md:pt-10 md:pl-10 md:pb-10 md:pr-4 rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none'>
      <form action='#' className='grid grid-col-1 gap-y-7'>
        {/* bill */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-2'>
          <div className='flex justify-between items-center'>
            <label htmlFor='bill' className='text-cyan-400 font-bold'>
              Bill
            </label>
            {bill > MAX_BILL && <Error>Must not exceed {MAX_BILL}</Error>}
          </div>
          <div className='relative overflow-hidden grid grid-cols-1'>
            <input
              id='bill'
              value={bill}
              onChange={e => handleSetBill(Number(e.target.value))}
              type='number'
              placeholder='0'
              className={` bg-cyan-100 py-2 pl-10 pr-4 rounded-md text-right text-cyan-600 text-2xl font-bold focus:outline-none focus:border-2  border-2 border-cyan-100 transition-colors hover:cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                bill > MAX_BILL ? 'focus:border-red' : 'focus:border-cyan-500'
              }`}
            />
            <img
              src={iconDollar}
              className='absolute top-1/2 -translate-y-1/2 left-4 text-cyan-300'
            />
          </div>
        </div>

        {/* select tip */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-4'>
          <label htmlFor='tip' className='text-cyan-400 font-bold'>
            Select Tip %
          </label>

          <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3'>
            <button
              className={` px-4 py-2 text-2xl font-semibold  rounded-md  transition-colors hover:bg-powder hover:text-cyan-600 ${
                tip === 0.05
                  ? 'text-cyan-600 bg-cyan-500'
                  : 'text-white bg-cyan-600'
              }`}
              value={0.05}
              onClick={e => handleTips(e)}
            >
              5%
            </button>
            <button
              className={` px-4 py-2 text-2xl font-semibold  rounded-md  transition-colors hover:bg-powder hover:text-cyan-600 ${
                tip === 0.1
                  ? 'text-cyan-600 bg-cyan-500'
                  : 'text-white bg-cyan-600'
              }`}
              value={0.1}
              onClick={e => handleTips(e)}
            >
              10%
            </button>
            <button
              className={` px-4 py-2 text-2xl font-semibold  rounded-md  transition-colors hover:bg-powder hover:text-cyan-600 ${
                tip === 0.15
                  ? 'text-cyan-600 bg-cyan-500'
                  : 'text-white bg-cyan-600'
              }`}
              value={0.15}
              onClick={e => handleTips(e)}
            >
              15%
            </button>
            <button
              className={` px-4 py-2 text-2xl font-semibold  rounded-md  transition-colors hover:bg-powder hover:text-cyan-600 ${
                tip === 0.25
                  ? 'text-cyan-600 bg-cyan-500'
                  : 'text-white bg-cyan-600'
              }`}
              value={0.25}
              onClick={e => handleTips(e)}
            >
              25%
            </button>
            <button
              className={` px-4 py-2 text-2xl font-semibold  rounded-md  transition-colors hover:bg-powder hover:text-cyan-600 ${
                tip === 0.5
                  ? 'text-cyan-600 bg-cyan-500'
                  : 'text-white bg-cyan-600'
              }`}
              value={0.5}
              onClick={e => handleTips(e)}
            >
              50%
            </button>
            <input
              id='tip'
              type='text'
              placeholder='Custom'
              className='bg-cyan-100 py-2 px-4 rounded-md text-right text-cyan-600 text-xl font-bold focus:outline-none focus:border-2 focus:border-cyan-500 border-2 border-cyan-100 transition-colors hover:cursor-pointer placeholder:text-cyan-400'
              value={tip}
              onChange={e => handleTips(e)}
            />
          </div>
        </div>

        {/* number of people */}
        <div className='flex flex-col [&>:not(:last-child)]:mb-2'>
          <div className='flex justify-between items-center'>
            <label htmlFor='people' className='text-cyan-400 font-bold'>
              Number of People
            </label>
            {people > MAX_PEOPLE && <Error>Must not exceed {MAX_PEOPLE}</Error>}
          </div>
          <div className='relative overflow-hidden grid grid-cols-1'>
            <input
              id='people'
              value={people}
              onChange={e => handleSetPeople(e.target.value)}
              type='text'
              placeholder='0'
              className={` bg-cyan-100 py-2 pl-10 pr-4 rounded-md text-right text-cyan-600 text-2xl font-bold focus:outline-none focus:border-2  border-2 border-cyan-100 transition-colors hover:cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                people > MAX_PEOPLE
                  ? 'focus:border-red'
                  : 'focus:border-cyan-500'
              }`}
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
