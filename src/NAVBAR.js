import { Outlet, Link } from "react-router-dom";
const Navbar = (Active) => {
  const t1 ="Home";  
  const t2 ="Jobs";
  const t3 ="NAN";
  
  return (
      
    <ul className="nav navbar-nav">
      <li> < Link to="/">{t1}</Link></li>
      <li> <Link to="/">{t3}</Link></li>
      <li> <Link to ="/jobs">{t2}</Link></li>
      <li className="Active"><Link to="/">{t1}</Link></li>
    </ul>
 

      );
}
 
export default Navbar;