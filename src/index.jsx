import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);