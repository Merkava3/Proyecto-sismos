import React from 'react';
import './style/Home.css';
import TableData from '../../data/TablaData';
import PastHour from '../PastHour/PastHour';

/**
 * Main Home page component showing current seismic activity and historical data.
 */
const Home = () => {
  return (
    <main className="HomeContainer">      
      {/* Latest Activity Section */}
      <PastHour aria-label="Sismos recientes" />

      {/* Historical Data Section */}
      <section className='WrapperTable' aria-labelledby="historical-title">
        <h2 id="historical-title" className='TitleTable'> 
          Sismos Históricos más Poderosos 
        </h2>
        
        <div className="TableContainerScroll">
          <table className='ContainerTable' summary="Datos de los sismos históricos más potentes">
            <thead>
              <tr>
                <th scope="col">País</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Escala</th>
                <th scope="col">Fecha</th>
                <th scope="col">Magnitud</th>
                <th scope="col">Referencias</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((item, index) => (
                <tr key={`${item.Pais}-${item.fecha}-${index}`}>
                  <td>{item.Pais}</td>
                  <td>{item.Ciudad}</td>
                  <td style={{ fontWeight: 600 }}>{item["Escala de Ritcher"]}</td>
                  <td style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
                    {item.fecha}
                  </td>
                  <td style={{ fontWeight: 700, color: 'var(--status-danger)' }}>
                    {item.Magnitud}
                  </td>
                  <td className="ColumReferences">
                    {item.Referencias}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Home;