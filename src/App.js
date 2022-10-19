
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


const App = () => {
  
    return (

      // <>
      //     <Routes>
      //       <Route path="/" exact component={Home} />
      //       <Route path="/competences" component={Knowledges} />
      //       <Route path="/portfolio" component={Portfolio} />
      //       <Route path="/contact" component={Contact} />
      //       <Route component={NotFound} />
      //     </Routes>
      // </>


      
      <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Knowledges />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<NotFound />} />
          </Routes>
      </>
    );
};

export default App;
