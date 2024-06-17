import React from 'react';
import './style/Home.css'
import TableData from '../../data/TablaData'
import PastHour from '../PastHour/PastHour'

const Home = () => {
  return (
   
    <>      
    <PastHour />
      <div className='WrapperTable'>
        <h1 className='TitleTable'> Los Sismos mas Poderosos </h1>
        <table className='ContainerTable'>
          <tbody>
            <tr>
              <th>Pais</th>
              <th>Ciudad</th>
              <th>Escala</th>
              <th>Fecha</th>
              <th>Magnitud</th>
              <th>Referencias</th>
            </tr>
            {TableData.map((item, index) => (
              <tr key={index}>
                <td>{item.Pais}</td>
                <td>{item.Ciudad}</td>
                <td>{item["Escala de Ritcher"]}</td>
                <td>{item.fecha}</td>
                <td>{item.Magnitud}</td>
                <td className="ColumReferences">{item.Referencias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  )

}
export default Home 