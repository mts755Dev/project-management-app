import clerk from '../assets/clerk.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-5 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={clerk} alt='logo' className='mr-2' />
            <div>Project</div>
            <div>Cops</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
