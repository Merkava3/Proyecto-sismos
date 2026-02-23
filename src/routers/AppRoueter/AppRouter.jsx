import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import './style/AppRouter.css';
import WorldMapPages from '../../pages/WorldMapPages/WorldMapPages'
import Home from '../../components/Home/Home'
import RichterCalculator from '../../components/RichterCalculator/RichterCalculator'
import QuakeMapMyLocation from '../../components/QuakeMapMyLocation/QuakeMapMyLocation'
import Quakerecient from '../../components/Quakerecient/Quakerecient'
import AllEarthquakes from '../../components/AllEarthquakes/AllEarthquakes'


const Navigation = () => {
  const location = useLocation();
  if (location.pathname.includes('/WorldMapPages')) {
    return null;
  }
  return (
    <nav className='RouterNav'>
      <h1 className="logo">
        <Link to="/HomePage" style={{ color: 'inherit', textDecoration: 'none' }}>Sistema de Sismos</Link>
      </h1>
      <ul className="NavLinks">
        <li className="NavItem">
          <Link to="/HomePage" className="RouterNavLink" aria-current="page">Home</Link>
        </li>
        <li className="NavItem">
          <Link to="/RichterCalculator" className="RouterNavLink">Calculadora de sismos</Link>
        </li>
        <li className="NavItem">
          <Link to="/WorldMapPages" className="RouterNavLink">Mapa</Link>
          <ul className='Submenu'>
            <li className="SubmenuItem">
              <Link to="/WorldMapPages/QuakeMapMyLocation" className="RouterNavLink">Fechas sismos</Link>
            </li>
          </ul>
        </li>
        <li className="NavItem NavItemLibrary">
          <Link to="/libary/AllEarthquakes/AllEarthquakesPastDay" className="RouterNavLink">Biblioteca de sismos</Link>
          <ul className='SubmenuLibrary'>
            <li className="SubmenuItem">
              <Link to="/libary/AllEarthquakes/AllEarthquakesPastDay" className="RouterNavLink">Ultimos dias</Link>
            </li>
            <li className="SubmenuItem">
              <Link to="/libary/AllEarthquakes/AllEarthquakesPast7Days" className="RouterNavLink">Ultimos 7 dias</Link>
            </li>
            <li className="SubmenuItem">
              <Link to="/libary/AllEarthquakes/AllEarthquakesPast30Days" className="RouterNavLink">Ultimos 30 dias</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const AppRouter = () => {

  const [resetData, setResetData] = useState(false);

  const handleChangeType = (newType) => {
    setResetData(true); // Activa el reinicio de datos al cambiar el tipo
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<Home />} />
        <Route path="/RichterCalculator" element={<RichterCalculator />} />
        <Route path="/WorldMapPages" element={<WorldMapPages />} />
        <Route path="/WorldMapPages/QuakeMapMyLocation" element={<QuakeMapMyLocation />} />
        <Route path="/WorldMapPages/Quakerecient" element={<Quakerecient />} />

        <Route path="/libary/AllEarthquakes/AllEarthquakesPastDay"
          element={<AllEarthquakes type='AllEarthquakes,PastDay' resetData={resetData} />} />

        <Route path="/libary/AllEarthquakes/AllEarthquakesPast7Days"
          element={<AllEarthquakes type='AllEarthquakes,Past7Days' resetData={resetData} />} />

        <Route path="/libary/AllEarthquakes/AllEarthquakesPast30Days"
          element={<AllEarthquakes type='AllEarthquakes,Past30Days' resetData={resetData} />} />
      </Routes>
    </Router>


  );
};

export default AppRouter;

