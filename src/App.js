import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carosel from './carosel.js';




function App() {
  return (
    <div className="App">

      <div className="container " id="body">
        <p className="text-center bg-success float-left" style={{ color: "azure", fontSize: "30px" }}>Food Recipies</p>

        <button type="button" className="btn btn-primary float-right mb-2" style={{ float: "right" }} data-bs-toggle="modal"
          data-bs-target="#showform">
          ADD
          RECIPIES</button>
       

        
        <Carosel />
         
   





      </div>
    </div>
  );
}

export default App;
