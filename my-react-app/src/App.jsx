// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// // import React from 'react'
// // import HOME from './home/HOME'  
// // import ABOUT from './home/about'
// // const App = () => {
// //   return (
// //     <div>
// //       <HOME />
// //       <ABOUT />
// //     </div>
// //   )
// // }

// // export default App
import React from 'react'
import USESTATE from './usestate/USESTATE.jsx'
import CLOCk from './clock/CLOCk.jsx'
import FAKEPOST from './fakepost/FAKEPOST.jsx'
import IMG from './images/IMG.jsx'
const App = () => {
  return (
    <div>
      {/* <h1>yo mero app ho </h1>
     <USESTATE />
      <CLOCk /> */}
      {/* <FAKEPOST /> */}
      <IMG />
    </div>
  )
}
export default App