import React from 'react';
import AppRouter from './AppRouter';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from 'styles/Layout.module.css';

export default function AppLayout(props) {
  const location = useLocation();
  return (
    <>
      <div className={styles.topnav}>
        <Link to="" className={location.pathname==='/'? styles.active: ''}>Home</Link>
        <Link to="about" className={location.pathname==='/about'? styles.active: ''}>About</Link>
        
      </div>
    
      <div className={styles.main}>
        <AppRouter />
      </div>
    </>
    
    
  );
}
