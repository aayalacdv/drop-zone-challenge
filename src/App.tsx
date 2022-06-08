import React from 'react';
import './App.css'

function App() {
  return (
    <div className='App flex flex-col sm:flex-row justify-center items-center '>
      <div className='bg-red-500 h-full w-full flex items-center justify-center relative'>
        <div className='w-4/5 h-3/5  bg-green-600 blur-md absolute z-0'/>
        <div className='z-10 w-3/4 h-1/2 rounded-md bg-black'>Hola que tal</div>
      </div>
      <div className='bg-blue-200 h-full sm:w-3/4 w-full flex items-center justify-center'>
        <div className='w-3/4 h-1/2 border border-black '>
          <div className='w-full h-3/4 bg-red-100'>Text</div>  
          <div>buttons</div>
        </div>
      </div>
    </div>
  );
}

export default App;
