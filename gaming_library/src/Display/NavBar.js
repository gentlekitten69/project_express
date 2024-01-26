import React from "react";
import { Routes,Route, Link} from 'react-router-dom';
import PopularGames from "../Function/Popular";
import Genre from  '../Function/Genre';
import LoadGames from "../Function/LoadGames";


const NavBar = () => {
    return ( 
       <nav  className='link' style = {{ background: 'yellow', height: '50px'}}>
          <li className="title"><Link to= '/LoadGames' style={{fontSize: '30px'}}>Home</Link></li>
            <li className='title'><Link to='/Popular' style={{fontSize: '30px'}}>New Games</Link></li>
            <li className="title"><Link to='/Genre' style={{fontSize: '30px'}}>Different Genre</Link></li>
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