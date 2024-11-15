/* eslint-disable react/prop-types */
function Error({ children }) {
  return (
    <h1 className='text-xs text-red font-semibold animate-slideLeft'>
      {children}
    </h1>
  );
}

export default Error;
