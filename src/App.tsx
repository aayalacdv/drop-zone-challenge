import React from 'react';
import './App.css'
import { DropZone } from './components/DropZone';
import { WelcomeMessage } from './components/WelcomeMessage';


const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:flex-row App'>
      <DropZone />
      <WelcomeMessage />
    </div>
  );
}

export default App;
