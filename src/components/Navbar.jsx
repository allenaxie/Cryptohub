import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/logo.png'
const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        // get width of the screen
        const handleResize = () => setScreenSize(window.innerWidth);

        // Listen for whenever window resizes -> invoke handleResize()
        window.addEventListener('resize', handleResize);
        handleResize();

        // unmount event listener?
        return () => window.removeEventListener('resize', handleResize);

    }, [])

    // Called whenever screen size changes
    useEffect(() => {
        if(screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])


  return (
  <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
            <Link to="/">Cryptohub</Link>
        </Typography.Title>
        {/* Controls menu for mobile devices */} 
        <Button 
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
        >
            <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
      )}
  </div>
  );
}; 

export default Navbar;
