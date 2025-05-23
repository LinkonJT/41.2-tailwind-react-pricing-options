
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import { Suspense } from 'react'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'





const pricingPromise = fetch('pricingData.json').then(res=> res.json());
const marksPromise = axios.get('marksData.json')


function App() {
  return (
    <>
 
 
 
<header>
<NavBar></NavBar>
  {/* <DaisyNav>  </DaisyNav> */}
</header>

{/* <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}

<main>
  <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
  </Suspense>

  <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <MarksChart marksPromise={marksPromise}></MarksChart>
  </Suspense>


<ResultsChart></ResultsChart>

</main>
      
      
    </>
  )
}

export default App
