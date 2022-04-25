import './App.css';
import React, { useEffect, useState } from 'react';
import httpService from '../services/httpService';
import { FeaturedMovieItem, HomeListItems } from '../interfaces';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<HomeListItems[]>([]);
  const [featuredData, setFeaturedData] = useState<FeaturedMovieItem>();

  useEffect(() => {
    const loadHomeList = async () => {
      const list = await httpService.getHomeList();
      setMovieList(list);
      const originals = list.filter((i) => i.slug === 'Originals');
      const randomChoice = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const chosen = originals[0].items.results[randomChoice];
      setFeaturedData(chosen);
    };
    loadHomeList();
  }, []);

  return (
    <div className="home-page">
      {featuredData && <FeaturedMovie data={featuredData} />}

      <section className="main-lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} rowItems={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
