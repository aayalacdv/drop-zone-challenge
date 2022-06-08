import React from 'react';
import './App.css'

function App() {
  return (
    <div className='App flex justify-center items-center'>
      <div className='bg-red-500 h-full w-full flex items-center justify-center'>
        <div className='w-3/4 h-1/2 border border-black rounded-md'>
          <p>Input box </p>
        </div>
      </div>
      <div className='bg-blue-200 h-full w-3/4 flex items-center justify-center'>
        <div className='w-3/4 h-1/2 border border-black'>
          <div className='w-full h-3/4 bg-red-100'>Text</div>  
          <div>buttons</div>
        </div>
      </div>
    </div>
  );
}

export default App;
