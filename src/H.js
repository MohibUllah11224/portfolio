import Navbar from "./NAVBAR";
import meImage from './me1.jpg';
const Home = () => {
    return (  
        <div>
                    <Navbar />
       <div className="introduction">
        <div className="aboutMe">
          <h1>About Me</h1>
          <h2>Hello I Am Mohib Ullah</h2>
          <p>
            Expert Full-Stack Developer specializing in seamless, dynamic web applications, front-end, back-end development,
            IoT technologies, cloud solutions, and responsive design to bring your digital vision to life
          </p>
        </div>
        <div className="MyIMG">
          <img src={meImage} alt="My Pic" />
        </div>
      </div>
/* thid is updated */ 

        </div>

    );
}
 
export default Home;