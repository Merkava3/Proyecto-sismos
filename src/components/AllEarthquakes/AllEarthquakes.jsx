import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEarthquakesLibrary, setCity, setPage, resetLibraryData } from '../../store/slices/librarySlice';
import CardAllUrl from '../CardAllUrl/CardAllUrl';
import Load from '../Load/Load';
import './style/AllEarthquakes.css';

const AllEarthquakes = ({ type, resetData }) => {
  const dispatch = useDispatch();
  const { city, place, loading, page, itemsPerPage } = useSelector((state) => state.library);

  useEffect(() => {
    if (resetData) {
      dispatch(resetLibraryData());
    }
    dispatch(fetchEarthquakesLibrary(type));
  }, [type, resetData, dispatch]);

  const handleCitySearch = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <>
      <div className="SearchCity">
        <label htmlFor="inputCity" className="LabelCity">
          Ingrese ciudad:
        </label>
        <input type="text" name="inputCity" value={city} onChange={handleCitySearch} />
      </div>
      {loading ? (
        <div className="loaderall">
          <Load />
        </div>
      ) : (
        <CardAllUrl
          place={place}
          City={city}
          page={page}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default AllEarthquakes;
