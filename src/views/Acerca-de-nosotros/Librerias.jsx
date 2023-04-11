import React, { useContext } from "react";
import { motion } from "framer-motion";
import git from "./Img-AN/git.png";
import react from "./Img-AN/react.png";
import reactB from "./Img-AN/reactB.png";
import nodejs from "./Img-AN/nodejs.png";
import mongodb from "./Img-AN/mongodb.png";
import "./acercaNosotros.css";


const Librerias = () => {
    return (
        <div className="works" id="works">
          <div className="w-left">
            <div className="awesome">
              <span>
               Conoce más sobre nuestro
              </span>
              <span>Proyecto</span>
              <span>
                Para nuestro proyecto final utilizamos librerias tales
                <br />
                 como Reactjs, BootstrapJs, MongoDB, Nodejs, Express 
                <br />
                De la misma forma utilizamos los conocimientos a lo largo del 
                <br />
                curso en Javascript, Css, Github, Trello.
              </span>
            </div>
    
            {/* right side */}
          </div>
          <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              <div className="w-secCircle">
                <img src={git} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={react} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={mongodb} alt="" />
              </div>{" "}
              <div className="w-secCircle">
                <img src={reactB} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={nodejs} alt="" />
              </div>
            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle topCircle"></div>
            <div className="w-backCircle bottomCircle"></div>
          </div>
        </div>
      );
};

export default Librerias;





