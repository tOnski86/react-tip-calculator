import logo from '/logo.svg';

function Header() {
  return (
    <div className='my-12 flex justify-center'>
      <img src={logo} alt='splitter logo' />
    </div>
  );
}

export default Header;
