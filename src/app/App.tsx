import './App.css';
import React, { useEffect, useState } from 'react';
import httpService from '../services/httpService';
import { HomeListItems } from '../interfaces';
import MovieRow from '../components/MovieRow';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<HomeListItems[]>([]);

  useEffect(() => {
    const loadHomeList = async () => {
      const list = await httpService.getHomeList();
      setMovieList(list);
    };
    loadHomeList();
  }, []);

  return (
    <div className="home-page">
      <section className="main-lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} rowItems={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
