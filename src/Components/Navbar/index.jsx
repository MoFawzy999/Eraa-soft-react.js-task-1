import  './Navbar.css' ;


export default function Navbar(){
    return (
       <nav className='container d-flex flex-wrap justify-content-between align-items-center p-4'>
       <img src={"https://assets.nicepagecdn.com/d2cc3eaa/460597/images/default-logo.png"} />
       <ul className='d-flex gap-5 fw-normal menu'>
          <li ><a href="#" className='txt-menu-style'>Home</a></li>
          <li><a href="#" className='txt-menu-style'>About Company</a></li>
       </ul>
       <i className='fa-solid fa-bars menu-icon'></i>
       </nav>
    );
}