import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/charaf.png' alt='profil-pic'/>
                    <h3> Charaf Colo</h3> 
                </div>
            </div> 

            <div className='navigation'> 
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                        <i className="bi bi-house-fill"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="bi bi-wallet-fill"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className='bi bi-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="bi bi-person-lines-fill"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
        </div>

        <div className='socialNetwork'>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/charaf-colo-50a787199/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i><i/></a>
                </li>
                <li>
                    <a href="https://github.com/charafcolo" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i><i/></a>
                </li>
            </ul>
            <div className='signature'>
                <p>Fait avec ❤️ par Charaf - 2023</p>
            </div>

        </div>
        </div>
        
    );
};

export default Navigation;