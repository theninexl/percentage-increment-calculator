import { Link } from "react-router-dom";
import { SecNavbar } from "./SecondaryNavbar";

export const Navbar = () => {
  return (
    <>
    <header className="bi-l-header">
      <div className='bi-l-header__main-bar'>
        <div className='bi-l-container'>
          <nav className="bi-c-navbar">
            <div className="bi-c-navbar__left">              
              <p style={{marginBottom:0}}><strong>elarcadenoe</strong></p>
            </div>
            <div className="bi-c-navbar__center bi-u-centerText"></div>
            <div className="bi-c-navbar__right">
              <div className='bi-c-navbar__navBtns'>
              </div>
            </div>
          </nav>
        </div>
      </div>      
      <SecNavbar />
    </header>
    </>
  );
}