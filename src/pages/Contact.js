import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                    <div className='header'></div>
                    <div className='contactBox'>
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Angers</span>
                            </li>
                            <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text="0648999496">
                                <span className='clickInput' onClick={() => { alert('Téléphone de Charaf copié !');}}>06 48 99 94 96</span>
                            </CopyToClipboard>
                            </li>
                            <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text="charafcolo@hotmail.fr">
                                <span className='clickInput' onClick={() => { alert('E-mail de Charaf copié !');}}>contact@charafcolo.fr</span>
                            </CopyToClipboard>
                            </li>
                        </ul>

                        {/* <h2>En cours de stylisation..</h2> */}
                        </div>
                
                <div className='socialNetwork'>
                    <ul>
                        
                            <a href="https://www.linkedin.com/in/charaf-colo-50a787199/" target="_blank"
                            rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i><i/>
                                </a>
                    
                        
                            <a href="https://github.com/charafcolo" target="_blank" 
                            rel="noopener noreferrer">
                                <h4>GitHub</h4>
                                <i className="fab fa-github"></i><i/>
                                </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;