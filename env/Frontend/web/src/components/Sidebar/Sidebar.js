import "../Sidebar/Sidebar.css"
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Item from "./Item";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import { Button} from '@mui/material';

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

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
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
                <Link to="/inicio">
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
                  <Button variant='outlined' color='secondary' size='large' onClick={handleLogout} sx={{ mt: 6 }} >Logout</Button>
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
