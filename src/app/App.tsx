import './App.css';
import React, { useEffect, useState } from 'react';
import httpService from '../services/httpService';
import { FeaturedMovieDetails, HomeListItems } from '../interfaces';
import MovieRow from '../components/MovieRow';
import FeaturedMovie from '../components/FeaturedMovie';
import Header from '../components/Header';

const App: React.FC = () => {
  const [movieList, setMovieList] = useState<HomeListItems[]>([]);
  const [featuredData, setFeaturedData] = useState<FeaturedMovieDetails>();
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const getFeaturedInfo = async (list: HomeListItems[]) => {
    const originals = list.filter((i) => i.slug === 'Originals');

    const randomChoice = Math.floor(
      Math.random() * (originals[0].items.results.length - 1),
    );

    const chosen = originals[0].items.results[randomChoice];
    const chosenFeatured = await httpService.getMovieDetails({
      movieId: chosen.id,
      type: 'tv',
    });
    setFeaturedData(chosenFeatured);
  };

  useEffect(() => {
    const loadHomeList = async () => {
      const list = await httpService.getHomeList();
      setMovieList(list);
      getFeaturedInfo(list);
    };
    loadHomeList();
  }, []);

  const scrollListener = () => {
    if (window.pageYOffset > 20) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [showHeader]);

  return (
    <div className="home-page">
      <Header showHeaderGround={showHeader} />
      {featuredData && <FeaturedMovie data={featuredData} />}

      <section className="main-lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} rowItems={item.items} />
        ))}
      </section>

      <footer>
        <p>Leonflix Brasil all rights reserved ©</p>
      </footer>
    </div>
  );
};

export default App;
