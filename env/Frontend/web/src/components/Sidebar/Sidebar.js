import "../Sidebar/Sidebar.css"
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Item from "./Item";
import { motion } from "framer-motion";
import { useState } from "react";
import {Link} from "react-router-dom";


function Sidebar() {
  const [open, setOpen] = useState(true);

  //to collpsing sidebar
  const HandleToogle = () =>{
    setOpen(!open)
  };

  const sideContainerVariant = {
    true: {
      width: '15rem',
    },
    false: {
      transition: {
        delay: 0.6
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: '4.5rem',
      transition:{
        delay: 0.4
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: 'center',
      width: '10rem'
    },
    false:{
      alignSelf: 'flex-start',
      marginTop: '2rem',
      width: '3rem'
    },
  };

  return (
      <div className="Sidebar">
        <motion.div 
        data-Open = {open}
        variants= {sideContainerVariant}
        initial= {`${open}`}
        animate= {`${open}`}
        className="sidebar_container">
          <motion.div 
          initial= {`${open}`}
          animate= {`${open}`}
          variants={sidebarVariants} 
          className="sidebar">
            {/* Start Lines */}
            <motion.div whileHover={{scale:1.2, rotate:180, backgroundColor:"rgba(255, 255, 255, 0.3)",
            backdropFilter:"blur(3.5px)",WebkitBackdropFilter:"blur(3.5px)", border:"1px solid rgba(255,255,255, 0.18)",
            transition:{delay:0.2, duration:0.4,} }} onClick={HandleToogle} className="lines_icon">
              <TocRoundedIcon/>
            </motion.div>
            {/* End Lines */}
            {/* Start profile */}
            <Link to="/"><motion.div
            layout 
              initial= {`${open}`}
              animate= {`${open}`}
              variants={profileVariants}
              className="profile"
              transition={{duration: 0.4}}
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropfilter: "blur(5.5px)",
                WebkitBackdropFilter: "blur(5.5px)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                cursor: 'pointer'
              }}>
              <img src="/imgs/Logo.png" alt="profile_img"/>
            </motion.div></Link>
            {/* End profile */}
            {/* Start groups */}
            <div className="groups">
              {/* 1º Group */}
              <div className="group">
                <motion.h3 
                animate={{opacity: open ? 1 : 0, height: open? 'auto': 0}}>
                  Analises</motion.h3>
                <Link to="/">
                  <Item icon={<DashboardRoundedIcon/>} name='Dashboard'/>
                </Link>
                <Link to="/AI">
                  <Item icon={<SmartToyRoundedIcon/>} name='Inteligencia Artificial'/>
                </Link>
              </div>  
              {/* 2º Group */}
              <div className="group">
                <motion.h3 animate={{opacity: open ? 1 : 0, height: open? 'auto': 0}}>
                  Setores</motion.h3>
                <Link to="/Sector">
                  <Item icon={<AttachMoneyRoundedIcon/>} name='Vendas'/>
                </Link>
                <Link to="/Sector">
                  <Item icon={<AttachMoneyRoundedIcon/>} name='Recursos Humanos'/>
                </Link>
                <Link to="/Sector">
                  <Item icon={<AttachMoneyRoundedIcon/>} name='Marketing'/>
                </Link>
              </div>
              {/* 3º Group */}
              <div className="group">
                <motion.h3 animate={{opacity: open ? 1 : 0, height: open? 'auto': 0}}>
                  </motion.h3>
                <Item icon={<LogoutRoundedIcon/>} name='Sair'/>
              </div>
            </div>
            {/* End groups */}
          </motion.div>
        </motion.div>
          <div className="body_router">
          </div>
      </div>
  );
}

export default Sidebar;
