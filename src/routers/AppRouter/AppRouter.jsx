import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation, NavLink } from 'react-router-dom';
import './style/AppRouter.css';
import WorldMapPages from '../../pages/WorldMapPages/WorldMapPages';
import Home from '../../components/Home/Home';
import RichterCalculator from '../../components/RichterCalculator/RichterCalculator';
import QuakeMapMyLocation from '../../components/QuakeMapMyLocation/QuakeMapMyLocation';
import Quakerecient from '../../components/Quakerecient/Quakerecient';
import AllEarthquakes from '../../components/AllEarthquakes/AllEarthquakes';
import MomentoCalculator from '../../components/MomentoCalculator/MomentoCalculator';

/**
 * Navigation — hidden on /WorldMapPages (full-screen map view).
 * Uses NavLink so the active route is automatically highlighted.
 */
const Navigation = () => {
  const location = useLocation();
  if (location.pathname.includes('/WorldMapPages')) return null;

  const navClass = ({ isActive }) =>
    isActive ? 'RouterNavLink RouterNavLink--active' : 'RouterNavLink';

  return (
    <nav className='RouterNav' role="navigation" aria-label="Navegación principal">
      <h1 className="logo">
        <Link to="/HomePage" style={{ color: 'inherit', textDecoration: 'none' }}>
          Sistema de Sismos
        </Link>
      </h1>

      <ul className="NavLinks">
        <li className="NavItem">
          <NavLink to="/HomePage" className={navClass} end>Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/RichterCalculator" className={navClass}>Calculadora de sismos</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/MomentoCalculator" className={navClass}>Escala Momento Sísmico</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/WorldMapPages" className={navClass}>Mapa</NavLink>
          <ul className='Submenu' role="menu">
            <li className="SubmenuItem" role="none">
              <NavLink to="/WorldMapPages/QuakeMapMyLocation" className="RouterNavLink" role="menuitem">
                Fechas sismos
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="NavItem NavItemLibrary">
          <NavLink to="/libary/AllEarthquakes/AllEarthquakesPastDay" className={navClass}>
            Biblioteca de sismos
          </NavLink>
          <ul className='SubmenuLibrary' role="menu">
            <li className="SubmenuItem" role="none">
              <NavLink to="/libary/AllEarthquakes/AllEarthquakesPastDay" className="RouterNavLink" role="menuitem">
                Últimos días
              </NavLink>
            </li>
            <li className="SubmenuItem" role="none">
              <NavLink to="/libary/AllEarthquakes/AllEarthquakesPast7Days" className="RouterNavLink" role="menuitem">
                Últimos 7 días
              </NavLink>
            </li>
            <li className="SubmenuItem" role="none">
              <NavLink to="/libary/AllEarthquakes/AllEarthquakesPast30Days" className="RouterNavLink" role="menuitem">
                Últimos 30 días
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

const AppRouter = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HomePage" element={<Home />} />
      <Route path="/RichterCalculator" element={<RichterCalculator />} />
      <Route path="/MomentoCalculator" element={<MomentoCalculator />} />
      <Route path="/WorldMapPages" element={<WorldMapPages />} />
      <Route path="/WorldMapPages/QuakeMapMyLocation" element={<QuakeMapMyLocation />} />
      <Route path="/WorldMapPages/Quakerecient" element={<Quakerecient />} />
      <Route path="/libary/AllEarthquakes/AllEarthquakesPastDay" element={<AllEarthquakes type='AllEarthquakes,PastDay' />} />
      <Route path="/libary/AllEarthquakes/AllEarthquakesPast7Days" element={<AllEarthquakes type='AllEarthquakes,Past7Days' />} />
      <Route path="/libary/AllEarthquakes/AllEarthquakesPast30Days" element={<AllEarthquakes type='AllEarthquakes,Past30Days' />} />
    </Routes>
  </Router>
);

export default AppRouter;
