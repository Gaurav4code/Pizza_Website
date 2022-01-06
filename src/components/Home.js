import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import styled from 'styled-components'
const Home = () => {
  return (
    <>
    <motion.div className="home container"
    initial={{opacity:0}}
     animate={{opacity:1}}
     transition={{delay:1.5,duration:1.5}}
     
     >
      <h2 animate={{rotateZ:180,fontSize: 50, color:'#ff2994', x:100, y:-100}}>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        whileHover={{scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)"

        
        
        }}

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
    <Text animate={{x:40}}>
      Hellos
    </Text>
    </>
  )
}

export default Home;
const Text=styled(motion.div)`
border:solid red 2px;
height:50px;
width:100px;
font-size:30px;
color:red;
background:#ffffff;


`;