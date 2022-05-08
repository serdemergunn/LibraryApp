import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
import Okunanlar from "./Pages/Okunanlar";
import Okunacaklar from "./Pages/Okunacaklar";
import Anasayfa from "./Pages/Anasayfa";
import Kontrol_Paneli from "./Pages/Kontrol_Paneli";
import Yorumlar from "./Pages/Page_Components/Yorumlar";



function App() {

  return (
    <Router>

      <div className="container">
      
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">myLib</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">


            <li class="nav-item">
              <Link class="nav-link active" to="/home">Anasayfa

              </Link>
            </li>


            <li class="nav-item">
              <Link class="nav-link" to="/okunanlar">Okunan Kitaplar</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/okunacaklar">Okunacak Kitaplar</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/kontrol_paneli">Kontrol Paneli</Link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  
    </div>
    <Routes>
    <Route exact path='/home' element={< Anasayfa />}></Route>
    <Route exact path='/okunanlar' element={< Okunanlar />}></Route>
    <Route exact path='/okunacaklar' element={< Okunacaklar />}></Route>
    <Route exact path='/kontrol_paneli' element={< Kontrol_Paneli />}></Route>
    <Route exact path='/yorum/:key' element={< Yorumlar />}></Route>
    </Routes>
    </Router>


  );
}

export default App;
