import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Hero from '../components/Hero';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, series }) => {
  return (
    <>
      <Hero />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Libros'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Películas'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title='Series'>
          <Carousel>
              {series.map((item) => <CarouselItem key={item.id} {...item}/>)}
          </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
      series: state.series
  };
};

export default connect(mapStateToProps, null)(Home);
