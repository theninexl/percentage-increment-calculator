import { useLocation } from "react-router-dom";

export const SecNavbar = () => {

  return (
    <>
    <div className='bi-l-header__sec-bar'>
        <div className="bi-l-container">
          <nav className="bi-c-navbar bi-c-navbar--secondary">
            <div className="bi-c-navbar__left bi-u-gray-text">              
              Calculadoras
            </div>
            <div className="bi-c-navbar__center"> 
             Aumento porcentaje
            </div>
          </nav>
        </div>
      </div>        
    </>
  );
}