import React from 'react';
import '../assets/styles/components/Hero.scss';
import HeroPaint from '../assets/static/Stephen-King-paint.jpg';

const Hero = () => {
  return (
    <section id='home-v4'>
      <div className='LayoutContainer'>
        <div className='HeroContent'>
          <div className='HeroContent-container'>
            <div className='HeroContent-content'>
              <div className='HeroContent-title'>
                <h1>El mundo de Stephen King en un solo lugar</h1>
              </div>
              <div className='HeroContent-stats'>
                <div className='HeroContent-elements'>
                  <div className='HeroContent-stats-item'>
                    <span>Navega y encuentra todo acerca de sus películas, series y libros</span>
                  </div>
                  <div className='HeroContent-stats-item'>
                    <span>Ayudanos a construir una gran comunidad</span>
                  </div>
                  <div className='HeroContent-image'>
                    <img src={HeroPaint} alt='Hero' />
                  </div>
                </div>
              </div>
              <div className='HeroContent-action'>
                  <a href='/clases' className='btn btn-green'>
                  <span>Aportar a la comunidad</span>
                </a>
              </div>
              <div className='HeroContent-firstClass'>
                <button className='btn btn-sky'>
                  <span>Ve el trailer de una película</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
