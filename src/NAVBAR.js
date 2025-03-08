import { Outlet, Link } from "react-router-dom";
const Navbar = (Active) => {
  const t1 ="Home";  
  const t2 ="Experience";
  const t3 ="CV";
  
  return (
      
    <ul className="nav navbar-nav">
      <li> < Link to="/" style={{color:"black", textDecorationLine:"none",fontSize:"2vw"}}  >{t1}</Link></li>
      <li> <Link to ="/jobs" style={{color:"black", textDecoration:"none",fontSize:"2vw"}}>{t2}</Link></li>
      <li> <Link to="/"style={{color:"black", textDecoration:"none",fontSize:"2vw"}}>{t3}</Link></li>
     <h1 style={{blockSize: "5vh" , textAlign:"right",fontSize:"2vw"}}>Fullstack Developer</h1>
    </ul>
 

      );
}
 
export default Navbar;