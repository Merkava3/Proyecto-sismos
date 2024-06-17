//sistema-de-sismos.luiscarlos07.repl.co//import SomeLoginComponent from './pages/login/components/SomeLoginComponent'
import React, {lazy, Suspense } from 'react'
import Load from './components/Load/Load'

//import AppRouter from './routers/AppRoueter/AppRouter'
//import WorldMapWithControls from './components/WorldMapWithControls'
// './components/WorldMapWithControls/WorldMapWithControls QuakeLibrary'
//./components/RichterCalculator/RichterCalculator
// ./components/MyLocationHome/MyLocationHome
// './components/PastHour/PastHour'
// './components/AllEarthquakes/AllEarthquakes'



const MylazyComponent  = lazy(() => import('./routers/AppRoueter/AppRouter'))

const App = () => {  
 return(
<Suspense fallback={<div>Loading...</div>}>
  <MylazyComponent/>
</Suspense>
 )
}

export default App;

