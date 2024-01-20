import React from "react";
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import LoadGames from "../Function/LoadGames";
import PopularGames from "../Function/Popular";
import Genre from  '../Function/Genre';


const NavBar = () => {
    return ( 
       <div className="">
            <a href="/" className="site-title"> Gaming Library</a>
            <li className="site-title"><Link to='/Popular'>New Games</Link></li>
            <li className="site-title"><Link to='/Genre'>Different Genre</Link></li>
             <Routes>
               <Route  path='/Popular' element={<PopularGames />}> New Games </Route>
               <Route  path="/:genre" element={<Genre />}/>
            </Routes>         
        </div>
        
    )
}

export default NavBar;




















// const NavBar = () => {
//     return (
//         <div>
//             <ul>
//                 <Router>
//                     <Link to="/">Home</Link> <br />
//                     <Link to='/PopularGames'>New Games</Link>
//                     <Link to='/Genre'> Game Genre</Link>
//                 </Router>
//             </ul>
//         </div>
//     )
   

// }
// export default NavBar;


/* <header>
<a href="/" class="logo">Home</a>
 <nav class="navbar">
  <ul class="navbar-nav">
       <li ><a class="nav-link" href= "/Genre.js">Genre</a></li>
       <li><a href="/gaming_library/src/Function/Popular.js">Popular Games</a></li>
  </ul>
 </nav> 
</header>
<section class="banner"></section>
<script type="text/JavaScript">
  window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
</script> */