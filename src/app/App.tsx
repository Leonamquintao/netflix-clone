import './App.css';
import React, { useEffect } from 'react';
import httpService from '../services/httpService';

const App: React.FC = () => {
  useEffect(() => {
    const loadHomeList = async () => {
      const list = httpService.getHomeList();
      console.log(list);
    };
    loadHomeList();
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

export default App;
