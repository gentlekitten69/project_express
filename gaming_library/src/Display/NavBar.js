import React from "react";
import '../style.css'
import { Routes,Route} from 'react-router-dom';
import PopularGames from "../Function/Popular";
import Genre from  '../Function/Genre';
import LoadGames from "../Function/LoadGames";




const NavBar = () => {
    return ( 
       <nav>
          <ul className="tab">
         
           <a href="../LoadGames">Home</a>
           <a href="../Popular">New Games</a>
           <a href="../Genre">Different Genre</a>
            {/* <a className="title"><NavLink to= '/LoadGames'>Home</NavLink></a> */}
            {/* <a className="title"><NavLink to='/Popular' >New Games</NavLink></a> */}
            {/* <a className="title"><NavLink to='/Genre'>Different Genre</NavLink></a> */}
           
          </ul>   
          <Routes>
            <Route path='/LoadGames' element={<LoadGames />}>Home</Route>
            <Route  path='/Popular' element={<PopularGames />}> New Games </Route>
            <Route  path="/:genre" element={<Genre />}/>
          </Routes>     
        
        </nav>
        
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