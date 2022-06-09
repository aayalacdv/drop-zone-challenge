import React from 'react';
import './App.css'

function App() {
  return (
    <div className='flex flex-col items-center justify-center App sm:flex-row '>
      <div className='relative flex items-center justify-center w-full h-full bg-red-500'>
        <div className='absolute z-0 w-4/5 bg-green-600 h-3/5 blur-md'/>
        <div className='z-10 flex items-center justify-center w-3/4 bg-black h-1/2 rounded-md hover:cursor-pointer hover:bg-gray-200'>
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-full bg-blue-200 sm:w-3/4'>
        <div className='w-3/4 border border-black h-1/2 '>
          <div className='w-full bg-red-100 h-3/4'>Text</div>  
          <div>buttons</div>
        </div>
      </div>
    </div>
  );
}

export default App;
