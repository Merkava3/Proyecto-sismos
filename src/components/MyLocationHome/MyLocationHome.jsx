
import GeoData from '../../data/Requeriments'
import GeoApi from '../../services/GeoApi/GeoApi'
import Error429 from '../Error429/Error429'
import Load from '../Load/Load';
import './style/MyLocationHome.css'
const MyLocationHome = () => {  
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [showError, setShowError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState([]);
  const [Permission, SetPermission] = useState(false);
useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
        ApiExecute();
      });
    } else {
      console.log("Geolocalización no disponible en este navegador.");
    }
  }, []);

  useEffect(() => {
    if (place.length > 0) {
      console.log("Estamos en lugares: ", place);
    }
  }, [place]);

  const ApiExecute = () => {
    setLoading(true);
    console.log(GeoData)
    const location = new GeoApi(GeoData, "LatestEarthquakeNearMe");
    location.getDataWithCaching().then((result) => {
      setPlace(result.result);
      setShowError(result.show);
      SetPermission(result.show);
      setLoading(false);
    });
  };
  
  return (
    <div>
      {loading ? (
        <Load />
      ) : (
        <div>
          {!showError ? (
            <Error429 />
          ) : Permission ? (
            <div>              
              {place.length > 0 && (
                <div className='card'>
                  <div className='bg'> 
                    {place.map((p, index) => (
                    <div key={index} className="Containerinfo">
                      <h3>{p.Title}</h3>
                      <p>{p.Date}</p>
                     <a href={p.url}  target="_blank" > Mas info...</a>  
                      {/* ... Mostrar otras propiedades de p */}
                    </div>
                  ))}
                  </div>
                  <div className ='blob'> </div>          
                
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
export default MyLocationHome